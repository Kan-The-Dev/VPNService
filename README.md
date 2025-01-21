# Decentralized VPN Service

A simple decentralized VPN service that allows users to register peers and retrieve peer IP addresses using Ethereum smart contracts. This project demonstrates the use of smart contracts on the Ethereum network for a peer-to-peer (P2P) VPN service.

## Features

- **Add Peer**: Users can add their IP addresses to the decentralized VPN network.
- **Get Peer**: Users can retrieve their IP addresses from the network using their Ethereum address.
- **Smart Contract**: The VPN service logic is implemented in a smart contract on the Ethereum blockchain.
- **Backend**: A simple Express.js backend that interacts with the smart contract to add and retrieve peers.
- **Frontend**: A basic EJS frontend to interact with the backend via forms.

## Project Structure
```bash
VPNService/
│
├── app.js              // Combined backend and frontend
├── .env                // Environment variables (Infura URL and contract address)
├── VPNService.sol      // Smart contract
└── views/              
   └── index.ejs       // Frontend template (EJS)
└── package.json        // Node.js dependencies and scripts
└── VPNServiceABI.json  // ABI file (generated after deploying the contract)
```

- **`app.js`**: The main backend file that handles HTTP requests for adding peers and retrieving peer IP addresses. It also serves the frontend view.
- **`VPNService.sol`**: The Ethereum smart contract that defines the logic for adding and retrieving peer IPs.
- **`views/index.ejs`**: The frontend template that displays a simple form for adding peers and retrieving IPs.
- **`.env`**: Contains sensitive environment variables like the Infura URL and contract address.
- **`VPNServiceABI.json`**: The ABI (Application Binary Interface) file that defines the methods and events of the deployed smart contract.
- **`package.json`**: Contains the project dependencies and scripts.

## Requirements

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed (version 14 or higher).
- **Infura**: You need an Infura account to connect to the Ethereum network. You can get a free API key [here](https://infura.io/).
- **Ethereum Wallet**: An Ethereum wallet (like MetaMask) to interact with the smart contract and sign transactions.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/VPNService.git
   cd VPNService
