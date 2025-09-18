export interface PexelsImage {
  id: number;
  photographer: string;
  photographer_url: string;
  src: {
    large: string;
    medium: string;
    small: string;
  };
  alt: string;
}

export interface PexelsResponse {
  photos: PexelsImage[];
}

const PLACEHOLDER_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
  library: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  lab: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  sports: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  dorm: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  student1: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
  student2: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
  student3: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
};

export async function fetchImages({ query, perPage = 6 }: { query: string; perPage?: number }): Promise<PexelsImage[]> {
  const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
  
  if (!apiKey) {
    return generatePlaceholderImages(query, perPage);
  }

  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape&size=large`, {
      headers: {
        'Authorization': apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data: PexelsResponse = await response.json();
    return data.photos.map(photo => ({
      ...photo,
      alt: `${query} - Photo by ${photo.photographer}`
    }));
  } catch (error) {
    return generatePlaceholderImages(query, perPage);
  }
}

function generatePlaceholderImages(query: string, count: number): PexelsImage[] {
  const placeholderKeys = Object.keys(PLACEHOLDER_IMAGES);
  const images: PexelsImage[] = [];

  for (let i = 0; i < count; i++) {
    const key = placeholderKeys[i % placeholderKeys.length] as keyof typeof PLACEHOLDER_IMAGES;
    const url = PLACEHOLDER_IMAGES[key];
    
    images.push({
      id: i + 1,
      photographer: 'Pexels Photographer',
      photographer_url: 'https://pexels.com',
      src: {
        large: url,
        medium: url,
        small: url,
      },
      alt: `${query} - Stock photo ${i + 1}`,
    });
  }

  return images;
}

export { PLACEHOLDER_IMAGES };