## How to install and run tests
```
forge build
```

## Deployment and verification steps
```
forge script script/deploy.s.sol:DeployScript --rpc-url sepolia --broadcast --verify --private-key <HR_PRIVATE_KEY> -vv
```

## Generate signature

```
cd ./js_scripts
node generate-pay-stub.js
```

## Verified contract addresses

- Payroll Implementation: [0x846b5E80d351D2BCb95A4168F2cA8e9123c803DD](https://sepolia.etherscan.io/address/0x846b5E80d351D2BCb95A4168F2cA8e9123c803DD)
- Payroll Factory: [0x23F07e1DE7d81209aDF8aA0eF7Bf0Ca4a5435b00](https://sepolia.etherscan.io/address/0x23F07e1DE7d81209aDF8aA0eF7Bf0Ca4a5435b00)
- Payroll Proxy: [0x50E37dfb61D21E3419f77D8AA8D5EacF6D8483CE](https://sepolia.etherscan.io/address/0x50E37dfb61D21E3419f77D8AA8D5EacF6D8483CE)


## Proof of execution

- createPayroll tx: [0x896c8b24de6ba1f22908d70aef4d2bbbd814686d4d6b7b8054405d762673ab1b](https://sepolia.etherscan.io/tx/0x896c8b24de6ba1f22908d70aef4d2bbbd814686d4d6b7b8054405d762673ab1b)
- fund tx: [0x9b038fb92ca75fd39ae7f9ca0b6872a8b096c25f63eb93a1cf6c815448cf3c46](https://sepolia.etherscan.io/tx/0x9b038fb92ca75fd39ae7f9ca0b6872a8b096c25f63eb93a1cf6c815448cf3c46)
- salaryClaim tx: [0xa7b8b298757caa277651975a23f3fdff6681e2bec11ca6682d80aadef6592b77](https://sepolia.etherscan.io/tx/0xa7b8b298757caa277651975a23f3fdff6681e2bec11ca6682d80aadef6592b77)
- adminWithdraw tx: [0xb53dffd8a4edd4e7eb1b0418ea1be21eca7e6b7b4bcc8cdafac8e3984e2bb0e8](https://sepolia.etherscan.io/tx/0xb53dffd8a4edd4e7eb1b0418ea1be21eca7e6b7b4bcc8cdafac8e3984e2bb0e8)

