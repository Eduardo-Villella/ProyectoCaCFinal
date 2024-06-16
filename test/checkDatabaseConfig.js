const fs = require('fs');
const path = require('path');
require('dotenv').config();

const databaseConfigPath = path.resolve(__dirname, 'database.json');
if (fs.existsSync(databaseConfigPath)) {
    console.log("database.json file found at:", databaseConfigPath);

    const config = JSON.parse(fs.readFileSync(databaseConfigPath, 'utf-8'));

    const devConfig = config.dev;
    const interpolatedConfig = {
        driver: devConfig.driver,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME
    };

    console.log("Interpolated database config:");
    console.log(interpolatedConfig);
} else {
    console.error("database.json file not found at:", databaseConfigPath);
}
