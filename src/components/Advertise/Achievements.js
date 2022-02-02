import achievementsImage1 from '../../assets/images/achievements/achievements-1.png';
import achievementsImage2 from '../../assets/images/achievements/achievements-2.png';
import achievementsImage3 from '../../assets/images/achievements/achievements-3.png';
import logo1 from '../../assets/images/achievements/logos/logo-1.png';
import logo2 from '../../assets/images/achievements/logos/logo-2.png';
import playIcon from '../../assets/icons/play.png';

import styles from './Achievements.module.css';

const Achievements = () => {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.header} primary__heading`}>Lorem ipsum</h3>
      <ul className={styles.list}>
        <li className={styles['list__item']}>
          <figure className={styles.card}>
            <img
              className={styles.img}
              src={achievementsImage1}
              alt='achievements'
            />
            <figcaption className={styles.details}>
              <h5 className={styles.title}>Quote of the month</h5>
              <p className={styles.content}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
            </figcaption>
          </figure>
        </li>
        <li className={styles['list__item']}>
          <figure className={styles.card}>
            <img
              className={styles.img}
              src={achievementsImage2}
              alt='achievements'
            />
            <figcaption className={styles.details}>
              <h5 className={styles.title}>Hiring this month</h5>
              <div className={styles['logo__container']}>
                <img className={styles.logo} src={logo1} alt='company logo' />
                <img className={styles.logo} src={logo2} alt='company logo' />
              </div>
            </figcaption>
          </figure>
        </li>
        <li className={styles['list__item']}>
          <figure className={styles.card}>
            <img
              className={styles.img}
              src={achievementsImage3}
              alt='achievements'
            />
            <figcaption className={styles.details}>
              <h5 className={styles.title}>Video of the month</h5>
              <p className={styles.content}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
              </p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
