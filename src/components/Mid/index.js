import { Link } from "react-router-dom";
import hero6 from '../../assests/hero6.webp'
import hero7 from '../../assests/hero7.webp'
import hero8 from '../../assests/hero8.webp'
import hero9 from '../../assests/hero9.png'
import hero10 from '../../assests/hero10.png'
import hero11 from '../../assests/hero11.png'



export default function Mid() {
 return (
   <main  className=' w-full sm:max-w-7xl px-4 py-4'>
        <div className="flex items-center justify-between mx-auto  text-amber-950 ">
          <h1 className="text-xl font-semibold">Novidades </h1>
          <span>Conheça nosso mix produtos&raquo;</span>
        </div>
        <div className="flex flex-wrap col-start-3 justify-between">
          <Link to='/Produtos' className="flex w-2/3 sm:w-2/4  md:w-1/3 p-2 gap-2">
            <img src={hero6} className="w-20" />
            <span className="text-xl font-semibold">Bebidas</span>
          </Link>
          <Link to='/Produtos' className="flex w-2/3 sm:w-2/4 md:w-1/3 p-2 gap-2">
            <img src={hero7} className="w-20" />
            <span className="text-xl font-semibold">Não perciveis</span>
          </Link>
          <Link to='/Produtos' className="flex w-2/3 sm:w-2/4 md:w-1/3 p-2 gap-2">
            <img src={hero8} className="w-20" />
            <span className="text-xl font-semibold">Produtos de limpeza</span>
          </Link>
          <Link to='/Produtos' className="flex w-2/3 sm:w-2/4 md:w-1/3 p-2 gap-2">
            <img src={hero9} className="w-20" />
            <span className="text-xl font-semibold">Padaria</span>
          </Link>
          <Link to='/Produtos' className="flex w-2/3 sm:w-2/4 md:w-1/3 p-2 gap-2">
            <img src={hero10} className="w-20" />
            <span className="text-xl font-semibold">Frios e congelados</span>
          </Link>
          <Link to='/Produtos' className="flex w-2/3 sm:w-2/4 md:w-1/3 p-2 gap-2">
            <img src={hero11} className="w-20" />
            <span className="text-xl font-semibold">Latcinios</span>
          </Link>
        </div>


    </main>
  );
}