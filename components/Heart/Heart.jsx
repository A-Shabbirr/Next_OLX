'use client'
import React, { useContext } from 'react';
import { useLiked } from '../context/LikedItemContext';
import styles from '@/app/page.module.css';


const heart = ({ productId }) => {
    const { likedItemArray, setLikedItemArray } = useLiked()
    // console.log(likedItemArray);
    const isLiked = likedItemArray.includes(productId)
    const toggleLike = (productId) => {
        setLikedItemArray((prev) => {
            let updated;
            if (prev.includes(productId)) {
                updated = prev.filter((itemId) => itemId !== productId);
            } else {
                updated = [...prev, productId];
            }
            localStorage.setItem('likedItems', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <div >
            <button
                onClick={() => toggleLike(productId)}
                className={styles.heart_icon}
            >
                {isLiked ? '❤️' : '🤍'}
            </button>

        </div>
    );
}

export default heart;
