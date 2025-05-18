"use client";
import React, { useState } from "react";
import styles from "./inventory-level.module.css";
import Link from "next/link";
import Image from "next/image";

interface MachineData {
    machineId: string;
    brand: string;
    model: string;
    technicianId: string;
    meterReading: string;
}

const initialData: MachineData[] = [
    {
        machineId: "",
        brand: "",
        model: "",
        technicianId: "",
        meterReading: ""
    },
    {
        machineId: "",
        brand: "",
        model: "",
        technicianId: "",
        meterReading: ""
    },
    {
        machineId: "",
        brand: "",
        model: "",
        technicianId: "",
        meterReading: ""
    },
    {
        machineId: "",
        brand: "",
        model: "",
        technicianId: "",
        meterReading: ""
    }
];

export default function MachineryListPage() {
    const [machineryData, setMachineryData] = useState<MachineData[]>(initialData);

    const handleInputChange = (index: number, field: keyof MachineData, value: string) => {
        const newData = [...machineryData];
        newData[index] = { ...newData[index], [field]: value };
        setMachineryData(newData);
    };

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
                    <div className={styles.card}>
                        <h1 className={styles.title}>Machinery List</h1>
                        <div className={styles.tableWrapper}>
                            <table className={styles.machineryTable}>
                                <thead>
                                    <tr>
                                        <th>Machine ID</th>
                                        <th>Brand</th>
                                        <th>Model</th>
                                        <th>Technician ID</th>
                                        <th>Meter Reading</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {machineryData.map((machine, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={machine.machineId}
                                                    onChange={(e) => handleInputChange(index, 'machineId', e.target.value)}
                                                    placeholder="Enter ID"
                                                    className={styles.inputField}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={machine.brand}
                                                    onChange={(e) => handleInputChange(index, 'brand', e.target.value)}
                                                    placeholder="Enter Brand"
                                                    className={styles.inputField}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={machine.model}
                                                    onChange={(e) => handleInputChange(index, 'model', e.target.value)}
                                                    placeholder="Enter Model"
                                                    className={styles.inputField}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={machine.technicianId}
                                                    onChange={(e) => handleInputChange(index, 'technicianId', e.target.value)}
                                                    placeholder="Enter Tech ID"
                                                    className={styles.inputField}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={machine.meterReading}
                                                    onChange={(e) => handleInputChange(index, 'meterReading', e.target.value)}
                                                    placeholder="Enter Reading"
                                                    className={styles.inputField}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button className={styles.addButton}>
                            Add New Machine
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}