"use client";
import styles from "./machine-schedule.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
    { label: 'Machinery Management', path: '/supervisor/machinery-management' },
    { label: 'Service Notifications', path: '/supervisor/notifications' },
    { label: 'Maintenance Scheduling', path: '/supervisor/machine-schedule' },
    { label: 'Material Management', path: '/supervisor/material-management' },
    { label: 'Service Logs', path: '/supervisor/service-logs' },
    { label: 'Historical Records', path: '/reports' },
];

export default function MachineSchedulePage() {
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
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.path}
                            className={
                                styles.sidebarBtn +
                                (pathname === item.path ? ' ' + styles.active : '')
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button className={styles.backBtn}>Back</button>
                </div>
                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Maintenance Scheduling</h1>
                    <div className={styles.buttonGroup}>
                        <button className={styles.centerBtn}>Add Maintenance Schedule</button>
                        <button className={styles.centerBtn}>Upcoming Maintenance</button>
                        <button className={styles.centerBtn}>Assign Technicians to Tasks</button>
                    </div>
                </main>
            </div>
        </div>
    );
}