'use client'
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { ProgressBar } from 'primereact/progressbar';
import { CarruselItem } from '@/app/interfaces/interfaces';
import "primereact/resources/themes/saga-blue/theme.css"; 
import banner from "../../../../public/banner.png"
import 'bootstrap/dist/css/bootstrap.min.css';



function ControlledCarousel() {
  const [carruselItems, setCarruselItems] = useState<CarruselItem[]>([]);
  const [loading, setLoading] = useState(false); 
  
  useEffect(() => {
    // Comentado temporalmente hasta que conectes la base de datos
    /*
    const fetchCarruselItems = async () => {
      try {
        const response = await fetch('/api/Publicaciones/carrusel');
        if (!response.ok) {
          throw new Error('Error al obtener los datos del carrusel');
        }
        const data = await response.json();
        if (Array.isArray(data.carrusel)) {
          setCarruselItems(data.carrusel);
        } else {
          console.error('La propiedad "carrusel" no es un array:', data.carrusel);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos del carrusel:', error);
        setLoading(false);
      }
    };

    fetchCarruselItems();
    */
    // Añadimos un elemento por defecto para mostrar la imagen
    setCarruselItems([{} as CarruselItem]); 
  }, []);

  if (loading) {
    return (
      <div className="card">
        <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
      </div>
    );
  }

 
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={banner}
            alt="First slide"
            width={1000}
            height={200}
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={banner}
            alt="Second slide"
            width={1000}
            height={200}
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={banner}
            alt="Third slide"
            width={1000}
            height={200}
          />
          
        </Carousel.Item>
      </Carousel>
    );
  }

export default ControlledCarousel;
