"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './MachineryManagementSidebar.module.css';

const sidebarItems = [
    { label: "Machinery Management", path: "/supervisor/machinery-management" },
    { label: "Service Notifications", path: "/supervisor/service-notifications" },
    { label: "Maintenance Scheduling", path: "/supervisor/maintenance-scheduling" },
    { label: "Material Management", path: "/supervisor/material-management" },
    { label: "Service Logs", path: "/supervisor/service-logs" },
    { label: "Historical Records", path: "/supervisor/historical-records" }
];

interface MachineryManagementSidebarProps {
    activePage: string;
}

export default function MachineryManagementSidebar({ activePage }: MachineryManagementSidebarProps) {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    const handleBack = () => {
        router.push('/supervisor/dashboard');
    };

    return (
        <div className={styles.sidebar}>
            {sidebarItems.map((item) => (
                <button
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    className={
                        item.label === activePage
                            ? `${styles.sidebarBtn} ${styles.sidebarBtnActive}`
                            : styles.sidebarBtn
                    }
                >
                    {item.label}
                </button>
            ))}
            <button onClick={handleBack} className={styles.backBtn}>Back</button>
        </div>
    );
} 