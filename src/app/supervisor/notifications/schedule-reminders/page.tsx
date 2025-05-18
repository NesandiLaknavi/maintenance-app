"use client";
import styles from "./schedule-reminders.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ScheduleReminders() {
    const [dateFilter, setDateFilter] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const reminders = [
        {
            id: "RMI001",
            machineId: "MAC0001",
            machine: "MGHC27",
            dueDate: "23-04-2025",
            techId: "TEC001",
            techName: "Mr. Ruwan",
            status: "Pending"
        },
        {
            id: "RMI002",
            machineId: "MAC0002",
            machine: "MGHC27",
            dueDate: "22-01-2025",
            techId: "TEC002",
            techName: "Mr. Supun",
            status: "Upcoming"
        },
        {
            id: "RMI003",
            machineId: "MAC0003",
            machine: "MGHC27",
            dueDate: "23-02-2025",
            techId: "TEC003",
            techName: "Mr. Sarah",
            status: "Upcoming"
        }
    ];

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateFilter(e.target.value);
        setShowDatePicker(false);
    };

    const formatDate = (dateString: string) => {
        const [day, month, year] = dateString.split('-');
        return `${year}-${month}-${day}`;
    };

    const filteredReminders = reminders.filter(reminder => {
        const matchesSearch = reminder.machineId.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            reminder.machine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            reminder.techName.toLowerCase().includes(searchQuery.toLowerCase());
        
        if (dateFilter) {
            const formattedDueDate = formatDate(reminder.dueDate);
            return matchesSearch && formattedDueDate === dateFilter;
        }
        return matchesSearch;
    });

    return (
        <div className={styles.pageWrapper}>
            {/* Top Navbar */}
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
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        <button className={styles.navButton}>Machinery Management</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Service Notifications</button>
                        <button className={styles.navButton}>Maintenance Scheduling</button>
                        <button className={styles.navButton}>Material Management</button>
                        <button className={styles.navButton}>Service Logs</button>
                        <button className={styles.navButton}>Historical Records</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>

                {/* Main Content */}
                <main className={styles.contentArea}>
                    <h1 className={styles.pageTitle}>Scheduled Maintenance Reminders</h1>
                    
                    <div className={styles.filterSection}>
                        <div className={styles.searchBox}>
                            
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search by Machine / Message Type"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            /><Image 
                                src="/search.png" 
                                alt="Search" 
                                width={16} 
                                height={16} 
                                className={styles.searchIcon}
                            />
                        </div>
                        <div className={styles.dateFilterContainer}>
                            <button 
                                className={styles.filterBtn}
                                onClick={() => setShowDatePicker(!showDatePicker)}
                            >
                                <Image 
                                    src="/schedule.png" 
                                    alt="Calendar" 
                                    width={20} 
                                    height={20} 
                                />
                                <span>Filter by Date</span>
                                <span className={styles.dropdownIcon}>▼</span>
                            </button>
                            {showDatePicker && (
                                <div className={styles.datePickerWrapper}>
                                    <input
                                        type="date"
                                        className={styles.dateInput}
                                        value={dateFilter}
                                        onChange={handleDateChange}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <table className={styles.remindersTable}>
                        <thead>
                            <tr>
                                <th>Reminder ID</th>
                                <th>Machine ID</th>
                                <th>Machine</th>
                                <th>Due Date</th>
                                <th>Technician ID</th>
                                <th>Technician Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReminders.map((reminder) => (
                                <tr key={reminder.id}>
                                    <td>{reminder.id}</td>
                                    <td>{reminder.machineId}</td>
                                    <td>{reminder.machine}</td>
                                    <td>{reminder.dueDate}</td>
                                    <td>{reminder.techId}</td>
                                    <td>{reminder.techName}</td>
                                    <td>
                                        <span className={`${styles.statusPill} ${
                                            reminder.status === 'Pending' 
                                            ? styles.statusPending 
                                            : styles.statusUpcoming
                                        }`}>
                                            {reminder.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className={styles.actionCheckboxes}>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" className={styles.checkboxInput} />
                            <span>Reschedule</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" checked readOnly className={styles.checkboxInput} />
                            <span>Mark Completed</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" className={styles.checkboxInput} />
                            <span>Export to Email</span>
                        </label>
                    </div>
                </main>
            </div>
        </div>
    );
}