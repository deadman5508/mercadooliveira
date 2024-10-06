import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hero5 from '../../assests/hero5.png';
import hero15 from '../../assests/hero15.png';
import hero16 from '../../assests/hero16.png';
import hero14 from '../../assests/hero14.png';
import './index.css';

export default function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: hero15, alt: 'Imagem 1', text: 'Os melhores preços da região!' },
        { src: hero16, alt: 'Imagem 2', text: 'Descontos todos os dias!' },
        { src: hero14, alt: 'Imagem 3', text: 'Pães fresquinhos sempre para você!' },
        { src: hero5, alt: 'Imagem 4', text: 'Tudo que você precisa, pertinho de você!' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Troca a imagem a cada 5 segundos

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleDotClick = (index) => {
        setCurrentImageIndex(index); // Muda para a imagem correspondente ao índice do indicador
    };

    return (
        <div className='relative flex flex-col justify-center items-center w-full h-44 sm:h-96 mb-10 sm:mb-20 overflow-hidden'>
            <motion.div
                key={currentImageIndex}
                initial={{ x: '100%', opacity: 0 }} // Começa fora da tela à direita
                animate={{ x: 0, opacity: 1 }} // Mova para a posição original
                exit={{ x: '-100%', opacity: 0 }} // Sai pela esquerda
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='absolute h-full w-full'
            >
                <img 
                    src={images[currentImageIndex].src} 
                    alt={images[currentImageIndex].alt} 
                    className='rounded-md object-cover h-full w-full'
                />
                <div className="absolute top-0 left-0 w-full bg-opacity-50 p-2">
                    <h2 className="md:text-2xl text-base font-bold text-emerald-900 bg-slate-100 opacity-90 rounded-full text-center">
                        {images[currentImageIndex].text}
                    </h2>
                </div>
            </motion.div>

            {/* Indicadores de imagem */}
            <div className="flex z-10 justify-center mt-auto mb-1"> {/* Adicione z-10 para garantir que os indicadores fiquem acima das imagens */}
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`indicator  ${currentImageIndex === index ? 'indicator-active' : 'indicator-inactive'}`}
                    />
                ))}
            </div>
        </div>
    );
}
