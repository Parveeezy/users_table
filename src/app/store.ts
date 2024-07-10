import {AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch} from '@reduxjs/toolkit'
import {usersReducer} from "../features/components/Users/usersSlice.ts";


const rootReducer = combineReducers({
    users: usersReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;