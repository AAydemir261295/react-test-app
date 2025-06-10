import { createSlice } from "@reduxjs/toolkit";


const imageReducer = createSlice({
    name: "images",
    initialState: { images: { 0: "null", 1: "null", 2: "null" }, icons: { 0: "upload", 1: "upload", 2: "upload" }, uploadCount: 0 },
    reducers: {
        saveImages(state, action) {
            console.log(action);
            return state = { ...state, images: { ...action.payload }, uploadCount: 3 };
        },
        refreshImage(state, action) {
            return state = { ...state, ...action.payload };
        },
        updateIcon(state, action) {
            return state = { ...state, icons: { ...state.icons, ...action.payload } }
        }
    }
});


const { actions, reducer } = imageReducer;

export const { saveImages, refreshImage, updateIcon } = actions;

export default reducer;
