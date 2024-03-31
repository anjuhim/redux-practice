import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = (type) => {
    dispatch({ type });
  };
  return (
    <div>
      <div>count : {count}</div>
      <button
        onClick={() => {
          increase('INCREASE');
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          increase('RESET-COUNT');
        }}
      >
        {' '}
        초기화
      </button>
      <Box />
    </div>
  );
}

export default App;
