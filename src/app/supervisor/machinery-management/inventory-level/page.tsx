"use client";

import { useState } from 'react';
import styles from './inventory-level.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Material {
  name: string;
  quantityInStock: number;
  minimumStockLevel: number;
}

export default function StockLevelPage() {
  const router = useRouter();
  const [materials, setMaterials] = useState<Material[]>([
    {
      name: 'Water Filter',
      quantityInStock: 2,
      minimumStockLevel: 5,
    },
    {
      name: 'Air Filter',
      quantityInStock: 1,
      minimumStockLevel: 4,
    },
  ]);

  const handleRestock = (materialName: string) => {
    // Handle restock action here
    console.log(`Restocking ${materialName}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/machnix-logo.png"
            alt="MachniX Logo"
            width={60}
            height={60}
            priority
            style={{ width: '60px', height: '60px' }}
          />
        </div>
        <div className={styles.headerActions}>
          <Link href="/supervisor/dashboard" className={styles.headerIcon}>
            <Image
              src="/home-icon.png"
              alt="Home"
              width={32}
              height={32}
              priority
            />
          </Link>
          <Link href="/profile" className={styles.headerIcon}>
            <Image
              src="/profile-icon.png"
              alt="Profile"
              width={32}
              height={32}
              priority
            />
          </Link>
          <button className={styles.logoutBtn}>Logout</button>
        </div>
      </div>

      <div className={styles.mainContent}>
        <nav className={styles.sidebar}>
          <button className={styles.sidebarBtn}>
            Machinery Management
          </button>
          <button className={styles.sidebarBtn}>
            Service Notifications
          </button>
          <button className={styles.sidebarBtn}>
            Maintenance Scheduling
          </button>
          <button className={`${styles.sidebarBtn} ${styles.active}`}>
            Material Management
          </button>
          <button className={styles.sidebarBtn}>
            Service Logs
          </button>
          <button className={styles.sidebarBtn}>
            Historical Records
          </button>
          <button className={styles.backBtn} onClick={() => router.back()}>
            Back
          </button>
        </nav>

        <main className={styles.contentArea}>
          <h1 className={styles.title}>Inventory Level</h1>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Material Name</th>
                  <th>Quantity in stock</th>
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
        </main>
      </div>
    </div>
  );
}