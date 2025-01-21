const express = require('express');
const Web3 = require('web3');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

dotenv.config();

// Web3 setup
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));
const contractABI = require('./VPNServiceABI.json'); // Make sure to generate ABI after deploying the contract
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Setup middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Route to serve the front-end
app.get('/', (req, res) => {
    res.render('index');
});

// Route to add a peer
app.post('/add-peer', async (req, res) => {
    const { peerIP, privateKey } = req.body;

    try {
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        const tx = contract.methods.addPeer(peerIP);
        const gas = await tx.estimateGas({ from: account.address });
        const data = tx.encodeABI();

        const signedTx = await web3.eth.accounts.signTransaction(
            {
                to: contractAddress,
                data,
                gas,
            },
            privateKey
        );

        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        res.send({ success: true, message: 'Peer added successfully', receipt });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

// Route to get peer's IP
app.get('/get-peer', async (req, res) => {
    try {
        const peerIP = await contract.methods.getPeer().call({ from: req.query.address });
        res.send({ peerIP });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
