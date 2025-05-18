"use client";
import { useState } from 'react';
import styles from "./assigning-tasks.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AssigningTasks() {
    const [tasks, setTasks] = useState([
        {
            id: "MA001",
            machineId: "MAC001",
            machine: "XCMG27",
            type: "Maintenance",
            dueDate: "27-01-2025",
            status: "Assigned"
        },
        {
            id: "MA002",
            machineId: "MAC002",
            machine: "XCMG27",
            type: "Repair",
            dueDate: "28-01-2025",
            status: "Unassigned"
        },
        {
            id: "MA003",
            machineId: "MAC003",
            machine: "HDD",
            type: "Maintenance",
            dueDate: "31-01-2025",
            status: "Unassigned"
        }
    ]);

    const toggleStatus = (taskId: string) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { 
                ...task, 
                status: task.status === "Assigned" ? "Unassigned" : "Assigned" 
            } : task
        ));
    };

    return (
        <div className={styles.pageWrapper}>
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image 
                        src="/machnix-logo.png" 
                        alt="MachniX Logo" 
                        width={60} 
                        height={60} 
                        priority 
                    />
                </div>
                
                <div className={styles.navbarRight}>
                    <Link href="/supervisor/dashboard">
                        <button className={styles.iconBtn}>
                            <Image 
                                src="/home-icon.png" 
                                alt="Home" 
                                width={28} 
                                height={28} 
                            />
                        </button>
                    </Link>
                    <Link href="/profile">
                        <button className={styles.iconBtn}>
                            <Image 
                                src="/profile-icon.png" 
                                alt="Profile" 
                                width={28} 
                                height={28} 
                            />
                        </button>
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </nav>

            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        <button className={styles.navButton}>Machinery Management</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Assigned Tasks</button>
                        <button className={styles.navButton}>Maintenance Scheduling</button>
                        <button className={styles.navButton}>Material Management</button>
                        <button className={styles.navButton}>Service Logs</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>

                <main className={styles.contentArea}>
                    <h1 className={styles.pageTitle}>Assigned Maintenance & Repair Tasks</h1>
                    
                    <div className={styles.filterSection}>
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search by Machine / Message Type"
                            />
                        </div>
                        <div className={styles.filterBox}>
                            <input 
                                type="date" 
                                className={styles.dateInput} 
                            />
                        </div>
                    </div>

                    <table className={styles.tasksTable}>
                        <thead>
                            <tr>
                                <th>Task ID</th>
                                <th>Machine ID</th>
                                <th>Machine</th>
                                <th>Type</th>
                                <th>Due Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.machineId}</td>
                                    <td>{task.machine}</td>
                                    <td>{task.type}</td>
                                    <td>{task.dueDate}</td>
                                    <td>
                                        <button
                                            className={`${styles.statusButton} ${
                                                task.status === "Assigned" 
                                                ? styles.statusAssigned 
                                                : styles.statusUnassigned
                                            }`}
                                            onClick={() => toggleStatus(task.id)}
                                        >
                                            {task.status}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    
                </main>
            </div>
        </div>
    );
}