import { useRef, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { useCountUp } from 'react-countup';

import styles from './Fact.module.css';

const Fact = (props) => {
  const { header, count, title, details } = props.data;
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const countUpRef = useRef();
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: count,
    duration: 2,
  });
  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);
  return (
    <div ref={ref} className={styles.card}>
      <p className={styles.heading}>{header}</p>
      <strong className={styles['count__container']}>
        <span className={styles.count} ref={countUpRef} />+
      </strong>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.details}>{details}</p>
    </div>
  );
};

export default Fact;
