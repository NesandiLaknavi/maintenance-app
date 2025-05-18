"use client";
import styles from "./approve-reject-logs.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function ApproveRejectLogs() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const status = searchParams.get("status");

    const handleApprove = () => {
        // You can add API call logic here
        router.push("/supervisor/service-logs/approve-reject-logs?status=approved");
    };

    const handleReject = () => {
        // You can add API call logic here
        router.push("/supervisor/service-logs/approve-reject-logs?status=rejected");
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Top Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Image src="/machnix-logo.png" alt="MachniX Logo" width={60} height={60} priority />
                </div>
                <div className={styles.navbarRight}>
                    <Link href="/supervisor/dashboard">
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
                        <button className={styles.navButton}>Machinery Management</button>
                        <button className={styles.navButton}>Service Notifications</button>
                        <button className={styles.navButton}>Maintenance Scheduling</button>
                        <button className={styles.navButton}>Material Management</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Service Logs</button>
                        <button className={styles.navButton}>Historical Records</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>

                {/* Main Content */}
                <main className={styles.contentArea}>
                    {/* Confirmation messages */}
                    {status === "approved" && (
                        <div className={styles.confirmationMessage} style={{ color: "green", textAlign: "center", marginBottom: "1rem" }}>
                            Log has been <b>approved</b>!
                        </div>
                    )}
                    {status === "rejected" && (
                        <div className={styles.confirmationMessage} style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
                            Log has been <b>rejected</b>.
                        </div>
                    )}

                    <h1 className={styles.title}>Approve / Reject Service Log</h1>
                    
                    {/* Log Details Card */}
                    <div className={styles.logDetailsCard}>
                        <div className={styles.logDetailsHeader}>Log Details</div>
                        <div className={styles.logDetailsBody}>
                            <div>Machine : XCMG27</div>
                            <div>Technician ID : TEC001</div>
                            <div>Technician Name : Mr. Kasun</div>
                            <div>Date : 12-05-2025</div>
                            <div>Service Performed : Oil Change, Filter Replacement</div>
                            <div>Meter Reading : 123h</div>
                            <div>Parts Used : Engine Oil (5L), Oil Filter (1)</div>
                            <div>Remarks : Routine service completed.</div>
                        </div>
                    </div>

                    {/* Notes Input */}
                    <div className={styles.notesInputWrapper}>
                        <input
                            className={styles.notesInput}
                            placeholder="Add Supervisor Notes..."
                        />
                    </div>

                    {/* Approve/Reject Buttons (Already at Bottom) */}
                    <div className={styles.actionButtons}>
                        <button className={styles.approveBtn} onClick={handleApprove}>Approve Log</button>
                        <button className={styles.rejectBtn} onClick={handleReject}>Reject Log</button>
                    </div>
                </main>
            </div>
        </div>
    );
}