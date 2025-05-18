"use client";
import styles from "./stock-level.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const initialRows = [
    { id: "M001", name: "Engine Oil", unit: "Liters", qty: 12, status: "in" },
    { id: "M002", name: "Oil Filter", unit: "Pcs", qty: 3, status: "low" },
    { id: "M003", name: "Diesel", unit: "Liters", qty: 0, status: "out" },
    { id: "M004", name: "Air Filter", unit: "Pcs", qty: 1, status: "in" },
];

const statusOptions = [
    { value: "in", label: "In Stock" },
    { value: "low", label: "Low" },
    { value: "out", label: "Out" },
];

export default function StockLevels() {
    const [rows, setRows] = useState(initialRows);
    const [search, setSearch] = useState("");

    const handleInput = (idx: number, field: string, value: string) => {
        setRows(rows =>
            rows.map((row, i) => (i === idx ? { ...row, [field]: value } : row))
        );
    };

    const filteredRows = rows.filter(
        row =>
            row.id.toLowerCase().includes(search.toLowerCase()) ||
            row.name.toLowerCase().includes(search.toLowerCase())
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
                        <button className={`${styles.navButton} ${styles.active}`}>Inventory Management</button>
                        <button className={styles.navButton}>Material Request Management</button>
                        <button className={styles.navButton}>Purchase Orders</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Stock Levels</h1>
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
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Material ID</th>
                                    <th>Material Name</th>
                                    <th>Unit</th>
                                    <th>Available Quantity</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRows.map((row, idx) => (
                                    <tr key={row.id}>
                                        <td>
                                            <input
                                                className={styles.tableInput}
                                                value={row.id}
                                                onChange={e => handleInput(idx, "id", e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className={styles.tableInput}
                                                value={row.name}
                                                onChange={e => handleInput(idx, "name", e.target.value)}
                                                style={{ fontWeight: idx === 0 || idx === 2 ? "bold" : "normal" }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className={styles.tableInput}
                                                value={row.unit}
                                                onChange={e => handleInput(idx, "unit", e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className={styles.tableInput}
                                                type="number"
                                                value={row.qty}
                                                onChange={e => handleInput(idx, "qty", e.target.value)}
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
                    <button className={styles.addBtn}>+ Add New Material</button>
                </main>
            </div>
        </div>
    );
}