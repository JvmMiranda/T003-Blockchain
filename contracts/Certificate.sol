// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certificate {
    // Estrutura do Certificado
    struct CertificateData {
        uint id;
        string studentName;
        string course;
        uint256 issueDate;
        bool isValid;
    }

    // Mapeamento de certificados pelo ID
    mapping(uint => CertificateData) private certificates;

    // Evento para emitir quando um certificado é registrado
    event CertificateRegistered(uint id, string studentName, string course, uint256 issueDate);
    
    // Evento para emitir quando um certificado é revogado
    event CertificateRevoked(uint id);

    // Função para registrar um novo certificado
    function registerCertificate(uint _id, string memory _studentName, string memory _course) public {
        require(certificates[_id].issueDate == 0, "Certificate already registered.");

        certificates[_id] = CertificateData({
            id: _id,
            studentName: _studentName,
            course: _course,
            issueDate: block.timestamp,
            isValid: true
        });

        emit CertificateRegistered(_id, _studentName, _course, block.timestamp);
    }

    // Função para consultar um certificado
    function getCertificate(uint _id) public view returns (uint, string memory, string memory, uint256, bool) {
        require(certificates[_id].issueDate != 0, "Certificate not found.");

        CertificateData memory cert = certificates[_id];
        return (cert.id, cert.studentName, cert.course, cert.issueDate, cert.isValid);
    }

    // Função para revogar um certificado
    function revokeCertificate(uint _id) public {
        require(certificates[_id].issueDate != 0, "Certificate not found.");
        require(certificates[_id].isValid == true, "Certificate already revoked.");

        certificates[_id].isValid = false;

        emit CertificateRevoked(_id);
    }
}
