import { createSlice } from "@reduxjs/toolkit";


const formReducer = createSlice({
    name: "form",
    initialState: {},
    reducers: {
        saveForm(state, action) {
            return state = {};
        },
        refreshForm(state, action) {
            return state = {};
        }
    }

});


const { actions, reducer } = formReducer;

export const { saveForm, refreshForm } = actions;

export default reducer;
