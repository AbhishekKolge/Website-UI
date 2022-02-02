import styles from './PrimaryWrapper.module.css';

const PrimaryWrapper = (props) => {
  return (
    <div className={`${props.className && props.className} ${styles.wrapper}`}>
      {props.children}
    </div>
  );
};

export default PrimaryWrapper;
