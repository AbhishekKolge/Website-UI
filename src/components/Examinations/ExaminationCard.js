import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import Card from '../UI/Card/Card';

import 'swiper/css';

import styles from './ExaminationCard.module.css';

SwiperCore.use(Autoplay);

const DUMMY_DETAILS = [
  {
    heading: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    link: {
      text: 'Know More',
      path: '/',
    },
  },
  {
    heading: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    link: {
      text: 'Know More',
      path: '/',
    },
  },
  {
    heading: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    link: {
      text: 'Know More',
      path: '/',
    },
  },
  {
    heading: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    link: {
      text: 'Know More',
      path: '/',
    },
  },
  {
    heading: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    link: {
      text: 'Know More',
      path: '/',
    },
  },
  {
    heading: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    link: {
      text: 'Know More',
      path: '/',
    },
  },
];

const ExaminationCard = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 3.5,
          },
        }}
      >
        {DUMMY_DETAILS.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card className={styles.card}>
                <h6 className={styles.heading}>{item.heading}</h6>
                <p className={styles.details}>{item.details}</p>
                <Link className={styles.link} to={item.link.path}>
                  {item.link.text}
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faChevronCircleRight}
                  />
                </Link>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ExaminationCard;
