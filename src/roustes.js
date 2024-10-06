import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Institucional from './pages/Institucional'
import Produtos from './pages/Produtos'
import Footer from './components/Footer'
import Contato from './pages/Contato'


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Institucional" element={<Institucional/>}/>
                <Route path="/Produtos" element={<Produtos/>}/>
                <Route path="/Contato" element={<Contato/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}