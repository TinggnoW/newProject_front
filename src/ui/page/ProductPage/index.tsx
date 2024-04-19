import menuicon from "../../icon/menu/menu.png";
import carticon from "../../icon/shopping cart/shopping-cart.png";
import usericon from "../../icon/User/person.png";
import {Link} from "react-router-dom";
import "../../../css/ProductPageCss.css"
import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function ProductPage (){
    const [menuOpen, setMenuOpen] = useState(false);


    return(
        <body>
        <header className='ProductPage'>
            <div className="ProductPageMenu">
                <div className="ProductPagemenu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuicon} width="15" height="25"/>
                </div>
                <ul className={`ProductPagemenu-menu-items ${menuOpen ? 'active' : ''}`}>
                    <img src={carticon} width="30" height="25"/>
                    <img src={usericon} width="28" height="25"/>
                    <li>About us</li>
                    <li><Link to="/product">Product</Link></li>
                </ul>
            </div>
            <div className="layer">
                <div className="swiper-container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={4}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img
                                src="https://fujifilm-x.com/wp-content/uploads/2023/05/20230515-Mr.Whisper_109works_Street_002.jpg"/>
                                <div className="overlay-text">
                                    <p> Product: Night</p>
                                    <p> Price: HKD10000 </p>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <img
                                    src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_01.jpg"/>
                                <div className="overlay-text">
                                    <p> Product: Day</p>
                                    <p> Price: HKD200000 </p>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <img
                                    src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_04.jpg"/>
                                <div className="overlay-text">
                                    <p> Product: Dawn</p>
                                    <p> Price: HKD34500 </p>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://fujifilm-x.com/wp-content/uploads/2023/05/20230515-Mr.Whisper_109works_Street_002.jpg"/>
                            <div className="overlay-text">
                                <p> Product: Night</p>
                                <p> Price: HKD10000 </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_01.jpg"/>
                            <div className="overlay-text">
                                <p> Product: Day</p>
                                <p> Price: HKD200000 </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_04.jpg"/>
                            <div className="overlay-text">
                                <p> Product: Dawn</p>
                                <p> Price: HKD34500 </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </header>
        </body>


    )
}


