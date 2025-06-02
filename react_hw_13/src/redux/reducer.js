const initialState = {
    users: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Vladimir'},
        {id: 4, name: 'Dmitry'},
        {id: 5, name: 'Alexey'},
        {id: 6, name: 'Sergey'},
    ],
    filter: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {...state, filter: action.payload}
        default:
            return state
    }
}

export default reducer