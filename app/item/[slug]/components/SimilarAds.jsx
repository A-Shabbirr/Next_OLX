'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './similarads.module.css';
import ForwardButton from './ForwardButton';
import BackButton from './BackButton';
import Heart from '@/components/Heart/Heart'

const SimilarAds = ({ categoryArray, startIndex, categoryname }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    console.log(categoryname);
    // categoryArray = array of products i.e. 5
    // startIndex = currentIndex + 1
    // threeArray => newArray of similarads
    const getStartArray = (startIndex) => {
        const threeArray = []
        for (let i = 0; i < 3; i++) {
            const index = (startIndex + i) % categoryArray.length
            threeArray.push(categoryArray[index])
        }
        return threeArray
    }
    const next = () => setCurrentIndex((prev) => (prev + 1) % categoryArray.length);
    const back = () => setCurrentIndex((prev) => (prev - 1 + categoryArray.length) % categoryArray.length);

    const productsArr = getStartArray(currentIndex);

    return (
        <div className={styles.similar_ads}>
            <h3>Similar {categoryname} Ads</h3>
            <BackButton onClick={back} />
            <ForwardButton onClick={next} />
            <div className={styles.Car_List_below_Heading}>
                {productsArr.map((item) => (
                    <div className={styles.heart_div} key={item.id}>
                        <div className={styles.Similar_Cars_scroll}>
                            <div className={styles.Similar_cars_Example}>
                                <div className={styles.Similar_hearts}>
                                    <Heart productId={item.id} />
                                </div>
                                <Link
                                    href={`/item/${item.title.replace(/\s+/g, '-').toLowerCase()}-id-${item.id}`}
                                    className={styles.api_list}
                                >
                                    <div className={styles.similar_Cars_List}>
                                        <div className={styles.similar_Cars_List_img}>
                                            <Image src={item.images[0]} width={150} height={150} alt="description" />
                                        </div>
                                        <div className={styles.similar_Cars_List_rest}>
                                            <div className={styles.price_SVG}>
                                                <h4 className={styles.rest_heading}>$ {item.price}</h4>
                                            </div>
                                            <h6 className={styles.Second_heading_mobile}>{item.title}</h6>
                                            <div className={styles.third_Line_mobile}>
                                                <h6 className={styles.Third_heading_mobile}>{item.brand}</h6>
                                                <ul className={styles.third_Fourth}>
                                                    <li className={styles.Second_heading}>
                                                        {item.reviews?.length > 0
                                                            ? new Date(item.reviews[0].date).toLocaleDateString()
                                                            : '2010'}
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className={styles.address}>Quaid-e-Azam Industrial Estate, Lahore</p>
                                            <p className={styles.Time}>4 weeks ago</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default SimilarAds;
