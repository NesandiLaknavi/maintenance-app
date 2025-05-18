"use client";
import React, { useState } from "react";
import styles from "./update-machinery-details.module.css";
import Link from "next/link";
import Image from "next/image";

const actionButtons = [
    { label: "Assign Technician" },
    { label: "Service Schedule" },
    { label: "Meter Readings" },
];

export default function EditMachineryPage() {
    const [form, setForm] = useState({ brand: "", model: "", machineId: "" });

    return (
        <div className={styles.pageWrapper}>
            {/* Navbar */}
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
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        <button className={`${styles.navButton} ${styles.active}`}>Machinery Management</button>
                        <button className={styles.navButton}>Service Notifications</button>
                        <button className={styles.navButton}>Maintenance Scheduling</button>
                        <button className={styles.navButton}>Material Management</button>
                        <button className={styles.navButton}>Service Logs</button>
                        <button className={styles.navButton}>Historical Records</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>

                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Edit Machinery</h1>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Brand</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={form.brand}
                                onChange={e => setForm({ ...form, brand: e.target.value })}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Model</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={form.model}
                                onChange={e => setForm({ ...form, model: e.target.value })}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Machine ID</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={form.machineId}
                                onChange={e => setForm({ ...form, machineId: e.target.value })}
                            />
                        </div>
                        <div className={styles.actionButtonRow}>
                            {actionButtons.map(btn => (
                                <button type="button" className={styles.actionBtn} key={btn.label}>
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                        <div className={styles.buttonRow}>
                            <button type="submit" className={styles.saveBtn}>Save</button>
                            <button type="button" className={styles.cancelBtn}>Cancel</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}