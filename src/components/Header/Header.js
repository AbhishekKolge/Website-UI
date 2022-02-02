import PrimaryNav from './PrimaryNav/PrimaryNav';
import SecondaryNav from './SecondaryNav/SecondaryNav';
import MobileNav from './MobileNav/MobileNav';

import styles from './Header.modulee.css';

const Header = () => {
  return (
    <header>
      <SecondaryNav />
      <PrimaryNav />
      <MobileNav />
    </header>
  );
};

export default Header;
