"use client";
import styles from "./overdue-maintenace.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const machineOptions = ["MAC001", "MAC002", "MAC003"];
const performerOptions = ["Mr. Aruna", "Mr. Sandun", "Mr. Nuwan"];

export default function OverdueMaintenance() {
    const [showDateRange, setShowDateRange] = useState(false);
    const [showMachine, setShowMachine] = useState(false);
    const [showPerformer, setShowPerformer] = useState(false);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [selectedMachine, setSelectedMachine] = useState("All");
    const [selectedPerformer, setSelectedPerformer] = useState("All");
    const dateRangeRef = useRef<HTMLDivElement>(null);

    const formatMonth = (dateString: string) => {
        if (!dateString) return "";
        const [year, month] = dateString.split("-");
        return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dateRangeRef.current && !dateRangeRef.current.contains(event.target as Node)) {
                setShowDateRange(false);
            }
        };

        if (showDateRange) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDateRange]);

    return (
        <div className={styles.pageWrapper}>
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/dashboard">
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
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        <button className={`${styles.navButton} ${styles.active}`}>Maintenance Reports</button>
                        <button className={styles.navButton}>Inventory Reports</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Overdue Maintenance</h1>
                    <div className={styles.filtersGroup}>
                        {/* Date Range Selector */}
                        <div
                            className={styles.selectorBar}
                            ref={dateRangeRef}
                            onClick={() => setShowDateRange(!showDateRange)}
                            tabIndex={0}
                        >
                            <span className={styles.selectorIcon}>
                                <Image src="/schedule.png" alt="Date" width={24} height={24} />
                            </span>
                            <span className={styles.selectorLabel}>Date Range</span>
                            <span className={styles.selectorValue}>
                                {fromDate && toDate ? `${formatMonth(fromDate)} - ${formatMonth(toDate)}` : "All"}
                            </span>
                            <span className={styles.selectorArrow}>▼</span>
                            {showDateRange && (
                                <div className={styles.dateRangePopover}>
                                    <div className={styles.dateInputGroup}>
                                        <label className={styles.dateLabel}>
                                            Start Month:
                                            <input
                                                type="month"
                                                value={fromDate}
                                                onChange={e => setFromDate(e.target.value)}
                                                className={styles.dateInput}
                                            />
                                        </label>
                                        <label className={styles.dateLabel}>
                                            End Month:
                                            <input
                                                type="month"
                                                value={toDate}
                                                min={fromDate}
                                                onChange={e => setToDate(e.target.value)}
                                                className={styles.dateInput}
                                                disabled={!fromDate}
                                            />
                                        </label>
                                    </div>
                                    <div className={styles.dateActionButtons}>
                                        <button
                                            className={styles.clearButton}
                                            onClick={e => {
                                                e.stopPropagation();
                                                setFromDate('');
                                                setToDate('');
                                            }}
                                        >
                                            Clear
                                        </button>
                                        <button
                                            className={styles.applyButton}
                                            onClick={e => {
                                                e.stopPropagation();
                                                setShowDateRange(false);
                                            }}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Machine Selector */}
                        <div
                            className={styles.selectorBar}
                            onClick={() => setShowMachine(!showMachine)}
                            onBlur={() => setShowMachine(false)}
                            tabIndex={0}
                        >
                            <span className={styles.selectorIcon}>
                                <Image src="/maintenance.png" alt="Machine" width={24} height={24} />
                            </span>
                            <span className={styles.selectorLabel}>Machine</span>
                            <span className={styles.selectorValue}>{selectedMachine}</span>
                            <span className={styles.selectorArrow}>▼</span>
                            {showMachine && (
                                <div className={styles.dropdownMenu}>
                                    {machineOptions.map((machine) => (
                                        <div
                                            key={machine}
                                            className={styles.dropdownItem}
                                            onClick={() => {
                                                setSelectedMachine(machine);
                                                setShowMachine(false);
                                            }}
                                        >
                                            {machine}
                                        </div>
                                    ))}
                                    <div
                                        className={styles.dropdownItem}
                                        onClick={() => {
                                            setSelectedMachine("All");
                                            setShowMachine(false);
                                        }}
                                    >
                                        All
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Performed By Selector */}
                        <div
                            className={styles.selectorBar}
                            onClick={() => setShowPerformer(!showPerformer)}
                            onBlur={() => setShowPerformer(false)}
                            tabIndex={0}
                        >
                            <span className={styles.selectorIcon}>
                                <Image src="/profile-icon.png" alt="Performed By" width={24} height={24} />
                            </span>
                            <span className={styles.selectorLabel}>Performed By</span>
                            <span className={styles.selectorValue}>{selectedPerformer}</span>
                            <span className={styles.selectorArrow}>▼</span>
                            {showPerformer && (
                                <div className={styles.dropdownMenu}>
                                    {performerOptions.map((performer) => (
                                        <div
                                            key={performer}
                                            className={styles.dropdownItem}
                                            onClick={() => {
                                                setSelectedPerformer(performer);
                                                setShowPerformer(false);
                                            }}
                                        >
                                            {performer}
                                        </div>
                                    ))}
                                    <div
                                        className={styles.dropdownItem}
                                        onClick={() => {
                                            setSelectedPerformer("All");
                                            setShowPerformer(false);
                                        }}
                                    >
                                        All
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Machine ID</th>
                                    <th>Machine Name</th>
                                    <th>Last Service</th>
                                    <th>Due Date</th>
                                    <th>Days Overdue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>22-01-2025</td>
                                    <td>MAC001</td>
                                    <td>XCMG27</td>
                                    <td>2025-03-01</td>
                                    <td>2025-03-01</td>
                                    <td>
                                        <span style={{ 
                                            color: '#f44336',
                                            fontWeight: '600',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ fontSize: '1.2em' }}>⏰</span>
                                            12
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>23-01-2025</td>
                                    <td>MAC002</td>
                                    <td>HDD</td>
                                    <td>2025-03-20</td>
                                    <td>2025-03-20</td>
                                    <td>
                                        <span style={{ 
                                            color: '#f44336',
                                            fontWeight: '600',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ fontSize: '1.2em' }}>⏰</span>
                                            6
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}