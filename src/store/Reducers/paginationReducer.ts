import { initialState } from "../store";
import { SET_CURRENT_PAGE } from "./paginationActionsTypes";

export const paginationReducer = (state = initialState, action: { type: string; payload: number; }) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};