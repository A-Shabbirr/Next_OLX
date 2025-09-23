'use client';
import React, { useRef, useState, useEffect } from 'react';
import styles from "../Footer.module.css";
import Link from 'next/link';
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
    const [activeSection, setActiveSection] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

    const reset = useRef(null)
    const handleToggle = () => {
        setIsActive((prev) => !prev);
    };
    const handleListToggle = (section) => {
        setActiveSection(prev => (prev === section ? null : section));
    };
    const handleLinkToggle = (index) => {
        setOpenCategoryIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (reset.current && !reset.current.contains(event.target)) {
                setIsActive(false);
                setIsOpen(false);
                setOpenCategoryIndex(null);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsActive(false);
                setIsOpen(false);
                setOpenCategoryIndex(null);
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
            <div className={styles.Open}>
                <h6 className={styles.bottom_heading}>Categories</h6>
                <svg
                    className={`${styles.VL} ${isActive ? styles.active : styles.not_active}`}
                    width="30"
                    height="30"
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
            </div>
            <div className={isActive ? styles.list_div_toggle : styles.list_div}>
                {categories.map((category, index) => {
                    const isCategoryOpen = openCategoryIndex === index;

                    return (
                        <div className={styles.div_one} key={index}>
                            <div className={styles.bottom_cat_link}>
                                <h6 className={styles.bottom_heading}>{category.title}</h6>
                                <svg
                                    className={`${styles.FL} ${isCategoryOpen ? styles.FL_active : styles.FL_not_active}`}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => handleLinkToggle(index)}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                            <div className={`${styles.last_link} ${isCategoryOpen ? styles.last_link_active : styles.last_link_not_active}`}>
                                {category.items.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className={styles.FL}
                                        title={item}
                                        onClick={() => setIsActive(false)}
                                    >
                                        <h6 className={styles.last_link_heading}>{item}</h6>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className={styles.bottom_first_1}>
                <div className={styles.Open_cat}>
                    <h6 className={styles.bottom_heading}>Popular Categories</h6>
                    <svg
                        className={`${styles.VL} ${activeSection === 'first' ? styles.active : styles.not_active}`}
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleListToggle('first')}
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                <div className={activeSection === 'first' ? styles.Footer_svg_list_active : styles.Footer_svg_list_not_active}>
                    <p className={styles.last_link_heading}>Cars</p>
                    <p className={styles.last_link_heading}>Flats for Rent</p>
                    <p className={styles.last_link_heading}>Mobile Phones</p>
                    <p className={styles.last_link_heading}>Jobs</p>
                </div>
            </div>
            <div className={styles.bottom_two_2}>
                <div className={styles.Open_cat}>
                    <h6 className={styles.bottom_heading}>Trending Searches</h6>
                    <svg
                        className={`${styles.VL} ${activeSection === 'second' ? styles.active : styles.not_active}`}
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleListToggle('second')}
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div >
                <div className={activeSection === 'second' ? styles.Footer_svg_list_active : styles.Footer_svg_list_not_active}>
                    <p className={styles.last_link_heading}>Bikes</p>
                    <p className={styles.last_link_heading}>Watches</p>
                    <p className={styles.last_link_heading}>Books</p>
                    <p className={styles.last_link_heading}>Dogs</p>
                </div>
            </div>
            <div className={styles.bottom_three_3}>
                <div className={styles.Open_cat}>
                    <h6 className={styles.bottom_heading}>About Us</h6>
                    <svg
                        className={`${styles.VL} ${activeSection === 'third' ? styles.active : styles.not_active}`}
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleListToggle('third')}
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                <div className={activeSection === 'third' ? styles.Footer_svg_list_active : styles.Footer_svg_list_not_active}>
                    <p className={styles.last_link_heading}>About Dubizzle Group</p>
                    <p className={styles.last_link_heading}>OLX Blog</p>
                    <p className={styles.last_link_heading}>Contact Us</p>
                    <p className={styles.last_link_heading}>OLX for Businesses</p>
                </div>
            </div>
            <div className={styles.bottom_four_4}>
                <div className={styles.Open_cat}>
                    <h6 className={styles.bottom_heading}>OLX</h6>
                    <svg
                        className={`${styles.VL} ${activeSection === 'fourth' ? styles.active : styles.not_active}`}
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleListToggle('fourth')}
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                <div className={activeSection === 'fourth' ? styles.Footer_svg_list_active : styles.Footer_svg_list_not_active}>
                    <p className={styles.last_link_heading}>Help</p>
                    <p className={styles.last_link_heading}>Sitemap</p>
                    <p className={styles.last_link_heading}>Terms of Use</p>
                    <p className={styles.last_link_heading}>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}

export default Body;
