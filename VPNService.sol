// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VPNService {

    struct Peer {
        address peerAddress;
        string peerIP;
    }

    mapping(address => Peer) public peers;

    event PeerAdded(address indexed peer, string peerIP);

    // Add a peer to the network
    function addPeer(string memory _peerIP) public {
        peers[msg.sender] = Peer(msg.sender, _peerIP);
        emit PeerAdded(msg.sender, _peerIP);
    }

    // Get a peer's IP address
    function getPeer() public view returns (string memory) {
        return peers[msg.sender].peerIP;
    }
}
