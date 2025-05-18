"use client";
import styles from "./material-usage-report.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MaterialUsageReport() {
  return (
    <div className={styles.pageWrapper}>
      {/* Top Navbar */}
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
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            <button className={styles.navButton}>Maintenance Reports</button>
            <button className={`${styles.navButton} ${styles.active}`}>Inventory Reports</button>
          </nav>
          <button className={styles.backButton}>Back</button>
        </aside>
        <main className={styles.contentArea}>
          <h1 className={styles.title}>Material usage</h1>
          <div className={styles.filtersGroup}>
            <div className={styles.selectorBar}>
              <span className={styles.selectorIcon}>
                <Image src="/schedule.png" alt="Date" width={28} height={28} />
              </span>
              <span className={styles.selectorLabel}>Date </span>
              <span className={styles.selectorValue}>All</span>
              <span className={styles.selectorArrow}>▼</span>
            </div>
            <div className={styles.selectorBar}>
              <span className={styles.selectorIcon}>
                <Image src="/machine-icon.png" alt="Machine" width={28} height={28} />
              </span>
              <span className={styles.selectorLabel}>Machine</span>
              <span className={styles.selectorValue}>All</span>
              <span className={styles.selectorArrow}>▼</span>
            </div>
            <div className={styles.selectorBar}>
              <span className={styles.selectorIcon}>
                <Image src="/profile-icon.png" alt="Performed By" width={28} height={28} />
              </span>
              <span className={styles.selectorLabel}>Performed By</span>
              <span className={styles.selectorValue}>All</span>
              <span className={styles.selectorArrow}>▼</span>
            </div>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Material Name</th>
                  <th>Used Qty</th>
                  <th>Remaining</th>
                  <th>Restock Needed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Engine Oil 20L</td>
                  <td>18</td>
                  <td>12</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Air Filter 5</td>
                  <td>5</td>
                  <td>20</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}