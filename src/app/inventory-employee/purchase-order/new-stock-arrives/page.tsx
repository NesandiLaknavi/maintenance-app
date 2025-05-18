"use client";
import styles from "./new-stock-arrives.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NewStockArrives() {
    return (
        <div className={styles.pageWrapper}>
            {/* Top Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/inventory-employee/dashboard">
                        <button className={styles.iconBtn}>
                            <Image src="/home-icon.png" alt="Home" width={32} height={32} />
                        </button>
                    </Link>
                    <Link href="/profile">
                        <button className={styles.iconBtn}>
                            <Image src="/profile-icon.png" alt="Profile" width={32} height={32} />
                        </button>
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </nav>
            <div className={styles.container}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        <button className={styles.navButton}>Inventory Management</button>
                        <button className={styles.navButton}>Material Request Management</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Purchase Orders</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>New Stock Arrives</h1>
                    <div className={styles.cardList}>
                        <div className={styles.stockCard}>
                            <div className={styles.cardTitle}>New Stock Received for POO01</div>
                            <div className={styles.cardDetails}>
                                Engine Oil 20L (30 units)<br />
                                Air Filter Type-B (15 pieces)
                            </div>
                        </div>
                        <div className={styles.stockCard}>
                            <div className={styles.cardTitle}>New Stock Received for POO02</div>
                            <div className={styles.cardDetails}>
                                Engine Oil 10L (30 units)<br />
                                Air Filter Type-B (15 pieces)
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
