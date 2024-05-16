import "../../../css/ProductPageCss/ProductPageCss.css"
import {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import {DialogComponent} from '../../component/ProductDetailDialog.tsx'
import {getAllProduct, getProductbyId} from '../../../api/ProductApi.ts';
import {GetAllProduct} from "../../../data/product/getAllProductData.Type.ts";
import NavbarAll from "../../component/NavbarAll.tsx";
import "../../../index.css"



export default function ProductPage (){
    const [dialogOpen, setDialogOpen] = useState(false);
    const [products, setProducts] = useState<GetAllProduct[]|undefined>(undefined);
    const [selectedProductId, setSelectedProductId] = useState<number>(0);

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

        fetchProductData().then();
    }, []);

    const handleSliderClick = (productId: number) => {
        setSelectedProductId(productId);
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };


    return(
        <>
        <div className='ProductPage'>
            <div className="layer">
                <NavbarAll/>
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
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 1200,
                            pauseOnMouseEnter: true

                        }}
                        pagination={false}
                        modules={[EffectCoverflow, Pagination,Autoplay]}
                        className="mySwiper"
                    >
                        {/* Render product data dynamically */}
                        {products?.map((product) => (
                            <SwiperSlide key={product.pid}
                                         onClick={() => handleSliderClick(product.pid)}
                            >
                                <img src={product.imageUrl} alt="product"/>
                                <div className="overlay-text">
                                    <p>
                                    {product.productName}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <DialogComponent
                        open={dialogOpen}
                        handleClose={handleCloseDialog}
                        getProductbyId={getProductbyId}
                        productId={selectedProductId}
                    />
                </div>
            </div>
        </div>
        </>


    )
}



