'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from "../studies.module.css";

function SiteNav(){
    const pathname = usePathname();
    return(
        <footer className={styles.footer}>
            <div className={styles.caseStudies}>Case Studies:</div>
            <Link href="/scheduled-journeys" className={pathname === '/scheduled-journeys' ? styles.active : styles.inactive}>Scheduled Journeys</Link>
            <Link href="/kqed-fm" className={pathname === '/kqed-fm' ? styles.active : styles.inactive}>KQED FM</Link>
            <Link href="/ymc" className={pathname === '/ymc' ? styles.active : styles.inactive}>Youth Media Challenge</Link>
            <div className={styles.about}>
                <Link href="/">About</Link>
            </div>
            <Link href="https://jerushaholsinger.com/portfolio_2026.pdf" target="_blank">Portfolio</Link>
        </footer>
    );
};

export default SiteNav;