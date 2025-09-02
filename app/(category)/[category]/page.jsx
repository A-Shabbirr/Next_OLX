import Image from "next/image";
import Link from "next/link";
import styles from "./cat.module.css";
import Heart from '@/components/Heart/Heart'

const page = async ({ params }) => {
  const { category } = await params
  console.log(category);

  // const categorySlug = params.category;
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data = await res.json();
  const categoryArray = [...data.products]
  // console.log(categoryArray);

  return (
    <div className={styles.PV}>
      <div className={styles.child_top}>
        {categoryArray && categoryArray.map((item) => (
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
      <div className={styles.child_end}>
        <h1>
          hello im category page
        </h1>
      </div>
    </div>
  );
};

export default page;
