import { FaCreditCard } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";


export default function Pay() {
 return (
   <main className='flex items-start justify-start flex-col text-amber-950 sm:max-w-7xl gap-2 mt-5 px-2'>
        <h1 className="font-semibold">Aceitamos todos os cartões:</h1>
        <div className="flex flex-row gap-5">
        <span className=" rounded-md text-xl w-full sm:text-3xl flex items-center justify-center bg-green-600 text-white">Credito <FaCcMastercard className="text-4xl sm:text-5xl" /> </span>
        <span className="rounded-md  text-xl w-full sm:text-3xl flex items-center justify-center bg-green-600 text-white">Debito <FaCreditCard className="text-4xl sm:text-3xl" /></span>
        <span className="rounded-md  text-xl w-full sm:text-3xl flex items-center justify-center bg-green-600 text-white">Pix <FaPix className="text-4xl sm:text-5xl" /></span>
        <span className="rounded-md  text-xl  w-full sm:text-3xl flex items-center justify-center bg-green-600 text-white">Dinheiro<FaMoneyCheckDollar className="text-4xl sm:text-5xl" /></span>
        </div>
   </main>
  );
}