import { motion } from 'framer-motion';

import styles from './Input.module.css';

const Input = (props) => {
  return (
    <motion.div
      initial={props.hidden}
      animate={props.visible}
      exit={props.exit}
      variants={props.variants}
      className={`${props.className && props.className} ${
        styles['input__container']
      }`}
    >
      {props.label && (
        <label className={styles.label} htmlFor={props.input.id}>
          {props.label}
        </label>
      )}
      <input {...props.input} className={styles.input} />
    </motion.div>
  );
};

export default Input;
