import { Link } from 'react-router-dom';

import PrimaryWrapper from '../../UI/PrimaryWrapper/PrimaryWrapper';

import styles from './SecondaryNav.module.css';

const DUMMY_OPTIONS = [
  {
    text: 'About us',
    path: '/',
  },
  {
    text: 'Lorem ipsum',
    path: '/',
  },
  {
    text: 'Lorem ipsum',
    path: '/',
  },
  {
    text: 'Lorem ipsum',
    path: '/',
  },
  {
    text: 'Newsroom',
    path: '/',
  },
  {
    text: 'Press releases',
    path: '/',
  },
  {
    text: 'Lorem ipsum',
    path: '/',
  },
  {
    text: 'Privacy Policy',
    path: '/',
  },
  {
    text: 'Contact us',
    path: '/',
  },
];

const SecondaryNav = () => {
  return (
    <nav className={styles.nav}>
      <PrimaryWrapper className={styles.wrapper}>
        <ul className={styles.options}>
          {DUMMY_OPTIONS.map((option, index) => {
            return (
              <li className={styles['option__item']} key={index}>
                <Link className={styles['option__link']} to={option.path}>
                  {option.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </PrimaryWrapper>
    </nav>
  );
};

export default SecondaryNav;
