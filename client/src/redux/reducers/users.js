import { createSlice } from '@reduxjs/toolkit';
import { current } from "immer";

export const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        set: (state, action) => {
            return action.payload.list || [];
        },
        remove: (state, action) => {
            const { userId } = action.payload;
            const tempState = [...current(state)];
            const userIndex = tempState.findIndex(user => user.id == userId);
            tempState.splice(userIndex, 1)
            return tempState;
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    set: setUsersList,
    remove: removeFromList
} = usersSlice.actions;

export default usersSlice.reducer;
