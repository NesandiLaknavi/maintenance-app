"use client";
import React, { useState } from "react";
import styles from "./add-new-machinery.module.css";
import { FaUserCircle, FaHome } from "react-icons/fa";

const sidebarItems = [
    "Machinery Management",
    "Service Notifications",
    "Maintenance Scheduling",
    "Material Management",
    "Service Logs",
    "Historical Records",
];

export default function AddNewMachineryPage() {
    const [form, setForm] = useState({ brand: "", model: "", machineId: "" });

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <img src="/logo.png" alt="" className={styles.logoImg} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <FaHome size={28} style={{ color: '#000', cursor: 'pointer' }} />
                    <FaUserCircle size={28} style={{ color: '#000', cursor: 'pointer' }} />
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>
            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    {sidebarItems.map((item) => (
                        <button
                            key={item}
                            className={
                                item === "Machinery Management"
                                    ? `${styles.sidebarBtn} ${styles.sidebarBtnActive}`
                                    : styles.sidebarBtn
                            }
                        >
                            {item}
                        </button>
                    ))}
                    <button className={styles.backBtn}>Back</button>
                </div>
                {/* Center Content */}
                <div className={styles.centerContent}>
                    <h1 className={styles.title}>Add New Machinery</h1>
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
                        <div className={styles.buttonRow}>
                            <button type="submit" className={styles.saveBtn}>Save</button>
                            <button type="button" className={styles.cancelBtn}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
