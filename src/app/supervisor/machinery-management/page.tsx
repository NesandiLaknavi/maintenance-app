"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './machinery-management.module.css';

const sidebarItems = [
    { label: 'Machinery Management', path: '/supervisor/machinery-management' },
    { label: 'Service Notifications', path: '/supervisor/notifications' },
    { label: 'Maintenance Scheduling', path: '/supervisor/machine-schedule' },
    { label: 'Material Management', path: '/supervisor/material-management' },
    { label: 'Service Logs', path: '/supervisor/service-logs' },
    { label: 'Historical Records', path: '/reports' },
];

const actionButtons = [
    { label: 'Add New Machinery', path: '/supervisor/machinery-management/add-new-machinery' },
    { label: 'Update Machinery Information', path: '/supervisor/machinery-management/update-machinery-details' },
    { label: 'Delete Machinery', path: '/supervisor/machinery-management/delete-machinery' },
    { label: 'Machinery List', path: '/supervisor/machinery-management/machinery-list' },
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
                        width={80}
                        height={32}
                        priority
                    />
                </div>
                <div className={styles.headerRight}>
                    <Link href="/supervisor/supervisor.dashboard" className={styles.headerIcon}>
                        <Image src="/home-icon.png" alt="Home" width={32} height={32} style={{ filter: 'brightness(0)' }} />
                    </Link>
                    <Link href="/authentication/profile" className={styles.headerIcon}>
                        <Image src="/profile-icon.png" alt="Profile" width={32} height={32} style={{ filter: 'brightness(0)' }} />
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>

            <div className={styles.body}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <nav className={styles.sidebarNav}>
                        {sidebarItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.path}
                                className={
                                    styles.sidebarItem +
                                    (item.label === 'Machinery Management' ? ' ' + styles.activeSidebarItem : '')
                                }
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <button className={styles.backBtn}>Back</button>
                </div>
                {/* Main Content */}
                <div className={styles.content}>
                    <h1 className={styles.pageTitle}>Machinery Management</h1>
                    <div className={styles.actionBtnGroup}>
                        {actionButtons.map((btn) => (
                            <Link key={btn.label} href={btn.path} className={styles.actionBtn}>
                                {btn.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
