import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './VideoCarousel.module.css';
import LiteYouTubeWrapper from './LiteYouTubeWrapper'; 

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
    url: 'https://www.youtube.com/watch?v=apV1QTLhnn0',
  },
  {
    id: 2,
    title: 'Video 2',
    description: 'Nuestra institución resguarda información esencial que refleja la historia de nuestra provincia. Esta información resulta crucial para la administración, la investigación, el desarrollo económico, social, científico y tecnológico, el fomento de la cultura y la consolidación de la identidad provincial..',
    url: 'https://www.youtube.com/watch?v=VkC8Iz7Y1u0',
  },
  {
    id: 3,
    title: 'Video 3',
    description: 'Nuestra institución resguarda información esencial que refleja la historia de nuestra provincia. Esta información resulta crucial para la administración, la investigación, el desarrollo económico, social, científico y tecnológico, el fomento de la cultura y la consolidación de la identidad provincial..',
    url: 'https://www.youtube.com/watch?v=wyFIiEtpTf0',
  },
];

const VideoCarousel: React.FC = () => {

  const getYouTubeID = (url: string) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel  data-bs-theme="dark">
        {videoData.map((video) => (
          <Carousel.Item key={video.id}>
            <div className={styles.carouselItem}>
              <div className={styles.videoContainer}>
                   <LiteYouTubeWrapper
                  videoId={getYouTubeID(video.url)}
                  title={video.title}
                  poster="maxresdefault"
                  className={styles.videoThumbnail}
                />     
              </div>
              <div className={styles.descriptionContainer}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
