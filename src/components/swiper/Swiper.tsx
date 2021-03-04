import { Carousel } from 'antd';
import React, { FC } from 'react';
import swiper1 from '../../assets/images/carousel_1.jpg';
import swiper2 from '../../assets/images/carousel_2.jpg';
import swiper3 from '../../assets/images/carousel_3.jpg';
import Styles from './Swiper.module.css';
export const Swiper: FC = () => {
    function onChange(current: number) {
        // console.log(current);
    }
    return <Carousel afterChange={onChange} autoplay >
        <div className={Styles.swiper}>
            <img src={swiper1} alt=""/>
        </div>
        <div className={Styles.swiper}>
             <img src={swiper2} alt=""/>
        </div>
        <div className={Styles.swiper}>
             <img src={swiper3} alt=""/>
        </div>
    </Carousel>
}