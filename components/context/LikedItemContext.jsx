'use client'
import { useContext, createContext, useState, useEffect } from "react";

export const LikedItemContext = createContext();
export const LikedItemProvider = ({ children }) => {
    const [likedItemArray, setLikedItemArray] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    // console.log(likedItemArray);
    // console.log(allProducts);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('likedItems');
            if (stored) {
                setLikedItemArray(JSON.parse(stored));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('likedItems', JSON.stringify(likedItemArray));
        }
    }, [likedItemArray]);

    useEffect(() => {
    }, [likedItemArray]);

    useEffect(() => {
        localStorage.setItem('likedItems', JSON.stringify(likedItemArray))
    }, [likedItemArray]);

    return (
        <LikedItemContext.Provider value={{ likedItemArray, setLikedItemArray, allProducts, setAllProducts }}>
            {children}
        </LikedItemContext.Provider>
    )
}

export const useLiked = () => useContext(LikedItemContext);
