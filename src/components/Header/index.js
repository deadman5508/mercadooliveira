import { Link } from 'react-router-dom';
import logo from '../../assests/hero1.webp'

export default function Header() {
 return (
   <header className='flex items-center justify-between mx-auto shadow-lg text-amber-950 sm:max-w-7xl px-4'>
    <Link to='/' className=' flex items-center'>
      <img src={logo} alt="logo"  className='rounded-3xl w-20'/>
      
    </Link>
    <div className='gap-2 flex flex-row font-semibold text-sm sm:text-xl'>
      <Link to='/' className='duration-300 hover:tracking-widest'>HOME</Link>
      <Link to='/Institucional' className='duration-300 hover:tracking-widest'>INSTITUCIONAL</Link>
      <Link to='/Produtos' className='duration-300 hover:tracking-widest'>PRODUTOS</Link>
      <span className='duration-300 hover:tracking-widest'>CONTATO</span>
      
    </div>
   </header>
  );
}