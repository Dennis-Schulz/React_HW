import {SET_USER_INFO} from "./actions";

const initialState = {
    name: 'User',
    status: 'offline',
};

export const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {...action.payload};
        default:
            return state;
    }
}

export default userInfoReducer
