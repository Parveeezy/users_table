import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UsersType} from "../../../common/types.ts";
import {api} from "../../../app/api/api.ts";


const slice = createSlice({
    name: 'users',
    initialState: api,
    reducers: {
        loadUsers: (state, action: PayloadAction<UsersType[]>) => {
            state.map(el => ({
                id: el.id,
                name: el.name,
                isArchive: el.isArchive,
                role: el.role,
                phone: el.phone,
                birthday: el.birthday
            }))
        }
    }
})

export const usersReducer = slice.reducer;
export const usersActions = slice.actions;