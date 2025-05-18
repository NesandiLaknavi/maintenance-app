"use client";
import styles from "./service-logs-lists.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ServiceLogsList() {
    const logsData = [
        {
            name: "Material Management",
            machineId: "MAC001",
            machine: "XCM027",
            date: "23-01-2025",
            technicianId: "TEC001",
            status: "Completed"
        },
        {
            name: "Service Logs",
            machineId: "MAC002",
            machine: "XCM027",
            date: "24-01-2025",
            technicianId: "TEC002",
            status: "Completed"
        },
        {
            name: "Historical Records",
            machineId: "MAC003",
            machine: "XCM027",
            date: "25-01-2025",
            technicianId: "TEC003",
            status: "Skipped"
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image 
                        src="/machnix-logo.png" 
                        alt="MachniX Logo" 
                        width={60} 
                        height={60} 
                        priority 
                    />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/supervisor/dashboard">
                        <button className={styles.iconBtn}>
                            <Image 
                                src="/home-icon.png" 
                                alt="Home" 
                                width={32} 
                                height={32} 
                            />
                        </button>
                    </Link>
                    <Link href="/profile">
                        <button className={styles.iconBtn}>
                            <Image 
                                src="/profile-icon.png" 
                                alt="Profile" 
                                width={32} 
                                height={32} 
                            />
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
                    <Link href="/supervisor/dashboard">
                        <button className={styles.backButton}>Back</button>
                    </Link>
                </aside>

                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.pageTitle}>Service Logs</h1>
                    
                    <table className={styles.logsTable}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Machine ID</th>
                                <th>Machine</th>
                                <th>Date</th>
                                <th>Technician ID</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logsData.map((log, index) => (
                                <tr key={index}>
                                    <td>{log.name}</td>
                                    <td>{log.machineId}</td>
                                    <td>{log.machine}</td>
                                    <td>{log.date}</td>
                                    <td>{log.technicianId}</td>
                                    <td>
                                        <button 
                                            className={`${styles.statusButton} ${
                                                log.status === 'Completed' ? styles.completed :
                                                log.status === 'Skipped' ? styles.skipped :
                                                ''
                                            }`}
                                        >
                                            {log.status}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className={styles.tableFooter}>
                        <Link href="/supervisor/dashboard">
                            <button className={styles.backButton}>Back</button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}