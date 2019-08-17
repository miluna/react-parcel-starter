import { MORE, LESS, SET, SET_LOADING } from "./action-types/counterActionTypes";

export interface Action {
    type: string,
    payload: any,
}

export interface CounterState {
    count: number,
    loading: boolean,
}

export const counterReducer = (state: CounterState, action: Action) => {
    switch (action.type) {
        case MORE:
            return { ...state, count: state.count + action.payload };
        case LESS:
            return { ...state, count: state.count - action.payload };
        case SET:
            return { ...state, count: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}
