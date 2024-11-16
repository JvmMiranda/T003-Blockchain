// src/CertificateContract.ts
import web3 from './web3';
import Certificate from './contracts/Certificate.json';

const contractAddress = "0x3fE52A37Fb689a00e6A2C042d41393E808d298c9"; // Endereço do contrato após o deploy
const contractABI = Certificate.abi;

const certificateContract = new web3.eth.Contract(contractABI, contractAddress);

export default certificateContract;
