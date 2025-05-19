"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './upcoming-maintenance.module.css';

interface MaintenanceRecord {
    maintenanceId: string;
    machineId: string;
    scheduleDate: string;
    technicianId: string;
}

export default function UpcomingMaintenancePage() {
    const [maintenanceList, setMaintenanceList] = useState<MaintenanceRecord[]>([
        // ... (keep your existing state initialization) ...
    ]);

    // ... (keep all your existing handlers) ...

    return (
        <div className={styles.pageWrapper}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                {/* ... (keep navbar content the same) ... */}
            </nav>

            <div className={styles.container}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        <Link href="/machinery-management" className={styles.navButton}>
                            Machinery Management
                        </Link>
                        <Link href="/service-notifications" className={styles.navButton}>
                            Service Notifications
                        </Link>
                        <button className={`${styles.navButton} ${styles.active}`}>
                            Maintenance Scheduling
                        </button>
                        <Link href="/material-management" className={styles.navButton}>
                            Material Management
                        </Link>
                        <Link href="/service-logs" className={styles.navButton}>
                            Service Logs
                        </Link>
                        <Link href="/historical-records" className={styles.navButton}>
                            Historical Records
                        </Link>
                    </nav>
                    <Link href="/dashboard" className={styles.backButton}>
                        Back
                    </Link>
                </aside>

                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Upcoming Maintenance</h1>
                    
                    <div className={styles.tableWrapper}>
                        {/* ... (keep table content the same) ... */}
                        <Link href="/add-new-schedule" className={styles.addButton}>
                            Add New Schedule
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}