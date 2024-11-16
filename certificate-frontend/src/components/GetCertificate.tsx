// src/components/GetCertificate.tsx
import React, { useState } from 'react';
import certificateContract from '../CertificateContract';

interface Certificate {
    id: string;
    studentName: string;
    course: string;
    issueDate: string;
    isValid: boolean;
}

const GetCertificate: React.FC = () => {
    const [id, setId] = useState('');
    const [certificate, setCertificate] = useState<Certificate | null>(null);
    const [message, setMessage] = useState('');

    const getCertificate = async () => {
        setMessage("Consultando o certificado...");

        try {
            // Chamada ao contrato inteligente com tipo explícito
            const cert = await certificateContract.methods.getCertificate(id).call() as [string, string, string, string, boolean];

            // Formatar os dados retornados
            const formattedCertificate: Certificate = {
                id: cert[0], // Certifique-se de que é uma string
                studentName: cert[1],
                course: cert[2],
                issueDate: new Date(Number(cert[3]) * 1000).toLocaleDateString(), // Convertendo a data
                isValid: cert[4]
            };

            setCertificate(formattedCertificate);
            setMessage("");
        } catch (error) {
            console.error("Erro ao consultar o certificado:", error);
            setMessage("Erro ao consultar o certificado.");
            setCertificate(null);
        }
    };

    return (
        <div>
            <h2>Consultar Certificado</h2>
            <input
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button onClick={getCertificate}>Consultar</button>
            {message && <p>{message}</p>}
            {certificate && (
                <div>
                    <p>ID: {certificate.id}</p>
                    <p>Nome do Aluno: {certificate.studentName}</p>
                    <p>Curso: {certificate.course}</p>
                    <p>Data de Emissão: {certificate.issueDate}</p>
                    <p>Status: {certificate.isValid ? "Válido" : "Revogado"}</p>
                </div>
            )}
        </div>
    );
};

export default GetCertificate;
