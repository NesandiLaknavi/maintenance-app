"use client";
import styles from "./meter-readings.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MeterReadings() {
    return (
        <div className={styles.pageWrapper}>
            {/* Top Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/technician/dashboard">
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
                        <button className={`${styles.navButton} ${styles.active}`}>Meter Readings</button>
                        <button className={styles.navButton}>Maintenance Scheduling</button>
                        <button className={styles.navButton}>Material Management</button>
                        <button className={styles.navButton}>Service Logs</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Update Machine Meter Readings</h1>
                    <div className={styles.readingsSection}>
                        <div className={styles.readingsContent}>
                            <div className={styles.filtersRow}>
                                <div className={styles.searchBox}>
                                    <input
                                        type="text"
                                        placeholder="Search Machine ID/Name"
                                        className={styles.searchInput}
                                    />
                                    <button className={styles.searchBtn}>
                                        <Image src="/search.png" alt="Search" width={22} height={22} />
                                    </button>
                                </div>
                                <div className={styles.datePickerBox}>
                                    <input
                                        type="date"
                                        className={styles.dateInput}
                                    />
                                    <button className={styles.dateBtn}>
                                        
                                    </button>
                                </div>
                            </div>
                            <div className={styles.tableWrapper}>
                                <table className={styles.meterTable}>
                                    <thead>
                                        <tr>
                                            <th>Machine ID</th>
                                            <th>Machine Name</th>
                                            <th>Current Reading</th>
                                            <th>Unit Type</th>
                                            <th>Input New Reading</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>MAC001</td>
                                            <td>XCMG27</td>
                                            <td>4200 hrs</td>
                                            <td>Hours</td>
                                            <td><input className={styles.inputReading} type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td>MAC002</td>
                                            <td>HDD Vermeer</td>
                                            <td>600 km</td>
                                            <td>Kilometers</td>
                                            <td><input className={styles.inputReading} type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td>MAC003</td>
                                            <td>XCMG27</td>
                                            <td>850 hrs</td>
                                            <td>Hours</td>
                                            <td><input className={styles.inputReading} type="text" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.noteRow}>
                                <span className={styles.noteText}>Note: <span>Enter only updated readings from the current session.</span></span>
                            </div>
                            <div className={styles.submitRow}>
                                <button className={styles.submitBtn}>
                                    
                                    Submit Readings
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
