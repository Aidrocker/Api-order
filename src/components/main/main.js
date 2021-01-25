import { Box } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getPositions} from "../../store/actions/orders";
import '../../styles/main.scss';
import Order from "../order";


const Main = (props) => {
    const {orders} = props;
    const [idOpen, setIdOpen] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPositions(idOpen))
    }, [idOpen])

    return(

        <Box className='main'>
            {
                orders.map(el =>
                <Order order={el} key={el.id} setIdOpen={setIdOpen} idOpen={idOpen}/>
                )
            }
        </Box>
    )
}

export default  Main;