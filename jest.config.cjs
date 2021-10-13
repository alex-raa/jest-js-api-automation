let timeout = process.env.TIMEOUT || 60100

const config = {
    verbose: true,
    testTimeout: timeout,
    setupFiles: ["dotenv/config"],
    reporters: ["default", "jest-allure"]
};
  
module.exports = config;