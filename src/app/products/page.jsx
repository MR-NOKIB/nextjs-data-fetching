import { redirect } from 'next/navigation';
import React from 'react'

// This makes the page dynamic instead of static
export const dynamic = 'force-dynamic';

export default async function ProductPage() {
    try {
        const res = await fetch('/api/items', {
            cache: "no-store"
        });
        
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }
        
        const data = await res.json();

        return (
            <div>
                {
                    data.map(singleProduct => {
                        return (
                            <li key={singleProduct._id} className='text-center'>{singleProduct?.productName}</li>
                        )
                    })
                }
            </div>
        )
    } catch (error) {
        console.error('Error fetching products:', error);
        return <div>Error loading products. Please try again later.</div>
    }
}
