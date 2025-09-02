'use client';
import Image from "next/image";
import styles from "./Navbar.module.css";
import SearchBar from "./components/searchbar";
import Login from "./components/Login";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useParams } from "next/navigation";

const Navbar = () => {
  const param = useParams()
  // console.log(param.category);

  const [currentImage, setCurrentImage] = useState('/nfs.png');
  const cat = [
    {
      id: '1',
      title: 'Mobiles',
      image: '/mobile.png'
    },
    {
      id: '2',
      title: 'Vehicles',
      image: '/car.png'
    },
    {
      id: '3',
      title: 'Property For Sale',
      image: '/house.png'
    },
    {
      id: '4',
      title: 'Property For Rent',
      image: '/keychain.png'
    },
    {
      id: '5',
      title: 'Electronics & Home Appliances',
      image: '/camera.png'
    },
    {
      id: '6',
      title: 'Bikes',
      image: '/bike.png'
    },
    {
      id: '7',
      title: 'Business, Industrial & Agriculture',
      image: '/tractor.png'
    },
    {
      id: '8',
      title: 'Services',
      image: '/roller.png'
    },
    {
      id: '9',
      title: 'Jobs',
      image: '/bag.png'
    },
    {
      id: '10',
      title: 'Animals',
      image: '/chicken.png'
    },
    {
      id: '11',
      title: 'Furniture & Decor',
      image: '/chair.png'
    },
    {
      id: '12',
      title: 'Fashion & Beauty',
      image: '/dress.png'
    },
    {
      id: '13',
      title: 'Books, Sports & Hobbies',
      image: '/books.png'
    },
    {
      id: '14',
      title: 'Kids',
      image: '/blocks.png'
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
            <div className={styles.olx}>
              <Link
                href={{
                  pathname: '/'
                }}>
                <h4 className={styles.olx_heading}>o|x</h4>
              </Link>
            </div>
            <div className={styles.motor}>
              <Image className={styles.car} src='/car.png' alt="car" width={100} height={100} />
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
          <SearchBar />
        </div>

        <span className={styles.span}></span>
      </div>
      <div className={styles.Navbar_bottom}>
        <div className={styles.nav_menu}>
          <h6 className={styles.ac}>All Categories</h6>
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
            <p className={styles.p_ac}>Jewellery</p>
            <p className={styles.p_ac}>
              <Link
                href={{
                  pathname: './beauty'
                }}>
                Beauty
              </Link></p>
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
        <div className={styles.nav_image}>
          {currentImage === '/nfs.jpeg' && (
            <Image src="/nfs.jpeg" alt="nfs" width={1215} height={180} className={styles.image} />
          )}
          {currentImage === '/han.png' && (
            <Image src="/han.png" alt="han" width={1215} height={180} className={styles.image} />
          )}
        </div>
        <div className={styles.nav_cat}>
          {
            cat && cat.map((category) => (
              <div className={styles.cat_icon_div} key={category.id}>
                <Image src={category.image} alt="icon" width={50} height={50} className={styles.cat_icon} />
                <p className={styles.icon_para}>
                  {category.title}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
