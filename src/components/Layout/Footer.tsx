import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  const [state, setState] = useState(1);
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      Footer {router.pathname} {state}
    </footer>
  );
}
