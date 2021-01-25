import axios from 'axios';
import {setOrders, setPosition, filterOrders} from "../reducers/orders-reducer";

export const getOrders = () => {
    return async(dispatch) => {
        const  orders = await axios.get('http://127.0.0.1:8080/api/order');
        dispatch(setOrders(orders.data))
    }
}


export const getPositions = (id) => {
    return async (dispatch) => {
        const positions = await axios.get(`http://127.0.0.1:8080/api/order/${id}`);
        dispatch(setPosition(positions.data))
    }
}

export const getfilterOrders = (str) => {
    return async(dispatch) => {
        const orders = await axios.get(`http://127.0.0.1:8080/api/order?filter=${str}`);
        dispatch(filterOrders(orders.data))
    }
}