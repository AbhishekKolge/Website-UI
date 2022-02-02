import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';

import styles from './QuickLinks.module.css';

const QuickLinks = () => {
  return (
    <section className={styles.section}>
      <PrimaryWrapper className={styles.wrapper}>
        <div className={styles.container}>
          <Link to='/' className={styles['primary__link']}>
            Quick Links{' '}
            <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
          </Link>
          <p className={styles.header}>Lorem ipsum</p>
          <Link className={styles.link} to='/'>
            Level 1
          </Link>
          <Link className={styles.link} to='/'>
            Level 2
          </Link>
          <Link className={styles.link} to='/'>
            Level 3
          </Link>
          <Link className={styles.link} to='/'>
            Enquiry
          </Link>
        </div>
        <div className={styles.container}>
          <p className={styles.header}>Lorem ipsum</p>
          <Link className={styles.link} to='/'>
            Lorem ipsum
          </Link>
          <Link className={styles.link} to='/'>
            Lorem ipsum
          </Link>
          <Link className={styles.link} to='/'>
            Lorem ipsum
          </Link>
          <Link className={styles.link} to='/'>
            Lorem ipsum
          </Link>
        </div>
        <div className={styles.container}>
          <p className={styles.header}>Lorem ipsum</p>
          <Link className={styles.link} to='/'>
            Lorem ipsum
          </Link>
          <Link className={styles.link} to='/'>
            Lorem ipsum
          </Link>
          <Link className={styles.link} to='/'>
            Lorem ipsum
          </Link>
          <Link className={styles.link} to='/'>
            Lorem ipsum
          </Link>
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default QuickLinks;
