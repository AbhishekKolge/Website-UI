import { Link } from 'react-router-dom';

import styles from './ServiceCard.module.css';

const ServiceCard = (props) => {
  const { title, details, link, image } = props.detail;
  return (
    <div className={styles.card}>
      <figure className={styles['image__container']}>
        <img className={styles.image} src={image} alt='service background' />
        <figcaption className={styles.title}>{title}</figcaption>
      </figure>
      <div className={styles.details}>
        <p className={styles.content}>{details}</p>
        <Link className={styles.btn} to={link.path}>
          {link.text}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
