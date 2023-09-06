'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './tours.module.css';

const urlTour = 'https://course-api.com/react-tours-project';

interface TourData {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

type ReadMoreMap = Record<string, boolean>;
async function getToursData() {
  try {
    const response = await axios.get(urlTour);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function TourPage() {
  const [tourData, setTourData] = useState<TourData[]>([]);
  const [readMore, setReadMore] = useState<ReadMoreMap>({});

  useEffect(() => {
    async function fetchTourData() {
      try {
        const responseData = await getToursData();

        if (Array.isArray(responseData)) {
          setTourData(responseData);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchTourData();
  }, []);

  const toggleReadMore = (id: string) => {
    setReadMore((prevReadMoreMap) => ({
      ...prevReadMoreMap,
      [id]: !prevReadMoreMap[id],
    }));
  };

  const removeTour = (id: string) => {
    const newTourData = tourData.filter((tour) => tour.id != id);
    setTourData(newTourData);
  };

  return (
    <div className={styles['tour-card']}>
      {tourData &&
        tourData.map((item: TourData) => (
          <div className={styles['tour-card__details']} key={item.id}>
            <img
              src={item.image}
              className={styles['tour-card__details-image']}
            />
            <p
              className={styles['tour-card__details-price']}
            >{`$ ${item.price}`}</p>
            <div className={styles['tour-card__info']}>
              <h4 className={styles['tour-card__details-name']}>{item.name}</h4>

              <p className={styles['tour-card__details-info']}>
                {readMore[item.id]
                  ? `${item.info}`
                  : `${item.info.substring(0, 200)}...`}
                <button
                  className={styles['tour-card__details-readmore']}
                  onClick={() => toggleReadMore(item.id)}
                >
                  {readMore[item.id] ? 'Show less' : 'Read more'}
                </button>
              </p>

              <button
                className={styles['tour-card__details-button']}
                onClick={() => removeTour(item.id)}
              >
                Not Interested
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
