import hero5 from '../../assests/hero5.png'
import Mid from '../../components/Mid';
export default function Home() {
 return (
   <main className='flex flex-col justify-around mx-auto text-amber-950 sm:max-w-7xl'>
        <div className='flex justify-center  w-full h-44 sm:h-96'>
            <img src={hero5} alt='supermercado' className=' object-cover h-full w-full'/>
            <div class=" flex absolute mt-3 sm:mt-2 bg-opacity-50">
                <h2 class="text-2xl font-bold text-emerald-900 bg-slate-100 opacity-90 rounded-full">"Tudo que você precisa, pertinho de você!"</h2>
            </div>
        </div>
        <Mid/>
   </main>
  );
}