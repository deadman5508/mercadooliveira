import { Link } from 'react-router-dom';
import logo from '../../assests/hero1.webp'

export default function Header() {
 return (
   <header className='flex items-center justify-between mx-auto shadow-lg text-amber-950 md:h-auto h-20 sm:max-w-7xl px-4'>
    <Link to='/' className=' flex items-center'>
      <img src={logo} alt="logo"  className='rounded-3xl w-20 md:w-20 h-20'/>
      
    </Link>
    <div className='gap-2 flex flex-row font-semibold text-sm sm:text-xl'>
      <Link to='/' className='duration-300 hover:tracking-widest hidden sm:block'>HOME</Link>
      <Link to='/Institucional' className='duration-300 hover:tracking-widest'>INSTITUCIONAL</Link>
      <Link to='/Produtos' className='duration-300 hover:tracking-widest'>PRODUTOS</Link>
      <Link to='/Contato' className='duration-300 hover:tracking-widest'>CONTATO</Link>
      
    </div>
   </header>
  );
}