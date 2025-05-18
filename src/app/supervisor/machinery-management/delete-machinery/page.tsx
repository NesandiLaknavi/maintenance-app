"use client";
import React, { useState } from "react";
import styles from "./delete-machinery.module.css";
import Link from "next/link";
import MachineryManagementSidebar from "@/app/components/MachineryManagementSidebar";
import { useRouter } from "next/navigation";

const actionButtons = [
    { label: "Assign\nTechnician" },
    { label: "Service\nSchedule" },
    { label: "Meter\nReadings" },
];

export default function DeleteMachineryPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        brand: "Toyota",  // Example pre-filled data
        model: "Forklift 8FD",
        machineId: "TF-2024-001"
    });

    const handleDelete = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically make an API call to delete the machinery
        console.log('Deleting machinery:', form);
        // After successful deletion, navigate back
        router.push('/supervisor/dashboard');
    };

    const handleActionButton = (action: string) => {
        // Handle action button clicks
        switch (action) {
            case "Assign\nTechnician":
                router.push('/supervisor/assign-technician');
                break;
            case "Service\nSchedule":
                router.push('/supervisor/service-schedule');
                break;
            case "Meter\nReadings":
                router.push('/supervisor/meter-readings');
                break;
        }
    };

    const handleCancel = () => {
        router.push('/supervisor/dashboard');
    };

    const handleBack = () => {
        router.push('/supervisor/machinery-management');
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <img src="/machnix-logo.png" alt="MachniX Logo" className={styles.logoImg} />
                <div className={styles.headerActions}>
                    <Link href="/supervisor/dashboard" className={styles.iconBtn}>
                        <img src="/home-icon.png" alt="Home" width={28} height={28} />
                    </Link>
                    <Link href="/profile" className={styles.iconBtn}>
                        <img src="/profile-icon.png" alt="Profile" width={28} height={28} />
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>
            {/* Main Content */}
            <div className={styles.mainContent}>
                <MachineryManagementSidebar activePage="Machinery Management" />
                {/* Center Content */}
                <div className={styles.centerContent}>
                    <h1 className={styles.title}>Delete Machinery</h1>
                    <form className={styles.form} onSubmit={handleDelete}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Brand</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={form.brand}
                                onChange={e => setForm({ ...form, brand: e.target.value })}
                                readOnly
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Model</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={form.model}
                                onChange={e => setForm({ ...form, model: e.target.value })}
                                readOnly
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Machine ID</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={form.machineId}
                                onChange={e => setForm({ ...form, machineId: e.target.value })}
                                readOnly
                            />
                        </div>
                        <div className={styles.actionButtonRow}>
                            {actionButtons.map(btn => (
                                <button
                                    type="button"
                                    className={styles.actionBtn}
                                    key={btn.label}
                                    onClick={() => handleActionButton(btn.label)}
                                >
                                    {btn.label.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < btn.label.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </button>
                            ))}
                        </div>
                        <div className={styles.buttonRow}>
                            <button type="submit" className={styles.deleteBtn}>Confirm delete</button>
                            <button type="button" onClick={handleCancel} className={styles.cancelBtn}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 