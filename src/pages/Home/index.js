import hero5 from '../../assests/hero5.png'
import Mid from '../../components/Mid';
import hero4 from '../../assests/hero4.png'
import { Link } from 'react-router-dom';
export default function Home() {
 return (
   <main className='flex flex-col mb-52 justify-around mx-auto text-amber-950 sm:max-w-7xl gap-2'>
        <div className='flex justify-center  w-full h-44 sm:h-96'>
            <img src={hero5} alt='supermercado' className=' object-cover h-full w-full'/>
            <div class=" flex absolute mt-3 sm:mt-2 bg-opacity-50">
                <h2 
                className="md:text-2xl text-base font-bold text-emerald-900 bg-slate-100 opacity-90 rounded-full">
                  "Tudo que você precisa, pertinho de você!"
                </h2>
            </div>
        </div>
        <Mid/>
        <div className='flex justify-end gap-4 mt-4'>
          <div className='flex items-center justify-end'>
              <span className='flex flex-col items-end font-semibold'>"Compromisso com as melhores ofertas você encontra aqui".<p> - Thiago oliveira</p>  </span>
          </div>
          <Link to='/Institucional'>
            <img src={hero4} alt='hero4' className='md:w-96 w-56'/>
          </Link>
        </div>

   </main>
  );
}