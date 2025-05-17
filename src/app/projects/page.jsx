'use client';
import React from 'react';
import { Github } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
    return (
        <main id="projects" className="py-12 md:ty-20 md:pb-24">
            <div className="w-full px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
                <div className="grid gap-10 mx-[5vw] justify-center md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                        <Link href={`https://jemsmpatel.pythonanywhere.com/`} target="_blank">
                            <div className="relative aspect-video">
                                <Image alt="E-commerce Platform" loading="lazy" fill
                                    className="object-cover transition-transform hover:scale-105"
                                    src="/django_e-commerce_site.png" />
                            </div>
                        </Link>
                        <div className="p-4">
                            <Link href={`https://jemsmpatel.pythonanywhere.com/`} target="_blank">
                                <h3 className="font-semibold text-xl mb-2">E-commerce Platform</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    This is my first Django web project. It uses Django and SQLite3 for the backend, and HTML, CSS, and Bootstrap 5 for the frontend. A local folder system is used to store files. The project is not yet complete and is made for learning purposes.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Html</span>
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Boostrap 5</span>
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Java Script</span>
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Django</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center p-4 pt-0">
                            <Link href={`https://github.com/jemsmpatel/my-django-ecommers-site`} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                                <Github className="h-4 w-4" />
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                        <Link href={`https://movieapp-ooqi.onrender.com/`} target="_blank">
                            <div className="relative aspect-video">
                                <Image alt="E-commerce Platform" loading="lazy" fill
                                    className="object-cover transition-transform hover:scale-105"
                                    src="/MERN_movie_app.png" />
                            </div>
                        </Link>
                        <div className="p-4">
                            <Link href={`https://movieapp-ooqi.onrender.com/`} target="_blank">
                                <h3 className="font-semibold text-xl mb-2">Movie Platform</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    This is my first MERN stack movie app project. The frontend is made with React, Vite, and Tailwind CSS. For backend, I used Express.js and MongoDB for the database. Files are stored using Cloudinary. I built this while learning. It is made only for desktop and is not responsive.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">React Js</span>
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Express Js</span>
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Tailwind CSS</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center p-4 pt-0">
                            <Link href={`https://github.com/jemsmpatel/MovieApp/tree/master`} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                                <Github className="h-4 w-4" />
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                        <Link href={`https://e-commerce-site-9xzp.onrender.com/`} target="_blank">
                            <div className="relative aspect-video">
                                <Image alt="E-commerce Platform" loading="lazy" fill
                                    className="object-cover transition-transform hover:scale-105"
                                    src="/flask_with_react.png" />
                            </div>
                        </Link>
                        <div className="p-4">
                            <Link href={`https://e-commerce-site-9xzp.onrender.com/`} target="_blank">
                                <h3 className="font-semibold text-xl mb-2">E-commerce Platform</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    This is my first e-commerce project using Flask. The frontend is built with React, Vite, and Tailwind CSS. The backend is powered by Flask, and MongoDB is used for the database. Files are stored on Cloudinary. The project is responsive but still incomplete — many features will be added later.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">React Js</span>
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Flask</span>
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Tailwind CSS</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center p-4 pt-0">
                            <Link href={`https://github.com/jemsmpatel/E-commerce-site/tree/master`} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                                <Github className="h-4 w-4" />
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
