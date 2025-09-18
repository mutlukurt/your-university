import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchImages, type PexelsImage } from '../lib/pexels';

const imageQueries = [
  'modern library interior',
  'science laboratory equipment',
  'university sports facility',
  'student residence hall'
];

// Free copyright images from Unsplash
const FREE_IMAGES = [
  {
    id: 1,
    src: {
      medium: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    alt: 'Students collaborating and studying together in library'
  },
  {
    id: 2,
    src: {
      medium: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    alt: 'Students working together in science laboratory'
  },
  {
    id: 3,
    src: {
      medium: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    alt: 'Students playing basketball in university sports facility'
  },
  {
    id: 4,
    src: {
      medium: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    alt: 'Students socializing and studying in modern dormitory common area'
  }
];

export default function ImageMosaic() {
  const [images, setImages] = useState<any[]>(FREE_IMAGES);

  useEffect(() => {
    // Use free copyright images instead of Pexels
    setImages(FREE_IMAGES);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 lg:mt-0">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            ease: 'easeOut',
            delay: index * 0.1 
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="relative rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <img
            src={image.src.medium}
            alt={image.alt}
            className="w-full h-32 sm:h-40 md:h-48 object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      ))}
    </div>
  );
}