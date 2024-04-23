import "../../../css/ProductPageCss.css"
import {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import {DialogComponent} from '../../component/ProductDetailDialog.tsx'
import Navbar from "../../component/Navbar.tsx";
import { getAllProduct } from '../../../api/ProductApi.ts'; // Import the API function


export default function ProductPage (){
    const [dialogOpen, setDialogOpen] = useState(false);
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        // Fetch product data when component mounts
        const fetchProductData = async () => {
            try {
                const data = await getAllProduct(); // Call the API function
                setProducts(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, []);


    const handleSliderClick = () => {
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    return(
        <body>
        <header className='ProductPage'>
            <div className="layer">
                <div>
                    <Navbar/>
                </div>
                <div className="swiper-container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={5}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1000,
                            pauseOnMouseEnter: true

                        }}
                        pagination={true}
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {/* Render product data dynamically */}
                        {products.map((product) => (
                            <SwiperSlide key={product.id} onClick={handleSliderClick}>
                                <img src={product.image} />
                                <div className="overlay-text">
                                    <p>Product: {product.name}</p>
                                    <p>Price: {product.price}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <DialogComponent open={dialogOpen} handleClose={handleCloseDialog}/>

                </div>
            </div>
        </header>
        </body>


    )
}

// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="src/ui/img/product/gfx000.png"/>
//     <div className="overlay-text">
//         <p> Product: Night</p>
//         <p> Price: HKD10000 </p>
//     </div>
// </SwiperSlide>
// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_01.jpg"/>
//     <div className="overlay-text">
//         <p> Product: Day</p>
//         <p> Price: HKD200000 </p>
//     </div>
// </SwiperSlide>
// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_04.jpg"/>
//     <div className="overlay-text">
//         <p> Product: Dawn</p>
//         <p> Price: HKD34500 </p>
//     </div>
// </SwiperSlide>
// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="https://fujifilm-x.com/wp-content/uploads/2023/05/20230515-Mr.Whisper_109works_Street_002.jpg"/>
//     <div className="overlay-text">
//         <p> Product: Night</p>
//         <p> Price: HKD10000 </p>
//     </div>
// </SwiperSlide>
// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_01.jpg"/>
//     <div className="overlay-text">
//         <p> Product: Day</p>
//         <p> Price: HKD200000 </p>
//     </div>
// </SwiperSlide>
// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_04.jpg"/>
//     <div className="overlay-text">
//         <p> Product: Dawn</p>
//         <p> Price: HKD34500 </p>
//     </div>
// </SwiperSlide>
// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="https://fujifilm-x.com/wp-content/uploads/2023/05/20230515-Mr.Whisper_109works_Street_002.jpg"/>
//     <div className="overlay-text">
//         <p> Product: Night</p>
//         <p> Price: HKD10000 </p>
//     </div>
// </SwiperSlide>
// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_01.jpg"/>
//     <div className="overlay-text">
//         <p> Product: Day</p>
//         <p> Price: HKD200000 </p>
//     </div>
// </SwiperSlide>
// <SwiperSlide onClick={handleSliderClick}>
//     <img
//         src="https://fujifilm-x.com/wp-content/uploads/2024/02/Dimitrios-Paterakis_109_Landscape_04.jpg"/>
//     <div className="overlay-text">
//         <p> Product: Dawn</p>
//         <p> Price: HKD34500 </p>
//     </div>
// </SwiperSlide>


