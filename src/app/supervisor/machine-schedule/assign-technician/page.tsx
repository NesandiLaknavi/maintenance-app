"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './assign-technician.module.css';

interface MaintenanceTask {
    taskId: string;
    machineId: string;
    machineName: string;
    scheduleDate: string;
    status: string;
    technicianId: string;
}

export default function AssignTechnicianPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tasks, setTasks] = useState<MaintenanceTask[]>([
        {
            taskId: '',
            machineId: '',
            machineName: '',
            scheduleDate: '',
            status: '',
            technicianId: ''
        }
    ]);

    const handleInputChange = (index: number, field: keyof MaintenanceTask, value: string) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, [field]: value };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const addNewRow = () => {
        setTasks([...tasks, {
            taskId: '',
            machineId: '',
            machineName: '',
            scheduleDate: '',
            status: '',
            technicianId: ''
        }]);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching with:', { searchQuery, startDate, endDate });
    };

    const handleAssign = (taskId: string) => {
        console.log('Assigning technician to task:', taskId);
        // Implement assign functionality here
    };

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
                    <Link href="/profile" className={styles.headerIcon}>
                        <Image
                            src="/user (3).png"
                            alt="Profile"
                            width={32}
                            height={32}
                            priority
                        />
                    </Link>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>

            <div className={styles.mainContent}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <button className={styles.sidebarBtn}>
                        Machinery Management
                    </button>
                    <button className={styles.sidebarBtn}>
                        Service Notifications
                    </button>
                    <button className={`${styles.sidebarBtn} ${styles.active}`}>
                        Maintenance Scheduling
                    </button>
                    <button className={styles.sidebarBtn}>
                        Material Management
                    </button>
                    <button className={styles.sidebarBtn}>
                        Service Logs
                    </button>
                    <button className={styles.sidebarBtn}>
                        Historical Records
                    </button>
                    <button className={styles.backBtn}>Back</button>
                </div>

                {/* Main Content Area */}
                <div className={styles.contentArea}>
                    <h1 className={styles.title}>Assign Technician</h1>

                    {/* Search Section */}
                    <div className={styles.searchSection}>
                        <div className={styles.searchBar}>
                            <input
                                type="text"
                                placeholder="Search by Machine ID, Technician, Date"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                            <button className={styles.searchIcon}>
                                🔍
                            </button>
                        </div>

                        {/* Date Range */}
                        <div className={styles.dateRange}>
                            <div className={styles.dateField}>
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className={styles.dateInput}
                                />
                            </div>
                            <div className={styles.dateField}>
                                <label>End Date</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className={styles.dateInput}
                                />
                            </div>
                            <button
                                className={styles.searchBtn}
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Maintenance List */}
                    <div className={styles.maintenanceList}>
                        <h2 className={styles.listTitle}>Upcoming Maintenance List</h2>
                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Task ID</th>
                                        <th>Machine ID</th>
                                        <th>Machine Name</th>
                                        <th>Schedule Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={task.taskId}
                                                    onChange={(e) => handleInputChange(index, 'taskId', e.target.value)}
                                                    className={styles.tableInput}
                                                    placeholder="Enter Task ID"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={task.machineId}
                                                    onChange={(e) => handleInputChange(index, 'machineId', e.target.value)}
                                                    className={styles.tableInput}
                                                    placeholder="Enter Machine ID"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={task.machineName}
                                                    onChange={(e) => handleInputChange(index, 'machineName', e.target.value)}
                                                    className={styles.tableInput}
                                                    placeholder="Enter Machine Name"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="date"
                                                    value={task.scheduleDate}
                                                    onChange={(e) => handleInputChange(index, 'scheduleDate', e.target.value)}
                                                    className={styles.tableInput}
                                                />
                                            </td>
                                            <td>
                                                <select
                                                    value={task.status}
                                                    onChange={(e) => handleInputChange(index, 'status', e.target.value)}
                                                    className={styles.tableInput}
                                                >
                                                    <option value="">Select Status</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button
                                                    className={styles.assignBtn}
                                                    onClick={() => handleAssign(task.taskId)}
                                                >
                                                    Assign
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className={styles.addRowBtn} onClick={addNewRow}>
                                Add New Row
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 