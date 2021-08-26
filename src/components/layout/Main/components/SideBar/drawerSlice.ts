import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../../app/store';

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggle (state){
            state.isOpen = !state.isOpen;
        }
    }
});

export const drawerActions = drawerSlice.actions;

export const selectOpenState = (state: RootState) => state.drawer.isOpen;

const drawerReducer = drawerSlice.reducer;
export default drawerReducer;

