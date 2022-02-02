import background from '../../../assets/images/examinations/card-background.svg';

import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${props.className && props.className} ${styles.card}`}>
      <img
        className={styles['background__img']}
        src={background}
        alt='card background'
      />
      {props.children}
    </div>
  );
};

export default Card;
