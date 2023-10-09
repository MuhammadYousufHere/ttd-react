import { type Action, type ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { useDispatch, type TypedUseSelectorHook, useSelector } from 'react-redux'

const reducer = combineReducers({ cart: cartReducer })

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([]),
  devTools: import.meta.env.MODE !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
