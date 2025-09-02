'use client'
import React from 'react';
import styles from './similarads.module.css';

const BackButton = ({ onClick }) => {

    return (
            <button
                onClick={onClick}
                className={styles.backward}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    height="24"
                    width="24"
                    style={{ fill: '#000', transition: 'fill 0.3s', cursor: 'pointer' }}
                    onMouseOver={(e) => (e.currentTarget.style.fill = '#555')}
                    onMouseOut={(e) => (e.currentTarget.style.fill = '#000')}
                >
                    <path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z" />
                </svg>
            </button>
      
    );
}

export default BackButton;
