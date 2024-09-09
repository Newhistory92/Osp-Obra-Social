'use client'
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { ProgressBar } from 'primereact/progressbar';
//import "./Carrusel.css";
import { CarruselItem } from '@/app/interfaces/interfaces';
import "primereact/resources/themes/saga-blue/theme.css"; 
import banner from "../../../../public/banner.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Carrusel.module.css";

function ControlledCarousel() {
  const [carruselItems, setCarruselItems] = useState<CarruselItem[]>([]);
  const [loading, setLoading] = useState(false); // Cambiado a false para que no muestre el indicador de carga

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
        <ProgressBar
          mode="indeterminate"
          style={{ height: "6px" }}
        ></ProgressBar>
      </div>
    );
  }

  return (
    <div className={styles.carrusel}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Image src={banner} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={banner} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={banner} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
