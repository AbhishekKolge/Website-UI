import { useState } from 'react';

import { Link } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import PrimaryWrapper from '../../UI/PrimaryWrapper/PrimaryWrapper';
import NavDropdown from '../../UI/NavDropdown/NavDropdown';
import Input from '../../UI/Input/Input';

import styles from './PrimaryNav.module.css';

const DUMMY_OPTIONS = [
  {
    header: 'Qualifications',
    options: [
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
    ],
  },
  {
    header: 'Organizations',
    options: [
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
    ],
  },
  {
    header: 'Research & Analysis',
    options: [
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
    ],
  },
  {
    header: 'Lorem ipsum',
    options: [
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
    ],
  },
  {
    header: 'Lorem ipsum',
    options: [
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
      {
        text: 'Lorem ipsum dolor',
        path: '/',
      },
    ],
  },
];

const PrimaryNav = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const toggleSearchHandler = () => {
    setShowSearchInput((prevState) => !prevState);
  };
  const searchInputVariant = {
    visible: { scaleX: 1, transition: 'tween', transformOrigin: 'right' },
    hidden: { scaleX: 0, transition: 'tween' },
  };
  return (
    <nav className={styles.nav}>
      <PrimaryWrapper className={styles.wrapper}>
        <Link className={styles['logo__container']} to='/'>
          <strong className={styles.logo}>Logo</strong>
        </Link>
        <ul className={styles['nav__options']}>
          {DUMMY_OPTIONS.map((option, index) => {
            return <NavDropdown key={index} option={option} />;
          })}
          <li className={styles.search}>
            <AnimatePresence>
              {showSearchInput && (
                <Input
                  className={styles.input}
                  hidden='hidden'
                  visible='visible'
                  exit='hidden'
                  variants={searchInputVariant}
                  input={{ id: 'search', placeholder: 'Search' }}
                />
              )}
            </AnimatePresence>
            <button
              className={styles['search__btn']}
              onClick={toggleSearchHandler}
            >
              <FontAwesomeIcon
                className={styles['btn__icon']}
                icon={faSearch}
              />
            </button>
          </li>
          <li className={styles['action__container']}>
            <Link className={`${styles['action__btn']} primary__btn`} to='/'>
              Enrolment
            </Link>
          </li>
        </ul>
      </PrimaryWrapper>
    </nav>
  );
};

export default PrimaryNav;
