"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './supervisordashboard.module.css';

const supervisorName = 'Mr. Anura Perera';

const buttons = [
    { label: 'Machinery Management', path: '/supervisor/machinery-management' },
    { label: 'Service Notifications', path: '/supervisor/notifications' },
    { label: 'Maintenance Scheduling', path: '/supervisor/machine-schedule' },
    { label: 'Material Management', path: '/supervisor/material-management' },
    { label: 'Service Logs', path: '/supervisor/service-logs' },
    { label: 'Historical Records', path: '/reports' },
];

export default function SupervisorDashboard() {
    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Image
                        src="/machnix-logo.png"
                        alt="MachniX Logo"
                        width={100}
                        height={40}
                        priority
                    />
                </div>
                <div className={styles.headerActions}>
                    <Link href="/supervisor/dashboard">
                        <button className={styles.iconBtn}>
                            <Image
                                src="/home-icon.png"
                                alt="Home"
                                width={28}
                                height={28}
                                priority
                            />
                        </button>
                    </Link>
                    <Link href="/authentication/profile">
                        <button className={styles.iconBtn}>
                            <Image
                                src="/profile-icon.png"
                                alt="Profile"
                                width={28}
                                height={28}
                                priority
                            />
                        </button>
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>
            {/* Main Content */}
            <div className={styles.main}>
                <div className={styles.supervisorRow}>
                    <div className={styles.supervisorIconContainer}>

                    </div>
                    <h1 className={styles.supervisorName}>Supervisor: {supervisorName}</h1>
                </div>
                <div className={styles.buttonList}>
                    <Link
                        href="/supervisor/machinery-management"
                        className={styles.buttonLink}
                        prefetch={true}
                    >
                        <button className={styles.dashboardBtn}>
                            Machinery Management
                        </button>
                    </Link>
                    {buttons.filter(b => b.label !== 'Machinery Management').map((button) => (
                        <Link
                            key={button.label}
                            href={button.path}
                            className={styles.buttonLink}
                            prefetch={true}
                        >
                            <button className={styles.dashboardBtn}>
                                {button.label}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}