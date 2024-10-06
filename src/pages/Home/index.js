import hero5 from '../../assests/hero5.png'
import Mid from '../../components/Mid';
import hero4 from '../../assests/hero4.png'
import { Link } from 'react-router-dom';
import Pay from '../../components/Pay';
import Banner from '../../components/Banner';
export default function Home() {
 return (
   <main className='flex flex-col sm:mb-24 mb-5 justify-around mx-auto text-amber-950 sm:max-w-7xl gap-2'>
        <div className='flex justify-center  w-full h-44 sm:h-96 mb-10 sm:mb-20'>
            <Banner/>
        </div>
        <Mid/>
        <div className='flex justify-end gap-4 mt-16 sm:mt-24'>
          <div className='flex items-center justify-end'>
              <span className='flex flex-col items-end font-semibold'>"Compromisso com as melhores ofertas você encontra aqui".<p> - Thiago oliveira</p>  </span>
          </div>
          <Link to='/Institucional'>
            <img src={hero4} alt='hero4' className='md:w-96 w-56 rounded-xl'/>
          </Link>
        </div>
        <Pay/>
   </main>
  );
}