import Link from 'next/link';
import styles from './header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Link href='/'>evLogo</Link>
        </div>
        <nav className={styles.nav}>
          <Link href='/events-pages'>Browse Events</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
