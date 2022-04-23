## Crowd Coin 

A decentralized crowdfunding platform based on the ethereum blockchain.

The purpose of this application was to eliminate the misuse of funds that was collected using the traditional crowdfunding applications. The applicatiion is designed to keep track of the money collected by harnessing the power of blockchain.

- Much like crowd funding in the real world, you can create campaigns requiring a minimum contribution.
- The creator of the campaign can propose how to use funding by creating a 'Request'.
- The funding will not be released unless the majority of the campaign contributors agree to the request.
- Only the manager of the contract can finalize a request.

![](https://github.com/belalelmi/crowd-coin-web3/blob/master/images/request_list.png?raw=true)
![](https://github.com/belalelmi/crowd-coin-web3/blob/master/images/campaign_details.png?raw=true)

### To Run the Project :

1. Clone this repository.

2. cd crowd-coin-web3`

3. Install dependencies: `npm install`
4. Run node
5. create a `.env` file in the root directory of the project.

This file should be setup as follows:

- MNEMONIC="ENTER METAMASK MNEMONIC HERE"
- RINKEBY_TEST_ENDPOINT='set up a rinkeby test endpoint and enter the endpoint url here'
- CONTRACT_ADDRESS='0xE2D7E4bcc7a1DD39672386E6863bD4513B490103'
 
Run the application: `npm run dev`

You can now start a new campaign or contribute to and existing campaign by visiting [http://localhost:3000](http://localhost:3000) in the browse.

`Note: You need some ETHERS on the Rinkeby Network. Please make sure you have MetaMask Installed!`

#### To test the contract functionalities locally using ganache local ethereum network:

#### `npm run test`

### Dependencies

```JSON
    "@truffle/hdwallet-provider": "^1.5.1",
    "solc": "^0.4.17",
    "web3": "^1.6.0",
    "fs-extra": "^10.0.0",
    "ganache-cli": "^6.12.2",
    "mocha": "^9.1.2",
    "next": "^12.0.10",
    "next-routes": "^1.4.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "dotenv": "^16.0.0",
    "chalk": "^2.4.2"
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.1.1",
```
