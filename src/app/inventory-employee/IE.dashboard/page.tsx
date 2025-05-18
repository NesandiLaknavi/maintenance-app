"use client";
import styles from "./IE.dashboard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function InventoryEmployeeDashboard() {
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
      <main className={styles.contentArea}>
        <div className={styles.profileRow}>
          <Image src="/profile-icon.png" alt="Profile" width={32} height={32} className={styles.profileIcon} />
          <span className={styles.employeeName}>
            Inventory Employee : Mr. kasun Perera
          </span>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.centerBtn}>Inventory Management</button>
          <button className={styles.centerBtn}>Material Request Management</button>
          <button className={styles.centerBtn}>Purchase Order</button>
        </div>
      </main>
    </div>
  );
}