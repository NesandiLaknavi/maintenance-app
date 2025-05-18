"use client";
import styles from "./purchase-order-list.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const initialRows = [
  { po: "PO001", name: "Spare Belt 5M", qty: "10 rolls", status: "submitted" },
  { po: "PO002", name: "Coolant Additive", qty: "15 bottles", status: "submitted" },
  { po: "PO003", name: "Engine Oil 20L", qty: "30 units", status: "not_submitted" },
];

const statusOptions = [
  { value: "submitted", label: "Submitted" },
  { value: "not_submitted", label: "Not Submitted" },
];

export default function PurchaseOrderList() {
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
      row.po.toLowerCase().includes(search.toLowerCase()) ||
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
            <button className={styles.navButton}>Inventory Management</button>
            <button className={styles.navButton}>Material Request Management</button>
            <button className={`${styles.navButton} ${styles.active}`}>Purchase Orders</button>
          </nav>
          <button className={styles.backButton}>Back</button>
        </aside>
        <main className={styles.contentArea}>
          <h1 className={styles.title}>Purchase Order Management</h1>
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
              Filter by Due Date
              <input
                type="date"
                ref={dateInputRef}
                className={styles.hiddenDateInput}
                onChange={e => {/* handle date filter logic here */}}
              />
              <span className={styles.filterArrow}>▼</span>
            </button>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>PO Number</th>
                  <th>Material Name</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr key={row.po}>
                    <td>
                      <input
                        className={styles.tableInput}
                        value={row.po}
                        onChange={e => handleInput(idx, "po", e.target.value)}
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
          <button className={styles.addBtn}>Add New Purchase Order</button>
        </main>
      </div>
    </div>
  );
}