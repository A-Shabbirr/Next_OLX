'use client'
import { usePathname } from 'next/navigation';
import styles from "./Footer.module.css";
import Image from "next/image";
import FooterComponent from '../Footer/component/FooterComponent';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isItemPage = pathname.startsWith('/item/');
  const isCategoryPage = !isHomePage && !isItemPage;
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_first}>
          <h2 className={styles.heading_one}>Find amazing deals on the go.</h2>
          <h2 className={styles.heading_two}>Dowload OLX app now!</h2>
        </div>
        <div className={styles.footer_second}>
          <Image className={styles.footer_pic}
            src='/mobiles.jpg'
            width={300}
            height={150}
            alt='mobiles'
          >
          </Image>
        </div>
        <div className={styles.footer_third}>
          <button className={styles.button}>
            <svg xmlns="http://www.w3.org/2000/svg"
              className={styles.button_svg}
              viewBox="0 0 640 640"
              fill='white'
              width={30}
              height={30}>
              <path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" /></svg>
            <div className={styles.heading_div}>
              <h6 className={styles.button_heading}>
                Download on the
              </h6>
              <h6 className={styles.heading_app}>
                APP STORE
              </h6>
            </div>
          </button>
          <button className={styles.button}>
            <Image className={styles.button_svg} src='/playstore.svg' width={25} height={25} alt='apple icon'></Image>
            <div className={styles.heading_div}>
              <h6 className={styles.button_heading}>
                Get it on
              </h6>
              <h6 className={styles.heading_app}>
                Google Play
              </h6>
            </div>
          </button>
          <button className={styles.button}>
            <Image className={styles.button_svg} src='/huawei.png' width={25} height={25} alt='apple icon'></Image>
            <div className={styles.heading_div}>
              <h6 className={styles.button_heading}>
                Explore it on
              </h6>
              <h6 className={styles.heading_app}>
                AppGallery
              </h6>
            </div>
          </button>
        </div>
        <div className={styles.footer_four}>
          <div className={styles.four_two}>
            <h2 className={styles.heading_res_1}>Get the OLX App</h2>
            <h2 className={styles.heading_res}>Buy, Sell and find just about anything using the app on your mobile.</h2>
            <button className={styles.button_res}>
              <Image className={styles.button_svg_res} src='/playstore.svg' width={25} height={25} alt='apple icon'></Image>
              <div className={styles.heading_div}>
                <h6 className={styles.button_heading_res}>
                  Get it on
                </h6>
                <h6 className={styles.heading_app_res}>
                  Google Play
                </h6>
              </div>
            </button>
          </div>
          <div className={styles.four_one}>
            <Image className={styles.footer_four_pic}
              src='/mobiles.jpg'
              width={300}
              height={150}
              alt='mobiles'
            >
            </Image>
          </div>
        </div>
      </div>
      <div className={styles.footer_mid}></div>
      <div className={styles.footer_bottom}>
        <FooterComponent />
        <div className={styles.bottom_first}>
          <div className={styles.Open_cat}>
            <h6 className={styles.bottom_heading}>Popular Categories</h6>
            <svg
              className={styles.Footer_svg}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className={styles.Footer_svg_list}>
            <p className={styles.para}>Cars</p>
            <p className={styles.para}>Flats for Rent</p>
            <p className={styles.para}>Mobile Phones</p>
            <p className={styles.para}>Jobs</p>
          </div>
        </div>
        <div className={styles.bottom_two}>
          <div className={styles.Open_cat}>
            <h6 className={styles.bottom_heading}>Trending Searches</h6>
            <svg
              className={styles.Footer_svg}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div >
          <div className={styles.Footer_svg_list}>
            <p className={styles.para}>Bikes</p>
            <p className={styles.para}>Watches</p>
            <p className={styles.para}>Books</p>
            <p className={styles.para}>Dogs</p>
          </div>
        </div>
        <div className={styles.bottom_three}>
          <div className={styles.Open_cat}>
            <h6 className={styles.bottom_heading}>About Us</h6>
            <svg
              className={styles.Footer_svg}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className={styles.Footer_svg_list}>
            <p className={styles.para}>About Dubizzle Group</p>
            <p className={styles.para}>OLX Blog</p>
            <p className={styles.para}>Contact Us</p>
            <p className={styles.para}>OLX for Businesses</p>
          </div>
        </div>
        <div className={styles.bottom_four}>
          <div className={styles.Open_cat}>
            <h6 className={styles.bottom_heading}>OLX</h6>
            <svg
              className={styles.Footer_svg}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className={styles.Footer_svg_list}>
            <p className={styles.para}>Help</p>
            <p className={styles.para}>Sitemap</p>
            <p className={styles.para}>Terms of Use</p>
            <p className={styles.para}>Privacy Policy</p>
          </div>
        </div>
        <div className={styles.bottom_five}>
          <h6 className={styles.bottom_heading5}>Follow Us</h6>
          <div className={styles.bottom_button}>
            <button className={styles.social_button}>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={25}
                height={25}
              >
                <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
              </svg>
            </button>
            <button className={styles.social_button}>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={25}
                height={25}
              >
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
              </svg>
            </button>
            <button className={styles.social_button}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                width={25}
                height={25}
              >
                <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
              </svg>
            </button>
            <button className={styles.social_button}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                width={25}
                height={25}
              >
                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer_final}>
        <div className={styles.bottom_five_res}>
          <div className={styles.bottom_button_res}>
            <button className={styles.social_button_res}>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={25}
                height={25}
              >
                <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
              </svg>
            </button>
            <button className={styles.social_button_res}>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={25}
                height={25}
              >
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
              </svg>
            </button>
            <button className={styles.social_button_res}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                width={25}
                height={25}
              >
                <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
              </svg>
            </button>
            <button className={styles.social_button_res}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                width={25}
                height={25}
              >
                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
              </svg>
            </button>
          </div>
        </div>
        <h5 className={styles.final_heading}>
          Classified In Pakistan. © 2006-2025 OLX
        </h5>
      </div>
      <div className={styles.footer_res}>
        {isHomePage ? (
          <div className={styles.footer_res_Home}>
            <div className={styles.footer_res_item}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                width="25" height="25"
              >
                <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM208 496C208 451.8 243.8 416 288 416L352 416C396.2 416 432 451.8 432 496C432 504.8 424.8 512 416 512L224 512C215.2 512 208 504.8 208 496z" />
              </svg>
              <p className={styles.footer_p_heading}>Home</p>
            </div>
            <div className={styles.footer_res_item}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                width="25" height="25">
                <path d="M108.2 322.7C114.3 307.5 112.2 290.1 102.6 276.8C88.1 256.7 80 233.1 80 208C80 141.2 140.5 80 224 80C307.5 80 368 141.2 368 208C368 274.8 307.5 336 224 336C208.1 336 192.9 333.7 178.7 329.5C168.4 326.4 157.3 327 147.3 331L96.9 351.2L108.3 322.7zM32 208C32 243.8 43.6 277.1 63.7 304.8L33.9 379.2C32.6 382.4 32 385.8 32 389.2C32 404 44 416 58.8 416C62.2 416 65.6 415.3 68.8 414.1L165.1 375.6C183.7 381.1 203.5 384 224 384C330 384 416 305.2 416 208C416 110.8 330 32 224 32C118 32 32 110.8 32 208zM416 576C436.6 576 456.3 573 474.9 567.6L571.2 606.1C574.4 607.4 577.8 608 581.2 608C596 608 608 596 608 581.2C608 577.8 607.3 574.4 606.1 571.2L576.4 496.8C596.4 469 608.1 435.7 608.1 400C608.1 317.6 546.4 248.5 463.1 229.3C461.5 245.6 458 261.2 453 276.2C516.9 291 560.2 343.5 560.2 400.1C560.2 425.2 552.1 448.8 537.6 468.9C528 482.2 525.9 499.5 532 514.8L543.4 543.3L493 523.1C483 519.1 471.9 518.6 461.6 521.6C447.4 525.8 432.2 528.1 416.3 528.1C344.1 528.1 289.2 482.4 275.6 426.9C260 430.1 243.9 431.9 227.5 432.1C243.9 514 322.2 576.1 416.3 576.1z" />
              </svg>
              <p className={styles.footer_p_heading}>Chat</p>
            </div>
            <div className={styles.sell_F}>
              <h5 className={styles.sell_heading}>Sell</h5>
            </div>
            <div className={styles.footer_res_item}>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="25" height="25"
                viewBox="0 0 640 640">
                <path d="M128 192C110.3 192 96 206.3 96 224C96 241.7 110.3 256 128 256L512 256C529.7 256 544 241.7 544 224C544 206.3 529.7 192 512 192L128 192zM128 384C110.3 384 96 398.3 96 416C96 433.7 110.3 448 128 448L512 448C529.7 448 544 433.7 544 416C544 398.3 529.7 384 512 384L128 384z" />
              </svg>
              <p className={styles.footer_p_heading}>My Ads</p>
            </div>
            <div className={styles.footer_res_item}>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="25" height="25"
                viewBox="0 0 640 640">
                <path d="M224 192C224 139 267 96 320 96C373 96 416 139 416 192C416 245 373 288 320 288C267 288 224 245 224 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM128 544C128 464.5 192.5 400 272 400L368 400C447.5 400 512 464.5 512 544L512 560C512 568.8 519.2 576 528 576C536.8 576 544 568.8 544 560L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 560C96 568.8 103.2 576 112 576C120.8 576 128 568.8 128 560L128 544z" />
              </svg>
              <Link href={{
                pathname: '/login'
              }}>
                <p className={styles.footer_p_heading}>
                  Account
                </p>
              </Link>
            </div>
          </div>
        ) : isItemPage ? (
          <div className={styles.button_res_call}>
            <button className={styles.call_button}>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 512 512" fill="white" stroke="currentColor"
                strokeWidth="45">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <h6 className={styles.call_Button_heading}>Call</h6>
            </button>
            <button className={styles.chat_button}>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="20" height="20" viewBox="0 0 512 512" fill="Black" stroke="white" strokeWidth="1">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <h6 className={styles.chat_Button_heading}>Chat</h6>
            </button>
          </div>
        ) : isCategoryPage ? (
          <>
            <div className={styles.sell_F}>
              <h5 className={styles.sell_heading}>Sell</h5>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Footer;
