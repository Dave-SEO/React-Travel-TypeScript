import { Image, Typography } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './ProductinCllection.module.css'
const {Text} = Typography
interface PropsType {
    id: number,
    image: string,
    title: string,
    size: 'large' | 'small',
    price: string
}
export const ProductionImage:FC<PropsType> = (props) => {
    const {image,title,size,price, id} = props
    const history = useHistory()

    return <a  onClick={() => history.push(`/detail/${id}`)}>
        {
            size === 'large' ? 
            <Image src={image} height={285} width={490} preview={false}/> 
             :  <Image src={image} height={120} width={240} preview={false}/>
        }
        <div>
            <Text  title={title} className={size === 'large'?styles.titleLarge : styles.titleSmall}>{title}</Text>
            <Text strong type="danger">¥{price}起</Text>
        </div>
    </a>
}