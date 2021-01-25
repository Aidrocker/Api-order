import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import '../../styles/searcher-orders.scss'
import { Box, Button } from '@material-ui/core';

const SearcherOrders = ({ setFilterValue }) => {
    const [value, setValue] = useState('')



    return (
        <AppBar position="static">
            <Toolbar className='searcher-order'>
                <Typography className='searcher-order__titel' variant="h6" noWrap>
                    Заказы
                </Typography>
                <Box className='searcher-order__conteiner'>
                    <Button
                        onClick={() => setFilterValue(value)}
                        className='conteiner__titel'
                        variant="contained"
                        color="secondary"
                    >
                        Фильтр:
                    </Button>
                    <InputBase
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        className='conteiner__input'
                    />
                </Box>
            </Toolbar>
        </AppBar>
    )
}


export default SearcherOrders;