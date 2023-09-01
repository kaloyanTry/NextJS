import Link from 'next/link';
import styles from './button.module.css';

function Button({ link, children }) {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}

export default Button;
