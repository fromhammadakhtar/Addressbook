import { SET_CURRENT_PAGE } from "../Reducers/paginationActionsTypes";

export const setCurrentPage = (page: number) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});