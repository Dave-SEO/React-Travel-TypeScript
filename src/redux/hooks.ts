import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'
import { RootState } from './store.RTK'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector