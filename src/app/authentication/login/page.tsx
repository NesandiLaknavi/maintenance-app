"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoginForm {
  email: string;
  companyId: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    companyId: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/authentication/profile"); // Redirect to profile page after login
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#E9D393] pt-8">
      <img
        src="/logo.png"
        alt="logo"
        style={{ height: "8rem", width: "8rem" }}
        className="mb-6"
      />
      <div className="bg-[#E2C178] p-10 rounded-2xl shadow-lg w-full max-w-xl flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-lg">Username or Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg">Company ID</label>
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
            <label className="block mb-2 text-lg">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#8C5B4A] text-white px-8 py-2 rounded-md text-lg font-semibold shadow hover:bg-[#6d4637] transition-colors duration-200 disabled:opacity-70"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <span>If you don't have an account? </span>
          <button
            type="button"
            onClick={() => router.push("/authentication/signup")}
            className="text-[#933532] underline font-semibold hover:text-[#6d4637] transition-colors duration-200 ml-1 cursor-pointer"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
