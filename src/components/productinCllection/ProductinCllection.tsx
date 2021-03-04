import { Col, Divider, Row } from 'antd'
import React, { FC } from 'react'
import styles from './ProductinCllection.module.css'
import { ProductionImage } from './ProductionImage'
interface PropsType {
    title: JSX.Element;
    sideImage: string;
    products: any;
}
export const ProductinCllection: FC<PropsType> = (props) => {
    const {title, sideImage, products} = props
    return <div className={styles.content}>
        <Divider orientation="left">{title}</Divider>
        <Row>
            <Col span={4}>
                <img src={sideImage} alt="" className={styles.slideImg}/>
            </Col>
            <Col span={20}>
                <Row>
                    <Col span={12}>
                            <ProductionImage 
                                id={products[0].id} 
                                title={products[0].title} 
                                price={products[0].price} 
                                size="large" 
                                image={products[0].touristRoutePictures[0].url}
                            ></ProductionImage>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12}>
                                <ProductionImage 
                                    id={products[1].id} 
                                    title={products[1].title} 
                                    price={products[1].price} 
                                    size="small" 
                                    image={products[1].touristRoutePictures[0].url}
                                ></ProductionImage>
                            </Col>
                            <Col span={12}>
                                <ProductionImage 
                                    id={products[2].id} 
                                    title={products[2].title} 
                                    price={products[2].price} 
                                    size="small" 
                                    image={products[2].touristRoutePictures[0].url}
                                ></ProductionImage>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <ProductionImage 
                                    id={products[0].id} 
                                    title={products[0].title} 
                                    price={products[0].price} 
                                    size="small" 
                                    image={products[0].touristRoutePictures[0].url}
                                ></ProductionImage>
                            </Col>
                            <Col span={12}>
                                <ProductionImage 
                                    id={products[0].id} 
                                    title={products[0].title} 
                                    price={products[0].price} 
                                    size="small" 
                                    image={products[0].touristRoutePictures[0].url}
                                ></ProductionImage>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <ProductionImage 
                            id={products[0].id} 
                            title={products[0].title} 
                            price={products[0].price} 
                            size="small" 
                            image={products[0].touristRoutePictures[0].url}
                        ></ProductionImage>
                    </Col>
                    <Col span={6}>
                        <ProductionImage 
                            id={products[0].id} 
                            title={products[0].title} 
                            price={products[0].price} 
                            size="small" 
                            image={products[0].touristRoutePictures[0].url}
                        ></ProductionImage>
                    </Col>
                    <Col span={6}>
                        <ProductionImage 
                            id={products[0].id} 
                            title={products[0].title} 
                            price={products[0].price} 
                            size="small" 
                            image={products[0].touristRoutePictures[0].url}
                        ></ProductionImage>
                    </Col>
                    <Col span={6}>
                        <ProductionImage 
                            id={products[0].id} 
                            title={products[0].title} 
                            price={products[0].price} 
                            size="small" 
                            image={products[0].touristRoutePictures[0].url}
                        ></ProductionImage>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
}