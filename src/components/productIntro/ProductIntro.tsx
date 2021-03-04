import { Carousel, Image, Table, Typography } from 'antd';
import React, { FC } from 'react';
import img from '../../assets/images/carousel_1.jpg';
import img2 from '../../assets/images/carousel_2.jpg';
import styles from './ProductIntro.module.css';

interface TypeProps {
    title: string;
    dec: string;
    price: string;
    pingfen: string;
}
export const ProductIntro:FC<TypeProps> = (props) => {
    const {title, dec, price, pingfen} = props
    const dataSource = [
        {
          key: '1',
          title: '路线名称',
          desc: '埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)'
        },
        {
            key: '2',
            title: '价格',
            desc: (
                <strong>{price}</strong>
            )
        },
      ];
      
      const columns = [
        {
          title: 'title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'title',
          dataIndex: 'desc',
          key: 'desc',
        }
      ];
    return (
        <>
            <Typography.Title level={4}>{title}</Typography.Title>
            <Typography.Text>{dec}</Typography.Text>
            <div className={styles.price}>
                <Typography.Text style={{ marginLeft: 20 }}>
                    $ <span className={styles.num}>{price}</span>/ 人起
                </Typography.Text>
                <Typography.Text style={{ marginLeft: 20 }}>
                    <span className={styles.num}>{pingfen}</span>分
                </Typography.Text>
            </div>
            <Carousel effect="fade">
                <div>
                    <Image src={img} height={150}/>
                </div>
                <div>
                <Image src={img2} height={150}/>
                </div>
            </Carousel>
            <Table 
                showHeader={false}
                dataSource={dataSource} 
                columns={columns}
                pagination={false}
            />
        </>
    )
}