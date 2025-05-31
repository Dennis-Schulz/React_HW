import { useRef, useEffect } from 'react';
import styles from '../styles/ValueDisplay.module.css';

const ValueDisplay = ({ value }) => {
  const prevValueRef = useRef('');

   useEffect(() => {
    const timer = setTimeout(() => {
      prevValueRef.current = value;
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={styles.valueDisplay}>
      <div className={styles.valueItem}>
        <span className={styles.valueLabel}>Текущее:</span>
        <span className={styles.valueText} key={value}>
          {value || '—'}
        </span>
      </div>
      <div className={styles.valueItem}>
        <span className={styles.valueLabel}>Предыдущее:</span>
        <span className={styles.valueText}>
          {prevValueRef.current || '—'}
        </span>
      </div>
    </div>
  );
};

export default ValueDisplay;

