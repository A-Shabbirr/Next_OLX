'use client'
import React, { useContext } from 'react';
import { useLiked } from '../context/LikedItemContext';


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
                style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    width: '32px',
                    height: '32px',
                    fontSize: '24px',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {isLiked ? '❤️' : '🤍'}
            </button>

        </div>
    );
}

export default heart;
