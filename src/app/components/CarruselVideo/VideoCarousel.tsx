import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './VideoCarousel.module.css';


type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
};

const videoData: Video[] = [
  {
    id: 1,
    title: 'Video 1',
    description: 'Nuestra institución resguarda información esencial que refleja la historia de nuestra provincia. Esta información resulta crucial para la administración, la investigación, el desarrollo económico, social, científico y tecnológico, el fomento de la cultura y la consolidación de la identidad provincial..',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Video 2',
    description: 'Nuestra institución resguarda información esencial que refleja la historia de nuestra provincia. Esta información resulta crucial para la administración, la investigación, el desarrollo económico, social, científico y tecnológico, el fomento de la cultura y la consolidación de la identidad provincial..',
    url: 'https://www.youtube.com/embed/3tmd-ClpJxA',
  },
  {
    id: 3,
    title: 'Video 3',
    description: 'Nuestra institución resguarda información esencial que refleja la historia de nuestra provincia. Esta información resulta crucial para la administración, la investigación, el desarrollo económico, social, científico y tecnológico, el fomento de la cultura y la consolidación de la identidad provincial..',
    url: 'https://www.youtube.com/embed/9bZkp7q19f0',
  },
];

const VideoCarousel: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const handleShowModal = (url: string) => {
    setSelectedVideoUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideoUrl('');
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel  data-bs-theme="dark">
        {videoData.map((video) => (
          <Carousel.Item key={video.id}>
            <div className={styles.carouselItem}>
              {/* Contenedor del video con tamaño responsivo */}
              <div className={styles.videoContainer}>
                <div className={styles.videoBox}>
                  <img
                    src={`https://img.youtube.com/vi/${video.url.split('/').pop()}/0.jpg`}
                    alt={video.title}
                    onClick={() => handleShowModal(video.url)}
                    className={styles.videoThumbnail}
                  />
                </div>
              </div>
              {/* Contenedor de la descripción del video */}
              <div className={styles.descriptionContainer}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Modal para reproducir el video */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modalVideo}>
            {selectedVideoUrl && (
              <iframe
                width="100%"
                height="400"
                src={selectedVideoUrl}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VideoCarousel;
