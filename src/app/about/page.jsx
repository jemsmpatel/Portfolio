import React from 'react';
import Link from "next/link";
import Image from "next/image";
import image from "../../../public/jemspassportsizephoto.jpg";

export default function About() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-10">
                {/* Image */}
                <div className="md:w-1/3 w-full flex justify-center mt-15 mb-5 md:justify-start">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={image.src}
                            alt="Jems Patel"
                            width={200}
                            height={200}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 w-full text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">Jems Patel</h1>
                    <p className="text-2xl dark:text-gray-300 text-gray-700 mb-6">Full Stack Web Developer</p>
                    <p className="text-gray-700 dark:text-gray-500 mb-6 leading-relaxed"> Hi, I’m Jems Patel, a passionate and curious Full Stack Developer with experience in both frontend and backend technologies. I love building clean, functional, and user-friendly web applications that solve real problems. I enjoy working across the stack — from designing responsive UIs to managing server-side logic and databases.</p>
                    <p className="text-gray-700 dark:text-gray-500 mb-6 leading-relaxed"> I started my web development journey while exploring different technologies on my own. Over time, I’ve worked with tools like React, Vite, and Tailwind CSS for the frontend, and Flask, Express.js, and Django for the backend. My database work includes both MongoDB and SQLite, and I’ve also used Cloudinary for storing and managing files in the cloud.</p>
                    <p className="text-gray-700 dark:text-gray-500 mb-6 leading-relaxed"> Some of my key projects include a movie app built with the MERN stack, an e-commerce platform using React and Flask, and a Django-based application for practice. These projects helped me understand real-world web development concepts like API integration, user interaction, and cloud storage. While some of my projects are still a work in progress, each one reflects my continuous growth as a developer.</p>
                    <p className="text-gray-700 dark:text-gray-500 mb-6 leading-relaxed"> I focus on writing clean, maintainable code, and I’m always exploring new tools and frameworks to sharpen my skills. As a developer, I’m not just building apps — I’m learning, experimenting, and growing with every line of code.</p>
                    <p className="text-gray-700 dark:text-gray-500 mb-6 leading-relaxed"> Thanks for visiting my portfolio. Feel free to check out my work, explore my code, and connect with me for collaboration or conversation. Let’s create something awesome together!</p>
                    {/* Tech Stack */}
                    <div className="pt-3 pb-7 md:py-8">
                        <div className="container px-4 md:px-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 md:mb-10 text-center">Tech Stack</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                                    <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Html</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">CSS</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">React Js</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Next Js</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Boostrap 5</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Tailwind CSS</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Redux</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Java Script</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">J Query</span>
                                    </div>
                                </div>
                                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                                    <h3 className="text-lg font-semibold mb-4">Backend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Node Js</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Express Js</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Java</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Python</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Django</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Flask</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">VB Net</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">ASP Net</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">PostgreSQL</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">MongoDB</span>
                                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm bg-gray-200 px-3 py-1 rounded-full dark:text-black dark:bg-gray-400 border sm:font-medium font-semibold">Orecal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex sm:items-center px-2 justify-center items-center md:px-6 gap-4">
                        <Link href="/Jems Patel Resume.pdf" target="_blank">
                            <button className="bg-black sm:ml-0 text-white px-5 py-2 rounded-md hover:bg-gray-800 dark:bg-gray-700 dark:border dark:border-white transition">
                                Download Resume
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="border border-black dark:border-white px-5 py-2 rounded-md hover:bg-gray-100 transition">
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
