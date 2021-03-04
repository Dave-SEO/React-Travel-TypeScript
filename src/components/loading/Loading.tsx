import { Spin } from 'antd'
import React, { FC } from 'react'
import styles from './Loading.module.css'
export const Loading:FC = () => (
    <div className={styles.example}>
          <Spin tip="Loading..."/>
     </div>
)