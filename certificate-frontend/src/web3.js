// src/web3.js
import Web3 from 'web3';

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
        window.ethereum.enable(); // Solicita permissão para acessar o MetaMask
    } catch (error) {
        console.error("Usuário negou o acesso ao MetaMask");
    }
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    console.log("MetaMask não detectado. Conectando ao Ganache na porta 8545.");
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

export default web3;
