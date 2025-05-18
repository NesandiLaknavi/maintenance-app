"use client";
import styles from "./add-reminder.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AddReminder() {
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
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Add New Reminder</h1>
                    <form className={styles.form}>
                        <div className={styles.formRow}>
                            <select className={styles.inputSelect}>
                                <option>Select Machine</option>
                                {/* Add more options as needed */}
                            </select>

                        </div>
                        <div className={styles.formRow}>
                            <label className={styles.label}>Task Title</label>
                            <input type="text" className={styles.inputText} />
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Date</label>
                                <input type="date" className={styles.inputSmall} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Time</label>
                                <input type="time" className={styles.inputSmall} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Reminder Alert Time</label>
                                <select className={styles.inputSmall}>
                                    <option value="10m">10 minutes before</option>
                                    <option value="30m">30 minutes before</option>
                                    <option value="1h">1 hour before</option>
                                    <option value="2h">2 hours before</option>
                                    <option value="1d">1 day before</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Recurrence</label>
                                <button type="button" className={styles.selectBtn}>
                                    <span>Recurrence</span>
                                    
                                </button>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <label className={styles.label}>Note</label>
                            <textarea className={styles.textarea}></textarea>
                        </div>
                        <div className={styles.buttonRow}>
                            <button type="submit" className={styles.saveBtn}>Save Reminder</button>
                            <button type="button" className={styles.cancelBtn}>Cancel</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}