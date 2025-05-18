"use client";
import styles from "./purchase-requests.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PurchaseRequests() {
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
                        <h1 className={styles.title}>Material Purchase Approval Requests</h1>
                        <div className={styles.filters}>
                            <div className={styles.searchBox}>
                                <input
                                    type="text"
                                    className={styles.searchInput}
                                    placeholder="Search Request"
                                />
                                <button className={styles.searchBtn}>
                                    <span role="img" aria-label="search">🔍</span>
                                </button>
                            </div>
                            <div className={styles.filterBox}>
                                <button className={styles.filterBtn}>
                                    <Image src="/calendar-icon.png" alt="Calendar" width={24} height={24} />
                                    <span>Filter By Date</span>
                                    <span className={styles.dropdownIcon}>▼</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.purchaseTable}>
                                <thead>
                                    <tr>
                                        <th>Request ID</th>
                                        <th>Material Name</th>
                                        <th>Quanity</th>
                                        <th>Requested By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>REQ-1045</td>
                                        <td>Engine Oil</td>
                                        <td>50L</td>
                                        <td>TEC001</td>
                                        <td>
                                            <select className={styles.statusSelect} defaultValue="approved">
                                                <option value="approved">Approved</option>
                                                <option value="rejected">Reject</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>REQ-1046</td>
                                        <td>Oil Filter</td>
                                        <td>4</td>
                                        <td>TEC002</td>
                                        <td>
                                            <select className={styles.statusSelect} defaultValue="rejected">
                                                <option value="approved">Approved</option>
                                                <option value="rejected">Reject</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.actionButtons}>
                            <button className={styles.confirmBtn}>Confirm Approval</button>
                            <button className={styles.cancelBtn}>Cancel</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}