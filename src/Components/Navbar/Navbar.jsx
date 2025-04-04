import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='h-[70px] place-items-center py-10'>
            <ul className='flex gap-10 text-xl font-bold'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/Blog"></Link>Blog</li>
                <li><Link href="/posts">Post</Link></li>
                <li><Link href="/meals">Meals</Link></li>
            </ul>
        </div>
    )
}
