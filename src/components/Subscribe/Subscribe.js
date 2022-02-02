import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';

import backgroundImage from '../../assets/images/subscribe/background.svg';

import styles from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <section className={styles.section}>
      <img
        className={styles.background}
        src={backgroundImage}
        alt='background'
      />
      <PrimaryWrapper className={styles.wrapper}>
        <div className={styles.container}>
          <h3 className={`${styles.title} primary__heading`}>Subscribe</h3>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div className={styles['input__container']}>
            <input
              className={styles.input}
              type='text'
              placeholder='Enter your Email Address'
            />
            <Link className={`${styles.action} primary__btn`} to='/'>
              Subscribe Now{' '}
              <FontAwesomeIcon className={styles.icon} icon={faCaretRight} />
            </Link>
          </div>
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Subscribe;
