import React from "react";
import {Box} from "@material-ui/core";
import '../../styles/positions.scss'



const  Position = ({data}) => {
    return(
        <Box className='position'>
            <Box className='position__name'>Наименование: {data.name}</Box>
            <Box className='position__count'>Колличество: {data.qty}</Box>
            <Box className='position__price'>Цена: {data.price}</Box>
            <Box className='position__sum'>Сумма: {data.sum}</Box>
        </Box>
    )
}

export default Position;