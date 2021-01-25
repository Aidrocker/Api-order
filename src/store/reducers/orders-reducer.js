const SET_ORDERS = 'SET_ORDERS';
const SET_POSITIONS = 'SET_POSITIONS';
const FILTER_ORDERS = 'FILTER_ORDERS';

const defaultState = {
    orders: [],
    positions: [],
    isFetching: true
}

export default function orderReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: [...action.payload]
            }
        case SET_POSITIONS:
            return {
                ...state,
                positions: [...action.payload]
            }
        case FILTER_ORDERS:
            return {
                ...state,
                orders: [...action.payload]
            }
        default:
            return state
    }

}

export const setOrders = (orders) => ({
    type: SET_ORDERS,
    payload: orders
})

export const setPosition = (positions) => ({
    type: SET_POSITIONS,
    payload: positions,
})

export const filterOrders = (orders) => ({
    type: FILTER_ORDERS,
    payload: orders
})