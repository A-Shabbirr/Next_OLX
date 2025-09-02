'use client'

import { useState } from 'react';
import React from 'react';
import styles from "@/components/Navbar/Navbar.module.css";
import { useRouter } from 'next/navigation';

const searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchTerm)
        // console.log(`/items?q=${encodeURIComponent(searchTerm)}&page=1`);
        router.push(`/items?q=${encodeURIComponent(searchTerm)}&page=1`)
        setSearchTerm('')
    }
    return (
        <form className={styles.second}
            onSubmit={handleSearch} >
            <input
                type="text"
                className={styles.second_search}
                placeholder="Search..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.search_svg} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' fill="white" viewBox="0 0 640 640">
                    <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                </svg>
                <h6 className={styles.search_heading}>Search</h6>
            </button>

        </form >
    );
}

export default searchbar;
