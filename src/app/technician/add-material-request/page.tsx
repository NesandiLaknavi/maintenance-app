"use client";
import styles from "./add-material-request.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AddMaterialRequest() {
  return (
    <div className={styles.pageWrapper}>
      {/* Top Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
        </div>
        <div className={styles.navbarRight}>
          <Link href="/technician/dashboard">
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
            <button className={styles.navButton}>Notifications Center</button>
            <button className={styles.navButton}>Meter Readings</button>
            <button className={styles.navButton}>Task Reminders</button>
            <button className={`${styles.navButton} ${styles.active}`}>Material Requests</button>
            <button className={styles.navButton}>Service Logs</button>
          </nav>
          <button className={styles.backButton}>Back</button>
        </aside>
        <main className={styles.contentArea}>
          <h1 className={styles.title}>Request Materials</h1>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <select className={styles.inputSelect}>
                    
                  <option>Select Machine</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Expected Date</label>
                <div className={styles.inputWithIcon}>
                  <input type="date" className={styles.inputSmall} />
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Maintenance Task</label>
<input type="text" className={styles.inputText} placeholder=" Add Maintenance Task" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Quantity</label>
                <input type="text" className={styles.inputSmall} />
              </div>
            
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <select className={styles.inputSelect}>
                  <option>Add Material Needed</option>
                </select>
              </div>
              <button type="button" className={styles.addBtn}>Add Materials</button>
            </div>
            <div><label className={styles.label}>Note</label></div>
            <div className={styles.row}>
              
              <textarea className={styles.textarea}></textarea>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Material Used</label>
                <select className={styles.inputSelect}>
                  <option>Select Material</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Cost of Service</label>
                <input type="text" className={styles.inputSmall} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <select className={styles.inputSelect}>
                  <option>Select Machine</option>
                </select>
              </div>
            </div>
            <div className={styles.buttonRow}>
              <button type="submit" className={styles.saveBtn}>Submit Request</button>
              <button type="button" className={styles.cancelBtn}>Cancel</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}