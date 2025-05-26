require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

async function main() {
    const directorPrivateKey = process.env.DIRECTOR_PRIVATE_KEY;
    const employee = process.env.EMPLOYEE_ADDRESS;
    const verifyingContract = process.env.CLONE_ADDRESS;

    if (!directorPrivateKey || !employee || !verifyingContract) {
        throw new Error("Missing .env vars");
    }

    const wallet = new ethers.Wallet(directorPrivateKey);

    const domain = {
        name: "Payroll",
        version: "1",
        chainId: 11155111,
        verifyingContract
    };

    const types = {
        PayStub: [
            { name: "employee", type: "address" },
            { name: "period", type: "uint256" },
            { name: "usdAmount", type: "uint256" },
        ],
    };

    // Input data
    const period = 202405; // May 2025
    const usdAmount = 1250; // $12.50 in cents

    const message = {
        employee,
        period,
        usdAmount,
    };

    // Safe signature 
    const signature = await wallet.signTypedData(domain, types, message);

    const data = {
        employee,
        period,
        usdAmount,
        domain,
        signature,
    };

    const filePath = path.join(__dirname, "signature.json");
    fs.writeFileSync(filePath, JSON.stringify(data));

    console.log(`✅ Pay-stub signed and saved to ${filePath}`);
}

main().catch((err) => {
    console.error("Error: ", err);
});
