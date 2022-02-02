import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';
import Fact from './Fact';

import styles from './FunFacts.module.css';

const DUMMY_DATA = [
  {
    header: 'Lorem ipsum',
    count: 123,
    title: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    header: 'Lorem ipsum',
    count: 12,
    title: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
  },
  {
    header: 'Lorem ipsum',
    count: 12,
    title: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
  },
  {
    header: 'Lorem ipsum',
    count: 123,
    title: 'Lorem ipsum',
    details:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
  },
];

const FunFacts = () => {
  return (
    <section className={styles.section}>
      <PrimaryWrapper className={styles.wrapper}>
        {DUMMY_DATA.map((data, index) => {
          return <Fact key={index} data={data} />;
        })}
      </PrimaryWrapper>
    </section>
  );
};

export default FunFacts;
