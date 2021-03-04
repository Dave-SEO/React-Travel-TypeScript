import { ADD_LANGUAGE, LanguageActionTypes, LANGUAGE_CHANGE } from './languageActions';
export interface LanguageState {
    language: 'en'| 'zh',
    languageList: {name:string, code: string}[]
}

const defaultState: LanguageState = {
    language: 'zh',
    languageList: [
        {name: '中文', code: 'zh'},
        {name: 'English', code: 'en'}
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: LanguageActionTypes) => {
    switch (action.type) {
        case LANGUAGE_CHANGE:
            return {...state, language: action.payload}
            case ADD_LANGUAGE:
                return {
                  ...state,
                  languageList: [...state.languageList, action.payload],
                };
        default:
           return state
    }
}