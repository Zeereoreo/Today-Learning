import { useDispatch, useSelector } from 'react-redux'
import {RootState, increment} from './index'

function App() {

  const 꺼내온거 = useSelector( (state :RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button onClick={()=>{dispatch(increment())}}>버튼</button>
    </div>
  );
} 