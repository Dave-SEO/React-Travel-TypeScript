import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import logo from "../../assets/logo.svg";
import { useSelector } from '../../redux/hooks';
import { changeLanguageActionCreator } from '../../redux/language/languageActions';
import styles from './Header.module.css';
export const Header:FC = () => {
    const language = useSelector(state => state.language.language)
    const languageList = useSelector(state => state.language.languageList)
    const dispatch = useDispatch()
    const  menuClickHandler = (e) => {
        const action = changeLanguageActionCreator(e.key)
        dispatch(action)
    }
    const {t} = useTranslation()
    return (
        <div className={styles['app-header']}>
           <div className={styles['top-header']}>
                <div className={styles.inner}>
                <Typography.Text>{t('header.slogan')}</Typography.Text>
                <Dropdown.Button
                    style={{ marginLeft: 15 }}
                    overlay={
                    <Menu onClick={menuClickHandler}>
                        {
                            languageList.map(language => (
                                <Menu.Item key={language.code}>{language.name}</Menu.Item>
                            ))
                        }
                    </Menu>
                    }
                    icon={<GlobalOutlined />}
                >
                    {language === 'zh' ? '中文' : 'English'}
                </Dropdown.Button>
                <Button.Group className={styles["button-group"]}>
                    <Button>{t('header.register')}</Button>
                    <Button>{t('header.signin')}</Button>
                </Button.Group>
                </div>
           </div>
           <Layout.Header className={styles["main-header"]}>
                <img src={logo} alt="logo" className={styles["App-logo"]} />
                <Typography.Title level={3} className={styles.title}>
                    {t('header.title')}
                </Typography.Title>
                <Input.Search
                placeholder={"请输入旅游目的地、主题、或关键字"}
                className={styles["search-input"]}
                />
            </Layout.Header>
            <Menu mode={"horizontal"} className={styles["main-menu"]}>
            <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
                <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
                <Menu.Item key="3"> {t("header.group")} </Menu.Item>
                <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
                <Menu.Item key="5"> {t("header.private")} </Menu.Item>
                <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
                <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
                <Menu.Item key="8"> {t("header.local")} </Menu.Item>
                <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
                <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
                <Menu.Item key="11"> {t("header.study")} </Menu.Item>
                <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
                <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
                <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
                <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
                <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
            </Menu>
        </div>
    )
}
