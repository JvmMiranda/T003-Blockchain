Certificado Blockchain
Este projeto implementa um sistema para registro e verificação de certificados acadêmicos utilizando tecnologia blockchain. Ele possibilita que instituições registrem certificados, consultem suas informações e revoguem certificados por meio de um contrato inteligente. A interface do usuário é construída com React e TypeScript, enquanto os contratos inteligentes são desenvolvidos em Solidity.

Funcionalidades
Registrar Certificado: Registre certificados fornecendo um ID, nome do aluno, curso, e data de emissão.
Consultar Certificado: Pesquise um certificado pelo ID e visualize o nome do aluno, curso, data de emissão, e status.
Revogar Certificado: Permita que a instituição revogue e invalide certificados.
Tecnologias Utilizadas
Backend (Blockchain)
Solidity: Linguagem para escrever contratos inteligentes.
Truffle: Framework para desenvolvimento e gerenciamento de contratos inteligentes.
Ganache: Simulador de blockchain para desenvolvimento local.
Web3.js: Biblioteca para interagir com contratos inteligentes a partir do frontend.
Frontend
React & TypeScript: Framework e linguagem para desenvolver a interface do usuário.
Web3.js: Usada para conectar o frontend à blockchain.
Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

Node.js (versão 18) e npm
Truffle e Ganache
bash
Copiar código
npm install -g truffle ganache
MetaMask: Extensão do navegador para se conectar à blockchain local.
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/username/certificado-blockchain.git
cd certificado-blockchain
Instale as dependências do projeto (backend e frontend):

bash
Copiar código
# No diretório raiz (contrato e backend)
npm install

# No diretório do frontend
cd certificate-frontend
npm install
Inicie o Ganache:

Execute ganache no terminal para iniciar a blockchain local.
Anote as contas e chaves privadas geradas.
Configure o contrato inteligente:

Abra truffle-config.js e configure a rede de desenvolvimento:
javascript
Copiar código
networks: {
  development: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*"
  }
},
Compile e implante o contrato:

bash
Copiar código
truffle compile
truffle migrate --network development
Anote o endereço do contrato após o deploy.
Atualize o endereço do contrato no frontend:

No arquivo certificate-frontend/src/CertificateContract.ts, substitua "ENDERECO_DO_CONTRATO" pelo endereço do contrato implantado.
Inicie o frontend:

bash
Copiar código
cd certificate-frontend
npm start
Conecte-se ao MetaMask:

Abra o MetaMask, conecte-se à rede local (http://127.0.0.1:8545) e importe uma conta do Ganache com a chave privada.
Uso
O frontend apresenta três seções principais:

Registrar Certificado
Preencha o ID, nome do aluno, e curso.
Clique em "Registrar" para adicionar um certificado à blockchain.
Consultar Certificado
Digite o ID do certificado e clique em "Consultar".
Se o ID for válido, as informações do certificado serão exibidas.
Revogar Certificado
Digite o ID do certificado a ser revogado.
Clique em "Revogar" para invalidar o certificado.
Estrutura do Projeto
plaintext
Copiar código
certificado-blockchain/
├── contracts/                 # Contratos inteligentes em Solidity
│   └── Certificate.sol        # Contrato principal de Certificado
├── migrations/                # Scripts de deploy do contrato
├── test/                      # Testes do contrato inteligente
├── truffle-config.js          # Configuração do Truffle
├── certificate-frontend/      # Diretório do frontend em React
│   ├── src/
│   │   ├── components/        # Componentes React para interação
│   │   ├── contracts/         # ABI do contrato
│   │   ├── CertificateContract.ts  # Instância do contrato no frontend
│   │   └── web3.ts            # Configuração de conexão Web3
│   └── package.json
└── README.md
Testes
Testes de Contrato Inteligente
Execute truffle test para executar os testes automatizados, incluindo registro, consulta e revogação de certificados.
Testes Manuais no Frontend
Use a interface React para registrar, consultar e revogar certificados, e verifique as mensagens de status e erros.
Observações
Este projeto utiliza o Ganache para simular uma blockchain local. Para implantar em uma rede de teste (como Rinkeby ou Ropsten), ajuste as configurações de rede em truffle-config.js e obtenha Ether de teste.
Certifique-se de configurar o MetaMask corretamente para interagir com a blockchain local, importando uma conta do Ganache para testes.
Licença
Este projeto é distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.