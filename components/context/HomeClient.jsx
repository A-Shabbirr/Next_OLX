'use client';

import { LikedItemContext, useLiked } from '@/components/context/LikedItemContext';
import Heart from '@/components/Heart/Heart';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/context/hc.module.css';

export default function HomeClient({ allProducts }) {
    const { likedItemArray } = useLiked(LikedItemContext);
    // console.log(likedItemArray);
    const likedProducts = allProducts.filter(product => likedItemArray.includes(product.id));

    return (
        <div className={styles.page}>
            <div className={styles.api_first}>
                <h6 className={styles.vm_heading}>
                    Liked Items
                </h6>
                <Link
                    href={{
                        pathname: './myfavourites'
                    }}
                >
                    <button className={styles.vm_button}>
                        View More
                    </button>
                </Link>
            </div>
            <div className={styles.api_card}>
                {likedProducts.slice(0, 4).map(product => (
                    <div className={styles.api_list} key={product.id}>
                        <div className={styles.main_heart}>
                            <Heart productId={product.id} />
                        </div>
                        <Link href={`/item/${product.title.replace(/\s+/g, '-').toLowerCase()}-id-${product.id}`}>
                            <div className={styles.api_image}>
                                {product.images?.[0] && (
                                    <Image src={product.images[0]} width={250} height={250} alt="Product" loading="lazy" />
                                )}
                            </div>
                            <div className={styles.api_list_detail}>
                                <div className={styles.p_heart}>
                                    <h6 className={styles.price_heading}>$ {product.price}</h6>
                                </div>
                                <p>{product.title}</p>
                                <p className={styles.api_rating1}>{product.rating}</p>
                                <p className={styles.api_rating2}>{product.brand || 'Local Manufacturer'}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}