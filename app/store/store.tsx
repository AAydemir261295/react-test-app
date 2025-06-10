import { configureStore, createStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/formReducer";
import imageReducer from "./reducers/imageReducer";


export const store = configureStore({
    reducer: {
        images: imageReducer,
        form: formReducer
    }
})