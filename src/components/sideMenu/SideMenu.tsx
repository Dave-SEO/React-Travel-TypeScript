import { Menu } from 'antd'
import React, { FC } from 'react'
import { sideMenuList } from './mockup'
import styles from './SideMenu.module.css'
const { Item, SubMenu } = Menu
export const SideMuen:FC = () => (
    <Menu mode="vertical" className={styles.menuBox}>
        {
            sideMenuList.map((sideMenu, index) => (
                <SubMenu title={sideMenu.title} key={'sideMenu' + index}>
                    {
                        sideMenu.subMenu.map((menu, index) => (
                            <SubMenu title={menu.title} key={'menu'+ index}>
                                {
                                    menu.subMenu.map((item, index) => (
                                        <Item key={'item' + index}>{item}</Item>
                                    ))
                                }
                            </SubMenu>
                        ))
                    }
                </SubMenu>
            ))
        }
    </Menu>
)