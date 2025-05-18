"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from "next/navigation";

interface SignUpForm {
    firstName: string;
    lastName: string;
    email: string;
    companyId: string;
    role: string;
    password: string;
    confirmPassword: string;
}

const roles = [
    'Mechanical Supervisor',
    'Technician',
    'Inventory Employee',
];

export default function SignUpPage() {
    const [formData, setFormData] = useState<SignUpForm>({
        firstName: '',
        lastName: '',
        email: '',
        companyId: '',
        role: roles[0],
        password: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            router.push("/profile");
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-[#E9D393] pt-16">
            <img
                src="/logo.png"
                alt="logo"
                style={{ height: "8rem", width: "8rem" }}
                className="mb-6 mt-[-2rem]"
            />
            <div className="bg-[#E2C178] p-10 rounded-2xl shadow-lg w-full max-w-xl flex flex-col items-center mt-[-1.5rem]">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                    <div>
                        <label className="block mb-1 text-base">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-base">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-base">Company Mail Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-base">Company ID</label>
                        <input
                            type="text"
                            name="companyId"
                            value={formData.companyId}
                            onChange={handleChange}
                            className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-base">Select Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        >
                            {roles.map(role => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-base">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-base">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-2">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-[#8C5B4A] text-white px-8 py-2 rounded-md text-lg font-semibold shadow hover:bg-[#6d4637] transition-colors duration-200 disabled:opacity-70"
                        >
                            {isLoading ? 'Signing up...' : 'Sign up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 