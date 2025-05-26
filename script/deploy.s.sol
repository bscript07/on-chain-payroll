// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.28;

import {Script, console} from "forge-std/Script.sol";
import {PayrollImplementation} from "../src/PayrollImplementation.sol";
import {PayrollFactory} from "../src/PayrollFactory.sol";

error InvalidDirectorAddress();
error InvalidHRAddress();

contract DeployScript is Script {

    function run() public {
        vm.startBroadcast();

        address director = vm.envAddress("DIRECTOR_ADDRESS");
        require(director != address(0), InvalidDirectorAddress());

        address hr = vm.envAddress("HR_ADDRESS");
        require(hr != address(0), InvalidHRAddress());

        // Deploy PayrollImplementation (logic contract)
        PayrollImplementation implementation = new PayrollImplementation();
        console.log("Payroll Implementation: ", address(implementation));

        // Deploy PayrollFactory (factory contract)
        PayrollFactory factory = new PayrollFactory(address(implementation), hr);
        console.log("Payroll Factory: ", address(factory));

        // Add on Clone (director, priceFeed, department)
        address priceFeed = 0x694AA1769357215DE4FAC081bf1f309aDC325306; // ETH/USD Sepolia
        string memory department = "Engineering";

        address clone = factory.createPayroll(director, priceFeed, department);
        console.log("Payroll Clone:", clone);

        vm.stopBroadcast();
    }
}

// forge script script/deploy.s.sol:DeployScript --rpc-url sepolia --broadcast --verify --private-key <HR_PRIVATE_KEY> -vv

