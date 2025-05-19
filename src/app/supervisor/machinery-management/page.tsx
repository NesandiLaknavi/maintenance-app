"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './machinery-management.module.css';

const actionButtons = [
    { label: 'Add New Machinery', path: '/supervisor/machinery-management/add-new-machinery' },
    { label: 'Update Machinery Information', path: '/supervisor/machinery-management/update-machinery-details' },
    { label: 'Delete Machinery', path: '/supervisor/machinery-management/delete-machinery' },
    { label: 'Machinery List', path: '/supervisor/machinery-management/machinery-list' },
];

const sidebarItems = [
    { label: 'Machinery Management', path: '#' },
    { label: 'Service Notifications', path: '/supervisor/service-notifications' },
    { label: 'Maintenance Scheduling', path: '/supervisor/maintenance-scheduling' },
    { label: 'Material Management', path: '/supervisor/material-management' },
    { label: 'Service Logs', path: '/supervisor/service-logs' },
    { label: 'Historical Records', path: '/supervisor/historical-records' },
];

export default function MachineryManagement() {
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
                    />
                </div>
                <div className={styles.headerRight}>
                    <Link href="/supervisor/dashboard" className={styles.headerIcon}>
                        <Image src="/home-icon.png" alt="Home" width={32} height={32} />
                    </Link>
                    <Link href="/profile" className={styles.headerIcon}>
                        <Image src="/profile-icon.png" alt="Profile" width={32} height={32} />
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>

            <div className={styles.mainContent}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <nav className={styles.nav}>
                        {sidebarItems.map((item) => (
                            item.label === '' ? (
                                <div key={item.label} className={styles.sidebarSectionTitle}>
                                    {item.label}
                                </div>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.path}
                                    className={styles.sidebarBtn}
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </nav>
                    <Link href="/supervisor/dashboard" className={styles.backBtn}>
                        Back
                    </Link>
                </div>

                {/* Main Content */}
                <div className={styles.centerContent}>
                    <h1 className={styles.title}>Machinery Management</h1>
                    <div className={styles.buttonList}>
                        {actionButtons.map((btn) => (
                            <Link
                                key={btn.label}
                                href={btn.path}
                                className={styles.mainBtn}
                            >
                                {btn.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}