"use client";
import styles from "./view-material-requests.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const initialRows = [
    { reqId: "MR001", machineId: "MAC001", tech: "Mr. Ruwan", status: "pending" },
    { reqId: "MR002", machineId: "MAC002", tech: "Mr. Anura", status: "approved" },
    { reqId: "MR003", machineId: "MAC003", tech: "Mr.Sahan", status: "rejected" },
];

const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "rejected", label: "Rejected" },
];

export default function ViewMaterialRequests() {
    const [rows, setRows] = useState(initialRows);
    const [search, setSearch] = useState("");
    const dateInputRef = useRef<HTMLInputElement>(null);

    const handleInput = (idx: number, field: string, value: string) => {
        setRows(rows =>
            rows.map((row, i) => (i === idx ? { ...row, [field]: value } : row))
        );
    };

    const filteredRows = rows.filter(
        row =>
            row.reqId.toLowerCase().includes(search.toLowerCase()) ||
            row.machineId.toLowerCase().includes(search.toLowerCase()) ||
            row.tech.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.pageWrapper}>
            {/* Top Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/inventory-employee/dashboard">
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
                        <button className={styles.navButton}>Inventory Management</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Material Request Management</button>
                        <button className={styles.navButton}>Purchase Orders</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Material Request</h1>
                    <div className={styles.filtersRow}>
                        <div className={styles.searchRow}>
                            <input
                                className={styles.searchInput}
                                placeholder="Search Materials"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button className={styles.searchBtn}>
                                <Image src="/search.png" alt="Search" width={22} height={22} />
                            </button>
                        </div>
                        <button
                            className={styles.filterBtn}
                            type="button"
                            onClick={() => dateInputRef.current?.showPicker()}
                        >
                            <Image src="/schedule.png" alt="Calendar" width={22} height={22} style={{ marginRight: 8 }} />
                            <span className={styles.filterLabel}></span>
                            <input
                                type="date"
                                ref={dateInputRef}
                                className={styles.hiddenDateInput}
                                onChange={e => {/* handle date filter logic here */ }}
                            />
                            
                        </button>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Request ID</th>
                                    <th>Machine ID</th>
                                    <th>Technician</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRows.map((row, idx) => (
                                    <tr key={row.reqId}>
                                        <td>
                                            <input
                                                className={styles.tableInput}
                                                value={row.reqId}
                                                onChange={e => handleInput(idx, "reqId", e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className={styles.tableInput}
                                                value={row.machineId}
                                                onChange={e => handleInput(idx, "machineId", e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className={styles.tableInput}
                                                value={row.tech}
                                                onChange={e => handleInput(idx, "tech", e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <select
                                                className={styles.statusSelect}
                                                value={row.status}
                                                onChange={e => handleInput(idx, "status", e.target.value)}
                                            >
                                                {statusOptions.map(opt => (
                                                    <option key={opt.value} value={opt.value}>
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}