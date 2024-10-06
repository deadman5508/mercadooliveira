import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
 return (
   <main className='flex flex-col  shadow-inner justify-around mx-auto text-amber-950 sm:max-w-7xl gap-2 mb-2'>
        <div className="flex flex-row justify-between w-full gap-2 px-2">
            <div className="flex flex-col col-start-3">
                <h2 className="text-lg font-semibold">Links uteis</h2>
                <Link to='/'>Home</Link>
                <Link to='/Institucional'>Sobre nós</Link>
                <Link to='/Contato'>Contato</Link>
                <Link to='/Produtos'>Mix de produtos</Link>
            </div>
            <div className="hidden sm:block">
                <h2 className="text-lg font-semibold">Parceiros</h2>
                <span>Oubcorp</span>
            </div>
            <div className="flex flex-col col-start-3">
                <h2 className="text-lg font-semibold">Localização</h2>
                <span>Rua 8,N 99</span>
                <span>Cj Maria do Carmo III,</span>
                <span>Rosa Elze,49100-000</span>
                <span>São Cristovão-SE</span>
            </div>
            <div className="flex flex-col col-start-3">
                <h2 className="text-lg font-semibold">Siga-nos</h2>
                <div className="flex flex-row gap-2">
                <FiFacebook />
                <FiInstagram />
                <FaWhatsapp />
                </div>
            </div>
        </div>
        
        <div className="w-full flex items-center justify-center">
            <span className="font-semibold">&copy;Mercado Oliveira</span>
        </div>

   </main>
  );
}