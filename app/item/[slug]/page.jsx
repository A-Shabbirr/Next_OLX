import Image from "next/image";
import styles from "./item.module.css";
import SimilarAds from "./components/SimilarAds";
import ImageDisplay from "./components/ImageDisplay";
import Heart from '@/components/Heart/Heart'

const page = async ({ params }) => {
  let item = {};
  let categoryArray = [];
  let cat = '';
  let currentIndex = 0;
  // console.log(params);
  // console.log(params.slug);
  const { slug } = await params
  // console.log(params);
  // console.log(slug);
  const id = Number(slug?.split("-id-")?.pop());
  // console.log(typeof id);
  // console.log(id);

  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json();
  item = data
  cat = data.category

  if (cat !== null || undefined) {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${cat}`)
      const result = await response.json()
      categoryArray = result.products
      if (categoryArray !== null || undefined && result.products.length > 0) {
        const productId = categoryArray.find(item => item.id === id)
        // console.log(productId);
        const productIndex = categoryArray.findIndex(item => item.id === id)
        // console.log(productIndex);
        if (productIndex !== -1) {
          currentIndex = (productIndex)
        } else {
          currentIndex = (0)
        }
      }
    }
    catch (error) {
      console.error('Error Fetching Listings', error)
    }
  }
  // console.log(item);
  // console.log(cat);
  // console.log(categoryArray);
  // console.log(currentIndex);

  return (
    // <div></div>
    <div className={styles.item_main}>
      {
        item &&
        <div className={styles.item_div}>
          <div className={styles.item_div_left}>
            <div className={styles.item_div_left_image}>
              {item.images &&
                <ImageDisplay images={item.images} />
              }
            </div>
            <div className={styles.item_left_first}>
              <div className={styles.item_price_title}>
                <h1 className={styles.item_price}>$ {item.price}</h1>
                <h3 className={styles.item_title}>{item.title}</h3>
              </div>
              <div className={styles.item_icon}>
                <Heart />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className={styles.svg_item}
                  strokeWidth="2"
                >
                  <path d="M448 256C501 256 544 213 544 160C544 107 501 64 448 64C395 64 352 107 352 160C352 165.4 352.5 170.8 353.3 176L223.6 248.1C206.7 233.1 184.4 224 160 224C107 224 64 267 64 320C64 373 107 416 160 416C184.4 416 206.6 406.9 223.6 391.9L353.3 464C352.4 469.2 352 474.5 352 480C352 533 395 576 448 576C501 576 544 533 544 480C544 427 501 384 448 384C423.6 384 401.4 393.1 384.4 408.1L254.7 336C255.6 330.8 256 325.5 256 320C256 314.5 255.5 309.2 254.7 304L384.4 231.9C401.3 246.9 423.6 256 448 256z" />
                </svg>

              </div>
            </div>
            <div className={styles.item_left_second}>
              <p className={styles.item_address}>  Location: {item.address ? item.address : 'none'}</p>
              <p className={styles.item_title}>{item.availabilityStatus}</p>
            </div>
            <div className={styles.item_details}>
              <h3 className={styles.item_d_h}>Details</h3>
              <div className={styles.item_d_details}>
                <div className={styles.item_d_details_box}>
                  <div className={styles.item_d_box1}>Brand</div>
                  <div className={styles.item_d__box}>{item.brand}</div>
                </div>
                <div className={styles.item_d_details_box}>
                  <div className={styles.item_d_box1}>category</div>
                  <div className={styles.item_d__box}>{item.category}</div>
                </div>
                <div className={styles.item_d_details_box}>
                  <div className={styles.item_d_box1}>warranty Information</div>
                  <div className={styles.item_d__box}>{item.warrantyInformation}</div>
                </div>
                <div className={styles.item_d_details_box}>
                  <div className={styles.item_d_box1}>barcode</div>
                  <div className={styles.item_d__box}>{item && item.meta && item.meta.barcode}</div>
                </div>
              </div>
            </div>
            <div className={styles.item_desc}>
              <h3>
                Description
              </h3>
              <p>{item.description}</p>
            </div>
            <div className={styles.Sim_div}>
              {categoryArray.length > 0 && (
                <SimilarAds categoryname={cat} categoryArray={categoryArray} startIndex={currentIndex + 1} />
              )}
            </div>
            <div className={styles.safety}>
              <h3>Your safety matters to us!</h3>
              <ul className={styles.item_list}>
                <li>Only meet in public / crowded places such as metro stations and malls.</li>
                <li>Never go alone to meet a buyer / seller, always take someone with you.</li>
                <li>Check and inspect the product properly before purchasing it.</li>
                <li>Never pay / transfer any money in advance before inspecting the product.</li>
              </ul>
            </div>
          </div>
          <div className={styles.item_div_right}>
            <div className={styles.Details_API_rest_FirstHalf}>
              <div className={styles.Details_API_rest_Name}>
                <div className={styles.API_First_profile}>
                  {
                    item?.thumbnail && (
                      <Image className={styles.profile_pic} src={item.thumbnail} width={25} height={25} alt="logo" />
                    )
                  }
                </div>
                <div className={styles.API_First}>
                  <h6 className={styles.API_Name}>Posted By</h6>
                  <h5 className={styles.API_Name}>User # : {item?.meta?.barcode}</h5>
                </div>
                <svg className={styles.arrow_item} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className={styles.Details_API_rest_border}>
                <hr className={styles.border_line}></hr>
              </div>
              <div className={styles.Details_API_rest_Date}>
                <div className={styles.Date_Left}>
                  <div className={styles.SVG}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="15"
                      height="15"
                      strokeWidth="2"
                      fill="Blue"
                    >
                      <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
                    </svg>
                  </div>
                  <div className={styles.Details_API_rest_Date_Left}>
                    <p className={styles.API_date}>Member Since</p>
                    <h6 className={styles.API_Name}>2005</h6>
                  </div>
                </div>
                <div className={styles.Date_Right}>
                  <div className={styles.SVG}>
                    <svg className={styles.SVG_Calendar} xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="15"
                      height="15"
                      strokeWidth="1"
                      fill='blue'>
                      <path d="M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM176 136c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-80zm200-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                    </svg>
                  </div>
                  <div className={styles.Details_API_rest_Date_Right}>
                    <p className={styles.API_date}>Ads</p>
                    <h6 className={styles.API_Name}>1</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Details_API_rest_Button}>
              <button className={styles.call_button}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 512 512" fill="none" stroke="currentColor"
                  strokeWidth="45">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <h6 className={styles.call_Button_heading}>Show Phone Number</h6>
              </button>
              <button className={styles.chat_button}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20" viewBox="0 0 512 512" fill="Black" stroke="white" strokeWidth="1">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <h6 className={styles.call_Button_heading}>Chat</h6>
              </button>
            </div>
            <div className={styles.Details_API_rest_ID}>
              <p className={styles.API_ID}>Ad ID : {item.id}</p>
              <div className={styles.flag}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width='15'
                  height='15'
                  strokeWidth='2'>
                  <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 64 0 350.5 0 400l0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52l0-28zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8l0 241.8-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5l0-237z" /></svg>
                <h6 className={styles.API_Flag}>Report this Ad</h6>
              </div>
            </div>
          </div>
          <div className={styles.Sim_div_res}>
            {categoryArray.length > 0 && (
              <SimilarAds categoryname={cat} categoryArray={categoryArray} startIndex={currentIndex + 1} />
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default page;
