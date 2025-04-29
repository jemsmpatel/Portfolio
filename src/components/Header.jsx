'use client'; // Button event ke liye ye zaruri hai App Router me
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <header className="shadow-md backdrop-blur-sm sticky top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    <div className="text-xl font-bold">
                        <Link href="/">Jems Patel</Link>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/about" className="hover:text-blue-600">About</Link>
                        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
                        <Link href="/Jems Patel Resume.pdf" target='_blank' className="hover:text-blue-600">Resume</Link>
                    </nav>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>
            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed backdrop-blur-sm inset-0 bg-opacity-50 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            {/* Side Drawer */}
            <div
                className={clsx(
                    "fixed top-0 right-0 w-64 border-l h-full shadow-lg z-50 transform transition-transform duration-300 bg-white text-black dark:bg-black dark:text-white",
                    menuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={() => setMenuOpen(false)}>
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col space-y-2 p-4">
                    <Link href="/about" onClick={() => setMenuOpen(false)} className='p-3 hover:text-lg active:text-lg active:bg-gray-200 dark:active:bg-blue-400 rounded-xl px-4 border'>About</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)} className='p-3 hover:text-lg active:text-lg active:bg-gray-200 dark:active:bg-blue-400 rounded-xl px-4 border'>Contact</Link>
                    <Link href="/projects" onClick={() => setMenuOpen(false)} className='p-3 hover:text-lg active:text-lg active:bg-gray-200 dark:active:bg-blue-400 rounded-xl px-4 border'>Projects</Link>
                    <Link href="/Jems Patel Resume.pdf" target='_blank' onClick={() => setMenuOpen(false)} className='p-3 hover:text-lg active:text-lg active:bg-gray-200 dark:active:bg-blue-400 rounded-xl px-4 border'>Resume</Link>
                </nav>
            </div>
        </>

    )
}
