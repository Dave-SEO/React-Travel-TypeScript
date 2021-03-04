import { Col, Layout, Row, Typography } from 'antd';
import React, { FC } from 'react';
import styles from '../../App.module.css';
import image4 from '../../assets/images/facebook-807588_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image1 from '../../assets/images/microsoft-80658_640.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import { Business, Footer, Header, ProductinCllection, SideMuen, Swiper } from '../../components';
import { productList1, productList2, productList3 } from "../../mockups";
const companies = [
    { src: image1, title: "Microsoft"},
    { src: image2, title: "Youtube"},
    { src: image3, title: "Ins"},
    { src: image4, title: "Facebook"}
]
const {Content} = Layout
const {Title} = Typography
export const Home:FC = () => (
    <div >
    <Header />
      <Content className={styles['page-content']}>
        <Row>
          <Col span={6}>
            <SideMuen />
          </Col>
          <Col span={18}>
            <Swiper/>
          </Col>
        </Row>
        <ProductinCllection  
            title={<Title level={3} type="warning">爆款推荐</Title>}
            sideImage={sideImage}
            products={productList1}
        />
         <ProductinCllection  
            title={<Title level={3} type="warning">新品上市</Title>}
            sideImage={sideImage2}
            products={productList2}
        />
         <ProductinCllection  
            title={<Title level={3} type="warning">国内游推荐</Title>}
            sideImage={sideImage3}
            products={productList3}
        />
        <Business 
          title={<Title level={3} type="secondary">合作企业</Title>}
          companies={companies}
          />
      </Content>
    <Footer />
  </div>
)