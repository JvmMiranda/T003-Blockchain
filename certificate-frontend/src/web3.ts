// src/web3.ts
import Web3 from 'web3';

let web3: Web3;

if (typeof window !== 'undefined' && (window as any).ethereum) {
  // Se estivermos no navegador e o MetaMask estiver disponível
  web3 = new Web3((window as any).ethereum);
  (window as any).ethereum.request({ method: 'eth_requestAccounts' }); // Solicita permissão para acessar contas
} else {
  // Se estivermos no servidor ou o MetaMask não estiver disponível
  const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545'); // URL do Ganache
  web3 = new Web3(provider);
}

export default web3;
