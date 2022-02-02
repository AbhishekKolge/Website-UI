import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';
import Achievements from './Achievements';
import Offer from './Offer';

import styles from './Advertise.module.css';

const Advertise = () => {
  return (
    <section className={styles.section}>
      <PrimaryWrapper className={styles.wrapper}>
        <Achievements />
        <Offer />
      </PrimaryWrapper>
    </section>
  );
};

export default Advertise;
