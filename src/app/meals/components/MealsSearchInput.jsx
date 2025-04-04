"use client"
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react"


export default function MealsSearchInput() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParams = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParams}`
        router.push(url);
    }, [search])
    return (
        <>
            <input value={search} type="text" onChange={(e) => setSearch(e.target.value)}
                className="border bg-white rounded-2xl p-2 w-1/5 mb-6 text-black"
            />
        </>
    )
}
