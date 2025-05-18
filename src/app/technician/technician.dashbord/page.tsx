"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./technician.dashbord.module.css";

export default function TechnicianDashboard() {
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
                    <Link href="/profile-icon" className={styles.headerIcon}>
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


            {/* Main Content */}
            <div className={styles.mainContent}>
                <div className={styles.profileRow}>
                    <span className={styles.avatar}>
                        
                    </span>
                    <span className={styles.techName}>
                        Technician : Mr. kasun Perera
                    </span>
                </div>
                <div className={styles.buttonList}>
                    <button className={styles.dashboardBtn}>Notification Center</button>
                    <button className={styles.dashboardBtn}>Meter Readings</button>
                    <button className={styles.dashboardBtn}>Task Reminder</button>
                    <button className={styles.dashboardBtn}>Material Requests</button>
                </div>
            </div>
        </div>
    );
}
