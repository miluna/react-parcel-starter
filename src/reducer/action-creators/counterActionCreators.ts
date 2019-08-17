import { Action } from "../counterReducer";
import { MORE, LESS, SET, SET_LOADING } from "../action-types/counterActionTypes";

export const loadingAction = (status: boolean): Action => ({ type: SET_LOADING, payload: status });
export const moreAction = (num: number): Action => ({ type: MORE, payload: num });
export const lessAction = (num: number): Action => ({ type: LESS, payload: num });
const setAction = (num: number): Action => ({ type: SET, payload: num });

export const fetchRandomNumber = () => {
    return (dispatch: Function, getState: Function) => {
        // simulate a FETCH call
        dispatch(loadingAction(true));
        setTimeout(() => {
            const num = parseFloat(Math.random().toString().substr(2));
            dispatch(setAction(num));
            dispatch(loadingAction(false));
        }, 2000)
    }
}
