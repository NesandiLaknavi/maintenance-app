"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const user = {
    firstName: 'Anura',
    lastName: 'Perera',
    email: 'anura@company.ae.lk',
    companyId: '1772',
    role: 'Mechanical Supervisor',
    createdAt: '25-03-2025',
};

const getDashboardLink = (role: string) => {
    if (role === 'Mechanical Supervisor') return '/supervisor/supervisor.dashboard';
    if (role === 'Technician') return '/technician/technician.dashboard';
    if (role === 'Inventory Employee') return '/inventory-employee/IE.dashboard';
    return '/';
};

export default function ProfilePage() {
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-[#E9D393]">
            <nav className="w-full bg-[#E2C178] p-4 shadow-md flex items-center justify-between">
                <Image src="/machnix-logo.png" alt="MachniX Logo" width={120} height={48} className="h-12 w-auto" />
                <div className="flex items-center gap-4">
                    <Link href={getDashboardLink(user.role)}>
                        <button className="p-2">
                            <Image src="/home-icon.png" alt="Home" width={28} height={28} />
                        </button>
                    </Link>
                    <Link href="/profile">
                        <button className="p-2">
                            <Image src="/profile-icon.png" alt="Home" width={28} height={28} />
                        </button>
                    </Link>
                    <button className="bg-[#8B4444] text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-[#723838] transition">
                        Logout
                    </button>
                </div>
            </nav>
            <div className="bg-[#E2C178] p-10 rounded-2xl shadow-lg w-full max-w-3xl flex flex-row items-start mt-16">
                <div className="flex flex-col items-center mr-8">
                    <div
                        className="w-24 h-24 bg-gray-300 rounded-lg mb-2 shadow flex items-center justify-center cursor-pointer overflow-hidden"
                        onClick={() => fileInputRef.current?.click()}
                        title="Click to upload profile picture"
                    >
                        {profilePic ? (
                            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        )}
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                    <span className="text-base text-gray-800">Profile Picture</span>
                </div>
                <div className="flex-1">
                    <h2 className="font-bold mb-6 text-2xl">My Profile</h2>
                    <div className="text-lg space-y-2">
                        <div>
                            <b>First Name :</b> {user.firstName}
                        </div>
                        <div>
                            <b>Last Name :</b> {user.lastName}
                        </div>
                        <div>
                            <b>Email Address :</b> {user.email}
                        </div>
                        <div>
                            <b>Company ID :</b> {user.companyId}
                        </div>
                        <div>
                            <b>Role :</b>{' '}
                            <span className="text-[#8B4444] font-semibold">{user.role}</span>
                        </div>
                        <div>
                            <b>Account Created On :</b>{' '}
                            <span className="text-gray-800 font-semibold">{user.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

