import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';
import ServiceCard from './ServiceCard';

import serviceImage1 from '../../assets/images/services/service-1.png';
import serviceImage2 from '../../assets/images/services/service-2.png';
import serviceImage3 from '../../assets/images/services/service-3.png';

import styles from './Services.module.css';

const DUMMY_DETAILS = [
  {
    title: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    link: {
      text: 'Know More',
      path: '/',
    },
    image: serviceImage1,
  },
  {
    title: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    link: {
      text: 'Know More',
      path: '/',
    },
    image: serviceImage2,
  },
  {
    title: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    link: {
      text: 'Know More',
      path: '/',
    },
    image: serviceImage3,
  },
];

const Services = () => {
  return (
    <section className={styles.section}>
      <PrimaryWrapper className={styles.wrapper}>
        {DUMMY_DETAILS.map((detail, index) => {
          return <ServiceCard key={index} detail={detail} />;
        })}
      </PrimaryWrapper>
    </section>
  );
};

export default Services;
