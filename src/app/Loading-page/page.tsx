"use client";
import styles from "./Loading-page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function LoadingPage() {
    const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/authentication/login"); // Adjust the path if your login page is named differently
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [router]);
    return (
        <div className={styles.bgWrapper}>
            <div className={styles.centerCard}>
                <Image
                    src="/logo.png"
                    alt="MachniX Logo"
                    width={140}
                    height={140}
                    className={styles.logo}
                    priority
                />
                
                <h1 className={styles.subtitle}>Machinery Maintenance Web Application</h1>
            </div>
        </div>
    );
}
