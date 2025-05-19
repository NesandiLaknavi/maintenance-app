"use client";
import { useState } from "react";
import styles from "./notification.center.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NotificationCenter() {
  const [activeTab, setActiveTab] = useState("Center");

  return (
    <div className={styles.pageWrapper}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Image 
            src="/machnix-logo.png" 
            alt="Mathnix Logo" 
            width={60} 
            height={60} 
            priority 
          />
        </div>
        <div className={styles.navbarRight}>
          <Link href="/dashboard">
            <button className={styles.iconBtn}>
              <Image 
                src="/home-icon.png" 
                alt="Home" 
                width={32} 
                height={32} 
              />
            </button>
          </Link>
          <Link href="/profile">
            <button className={styles.iconBtn}>
              <Image 
                src="/profile-icon.png" 
                alt="Profile" 
                width={32} 
                height={32} 
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
            <button 
              className={`${styles.navButton} ${activeTab === "Notification Center" ? styles.active : ""}`}
              onClick={() => setActiveTab("Notification Center")}
            >
              Notification Center
            </button>
            <button 
              className={`${styles.navButton} ${activeTab === "Meter Readings" ? styles.active : ""}`}
              onClick={() => setActiveTab("Meter Readings")}
            >
              Meter Readings
            </button>
            <button 
              className={`${styles.navButton} ${activeTab === "Task Reminders" ? styles.active : ""}`}
              onClick={() => setActiveTab("Task Reminders")}
            >
              Task Reminders
            </button>
            <button 
              className={`${styles.navButton} ${activeTab === "Material Requests" ? styles.active : ""}`}
              onClick={() => setActiveTab("Material Requests")}
            >
              Material Requests
            </button>
          </nav>
          <Link href="/dashboard">
            <button className={styles.backButton}>Back</button>
          </Link>
        </aside>

        {/* Main Content */}
        <main className={styles.main}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>Notification Center</h1>
            <div className={styles.buttonContainer}>
              <button className={styles.actionButton}>
                Assigned Maintenance & Tasks
              </button>
              <button className={styles.actionButton}>
                In–App and Email Notifications
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}