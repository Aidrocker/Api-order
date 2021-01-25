import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearcherOrders from './components/searcher-orders';
import Main from "./components/main";
import {useEffect} from "react";
import {getOrders, getfilterOrders} from "./store/actions/orders";
import './styles/app.scss';
function App() {
    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState('')
    const {orders} = useSelector(state => state.data);
    useEffect(() => {
        dispatch(getOrders())
    }, [])

    useEffect(() => {
      dispatch(getfilterOrders(filterValue))
    }, [filterValue])

  return (
    <div className="App">
      <SearcherOrders setFilterValue={setFilterValue} filterValue={filterValue}/>
      <Main orders={orders}/>
    </div>
  );
}

export default App;
