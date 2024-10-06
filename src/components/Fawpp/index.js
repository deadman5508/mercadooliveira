import { FaWhatsapp } from 'react-icons/fa';

export default function Fawpp(){
    const phoneNumber = '5579999307110'; // Substitua pelo seu número de telefone
    const message = 'Olá! Gostaria de mais informações.'; // Mensagem opcional
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
        </a>
    );
};

