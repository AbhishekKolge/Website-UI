import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';

import coverImage1 from '../../assets/images/cover/cover-1.svg';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Cover.module.css';

import { Pagination } from 'swiper';
SwiperCore.use(Autoplay);

const DUMMY_COVER = [
  {
    heading: 'Lorem ipsum',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
    button: {
      text: 'Know More',
      path: '/',
    },
    image: coverImage1,
  },
  {
    heading: 'Lorem ipsum',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
    button: {
      text: 'Explore More',
      path: '/',
    },
    image: coverImage1,
  },
  {
    heading: 'Lorem ipsum',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
    button: {
      text: 'View More',
      path: '/',
    },
    image: coverImage1,
  },
];

const Cover = () => {
  return (
    <section className={styles.section}>
      <PrimaryWrapper className={styles.wrapper}>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          grabCursor={true}
          className={styles.swiper}
        >
          {DUMMY_COVER.map((cover, index) => {
            return (
              <SwiperSlide className={styles.cover} key={index}>
                <div className={styles['cover__details']}>
                  <h1 className={`${styles.heading} primary__heading`}>
                    {cover.heading}
                  </h1>
                  <p className={styles.description}>{cover.content}</p>
                  <Link
                    className={`${styles['action__btn']} primary__btn`}
                    to={cover.button.path}
                  >
                    {cover.button.text}
                    <FontAwesomeIcon
                      className={styles['btn__icon']}
                      icon={faCaretRight}
                    />
                  </Link>
                </div>
                <img
                  className={styles['cover__img']}
                  src={cover.image}
                  alt='cover'
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </PrimaryWrapper>
    </section>
  );
};

export default Cover;
