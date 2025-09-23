'use client';
import Image from "next/image";
import styles from "./Navbar.module.css";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import Body from "./components/Body";

const Navbar = () => {
  const param = useParams()
  const pathname = usePathname()
  // console.log(param.category);

  const [currentImage, setCurrentImage] = useState('/nfs.png');
  const cat = [
    {
      id: '1',
      title: 'Mobiles',
      image: '/mobile.png',
      link: './smartphones'

    },
    {
      id: '2',
      title: 'Vehicles',
      image: '/keychain.png',
      link: './vehicle'
    },
    {
      id: '3',
      title: 'Laptops',
      image: '/laptop.png',
      link: './laptop'
    },
    {
      id: '4',
      title: 'Sports',
      image: '/sports.png',
      link: './sports-accessories'
    },
    {
      id: '5',
      title: 'Electronics & Home Appliances',
      image: '/camera.png',
      link: './mobile-accessories'
    },
    {
      id: '6',
      title: 'Bikes',
      image: '/bike.png',
      link: './motorcycle'
    },
    {
      id: '7',
      title: 'Sunglasses',
      image: '/sunglasses.png',
      link: './sunglasses'
    },
    {
      id: '8',
      title: 'Skin-care',
      image: '/skincare.png',
      link: './skin-care'
    },
    {
      id: '9',
      title: 'Clutches & Bags',
      image: '/purse.png',
      link: './womens-bags'
    },
    {
      id: '10',
      title: 'Perfumes & Scents',
      image: '/fragrances.png',
      link: './fragrances'
    },
    {
      id: '11',
      title: 'Furniture & Decor',
      image: '/chair.png',
      link: './furniture'
    },
    {
      id: '12',
      title: 'Fashion',
      image: '/dress.png',
      link: './beauty'
    },
    {
      id: '13',
      title: 'Decoration',
      image: '/shelf.png',
      link: './home-decoration'
    },
    {
      id: '14',
      title: 'Kitchen',
      image: '/food.png',
      link: './kitchen-accessories'
    }
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage =>
        prevImage === '/nfs.jpeg' ? '/han.png' : '/nfs.jpeg'
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.navbar_main}>
      <div className={styles.navbar}>
        <div className={styles.main}>
          <div className={styles.head}>
            <Link className={styles.olx}
              href={{
                pathname: '/'
              }}>
              <div >
                <h4 className={styles.olx_heading}>o|x</h4>
              </div>
            </Link>
            <div className={styles.motor}>
              <Image className={styles.car} src='/car.png' alt="car" width={500} height={100} />
              <h5 className={styles.motor_heading}>Motor</h5>
            </div>
            <div className={styles.property}>
              <Image className={styles.house} src='/house.png' alt="house" width={100} height={100} />
              <h5 className={styles.house_heading}>Property</h5>
            </div>
          </div>
          <div className={styles.login}>
            <Login>Login</Login>
            <div className={styles.sell}>
              <h5 className={styles.sell_heading}>Sell</h5>
            </div>
          </div>
        </div>
        <div className={styles.searchbox}>
          <div className={styles.first}>
            <Image className={styles.location} src='/location.png' width={25} height={25} alt="location" />
            <input
              className={styles.first_search}
              type="text"
              placeholder="Pakistan"
              aria-label="Location"
            />
          </div>
          <div className={styles.search_fav}>
            <SearchBar categoryArray={cat} className={styles.search_updated} />
            <div className={styles.fav}>
              <Link
                href={{
                  pathname: './myfavourites'
                }}
              >
                <button className={styles.vm_button}>
                  🤍
                </button>
              </Link>
            </div>
          </div>
        </div>
        <span className={styles.span}></span>
      </div>
      <div className={styles.Navbar_bottom}>
        <div className={styles.nav_menu}>
          <div className={styles.toggle}>
            <h6 className={styles.ac}>All Categories</h6>
            <Body />
          </div>
          <div className={styles.content}>
            <p className={styles.p_ac}>
              <Link
                href={{
                  pathname: './smartphones'
                }}>
                Mobile Phones
              </Link>
            </p>
            <p className={styles.p_ac}>
              <Link
                href={{
                  pathname: './vehicle'
                }}>
                Cars
              </Link>
            </p>
            <p className={styles.p_ac}>
              <Link
                href={{
                  pathname: './motorcycle'
                }}>
                Motocycles
              </Link>
            </p>
            <p className={styles.p_ac}>
              <Link
                href={{
                  pathname: './tablets'
                }}>
                Tablets
              </Link>
            </p>
            <p className={styles.p_ac}><Link
              href={{
                pathname: './womens-jewellery'
              }}>
              jewellery
            </Link>
            </p>
            <p className={styles.p_ac}>
              <Link
                href={{
                  pathname: './beauty'
                }}>
                Beauty
              </Link>
            </p>
            <p className={styles.p_ac}><Link
              href={{
                pathname: './furniture'
              }}>
              Furniture
            </Link>
            </p>
            <p className={styles.p_ac}>
              <Link
                href={{
                  pathname: './sports-accessories'
                }}>
                Sports
              </Link>
            </p>
          </div>
        </div>
        {pathname === '/' && (
          <>
            <div className={styles.nav_image}>
              {currentImage === '/nfs.png' && (
                <Image src="/nfs.png" alt="nfs" width={1215} height={180} className={styles.image} />
              )}
              {currentImage === '/han.png' && (
                <Image src="/han.png" alt="han" width={1215} height={180} className={styles.image} />
              )}
            </div>
            <div className={styles.nav_cat}>
              {
                cat && cat.map((category) => (
                  <Link key={category.id} href={`./${category.link}`}>
                    <div className={styles.cat_icon_div} key={category.id}>
                      <Image src={category.image} alt="icon" width={50} height={50} className={styles.cat_icon} />
                      <p className={styles.icon_para}>
                        {category.title}
                      </p>
                    </div>
                  </Link>
                ))
              }
            </div>
          </>
        )
        }
      </div>
    </div>
  );
};

export default Navbar;
