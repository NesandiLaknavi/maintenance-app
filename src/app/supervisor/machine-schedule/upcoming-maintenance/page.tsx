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
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [maintenanceList, setMaintenanceList] = useState<MaintenanceRecord[]>([
        {
            maintenanceId: '',
            machineId: '',
            scheduleDate: '',
            technicianId: '',
        },
        {
            maintenanceId: '',
            machineId: '',
            scheduleDate: '',
            technicianId: '',
        },
    ]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching with:', { searchQuery, startDate, endDate });
    };

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
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Image
                        src="/machnix-logo.png"
                        alt="MachniX Logo"
                        width={60}
                        height={60}
                        priority
                        style={{ width: '60px', height: '60px' }}
                    />
                </div>
                <div className={styles.headerActions}>
                    <Link href="/supervisor/dashboard" className={styles.headerIcon}>
                        <Image
                            src="/home-icon.png"
                            alt="Home"
                            width={32}
                            height={32}
                            priority
                        />
                    </Link>
                    <Link href="/profile" className={styles.headerIcon}>
                        <Image
                            src="/user (3).png"
                            alt="Profile"
                            width={32}
                            height={32}
                            priority
                        />
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>

            <div className={styles.mainContent}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <button className={styles.sidebarBtn}>
                        Machinery Management
                    </button>
                    <button className={styles.sidebarBtn}>
                        Service Notifications
                    </button>
                    <button className={`${styles.sidebarBtn} ${styles.active}`}>
                        Maintenance Scheduling
                    </button>
                    <button className={styles.sidebarBtn}>
                        Material Management
                    </button>
                    <button className={styles.sidebarBtn}>
                        Service Logs
                    </button>
                    <button className={styles.sidebarBtn}>
                        Historical Records
                    </button>
                    <button className={styles.backBtn}>Back</button>
                </div>

                {/* Main Content Area */}
                <div className={styles.contentArea}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Upcoming Maintenance</h1>
                        <div className={styles.tableWrapper}>
                            <table className={styles.inventoryTable}>
                                <thead>
                                    <tr>
                                        <th>Maintenance ID</th>
                                        <th>Machine ID</th>
                                        <th>Schedule Date</th>
                                        <th>Technician ID Assigned</th>
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
                                                    placeholder="Enter Maintenance ID"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={record.machineId}
                                                    onChange={(e) => handleInputChange(index, 'machineId', e.target.value)}
                                                    className={styles.tableInput}
                                                    placeholder="Enter Machine ID"
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
                                                    placeholder="Enter Technician ID"
                                                />
                                            </td>
                                            <td className={styles.actionButtons}>
                                                <button className={styles.updateBtn}>
                                                    Update
                                                </button>
                                                <button
                                                    className={styles.deleteBtn}
                                                    onClick={() => deleteRow(index)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className={styles.addRowBtn}
                                onClick={addNewRow}
                            >
                                Add New Row
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
