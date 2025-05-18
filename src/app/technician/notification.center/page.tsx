"use client";
import styles from "./notification.center.module.css";
import Image from "next/image";

export default function NotificationCenter() {
    return (
        <div className={styles.container}>
            
            <main className={styles.main}>
                <header className={styles.header}>
                    <button className={styles.logoutBtn}>Logout</button>
                </header><aside className={styles.sidebar}>
                <div>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/machnix-logo.png"
                            alt="MachniX Logo"
                            width={60}
                            height={60}
                            priority
                        />
                    </div>
                    
                    <nav className={styles.nav}>
                        <button className={styles.navButton + " " + styles.active}>Notifications Center</button>
                        <button className={styles.navButton}>Meter Readings</button>
                        <button className={styles.navButton}>Task Reminders</button>
                        <button className={styles.navButton}>Material Requests</button>
                    </nav>
                </div>
                <button className={styles.backButton}>Back</button>
            </aside>
                <section className={styles.content}>
                    
                    <h1 className={styles.title}>Notification Center</h1>
                    <div className={styles.buttonGroup}>
                        <button className={styles.centerBtn}>Assigned Maintenance & Tasks</button>
                        <button className={styles.centerBtn}>In-App and Email Notifications</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
