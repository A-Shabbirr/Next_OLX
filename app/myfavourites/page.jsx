'use client';
import styles from '@/app/(category)/[category]/cat.module.css';
import { useLiked } from '@/components/context/LikedItemContext';
import Image from "next/image";
import Link from "next/link";
import Heart from '@/components/Heart/Heart';
import { useData } from '@/components/lib/allData';


const page = () => {
    const data = useData()
    console.log(data);
    const { likedItemArray } = useLiked()
    const likedProducts = data.filter(item => likedItemArray.includes(item.id))
    console.log(likedProducts);




    return (
        <div className={styles.PV}>
            <div className={styles.child_top}>
                {likedProducts && likedProducts.map((item) => (
                    <div className={styles.api_cat} key={item.id}>
                        <div className={styles.heart_cat} key={item.id}>
                            <Heart productId={item.id} />
                        </div>
                        <div className={styles.api_ind}>
                            <Link
                                href={{
                                    pathname: `/item/${item.title.replace(/\s+/g, '-').toLowerCase()}-id-${item.id}`
                                }}
                                className={styles.child} key={item.id}>
                                <div className={styles.child_image}>
                                    {item.images &&
                                        <Image src={item.images[0]} width={250} height={250} alt="description"></Image>
                                    }
                                </div>
                                <div className={styles.child_detail}>
                                    <div className={styles.desc}>
                                        <div>
                                            <div className={styles.h_and_p}>
                                                <h6 className={styles.h_title}>
                                                    $ {item.price}
                                                </h6>
                                            </div>
                                            <p className={styles.h_para}>
                                                {item.title}
                                            </p>
                                            <p className={styles.h_desc}>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div>
                                            <p className={styles.h_para}>
                                                Manufacturer: {item.brand ? item.brand : 'Made Locally'}
                                            </p>
                                            <p className={styles.h_para}>
                                                Id: {item.id}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.chatt_call}>
                                        <button className={styles.call}>Call</button>
                                        <button className={styles.chat}>Chat</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className={styles.child_end}>hello im favourites page</div>
        </div>
    );
}

export default page;
