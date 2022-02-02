import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';
import ExaminationCard from './ExaminationCard';

import calendarIcon from '../../assets/icons/calendar.png';

import styles from './Examinations.module.css';

const DUMMY_DETAILS = [
  {
    header: '02th October 2014',
    details: 'Level 1 exam',
    items: [],
    icon: calendarIcon,
  },
  {
    header: 'Nov-Dec 2016',
    details: 'Level 2',
    items: ['Lorem Ipsum', 'Lorem Ipsum'],
    icon: calendarIcon,
  },
  {
    header: 'Ongoing this year',
    details: 'Level 3 (Grad)',
    items: [],
    icon: calendarIcon,
  },
];

const Examinations = () => {
  return (
    <section className={styles.section}>
      <PrimaryWrapper className={styles.wrapper}>
        <div className={styles['section__header']}>
          <div className={styles['header__container']}>
            <h3 className={`${styles.header} primary__heading`}>
              Upcoming Examinations
            </h3>
            <p className={styles.content}>
              Enquire about the examination & register for the exams
            </p>
          </div>
          <ul className={styles['list']}>
            {DUMMY_DETAILS.map((detail, index) => {
              return (
                <li className={styles['details__item']} key={index}>
                  <img
                    className={styles['details__icon']}
                    src={detail.icon}
                    alt='icon'
                  />
                  <div className={styles.details}>
                    <h5 className={styles['details__heading']}>
                      {detail.header}
                    </h5>
                    <p className={styles['details__content']}>
                      {detail.details}
                    </p>
                    {detail.items && (
                      <ul className={styles['details__list']}>
                        {detail.items.map((item, index) => {
                          return (
                            <li key={index} className={styles['list__item']}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <ExaminationCard />
      </PrimaryWrapper>
    </section>
  );
};

export default Examinations;
