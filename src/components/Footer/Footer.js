import { useRef, useEffect } from 'react';

import lottie from 'lottie-web';

import earthAnimation from '../../assets/animation/earth.json';

import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';

import facebookIcon from '../../assets/icons/facebook.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import instagramIcon from '../../assets/icons/instagram.png';
import twitterIcon from '../../assets/icons/twitter.png';
import youtubeIcon from '../../assets/icons/youtube.png';
import quoraIcon from '../../assets/icons/quora.png';
import locationIcon from '../../assets/icons/location.png';
import timerIcon from '../../assets/icons/timer.png';
import addressIcon from '../../assets/icons/address.png';

import styles from './Footer.module.css';

const Footer = () => {
  const anim = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anim.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: earthAnimation,
    });
    return () => lottie.stop();
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.anim} ref={anim}></div>
      <PrimaryWrapper className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.container}>
            <h4 className={styles.title}>Contact us</h4>
            <ul className={styles.list}>
              <li className={styles.item}>
                Address: amet, consetetur sadipscing elitr, sed diam
              </li>
              <li className={styles.item}>
                Email id: eirmod tempor invidunt ut labore et dolore
              </li>
              <li className={styles.item}>Phone no: 123456789</li>
            </ul>
          </div>
          <div className={styles.container}>
            <h4 className={styles.title}>Follow us</h4>
            <ul className={`${styles.list} ${styles['list--2']}`}>
              <li className={styles.item}>
                <a className={styles.link} href='www.facebook.com'>
                  <img
                    className={styles.icon}
                    src={facebookIcon}
                    alt='facebook icon'
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href='www.linkedin.com'>
                  <img
                    className={styles.icon}
                    src={linkedinIcon}
                    alt='linkedin icon'
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href='www.instagram.com'>
                  <img
                    className={styles.icon}
                    src={instagramIcon}
                    alt='instagram icon'
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href='www.twitter.com'>
                  <img
                    className={styles.icon}
                    src={twitterIcon}
                    alt='twitter icon'
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href='www.youtube.com'>
                  <img
                    className={styles.icon}
                    src={youtubeIcon}
                    alt='youtube icon'
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href='www.quora.com'>
                  <img
                    className={styles.icon}
                    src={quoraIcon}
                    alt='quora icon'
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.container}>
            <h4 className={styles.title}>Head Office</h4>
            <ul className={styles.list}>
              <li>
                <img src={locationIcon} alt='location icon' />
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut
                </p>
              </li>
              <li>
                <img src={timerIcon} alt='timer icon' />
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
              </li>
              <li>
                <img src={timerIcon} alt='timer icon' />
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
              </li>
              <li>
                <img src={addressIcon} alt='address icon' />
                <p>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
              </li>
            </ul>
          </div>
        </div>
      </PrimaryWrapper>
      <div className={styles.secondary}>
        © 2021 All Rights Reserved. Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
