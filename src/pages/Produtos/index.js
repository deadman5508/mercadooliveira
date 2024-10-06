import { Link } from "react-router-dom";
import hero6 from '../../assests/hero6.webp'
import hero7 from '../../assests/hero7.webp'
import hero8 from '../../assests/hero8.webp'
import hero9 from '../../assests/hero9.png'
import hero10 from '../../assests/hero10.png'
import hero11 from '../../assests/hero11.png'
import hero12 from '../../assests/hero12.webp'
import hero13 from '../../assests/hero13.png'
import Pay from "../../components/Pay";
import Banner from "../../components/Banner";

export default function Produtos() {
 return (
   <main className='flex mx-auto flex-col text-amber-950 sm:max-w-7xl gap-2 mt-5 px-2 mb-10 sm:mb-24'>
      <Banner/>
    <div className="flex items-center justify-between mx-auto  text-amber-950 ">
          <h1 className="text-xl sm:text-2xl font-semibold">Nossos Produtos </h1>
          
        </div>
        <div className="flex flex-wrap justify-between mb-20">
          <Link to='/Produtos' className="flex w-4/5 sm:w-2/4 p-2 gap-2">
            <img src={hero6} className="w-20 rounded-full" />
            <span className="text-lg  ">Refrigerantes, sucos, achocolatados, energéticos, agua mineral etc...</span>
          </Link>
          <Link to='/Produtos' className="flex w-4/5 sm:w-2/4 p-2 gap-2">
            <img src={hero12} className="w-20 rounded-full" />
            <span className="text-xl ">Chocolates, bombom, doce de leite, nutela, balas, pirulitos etc...</span>
          </Link>
          <Link to='/Produtos' className="flex w-4/5 sm:w-2/4 p-2 gap-2">
            <img src={hero13} className="w-20 rounded-full" />
            <span className="text-xl ">Caneta, tesoura,pilhas, agulha, linha, lâminas de barbear  etc...</span>
          </Link>
          <Link to='/Produtos' className="flex w-4/5 sm:w-2/4 p-2 gap-2">
            <img src={hero7} className="w-20 rounded-full" />
            <span className="text-xl ">Aveia, farinha láctea, enlatados, barras de chocolate, doces etc...</span>
          </Link>
          <Link to='/Produtos' className="flex w-4/5 sm:w-2/4 p-2 gap-2">
            <img src={hero8} className="w-20 rounded-full" />
            <span className="text-xl ">Sabão líquido, detergente, desinfetante, papel higiênico etc...</span>
          </Link>
          <Link to='/Produtos' className="flex w-4/5 sm:w-2/4 p-2 gap-2">
            <img src={hero9} className="w-20 rounded-full" />
            <span className="text-xl">Pães, pão de cachorro quente, bolachões de diversos tipos etc... </span>
          </Link>
          <Link to='/Produtos' className="flex w-4/5 sm:w-2/4 p-2 gap-2">
            <img src={hero10} className="w-20 rounded-full" />
            <span className="text-xl ">Salsicha, linguiça, charque, carne de hamburguer, presunto, empanados etc...</span>
          </Link>
          <Link to='/Produtos' className="flex w-4/5 sm:w-2/4 p-2 gap-2">
            <img src={hero11} className="w-20 rounded-full" />
            <span className="text-xl ">Queijo, iogurte, leite natural, requeijão, danone, leite de caixa, etc...</span>
          </Link>
        </div>
        <Pay/>
   </main>
   
  );
}