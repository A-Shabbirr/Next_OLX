'use client';
import React, { useRef, useState, useEffect } from 'react';
import styles from "../Navbar.module.css";
import Link from 'next/link';

// Define your data
const categories = [
    {
        title: 'Mobile Phones',
        items: [
            'smartphones',
            'mobile-accessories',
            'laptops',
            'Smart Watches',
            'tablets'
        ],
    },
    {
        title: 'Automobiles',
        items: [
            'motorcycle',
            'vehicle'
        ],
    },
    {
        title: 'Fashion',
        items: [
            'women-dresses',
            'womens-bags',
            'women-shoes',
            'women-jewellery',
            'women-watches',
            'tops',
            'beauty',
            'fragrances',
            'mens-shoes',
            'mens-shirts',
            'skin-care',
            'sunglasses',
            'Tops'
        ],
    },
    {
        title: 'Miscellaneous',
        items: [
            'sports-accessories',
            'kitchen-accessories',
            'home-decoration',
            'furniture',
            'groceries'
        ],
    },
];

function Body() {
    const [isActive, setIsActive] = useState(false);
    const reset = useRef(null)
    const handleToggle = () => {
        setIsActive(!isActive);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (reset.current && !reset.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={styles.Body} ref={reset}>
            <svg
                className={`${styles.VL} ${isActive ? styles.active : styles.not_active}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleToggle}
            >
                <polyline points="6 9 12 15 18 9" />
            </svg>

            <div className={isActive ? styles.list_div_toggle : styles.list_div}>
                {categories.map((category, index) => (
                    <div key={index} className={styles.div_one}>
                        <div className={styles.Item}>
                            <h6 className={styles.HI}>{category.title}</h6>
                            {category.items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={styles.link_div}
                                    title={item}
                                    onClick={() => setIsActive(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Body;
