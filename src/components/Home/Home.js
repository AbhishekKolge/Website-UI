import Cover from '../Cover/Cover';
import QuickLinks from '../QuickLinks/QuickLinks';
import Examinations from '../Examinations/Examinations';
import FunFacts from '../FunFacts/FunFacts';
import Roadmap from '../Roadmap/Roadmap';
import Services from '../Services/Services';
import Advertise from '../Advertise/Advertise';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <main>
        <Cover />
        <QuickLinks />
        <Examinations />
        <FunFacts />
        <Roadmap />
        <Services />
        <Advertise />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Home;
