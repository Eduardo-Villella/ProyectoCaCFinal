const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envFilePath = path.resolve(__dirname, '.env');
if (fs.existsSync(envFilePath)) {
    console.log(".env file found at:", envFilePath);
} else {
    console.error(".env file NOT found at:", envFilePath);
}

console.log("DB_HOST:", process.env.DB_HOST || "Not defined");
console.log("DB_USER:", process.env.DB_USER || "Not defined");
console.log("DB_PASSWORD:", process.env.DB_PASSWORD || "Not defined");
console.log("DB_NAME:", process.env.DB_NAME || "Not defined");
