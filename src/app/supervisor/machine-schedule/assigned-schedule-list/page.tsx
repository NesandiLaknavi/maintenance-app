"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './assigned-schedule-list.module.css';

interface TechnicianTask {
    technicianId: string;
    technicianName: string;
    skillLevel: string;
    assignmentStatus: string;
}

interface MaintenanceDetails {
    machineId: string;
    taskId: string;
    scheduleDate: string;
    taskType: string;
}

export default function AssignedScheduleListPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [maintenanceDetails, setMaintenanceDetails] = useState<MaintenanceDetails>({
        machineId: 'MAC001',
        taskId: 'MST001',
        scheduleDate: '23-02-2025',
        taskType: 'Preventive Maintenance'
    });

    const [technicians, setTechnicians] = useState<TechnicianTask[]>([
        {
            technicianId: '',
            technicianName: '',
            skillLevel: '',
            assignmentStatus: ''
        }
    ]);

    const handleMaintenanceDetailsChange = (field: keyof MaintenanceDetails, value: string) => {
        setMaintenanceDetails(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleTechnicianChange = (index: number, field: keyof TechnicianTask, value: string) => {
        const updatedTechnicians = technicians.map((tech, i) => {
            if (i === index) {
                return { ...tech, [field]: value };
            }
            return tech;
        });
        setTechnicians(updatedTechnicians);
    };

    const addNewRow = () => {
        setTechnicians([...technicians, {
            technicianId: '',
            technicianName: '',
            skillLevel: '',
            assignmentStatus: ''
        }]);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching with:', searchQuery);
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
                            <button className={styles.searchIcon} onClick={handleSearch}>
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* Maintenance Details Card */}
                    <div className={styles.detailsCard}>
                        <div className={styles.detailsRow}>
                            <div className={styles.detailField}>
                                <label>Machine ID:</label>
                                <input
                                    type="text"
                                    value={maintenanceDetails.machineId}
                                    onChange={(e) => handleMaintenanceDetailsChange('machineId', e.target.value)}
                                    className={styles.detailInput}
                                />
                            </div>
                            <div className={styles.detailField}>
                                <label>Task ID:</label>
                                <input
                                    type="text"
                                    value={maintenanceDetails.taskId}
                                    onChange={(e) => handleMaintenanceDetailsChange('taskId', e.target.value)}
                                    className={styles.detailInput}
                                />
                            </div>
                        </div>
                        <div className={styles.detailsRow}>
                            <div className={styles.detailField}>
                                <label>Schedule Date:</label>
                                <input
                                    type="text"
                                    value={maintenanceDetails.scheduleDate}
                                    onChange={(e) => handleMaintenanceDetailsChange('scheduleDate', e.target.value)}
                                    className={styles.detailInput}
                                />
                            </div>
                            <div className={styles.detailField}>
                                <label>Task Type:</label>
                                <input
                                    type="text"
                                    value={maintenanceDetails.taskType}
                                    onChange={(e) => handleMaintenanceDetailsChange('taskType', e.target.value)}
                                    className={styles.detailInput}
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className={styles.subtitle}>Select Technician To Assign</h2>

                    {/* Technicians Table */}
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Technician ID</th>
                                    <th>Technician Name</th>
                                    <th>Skill Level</th>
                                    <th>Assigned Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                {technicians.map((tech, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={tech.technicianId}
                                                onChange={(e) => handleTechnicianChange(index, 'technicianId', e.target.value)}
                                                className={styles.tableInput}
                                                placeholder="Enter ID"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={tech.technicianName}
                                                onChange={(e) => handleTechnicianChange(index, 'technicianName', e.target.value)}
                                                className={styles.tableInput}
                                                placeholder="Enter Name"
                                            />
                                        </td>
                                        <td>
                                            <select
                                                value={tech.skillLevel}
                                                onChange={(e) => handleTechnicianChange(index, 'skillLevel', e.target.value)}
                                                className={styles.tableInput}
                                            >
                                                <option value="">Select Skill</option>
                                                <option value="Electrical">Electrical</option>
                                                <option value="Mechanical">Mechanical</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button
                                                className={tech.assignmentStatus === 'Assigned' ? styles.assignedBtn : styles.assignBtn}
                                                onClick={() => handleTechnicianChange(index, 'assignmentStatus', tech.assignmentStatus === 'Assigned' ? '' : 'Assigned')}
                                            >
                                                {tech.assignmentStatus === 'Assigned' ? 'Assigned' : 'Assign'}
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
    );
} 