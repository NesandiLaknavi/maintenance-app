// inventory-level/page.tsx
"use client";
import { useState } from 'react';
import styles from './inventory-level.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface Material {
  name: string;
  quantityInStock: number;
  minimumStockLevel: number;
}

export default function InventoryLevelPage() {
  const [materials, setMaterials] = useState<Material[]>([
    { name: 'Water Filter', quantityInStock: 2, minimumStockLevel: 5 },
    { name: 'Air Filter', quantityInStock: 1, minimumStockLevel: 4 },
  ]);

  const handleRestock = (materialName: string) => {
    console.log(`Restocking ${materialName}`);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Navbar */}
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
            <button className={styles.navButton}>Machinery Management</button>
            <button className={styles.navButton}>Service Notifications</button>
            <button className={styles.navButton}>Maintenance Scheduling</button>
            <button className={`${styles.navButton} ${styles.active}`}>Material Management</button>
            <button className={styles.navButton}>Service Logs</button>
            <button className={styles.navButton}>Historical Records</button>
          </nav>
          <button className={styles.backButton}>Back</button>
        </aside>

        {/* Main Content */}
        <main className={styles.contentArea}>
          <div className={styles.card}>
            <h1 className={styles.title}>Inventory Level</h1>
            <div className={styles.tableWrapper}>
              <table className={styles.machineryTable}>
                <thead>
                  <tr>
                    <th>Material Name</th>
                    <th>Quantity in Stock</th>
                    <th>Minimum Stock Level</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material, index) => (
                    <tr key={index}>
                      <td>{material.name}</td>
                      <td>{material.quantityInStock}</td>
                      <td>{material.minimumStockLevel}</td>
                      <td>
                        <button
                          className={styles.restockBtn}
                          onClick={() => handleRestock(material.name)}
                        >
                          Restock
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}