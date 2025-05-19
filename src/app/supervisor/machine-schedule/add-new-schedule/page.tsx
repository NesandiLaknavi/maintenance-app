"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './add-new-schedule.module.css';

interface ScheduleForm {
    machineId: string;
    maintenanceType: string;
    technicianId: string;
    scheduledDate: string;
    priorityLevel: string;
}

export default function AddNewSchedulePage() {
    const router = useRouter();
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
        router.push('/upcoming-maintenance');
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
                    <Link href="/dashboard" className={styles.headerIcon}>
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
                    <Link href="/machinery-management" className={styles.sidebarBtn}>
                        Machinery Management
                    </Link>
                    <Link href="/service-notifications" className={styles.sidebarBtn}>
                        Service Notifications
                    </Link>
                    <button className={`${styles.sidebarBtn} ${styles.active}`}>
                        Maintenance Scheduling
                    </button>
                    <Link href="/material-management" className={styles.sidebarBtn}>
                        Material Management
                    </Link>
                    <Link href="/service-logs" className={styles.sidebarBtn}>
                        Service Logs
                    </Link>
                    <Link href="/historical-records" className={styles.sidebarBtn}>
                        Historical Records
                    </Link>
                    <Link href="/upcoming-maintenance" className={styles.backBtn}>
                        Back
                    </Link>
                </div>

                {/* Main Form Content */}
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Add Maintenance Schedule</h1>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        {/* ... (keep all your form groups exactly as they are) ... */}
                        <button type="submit" className={styles.submitBtn}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}