"use client";
import styles from "./inventory-level.module.css";
import Image from "next/image";
import Link from "next/link";

export default function InventoryLevel() {
    return (
        <div className={styles.pageWrapper}>
            {/* Top Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/supervisor/dashboard">
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
                        <button className={styles.navButton}>Machinery Management</button>
                        <button className={styles.navButton}>Service Notifications</button>
                        <button className={styles.navButton}>Maintenance Scheduling</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Material Management</button>
                        <button className={styles.navButton}>Service Logs</button>
                        <button className={styles.navButton}>Historical Records</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                {/* Main Content */}
                <main className={styles.contentArea}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Inventory Level</h1>
                        <div className={styles.tableWrapper}>
                            <table className={styles.inventoryTable}>
                                <thead>
                                    <tr>
                                        <th>Material Name</th>
                                        <th>Quantity in stock</th>
                                        <th>Minimum Stock Level</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Water Filter</td>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>
                                            <button className={styles.restockBtn}>Restock</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Air Filter</td>
                                        <td>1</td>
                                        <td>4</td>
                                        <td>
                                            <button className={styles.restockBtn}>Restock</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
