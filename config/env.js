const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

function getEnvVar(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

const config = {
    directorPrivateKey: getEnvVar("DIRECTOR_PRIVATE_KEY"),
    employee: getEnvVar("EMPLOYEE_ADDRESS"),
    verifyingContract: getEnvVar("CLONE_ADDRESS"),
};

module.exports = config;
