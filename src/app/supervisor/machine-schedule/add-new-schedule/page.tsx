"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './add-new-schedule.module.css';
import MachineryManagementSidebar from '@/app/components/MachineryManagementSidebar';

interface ScheduleForm {
    machineId: string;
    maintenanceType: string;
    technicianId: string;
    scheduledDate: string;
    priorityLevel: string;
}

export default function AddNewSchedulePage() {
    const [formData, setFormData] = useState<ScheduleForm>({
        machineId: '',
        maintenanceType: '',
        technicianId: '',
        scheduledDate: '',
        priorityLevel: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Schedule data:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                            src="/profile-icon.png"
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

                {/* Main Form Content */}
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Add Maintenance Schedule</h1>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="machineId">Machine ID</label>
                            <select
                                id="machineId"
                                name="machineId"
                                value={formData.machineId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Machine ID</option>
                                <option value="MAC001">MAC001</option>
                                <option value="MAC002">MAC002</option>
                                <option value="MAC003">MAC003</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="maintenanceType">Maintenance Type</label>
                            <select
                                id="maintenanceType"
                                name="maintenanceType"
                                value={formData.maintenanceType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Maintenance Type</option>
                                <option value="Routine">Routine Maintenance</option>
                                <option value="Preventive">Preventive Maintenance</option>
                                <option value="Emergency">Emergency Repair</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="technicianId">Assigned Technician ID</label>
                            <select
                                id="technicianId"
                                name="technicianId"
                                value={formData.technicianId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Technician</option>
                                <option value="TEC001">TEC001</option>
                                <option value="TEC002">TEC002</option>
                                <option value="TEC003">TEC003</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="scheduledDate">Scheduled Date</label>
                            <input
                                type="date"
                                id="scheduledDate"
                                name="scheduledDate"
                                value={formData.scheduledDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="priorityLevel">Priority Level</label>
                            <select
                                id="priorityLevel"
                                name="priorityLevel"
                                value={formData.priorityLevel}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
