import { Anchor, Col, DatePicker, Divider, Menu, Row, Typography } from 'antd'
import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Footer, Header, ProductIntro } from '../../components'
import { getProductDetail } from '../../redux/details/slice'
import { useSelector } from '../../redux/hooks'
import styles from './Detail.module.css'
interface MathParams {
    id: string;
}
type PropsType = RouteComponentProps<MathParams>

  
export const Detail:FC<PropsType> = (props) => {
    console.log(props.match.params.id)
    const productData = useSelector(state => state.detail.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetail(props.match.params.id))
    }, [])
    useEffect(() => {
        console.log('productData', productData)
    })
    return (
        <div>
            <Header />
                <div className={styles.container}>
                    <Row>
                        <Col span={13}>
                           <ProductIntro 
                              title={productData.title}
                              dec={productData.description}
                              price={productData.price}
                              pingfen={productData.rating}
                           />
                        </Col>
                        <Col span={11}>
                          <DatePicker.RangePicker  style={{ marginTop: 68, marginLeft: 20 }} />
                        </Col>
                    </Row>
                </div>
                <Anchor className={styles["product-detail-anchor"]}>
                <Menu mode="horizontal">
                    <Menu.Item key="1">
                         <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Anchor.Link href="#fees" title="费用"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                         <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
                    </Menu.Item>
                </Menu>
                </Anchor>
                {/* 产品特色 */}
                <div id="feature" className={styles["product-detail-container"]}>
                <Divider orientation={"center"}>
                    <Typography.Title level={3}>产品特色</Typography.Title>
                </Divider>
                <div
                    dangerouslySetInnerHTML={{ __html: productData.features }}
                    style={{ margin: 50 }}
                ></div>
                </div>

                 {/* 费用 */}
                <div id="fees" className={styles["product-detail-container"]}>
                <Divider orientation={"center"}>
                    <Typography.Title level={3}>费用</Typography.Title>
                </Divider>
                <div
                    dangerouslySetInnerHTML={{ __html: productData.fees }}
                    style={{ margin: 50 }}
                ></div>
                </div>

                 {/* 预订须知 */}
                <div id="notes" className={styles["product-detail-container"]}>
                <Divider orientation={"center"}>
                    <Typography.Title level={3}>预定须知</Typography.Title>
                </Divider>
                <div
                    dangerouslySetInnerHTML={{ __html: productData.notes }}
                    style={{ margin: 50 }}
                ></div>
                </div>
            <Footer />
        </div>
    )
}