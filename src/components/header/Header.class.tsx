import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd';
import React from 'react';
// 类组件中使用HOC模式的i18n
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import logo from "../../assets/logo.svg";
import { changeLanguageActionCreator } from '../../redux/language/languageActions';
import { LanguageState } from '../../redux/language/languageReducer';
import { RootState } from '../../redux/store';
import styles from './Header.module.css';
interface state extends LanguageState {}
const mapStateToProps = (state:RootState) => {
    return {
        language: state.language.language,
        languageList: state.language.languageList
    }
}
const  mapDispatchToProps = (dispatch: Dispatch) => {
     return {
        menuClickHandler: (e) =>{
            dispatch(changeLanguageActionCreator(e.key))
        }
     }
 }
type PropsType = WithTranslation & 
                 ReturnType<typeof mapStateToProps> &
                 ReturnType<typeof mapDispatchToProps>
 class HeaderComponent extends React.Component<PropsType, state> {
    // constructor(props){
        // super(props)
        // const storeState = store.getState()
        // this.state = {
        //     language: storeState.language.language,
        //     languageList: storeState.language.languageList
        // }
        // store.subscribe(this.subscribeHandler)
    // }
    // subscribeHandler = () => {
    //     const storeState = store.getState()
    //     this.setState({
    //         language: storeState.language.language
    //     })
    // }
    // menuClickHandler = (e) => {
    //     console.log('menuClickHandler', e)
    //     const action = changeLanguageActionCreator(e.key)
    //     store.dispatch(action)
    // }
    componentDidMount(){
    }
    render(){
        const {t, menuClickHandler, languageList, language } = this.props
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
                                languageList.map(language => {
                                    return (
                                        <Menu.Item key={language.code}>{language.name}</Menu.Item>
                                    )
                                })
                            }
                            {/* <Menu.Item>中文</Menu.Item>
                            <Menu.Item>English</Menu.Item> */}
                        </Menu>
                        }
                        icon={<GlobalOutlined />}
                    >
                        {language === 'zh' ? '中文' : 'English' }
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
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HeaderComponent)) 