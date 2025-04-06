import React from 'react'

export default async function ProductPage() {
    const res = await fetch('http://localhost:3000/api/items', {
        cache: "force-cache"
    })
    const data = await res.json();
    return (
        <div>
            {
                data.map(singleProduct => {
                    return (
                        <li>{singleProduct?.productName}</li>
                    )
                })
            }
        </div>
    )
}
