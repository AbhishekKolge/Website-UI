import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Offer.module.css';

const Offer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={`${styles.heading} primary__heading`}>Lorem ipsum</h3>
        <Link className={styles.btn} to='/'>
          View all{' '}
          <FontAwesomeIcon
            className={styles.icon}
            icon={faChevronCircleRight}
          />
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.card}>
          <div className={styles['date__container']}>
            <div className={styles.date}>
              19 <br />
              Mar
            </div>
            <div className={styles.year}>2021</div>
          </div>
          <div className={styles.details}>
            <h5 className={styles.title}>Lorem ipsum</h5>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco..
            </p>
            <span className={styles.time}>07:00 - 10:00 (March 20, 2021)</span>
            <Link className={styles.link} to='/'>
              Register Now
            </Link>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles['date__container']}>
            <div className={styles.date}>
              19 <br />
              Mar
            </div>
            <div className={styles.year}>2021</div>
          </div>
          <div className={styles.details}>
            <h5 className={styles.title}>Lorem ipsum</h5>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco..
            </p>
            <span className={styles.time}>07:00 - 10:00 (March 20, 2021)</span>
            <Link className={styles.link} to='/'>
              Register Now
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Offer;
