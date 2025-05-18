"use client";
import styles from "./automated-notifications.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AutomatedNotifications() {
    const notifications = [
        {
            id: "N001",
            machineId: "MAC001",
            date: "23-01-2025",
            type: "Upcoming Service",
            status: "Unread"
        },
        {
            id: "N002",
            machineId: "MAC002",
            date: "24-01-2025",
            type: "Material Shortage",
            status: "Read"
        },
        {
            id: "N003",
            machineId: "MAC003",
            date: "25-01-2025",
            type: "Overdue Alert",
            status: "Unread"
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* Top Navbar */}
            <div className={styles.pageWrapper}>
            {/* Combined Header */}
            <nav className={styles.navbar}>
            <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                
                <div className={styles.navbarRight}>
                    <Link href="/supervisor/dashboard">
                        <button className={styles.iconBtn}>
                            <Image 
                                src="/home-icon.png" 
                                alt="Home" 
                                width={28} 
                                height={28} 
                            />
                        </button>
                    </Link>
                    <Link href="/profile">
                        <button className={styles.iconBtn}>
                            <Image 
                                src="/profile-icon.png" 
                                alt="Profile" 
                                width={28} 
                                height={28} 
                            />
                        </button>
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </nav>
        </div>

            <div className={styles.container}>
                {/* Sidebar */}
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        <button className={styles.navButton}>Machinery Management</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Service Notifications</button>
                        <button className={styles.navButton}>Maintenance Scheduling</button>
                        <button className={styles.navButton}>Material Management</button>
                        <button className={styles.navButton}>Service Logs</button>
                        <button className={styles.navButton}>Historical Records</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>

                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.pageTitle}>Automated Notifications</h1>
                    
                    <div className={styles.filterSection}>
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
                                    <Image src="/schedule.png" alt="schedule" width={24} height={24} />
                                    <span>Filter By Date</span>
                                    <span className={styles.dropdownIcon}>▼</span>
                                </button>
                            </div>
                    </div>

                    <table className={styles.notificationsTable}>
                        <thead>
                            <tr>
                                <th>Notification ID</th>
                                <th>Machine ID</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notifications.map((notification) => (
                                <tr key={notification.id}>
                                    <td>{notification.id}</td>
                                    <td>{notification.machineId}</td>
                                    <td>{notification.date}</td>
                                    <td>{notification.type}</td>
                                    <td>
                                        <span className={`${styles.statusPill} ${
                                            notification.status === 'Unread' 
                                            ? styles.statusUnread 
                                            : styles.statusRead
                                        }`}>
                                            {notification.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className={styles.actionButtons}>
                        <button className={`${styles.actionButton} ${styles.refreshButton}`}>
                            Refresh
                        </button>
                        <button className={`${styles.actionButton} ${styles.clearButton}`}>
                            Clear All Read
                        </button>
                        <button className={`${styles.actionButton} ${styles.exportButton}`}>
                            Export to Email
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}