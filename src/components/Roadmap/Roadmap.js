import { useRef } from 'react';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';

import backgroundImg from '../../assets/images/roadmap/background.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Roadmap.module.css';

SwiperCore.use([Navigation]);

const DUMMY_DETAILS = [
  {
    date: 'January 20, 2011',
    task: 'Lorem ipsum dolor sit amet',
  },
  {
    date: 'April 31, 2015',
    task: 'Lorem ipsum dolor sit amet',
  },
  {
    date: 'December 21, 2010',
    task: 'Lorem ipsum dolor sit amet',
  },
  {
    date: 'January 20, 2011',
    task: 'Lorem ipsum dolor sit amet',
  },
  {
    date: 'April 31, 2015',
    task: 'Lorem ipsum dolor sit amet',
  },
  {
    date: 'December 21, 2010',
    task: 'Lorem ipsum dolor sit amet',
  },
];

const Roadmap = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <section className={styles.section}>
      <img className={styles.background} src={backgroundImg} alt='background' />
      <PrimaryWrapper className={styles.wrapper}>
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          slidesPerGroup={3}
          modules={[Navigation]}
          className={styles.swiper}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {DUMMY_DETAILS.map((detail, index) => {
            return (
              <SwiperSlide className={styles.slides} key={index}>
                <div className={styles.card}>
                  <p className={styles.header}>{detail.date}</p>
                  <strong className={styles.details}>{detail.task}</strong>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles['btn__wrapper']}>
          <button ref={prevRef} className={styles.btn}>
            <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
          </button>
          <button ref={nextRef} className={styles.btn}>
            <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
          </button>
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Roadmap;
