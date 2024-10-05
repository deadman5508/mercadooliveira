import hero1 from '../../assests/hero1.webp'

export default function Institucional() {
 return (
   <main className='flex flex-col  mx-auto text-amber-950 sm:max-w-7xl gap-2 mt-5 px-2'>
      <div className='flex flex-row w-full gap-2 sm:text-xl '>
            <img src={hero1} className='sm:w-1/3 w-1/3 rounded-xl ' />
            <div className='flex flex-col'>
            <p className=' flex indent-5'> O mercado oliveira é uma empresa de produtos alimenticios fundada em 06 de dezembro de 2021,
              por Rosinaldo Santos de Olveira atual diretor, a empresa é de base familiar 100% Sergipana. 
            </p>
            <p>
              A empresa tem como objetivo vender o melhor produto com melhor preço para seus clientes oferencendo um excelente atendimento. 
            </p>
            </div>
      </div>
   </main>
  );
}