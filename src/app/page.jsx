'use client';
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import image from "../../public/jemspassportsizephoto.jpg";

export default function Home() {
    return (
        <main className="container px-4 md:px-6">
            <div className="py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Full Stack Developer
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Building digital experiences with modern technologies. Focused on creating elegant solutions to
                                complex problems.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Link href="https://github.com/jemsmpatel" target="_blank">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer border bg-background hover:bg-gray-200 h-10 w-10">
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
                                </button>
                            </Link>
                            <Link href="https://linkedin.com/in/jems-patel-a25011324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer border bg-background hover:bg-gray-200 h-10 w-10">
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">LinkedIn</span>
                                </button>
                            </Link>
                            <Link href="https://twitter.com" target="_blank">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer border bg-background hover:bg-gray-200 h-10 w-10">
                                    <Twitter className="h-4 w-4" />
                                    <span className="sr-only">Twitter</span>
                                </button>
                            </Link>
                            <Link href="mailto:jemsmpatel2005@gmail.com">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer border bg-background hover:bg-gray-200 h-10 w-10">
                                    <Mail className="h-4 w-4" />
                                    <span className="sr-only">Email</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 md:py-24 lg:py-32">
                <div className="container flex justify-center md:px-6">
                    <div className="flex max-w-[900px] flex-col md:flex-row justify-between gap-15">
                        {/* Right Side - Image (Mobile me upar dikhani ke liye pehle likha gaya) */}
                        <div className="md:w-1/3 flex justify-center mt-3 md:justify-end">
                            <div className="w-48 h-48 rounded-2xl shadow-lg overflow-hidden">
                                <Image
                                    src={image.src}
                                    width={200}
                                    height={200}
                                    alt="Jems Manubhi Patel"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        {/* Left Side - Text Content */}
                        <div className="md:w-2/3 w-90 text-center md:text-left">
                            <h2 className="text-4xl font-bold mb-4">Jems Patel</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5">
                                👋 Hi, I'm Jems Patel — a passionate Full Stack Developer who loves turning ideas into powerful web applications.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5">
                                I build responsive and user-friendly apps using modern tools like React, Flask, MongoDB, and Cloudinary. From crafting frontend interfaces to building backend logic, I enjoy working across the full development stack.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5">
                                🚀 Check out my <Link href={`/projects`} className="text-blue-500 hover:underline hover:font-bold tracking-tight">Projects</Link> to see what I've built so far.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5">
                                💼 Visit the <Link href={`/about`} className="text-blue-500 hover:underline hover:font-bold tracking-tight">About</Link> page to learn more about me and my journey.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5">
                                📫 Feel free to <Link href={`/contact`} className="text-blue-500 hover:underline hover:font-bold tracking-tight">Contact</Link> me for collaboration, freelance work, or just to say hi!
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5">
                                Let's build something awesome together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
