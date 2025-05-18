"use client";
import styles from "./material-usage-report.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const machines = ["CNC Machine 1", "Milling Machine 2", "Lathe Machine 3"];
const performers = ["Mr. Aruna", "Mr. Kasun", "Mr. Nuwan"];
const materials = [...Array(30)].map((_, i) => ({
    name: `Material ${i + 1}`,
    used: i * 2,
    remaining: 100 - i * 2,
    restock: i % 2 === 0 ? "Yes" : "No"
}));

const materialNames = materials.map(m => m.name);

export default function MaterialUsageReport() {
    const [showDateRange, setShowDateRange] = useState(false);
    const [showMachine, setShowMachine] = useState(false);
    const [showPerformer, setShowPerformer] = useState(false);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [selectedMachine, setSelectedMachine] = useState("All");
    const [selectedPerformer, setSelectedPerformer] = useState("All");
    const dateRangeRef = useRef<HTMLDivElement>(null);

    const formatMonth = (dateString: string) => {
        if (!dateString) return "";
        const [year, month] = dateString.split("-");
        return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dateRangeRef.current && !dateRangeRef.current.contains(event.target as Node)) {
                setShowDateRange(false);
            }
        };

        if (showDateRange) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDateRange]);

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
                        <button className={styles.navButton}>Maintenance Reports</button>
                        <button className={`${styles.navButton} ${styles.active}`}>Inventory Reports</button>
                    </nav>
                    <button className={styles.backButton}>Back</button>
                </aside>
                <main className={styles.contentArea}>
                    <h1 className={styles.title}>Material Usage</h1>
                    <div className={styles.filtersGroup}>
                        {/* Material Selector */}
                        <div
                            className={styles.selectorBar}
                            onClick={() => setShowMachine(!showMachine)}
                            onBlur={() => setShowMachine(false)}
                            tabIndex={0}
                        >
                            <span className={styles.selectorIcon}>
                                <Image src="/maintenance.png" alt="Material" width={28} height={28} />
                            </span>
                            <span className={styles.selectorLabel}>Material</span>
                            <span className={styles.selectorValue}>{selectedMachine}</span>
                            <span className={styles.selectorArrow}>▼</span>
                            {showMachine && (
                                <div className={styles.dropdownMenu}>
                                    {materialNames.map((material) => (
                                        <div
                                            key={material}
                                            className={styles.dropdownItem}
                                            onClick={() => setSelectedMachine(material)}
                                        >
                                            {material}
                                        </div>
                                    ))}
                                    <div className={styles.dropdownItem} onClick={() => setSelectedMachine("All")}>
                                        All
                                    </div>
                                </div>
                            )}
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
                                {materials.map((material, i) => (
                                    <tr key={i}>
                                        <td>{material.name}</td>
                                        <td>{material.used}</td>
                                        <td>{material.remaining}</td>
                                        <td>{material.restock}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}