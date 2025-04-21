'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        });

        const data = await res.json();
        if (data.success) {
            toast.success("Contact successfully");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            console.error(err);
            toast.error("failed to contact");
        }
    }

    return (
        <main className="max-w-xl mx-auto px-8 py-12">
            <div className="p-5 border rounded-2xl border-gray-500 shadow-2xl">
                <h1 className="text-4xl font-bold text-center mt-6 mb-8">Get in Touch</h1>

                <p className="text-center text-gray-600 mb-10 dark:text-gray-300">
                    Got a project in mind or just want to say hello? Fill out the form below or{" "}
                    <Link href="mailto:jemsmpatel2005@gmail.com" className="text-blue-600 underline">
                        email me directly
                    </Link>.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 sm:px-0 sm:px-6 px-3"
                >
                    {/* Name */}
                    <div className="relative mb-4">
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required minLength="3" maxLength="320" placeholder="" className="peer block w-full rounded-md border border-gray-500 bg-white dark:bg-black px-3 pt-5 pb-2 text-black-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        <label className="absolute left-3 top-1 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm">Name</label>
                    </div>
                    {/* Email */}
                    <div className="relative mb-4">
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required minLength="7" maxLength="320" placeholder="" className="peer block w-full rounded-md border border-gray-500 bg-white dark:bg-black px-3 pt-5 pb-2 text-black-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        <label className="absolute left-3 top-1 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm">Email</label>
                    </div>
                    {/* Message */}
                    <div className="relative mb-4">
                        <textarea type="text" id="Message" value={message} onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="" required className="peer block w-full rounded-md border border-gray-500 bg-white dark:bg-black px-3 pt-5 pb-2 text-black-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none" ></textarea>
                        <label htmlFor="Message" className="absolute left-3 top-1 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm" > Message </label>
                    </div>
                    {/* Submit */}
                    <div className="text-center mb-3 mt-6">
                        <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition dark:bg-gray-600 dark:border dark:border-white" > Send Message </button>
                    </div>
                </form>
            </div>
        </main>
    )
}
