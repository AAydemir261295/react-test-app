import { createSlice } from "@reduxjs/toolkit";


const formReducer = createSlice({
    name: "form",
    initialState: {
        "child-name,date": { value: "" },
        "sex": { value: "" },
        "parent-name": { value: "" },
        "radosti0": { value: "" },
        "radosti1": { value: "" },
        "grusti2": { value: "" },
        "grusti3": { value: "" },
        "friends0": { value: "" },
        "friends1": { value: "" },
        "alone2": { value: "" },
        "alone3": { value: "" },
        "free0": { value: "" },
        "free1": { value: "" },
        "dangerous2": { value: "" },
        "dangerous3": { value: "" },
        "confidence0": { value: "" },
        "confidence1": { value: "" },
        "uncertainty2": { value: "" },
        "uncertainty3": { value: "" },
        "child-emotions": { value: "" },
        "peculiarities": { value: "" },
        "talents": { value: "" },
        "attention": { value: "" },
        "psy": { value: "" },
        // date: new Date(Date.now()).toLocaleDateString("RU", { day: "2-digit", month: "2-digit", year: "numeric" })
        date: Date.now(),
    },
    reducers: {
        saveForm(state, action) {
            return state = { ...state, ...action.payload };
        },
        refreshForm(state, action) {
            return state = { ...state };
        },
        updateDate(state, action) {
            console.log("dispatched");
            return state = { ...state, date: action.payload }
        }
    }

});


const { actions, reducer } = formReducer;

export const { saveForm, refreshForm, updateDate } = actions;

export default reducer;
