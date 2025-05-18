"use client";
import styles from "./perchase-order-form.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function PurchaseOrderForm() {
  const dateInputRef = useRef<HTMLInputElement>(null);

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
          <h1 className={styles.title}>New Purchase Order</h1>
          <form className={styles.form}>
            <div className={styles.row}>
              <input
                className={styles.inputText}
                placeholder="Enter Supplier Name"
              />
              <button
                className={styles.dateBtn}
                type="button"
                onClick={() => dateInputRef.current?.showPicker()}
              >
                <Image src="/schedule.png" alt="Calendar" width={22} height={22} style={{ marginRight: 8 }} />
                <span className={styles.dateLabel}>Expected Delivery Date</span>
                <input
                  type="date"
                  ref={dateInputRef}
                  className={styles.hiddenDateInput}
                />
                <span className={styles.filterArrow}>▼</span>
              </button>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Material Name</label>
                <input className={styles.inputText} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Quantity To Order</label>
                <input className={styles.inputText} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Unit Price</label>
                <input className={styles.inputText} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Total Price</label>
                <input className={styles.inputText} />
              </div>
            </div>
            <div className={styles.buttonRow}>
              <button className={styles.saveBtn} type="submit">Submit Order</button>
              <button className={styles.cancelBtn} type="button">Cancel</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}