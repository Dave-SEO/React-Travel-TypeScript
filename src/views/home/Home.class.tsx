import { Col, Layout, Row, Typography } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import styles from '../../App.module.css';
import image4 from '../../assets/images/facebook-807588_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image1 from '../../assets/images/microsoft-80658_640.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import { Business, Footer, Header, Loading, ProductinCllection, SideMuen, Swiper } from '../../components';
import { getProductActionCreator } from '../../redux/product/productActions';
import { RootState } from '../../redux/store';
const companies = [
    { src: image1, title: "Microsoft"},
    { src: image2, title: "Youtube"},
    { src: image3, title: "Ins"},
    { src: image4, title: "Facebook"}
]
const {Content} = Layout
const {Title} = Typography

 const mapStateToProps = (state: RootState) => {
      return {
        product: state.productReducer.product
      }
    }
    const mapDispatchToProps = (dispatch) => {
      return {
        getProductList: () => {
          dispatch(getProductActionCreator())
        }
      }
    }
type PorpType = ReturnType<typeof mapStateToProps> & 
                ReturnType<typeof mapDispatchToProps>
class HomeComponent extends React.Component<PorpType> {
  componentDidMount(){
    this.props.getProductList()
  }
  render(){
    const {product} = this.props
    console.log('aaaa', product)
    
    if(!product || product.length === 0){
      return (
        <Loading></Loading>
      )
    }
    if(product.length > 0){
      return (
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
                products={product[0].touristRoutes}
            />
            <ProductinCllection  
                title={<Title level={3} type="warning">新品上市</Title>}
                sideImage={sideImage2}
                products={product[1].touristRoutes}
            />
            <ProductinCllection  
                title={<Title level={3} type="warning">国内游推荐</Title>}
                sideImage={sideImage3}
                products={product[2].touristRoutes}
            />
            <Business
              title={<Title level={3} type="secondary">合作企业</Title>}
              companies={companies}
              />
          </Content>
        <Footer />
      </div>
    )
}
  }
}
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)