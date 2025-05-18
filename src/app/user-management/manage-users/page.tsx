"use client";
import styles from "./manage-users.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const initialRows = [
    { id: "U001", name: "Mr. Aruna", email: "anura.company@gmail.com", role: "Supervisor" },
    { id: "U002", name: "Mr. Kasun", email: "kasun.company@gmail.com", role: "Technician" },
    { id: "U002", name: "Mr.Nuwan", email: "nuwan.company@gmail.com", role: "Inventory" },
    { id: "U003", name: "Mr. Piyal", email: "piyal.company@gmail.com", role: "Supervisor" },
    { id: "U003", name: "Mr. Sandun", email: "sandun.company@gmail.com", role: "Technician" },
    { id: "U004", name: "Mr. Kamal", email: "kamal.company@gmail.com", role: "Inventory" },
];

const roleOptions = [
    { value: "Supervisor", label: "Supervisor" },
    { value: "Technician", label: "Technician" },
    { value: "Inventory", label: "Inventory" },
];

export default function ManageUsers() {
    const [rows, setRows] = useState(initialRows);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("");
    const dateInputRef = useRef<HTMLInputElement>(null);

    const handleInput = (idx: number, field: string, value: string) => {
        setRows(rows =>
            rows.map((row, i) => (i === idx ? { ...row, [field]: value } : row))
        );
    };

    const filteredRows = rows.filter(row => {
        const matchesSearch = row.name.toLowerCase().includes(search.toLowerCase()) ||
                            row.email.toLowerCase().includes(search.toLowerCase());
        const matchesRole = roleFilter ? row.role === roleFilter : true;
        return matchesSearch && matchesRole;
    });

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
                        <button className={`${styles.navButton} ${styles.active}`}>User Management</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Manage Users</h1>
                    <div className={styles.filtersRow}>
                        <div className={styles.searchRow}>
                            <input
                                className={styles.searchInput}
                                placeholder="Search by Name / Email"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button className={styles.searchBtn}>
                                <Image src="/search.png" alt="Search" width={22} height={22} />
                            </button>
                        </div>
                        <div className={styles.roleFilterBox}>
                            <select
                                className={styles.roleFilterSelect}
                                onChange={e => setRoleFilter(e.target.value)}
                                value={roleFilter}
                            >
                                <option value="">Filter by Role</option>
                                {roleOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <span className={styles.dropdownArrow}>▼</span>
                        </div>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRows.map((row, idx) => (
                                    <tr key={row.id + idx}>
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
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className={styles.tableInput}
                                                value={row.email}
                                                onChange={e => handleInput(idx, "email", e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <select
                                                className={styles.statusSelect}
                                                value={row.role}
                                                onChange={e => handleInput(idx, "role", e.target.value)}
                                            >
                                                {roleOptions.map(opt => (
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
                    <button className={styles.addBtn}>Add New User</button>
                </main>
            </div>
        </div>
    );
}