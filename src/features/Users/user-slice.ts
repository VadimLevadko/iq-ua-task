import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store.ts";

export const getAllUsers = createAsyncThunk(
    "GET_ALL_USERS",
    async () => {
        const res = await fetch('https://randomuser.me/api/?results=10')
        return await res.json()
    }
)

interface UsersState {
    users: any[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    loading: true,
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload.results;
                state.loading = false;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.error = action.error.message ?? null;
                state.loading = false;
            })
    }
})

export const usersReducer = usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;
export const selectSingleUser = (state: RootState, uuid: string) => state.users.users.find(user => user?.login.uuid === uuid);