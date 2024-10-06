import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Map from "../../components/Map";




export default function Contato() {
 return (
    <div className='flex flex-col sm:flex-row  mx-auto text-amber-950 sm:max-w-7xl gap-2 mt-5 px-2 mb-52'>
        <div className="w-full">
        <Form/>
        </div>

        <div className="flex flex-col items-center justify-center">
        <Map/>
        <div className="flex flex-col items-center justify-center">
          <span>Nosso endereço no gps</span>
          <Link
          target="blank"
          to='https://maps.app.goo.gl/NjEazv9eLf44xv2t8'
          rel="noopener noreferrer"
          className="font-semibold text-lg bg-green-500 text-white rounded-sm px-2 py-1">Google Maps</Link>
          </div>
        
        </div>
    </div>
  );
}


