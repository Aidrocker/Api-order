import React from "react";
import {Box, Button} from "@material-ui/core";
import Position from "../position";
import {useSelector} from "react-redux";
import '../../styles/order.scss';



const  Order = (props) => {
    const {order, setIdOpen, idOpen} = props;
    const { id, docDate, docNum,description} = order;
    const positions = useSelector(state => state.data.positions);

    const toggleOpen = () => {
        return setIdOpen(id)
    }

    return(
        <Box className='order'>
            <Box className='order__container'>
                <Button onClick={() =>toggleOpen() }>{idOpen !== id ? 'Open' : 'Close'}</Button>
                <Box className='order__name simple'>Номер закака: {docNum}</Box>
                <Box className='order__count simple'>Дата заказа: {docDate}</Box>
                <Box className='order__price simple'>Коментарий: {description}</Box>
            </Box>

            <Box className='order__positions'>
                {
                    idOpen === id && positions.map(el =>
                        <Position data={el} key={el.id}/>
                    )
                }
            </Box>
        </Box>
    )
}

export default Order;