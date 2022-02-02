import { useState } from 'react';

import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './NavDropdown.module.css';

const NavDropdown = (props) => {
  const { header, options } = props.option;
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptionsHandler = () => {
    setShowOptions((prevState) => !prevState);
  };

  const dropdownVariant = {
    visible: { height: 'auto', transition: 'tween' },
    hidden: { height: 0, transition: 'tween' },
  };
  return (
    <div className={styles['option__container']}>
      <div
        onClick={toggleOptionsHandler}
        className={styles['header__container']}
      >
        <p className={styles.header}>{header}</p>
        <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
      </div>
      <AnimatePresence>
        {showOptions && (
          <motion.ul
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={dropdownVariant}
            className={styles.dropdown}
          >
            {options.map((option, index) => {
              return (
                <li key={index} className={styles['dropdown__item']}>
                  <Link className={styles['dropdown__link']} to={option.path}>
                    {option.text}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
