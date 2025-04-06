'use client';

import Banner from '@/Components/Banner/Banner';
import Navbar from '@/Components/Navbar/Navbar';
import { useEffect, useState } from 'react';

const images = [
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
    '/images/bg4.jpg',
];

export default function Hero() {
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prev) => (prev + 1) % images.length);
        }, 1500); // 1500 ms = 1.5 sec

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="absolute top-40 left-0 w-full h-screen bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${images[bgIndex]})` }}
        >
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Static content */}
            <div className="relative z-10">
                <Banner />
            </div>
        </div>
    );
}
