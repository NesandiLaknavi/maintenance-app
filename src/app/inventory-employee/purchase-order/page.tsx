"use client";
import styles from "./purchase-order.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PurchaseOrder() {
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
                    <h1 className={styles.title}>Purchase Order</h1>
                    <div className={styles.buttonGroup}>
                        <button className={styles.centerBtn}>Purchase Orders for Out-of-Stock Materials</button>
                        <button className={styles.centerBtn}>Generate &amp; Submit Purchase Orders</button>
                        <button className={styles.centerBtn}>New stock arrives</button>
                    </div>
                </main>
            </div>
        </div>
    );
}
