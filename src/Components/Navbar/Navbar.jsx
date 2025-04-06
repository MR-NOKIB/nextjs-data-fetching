'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
    
    // Function to close the menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    // Pages dropdown menu items
    const pagesMenuItems = [
        { name: 'Service Details', href: '/service-details' },
        { name: 'Blog Details', href: '/blog-details' },
        { name: 'Projects', href: '/projects' },
        { name: 'Project Details', href: '/project-details' },
        { name: 'Our Team', href: '/our-team' },
        { name: 'Team Details', href: '/team-details' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Image Gallery', href: '/image-gallery' },
        { name: 'Video Gallery', href: '/video-gallery' },
        { name: 'FAQs', href: '/faqs' },
    ];

    return (
        <nav className='bg-white shadow-sm relative rounded-2xl max-w-[1300px] mx-auto'>
            <div className='mx-auto px-4 py-5'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div className='text-xl font-bold text-red-600'>Logo</div>
                    
                    {/* Desktop menu - centered */}
                    <ul className='hidden lg:flex mx-auto items-center font-semibold text-gray-600'>
                        <li><Link className='px-[20px] py-[16px] hover:text-red-600 transition-colors duration-300' href="/">Home</Link></li>
                        <li><Link className='px-[20px] py-[16px] hover:text-red-600 transition-colors duration-300' href="/about">About Us</Link></li>
                        <li><Link className='px-[20px] py-[16px] hover:text-red-600 transition-colors duration-300' href="/Blog">Services</Link></li>
                        <li><Link className='px-[20px] py-[16px] hover:text-red-600 transition-colors duration-300' href="/posts">Blog</Link></li>
                        <li><Link className='px-[20px] py-[16px] hover:text-red-600 transition-colors duration-300' href="/products"> Products</Link></li>
                        <li><Link className='px-[20px] py-[16px] hover:text-red-600 transition-colors duration-300' href="/products/add">Add Products</Link></li>
                        {/* Pages dropdown menu */}
                        <li 
                            className="relative px-[20px] py-[16px] hover:text-red-600 transition-colors duration-300"
                            onMouseEnter={() => setPagesDropdownOpen(true)}
                            onMouseLeave={() => setPagesDropdownOpen(false)}
                        >
                            <div className="flex items-center cursor-pointer">
                                <span>Pages</span>
                                <svg 
                                    className="w-4 h-4 ml-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            
                            {/* Pages dropdown - desktop */}
                            <div 
                                className={`
                                    absolute left-0 mt-2 w-56 
                                    bg-white rounded-lg shadow-lg z-20
                                    transition-all duration-300 ease-in-out
                                    ${pagesDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
                                `}
                            >
                                <ul className="py-2">
                                    {pagesMenuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link 
                                                href={item.href} 
                                                className="block px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                                                onClick={() => setPagesDropdownOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li><Link className='px-[20px] py-[16px] hover:text-red-600 transition-colors duration-300' href="/contact">Contact Us</Link></li>
                    </ul>

                    {/* Get A Quote Button */}
                    <div className='hidden lg:block'>
                        <Link href="/contact">
                            <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300'>
                                Get A Quote
                            </button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className='lg:hidden'>
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className='flex items-center justify-center p-2 z-20 relative bg-red-600 rounded-md w-10 h-10'
                        >
                            <svg 
                                className={`w-6 h-6 text-white ${isOpen ? 'hidden' : 'block'}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg 
                                className={`w-6 h-6 text-white ${isOpen ? 'block' : 'hidden'}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div 
                    className={`
                        lg:hidden absolute left-0 right-0 top-[83px] 
                        bg-red-600 rounded-2xl shadow-lg z-10 
                        transition-all duration-300 ease-in-out
                        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
                    `}
                >
                    <ul className='flex flex-col items-start gap-5 p-6 text-xl font-bold text-white'>
                        <li><Link href="/" className="text-white hover:text-white/80 transition-colors duration-300" onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/about" className="text-white hover:text-white/80 transition-colors duration-300" onClick={closeMenu}>About Us</Link></li>
                        <li><Link href="/Blog" className="text-white hover:text-white/80 transition-colors duration-300" onClick={closeMenu}>Services</Link></li>
                        <li><Link href="/posts" className="text-white hover:text-white/80 transition-colors duration-300" onClick={closeMenu}>Blog</Link></li>                         
                        
                        {/* Pages dropdown section for mobile */}
                        <li className="w-full">
                            <div 
                                className="flex items-center justify-between w-full text-white hover:text-white/80 transition-colors duration-300 cursor-pointer"
                                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                            >
                                <span>Pages</span>
                                <svg 
                                    className={`w-5 h-5 transition-transform ${pagesDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>                             
                            
                            {/* Pages dropdown - mobile */}
                            <div 
                                className={`
                                    pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out
                                    ${pagesDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                `}
                            >
                                {pagesMenuItems.map((item, index) => (
                                    <div key={index} className="py-1">
                                        <Link 
                                            href={item.href}
                                            className="text-white hover:text-white/80 transition-colors duration-300 text-lg"
                                            onClick={closeMenu}
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </li>
                        
                        <li><Link href="/contact" className="text-white hover:text-white/80 transition-colors duration-300" onClick={closeMenu}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
