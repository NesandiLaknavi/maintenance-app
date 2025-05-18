"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './BackButton.module.css';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className={styles.backButton}
            aria-label="Go back to previous page"
        >
            <Image
                src="/back-icon.png"
                alt="Back"
                width={24}
                height={24}
                priority
            />
            Back
        </button>
    );
} 