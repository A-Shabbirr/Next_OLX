
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Heart from '@/components/Heart/Heart'
import HomeClient from "@/components/context/HomeClient";
export default async function Home() {

  const limit = 30
  const total = 194
  const allProducts = []

  for (let skip = 0; skip < total; skip += limit) {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    const data = await response.json()
    allProducts.push(...data.products)
  }

  const categorizedProducts = {}
  allProducts.forEach(product => {
    const category = product.category
    if (!categorizedProducts[category]) {
      categorizedProducts[category] = []
    }
    categorizedProducts[category].push(product)
  })
  return (
    <div className={styles.page}>
      {
        (
          Object.entries(categorizedProducts).map(([item, products]) =>
            <div className={styles.api} key={item}>
              <div className={styles.api_first}>
                <h6 className={styles.vm_heading}>
                  {item}
                </h6>
                <Link
                  href={{
                    pathname: `/${item}`
                  }}
                >
                  <button className={styles.vm_button}>
                    View More
                  </button>
                </Link>
              </div>
              <div className={styles.api_card}>
                {products && products.slice(0, 4).map((product) =>
                  <div className={styles.api_list} key={product.id}>
                    <div className={styles.main_heart} >
                      <Heart productId={product.id} />
                    </div>
                    <Link
                      href={{
                        pathname: `/item/${product.title.replace(/\s+/g, '-').toLowerCase()}-id-${product.id}`
                      }}
                    >
                      <div className={styles.api_image}>
                        {product.images &&
                          <Image src={product.images[0]} width={250} height={250} alt="description" loading="lazy"></Image>
                        }
                      </div>
                      <div className={styles.api_list_detail}>
                        <div className={styles.p_heart}>
                          <h6 className={styles.price_heading}>
                            $ {product.price}
                          </h6>
                        </div>
                        <p>
                          {product.title}
                        </p>
                        <p className={styles.api_rating1}>
                          {product.rating}
                        </p>
                        <p className={styles.api_rating2}>
                          {product.brand ? product.brand : 'Local Manufacturer'}
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )
        )
      }
      <div>
        <HomeClient allProducts={allProducts} categorizedProducts={categorizedProducts} />
      </div>
    </div >
  )
}