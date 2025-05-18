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
        {
            maintenanceId: 'MN001',
            machineId: 'MCN001',
            scheduleDate: '2025-03-23',
            technicianId: 'TEC001',
        },
        {
            maintenanceId: 'MN002',
            machineId: 'MCN002',
            scheduleDate: '2025-03-25',
            technicianId: 'TEC002',
        },
    ]);

    const handleInputChange = (index: number, field: keyof MaintenanceRecord, value: string) => {
        const updatedList = [...maintenanceList];
        updatedList[index] = {
            ...updatedList[index],
            [field]: value
        };
        setMaintenanceList(updatedList);
    };

    const addNewRow = () => {
        setMaintenanceList([...maintenanceList, {
            maintenanceId: '',
            machineId: '',
            scheduleDate: '',
            technicianId: ''
        }]);
    };

    const deleteRow = (index: number) => {
        const updatedList = maintenanceList.filter((_, i) => i !== index);
        setMaintenanceList(updatedList);
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/dashboard">
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
                        <button className={`${styles.navButton} ${styles.active}`}>Maintenance Scheduling</button>
                        <button className={styles.navButton}>Material Management</button>
                        <button className={styles.navButton}>Service Logs</button>
                        <button className={styles.navButton}>Historical Records</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>

                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Upcoming Maintenance</h1>
                    
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Maintenance ID</th>
                                    <th>Machine ID</th>
                                    <th>Schedule Date</th>
                                    <th>Technician ID</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {maintenanceList.map((record, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={record.maintenanceId}
                                                onChange={(e) => handleInputChange(index, 'maintenanceId', e.target.value)}
                                                className={styles.tableInput}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={record.machineId}
                                                onChange={(e) => handleInputChange(index, 'machineId', e.target.value)}
                                                className={styles.tableInput}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                value={record.scheduleDate}
                                                onChange={(e) => handleInputChange(index, 'scheduleDate', e.target.value)}
                                                className={styles.tableInput}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={record.technicianId}
                                                onChange={(e) => handleInputChange(index, 'technicianId', e.target.value)}
                                                className={styles.tableInput}
                                            />
                                        </td>
                                        <td className={styles.actionCell}>
                                            <button className={styles.updateButton}>
                                                Update
                                            </button>
                                            <button
                                                className={styles.deleteButton}
                                                onClick={() => deleteRow(index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className={styles.addButton} onClick={addNewRow}>
                            Add New Schedule
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}