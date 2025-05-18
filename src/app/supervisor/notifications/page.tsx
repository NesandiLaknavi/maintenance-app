"use client";
import styles from "./notifications.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const sidebarItems = [
    { label: 'Machinery Management', path: '/supervisor/machinery-management' },
    { label: 'Service Notifications', path: '/supervisor/notifications' },
    { label: 'Maintenance Scheduling', path: '/supervisor/machine-schedule' },
    { label: 'Material Management', path: '/supervisor/material-management' },
    { label: 'Service Logs', path: '/supervisor/service-logs' },
    { label: 'Historical Records', path: '/reports' },
];
const actionBtn = [
    { label: 'Automated Notifications', path: '/supervisor/machinery-management/automated-notifications' },
    { label: 'Schedule Maintenance Reminders', path: '/supervisor/machinery-management/schedule-reminders' },
];
export default function NotificationsPage() {
    const pathname = usePathname();
    return (
        <div className={styles.pageWrapper}>
            {/* Top Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/supervisor/dashboard">
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
                <div className={styles.sidebar}>
                    <Link
                        href={sidebarItems[0].path}
                        className={
                            styles.sidebarBtn +
                            (pathname === sidebarItems[0].path ? ' ' + styles.active : '')
                        }
                    >
                        Machinery Management
                    </Link>
                    <Link
                        href={sidebarItems[1].path}
                        className={
                            styles.sidebarBtn +
                            (pathname === sidebarItems[1].path ? ' ' + styles.active : '')
                        }
                    >
                        Service Notifications
                    </Link>
                    <Link
                        href={sidebarItems[2].path}
                        className={
                            styles.sidebarBtn +
                            (pathname === sidebarItems[2].path ? ' ' + styles.active : '')
                        }
                    >
                        Maintenance Scheduling
                    </Link>
                    <Link
                        href={sidebarItems[3].path}
                        className={
                            styles.sidebarBtn +
                            (pathname === sidebarItems[3].path ? ' ' + styles.active : '')
                        }
                    >
                        Material Management
                    </Link>
                    <Link
                        href={sidebarItems[4].path}
                        className={
                            styles.sidebarBtn +
                            (pathname === sidebarItems[4].path ? ' ' + styles.active : '')
                        }
                    >
                        Service Logs
                    </Link>
                    <Link
                        href={sidebarItems[5].path}
                        className={
                            styles.sidebarBtn +
                            (pathname === sidebarItems[5].path ? ' ' + styles.active : '')
                        }
                    >
                        Historical Records
                    </Link>
                    <button className={styles.backBtn}>Back</button>
                </div>
                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Service Notifications</h1>
                    <div className={styles.buttonGroup}>
                        {actionBtn.map(btn => (
                            <Link key={btn.label} href={btn.path} className={styles.centerBtn}>
                                {btn.label}
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}