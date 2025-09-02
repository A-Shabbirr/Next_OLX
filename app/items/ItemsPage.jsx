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
        <h1>search Results for {q} : {FilteredArray.length}</h1>
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
                    <button className={styles.call}>Call</button>
                    <button className={styles.chat}>Chat</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))
        }
        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
      <div className={styles.child_end}>
        <h1>
          hello im filtered page
        </h1>
      </div>
    </div>
  );
}
