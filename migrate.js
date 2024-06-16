const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const command = process.argv[2];
const type = process.argv[3]; // Tipo de comando, puede ser 'migration' o 'seed'
const name = process.argv[4] || ''; // Nombre del seeder o migración
const migrationsDir = 'back/dataBase/migrations';
const seedersDir = 'back/dataBase/seeders';
const sqlDir = 'sql';
const originalConfigPath = './database.json';
const tempConfigPath = './database_temp.json';

const useSqlFiles = process.env.USE_SQL_FILES === 'true';

// Leer y modificar el archivo database.json
const interpolateEnvVars = (content) => {
  return content.replace(/\${(.*?)}/g, (_, name) => process.env[name] || '');
};

try {
  const configContent = fs.readFileSync(originalConfigPath, 'utf-8');
  const interpolatedConfigContent = interpolateEnvVars(configContent);
  fs.writeFileSync(tempConfigPath, interpolatedConfigContent);

  let commandStr;

  if (command === 'create') {
    // Crear los archivos de migración o seeder
    if (type === 'migration') {
      // Crear archivos de migración JavaScript
      const jsFileName = `${Date.now()}-${name}.js`;
      const jsFilePath = path.join(migrationsDir, jsFileName);
      fs.writeFileSync(jsFilePath, `exports.up = function(db, callback) {\n  // TODO: Write migration code here\n  callback();\n};\n\nexports.down = function(db, callback) {\n  // TODO: Write rollback code here\n  callback();\n};`);

      // Crear archivos SQL
      const sqlUpFileName = `${Date.now()}-${name}-up.sql`;
      const sqlDownFileName = `${Date.now()}-${name}-down.sql`;
      const sqlUpFilePath = path.join(migrationsDir, sqlDir, sqlUpFileName);
      const sqlDownFilePath = path.join(migrationsDir, sqlDir, sqlDownFileName);
      fs.writeFileSync(sqlUpFilePath, `-- TODO: Write SQL migration code here`);
      fs.writeFileSync(sqlDownFilePath, `-- TODO: Write SQL rollback code here`);
    } else if (type === 'seed') {
      // Crear archivos de seeder JavaScript
      const jsFileName = `${Date.now()}-${name}.js`;
      const jsFilePath = path.join(seedersDir, jsFileName);
      fs.writeFileSync(jsFilePath, `exports.seed = function(db, callback) {\n  // TODO: Write seed code here\n  callback();\n};`);

      // Crear archivos SQL
      const sqlUpFileName = `${Date.now()}-${name}-up.sql`;
      const sqlDownFileName = `${Date.now()}-${name}-down.sql`;
      const sqlUpFilePath = path.join(seedersDir, sqlDir, sqlUpFileName);
      const sqlDownFilePath = path.join(seedersDir, sqlDir, sqlDownFileName);
      fs.writeFileSync(sqlUpFilePath, `-- TODO: Write SQL seed code here`);
      fs.writeFileSync(sqlDownFilePath, `-- TODO: Write SQL undo seed code here`);
    } else {
      throw new Error('Invalid type specified. Use "migration" or "seed".');
    }
    console.log(`[INFO] Created migration/seed files for ${name}`);
  } else {
    // Ejecutar los comandos de migración o seeder
    if (type === 'migration') {
      commandStr = `db-migrate ${command} --migrations-dir ${migrationsDir} --config ${tempConfigPath}`;
    } else if (type === 'seed') {
      commandStr = `db-migrate ${command} --migrations-dir ${seedersDir} --config ${tempConfigPath}`;
    } else {
      throw new Error('Invalid type specified. Use "migration" or "seed".');
    }

    if (useSqlFiles) {
      commandStr += ' --sql-file';
    }

    if (commandStr) {
      exec(commandStr, (err, stdout, stderr) => {
        // Eliminar el archivo temporal después de la ejecución
        fs.unlinkSync(tempConfigPath);

        if (err) {
          console.error(`Error executing db-migrate ${command} ${name}:`, err);
          return;
        }
        console.log(stdout);
        if (stderr) {
          console.error(stderr);
        }
      });
    } else {
      console.error('No command specified for db-migrate.');
    }
  }
} catch (err) {
  console.error('Error reading or writing database config file:', err);
}

