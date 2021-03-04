import { Col, Divider, Row } from 'antd';
import React, { FC } from 'react';

interface PropsType {
    title: JSX.Element,
    companies: any
}
export const Business:FC<PropsType> = ({title, companies}) => (
    <div style={{padding: "20px",marginTop: "30px"}}>
        <Divider orientation="left">{title}</Divider>
        <Row>
            {
                companies.map((c, index) => (
                    <Col span={6} key={"bussiness-partner-" + index}>
                    <img
                        alt="bussiness-partner"
                        src={c.src}
                        style={{
                            width: "80%",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    />
                    </Col>
                ))
            }
        </Row>
    </div>
)