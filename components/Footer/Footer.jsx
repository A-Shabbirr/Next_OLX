import React from 'react';
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
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
        <div className={styles.bottom_first}>
          <h6 className={styles.bottom_heading}>Popular Categories</h6>
          <p className={styles.para}>Cars</p>
          <p className={styles.para}>Flats for Rent</p>
          <p className={styles.para}>Mobile Phones</p>
          <p className={styles.para}>Jobs</p>
        </div>
        <div className={styles.bottom_two}>
          <h6 className={styles.bottom_heading}>Trending Searches</h6>
          <p className={styles.para}>Bikes</p>
          <p className={styles.para}>Watches</p>
          <p className={styles.para}>Books</p>
          <p className={styles.para}>Dogs</p>
        </div>
        <div className={styles.bottom_three}>
          <h6 className={styles.bottom_heading}>About Us</h6>
          <p className={styles.para}>About Dubizzle Group</p>
          <p className={styles.para}>OLX Blog</p>
          <p className={styles.para}>Contact Us</p>
          <p className={styles.para}>OLX for Businesses</p>
        </div>
        <div className={styles.bottom_four}>
          <h6 className={styles.bottom_heading}>OLX</h6>
          <p className={styles.para}>Help</p>
          <p className={styles.para}>Sitemap</p>
          <p className={styles.para}>Terms of Use</p>
          <p className={styles.para}>Privacy Policy</p>
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
    </div>
  );
}

export default Footer;
