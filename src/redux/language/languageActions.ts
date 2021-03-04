
export const LANGUAGE_CHANGE = 'language_change'
export const ADD_LANGUAGE = 'language_add'

export interface ChangeLanguageAction {
    type: typeof LANGUAGE_CHANGE;
    payload: 'zh' | 'en';
}
export interface AddLanguageAction {
    type: typeof ADD_LANGUAGE;
    payload: { name: string; code: string };
}
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction
export const changeLanguageActionCreator = (languageCode: 'zh' | 'en') : ChangeLanguageAction => {
    return {
        type: LANGUAGE_CHANGE,
        payload: languageCode
    }
}
