'use client'

import { useData } from "@/components/lib/allData";
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from "@/app/(category)/[category]/cat.module.css";
import Heart from '@/components/Heart/Heart'
import Link from "next/link";
import Image from "next/image";



export default function ItemsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = Number(searchParams.get('page')) || 1;
  const q = searchParams.get('q')
  console.log(q);

  const data = useData()
  console.log(data)
  const [FilteredArray, setFilteredArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageParam);
  const itemsPerPage = 6;

  useEffect(() => {
    if (q) {
      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(q.toLowerCase())
      )
      setFilteredArray(filtered)
    } else {
      setFilteredArray(data)
    }
  }, [q]);
  console.log(FilteredArray);
  const totalPages = Math.ceil(FilteredArray.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FilteredArray.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      router.push(`/items?q=${q}&page=${nextPage}`)
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1
      setCurrentPage(previousPage);
      router.push(`/items?q=${q}&page=${previousPage}`)
    }
  };

  useEffect(() => {
    const newPage = Number(searchParams.get('page')) || 1;
    setCurrentPage(newPage)
  }, [searchParams]);



  return (
    <div className={styles.PV}>
      <div className={styles.child_top}>
        <div className={styles.child_top_top}>
          <h3 className={styles.child_top_heading}>Search Results for <strong>"{q}"</strong> : {FilteredArray.length} items</h3>
          {currentItems && currentItems.map((item) => (
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
                      <button className={styles.call}>
                        <h4>
                          Call
                        </h4>
                      </button>
                      <button className={styles.chat}>
                        <h4>
                          Chat
                        </h4>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
          }
        </div>
        <div className={styles.pagination}>
          <button
            className={styles.p_B_button}
            onClick={handlePrevPage} disabled={currentPage === 1}>
            <h4>Previous</h4>
          </button>
          <span>Page <strong className={styles.pages_number}>{currentPage}</strong> of <strong className={styles.pages_number}>{totalPages}</strong></span>
          <button
            className={styles.p_N_button}
            onClick={handleNextPage} disabled={currentPage === totalPages}>
            <h4>Next</h4>
          </button>
        </div>
      </div>
      <div className={styles.child_end}>
        <h1 className={styles.child_heading}>
          hello im Filtered page - Filter  Section
        </h1>
      </div>
    </div>
  );
}
