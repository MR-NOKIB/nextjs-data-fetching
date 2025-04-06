'use client';

import { useEffect, useState } from 'react';

const backgroundImages = [
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
];

export default function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
            style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Static content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Site</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl">
                    This content stays the same while the background slides automatically.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}
