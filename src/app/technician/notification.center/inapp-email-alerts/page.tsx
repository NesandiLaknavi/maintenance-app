"use client";
import React from 'react';
import styles from './inapp-email-alerts.module.css';
import Image from 'next/image';

const NotificationsPage = () => {
  const notifications = [
    {
      date: '2025-04-12',
      message: "You've been assigned XCM027 Maintenance Machine ID : MAC002",
      type: 'Task',
      status: 'Unread',
    },
    {
      date: '2025-04-12',
      message: "Material approved for: Compressor A Repair Machine ID : MAC002",
      type: 'Material',
      status: 'Read',
    },
    {
      date: '2025-04-10',
      message: "Reminder: Maintenance due on Generator Machine ID : MAC003",
      type: 'Reminder',
      status: 'Read',
    },
  ];
  
  return (
    <div className={styles.appContainer}>
      {/* Navigation Bar */}
      <nav className={styles.navBar}>
      <div className={styles.navbarLeft}>
                    <Image 
                        src="/machnix-logo.png" 
                        alt="MachniX Logo" 
                        width={60} 
                        height={60} 
                        priority 
                    />
                </div>
                <div className={styles.navbarRight}>
                
                        <button className={styles.iconBtn}>
                            <Image 
                                src="/home-icon.png" 
                                alt="Home" 
                                width={28} 
                                height={28} 
                            />
                        </button>
                    
                    
                        <button className={styles.iconBtn}>
                            <Image 
                                src="/profile-icon.png" 
                                alt="Profile" 
                                width={28} 
                                height={28} 
                            />
                        </button>
                        <button className={styles.logoutButton}>Logout</button>
                    </div>
        
      </nav>

      <div className={styles.mainLayout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarMenu}>
            <button className={styles.menuItem}>
              <span>Machinery</span>
              <span>Management</span>
            </button>
            <button className={`${styles.menuItem} ${styles.active}`}>
              <span>Service</span>
              <span>Notifications</span>
            </button>
            <button className={styles.menuItem}>
              <span>Maintenance</span>
              <span>Scheduling</span>
            </button>
            <button className={styles.menuItem}>
              <span>Material</span>
              <span>Management</span>
            </button>
            <button className={styles.menuItem}>
              <span>Service Logs</span>
            </button>
            <button className={styles.menuItem}>
              <span>Historical</span>
              <span>Records</span>
            </button>
          </div>
          <button className={styles.backButton}>Back</button>
        </aside>

        {/* Main Content */}
        <main className={styles.content}>
          <h1 className={styles.title}>In-App and Email Notifications</h1>

          <div className={styles.actions}>
            <button className={styles.viewAllButton}>View All Emails Sent</button>
          </div>

          <table className={styles.notificationsTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Message</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification, index) => (
                <tr key={index}>
                  <td>{notification.date}</td>
                  <td>{notification.message}</td>
                  <td>{notification.type}</td>
                  <td>
                    
                    <button className={
                      notification.status === 'Unread' 
                        ? styles.statusUnread 
                        : styles.statusRead
                    }>
                      {notification.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.divider}></div>

          <div className={styles.footer}>
            
            <button className={styles.toggleButton}>Turn On/Off Email Notifications</button>
            <button className={styles.toggleButton}>clear all read</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotificationsPage;