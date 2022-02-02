import { useState } from 'react';

import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import styles from './MobileNav.module.css';

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  const navVariant = {
    visible: { opacity: 1, x: 0, transition: 'tween' },
    hidden: { opacity: 0, x: '100%', transition: 'tween' },
  };
  return (
    <>
      <div
        onClick={toggleNavHandler}
        className={`${showNav && styles.active} ${styles.nav}`}
      >
        <span className={styles.icon}></span>
        <span className={styles.icon}></span>
        <span className={styles.icon}></span>
      </div>
      <AnimatePresence>
        {showNav && (
          <motion.nav
            variants={navVariant}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className={styles.navigation}
          >
            <ul className={styles.list}>
              <li onClick={toggleNavHandler}>
                <Link to='/'>Qualificatiob</Link>
              </li>
              <li onClick={toggleNavHandler}>
                <Link to='/'>Organization</Link>
              </li>
              <li onClick={toggleNavHandler}>
                <Link to='/'>Research & Analysis</Link>
              </li>
              <li onClick={toggleNavHandler}>
                <Link to='/'>Lorem ipsum</Link>
              </li>
              <li onClick={toggleNavHandler}>
                <Link to='/'>Lorem ipsum</Link>
              </li>
              <li onClick={toggleNavHandler}>
                <Link to='/contactform'>Contact Form</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
