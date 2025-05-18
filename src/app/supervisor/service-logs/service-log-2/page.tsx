"use client";
import styles from "./service-log-2.module.css"; // Fixed filename
import Image from "next/image";
import Link from "next/link";

export default function ServiceLogs() {
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
                        <button className={styles.navButton}>Material Management</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Service Logs</button>
                        <button className={styles.navButton}>Historical Records</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Service Logs</h1>
                    <div className={styles.filters}>
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search by Machine/Technician"
                            />
                            <button className={styles.searchBtn}>
                                <span role="img" aria-label="search">🔍</span>
                            </button>
                        </div>
                        <div className={styles.filterBox}>
                            <button className={styles.filterBtn}>
                                <Image src="/schedule.png" alt="schedule" width={24} height={24} />
                                <span>Filter By Date</span>
                                <span className={styles.dropdownIcon}>▼</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.serviceTable}>
                            <thead>
                                <tr>
                                    <th>Log ID</th>
                                    <th>Machine Name</th>
                                    <th>Machine ID</th>
                                    <th>Technician</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>LOG-203</td>
                                    <td>HCMG</td>
                                    <td>MAC001</td>
                                    <td>TEC001</td>
                                    <td>23-03-2025</td>
                                    <td>
                                        <select className={styles.statusSelect} defaultValue="pending">
                                            <option value="pending">Pending</option>
                                            <option value="approved">Approved</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>LOG-204</td>
                                    <td>HCMG</td>
                                    <td>MAC002</td>
                                    <td>TEC002</td>
                                    <td>24-03-2025</td>
                                    <td>
                                        <select className={styles.statusSelect} defaultValue="approved">
                                            <option value="pending">Pending</option>
                                            <option value="approved">Approved</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.notes}>
                        <span className={styles.notesLabel}>Notes:</span>
                        <span>
                            Logs marked <span className={styles.pending}>“Pending”</span> need supervisor review.<br />
                            Click <span role="img" aria-label="search">🔍</span> to expand full log details.
                        </span>
                    </div>
                </main>
            </div>
        </div>
    );
}