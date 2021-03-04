import i18n from 'i18next'
import { Middleware } from 'redux'
import { LANGUAGE_CHANGE } from '../language/languageActions'
export const i18nChange:Middleware = (store) => (next) => (action) => {
    if(action.type === LANGUAGE_CHANGE){
        i18n.changeLanguage(action.payload)
    }
    next(action)
}