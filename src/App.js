import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = (type, payload) => {
    // payload 함수의 매개변수 같은 느낌.. 필요한 값을 전달
    dispatch({ type, payload });
  };

  const login = () => {
    dispatch({ type: 'LOGIN', payload: { id: 'userA', name: 'A' } });
  };

  return (
    <div>
      <button onClick={login}>Login</button>
      <Box />
      <h3>count : {count}</h3>
      <button
        onClick={() => {
          increase('INCREASE', { num: 5 });
        }}
      >
        5씩 증가
      </button>
      <button
        onClick={() => {
          increase('DECREMENT', { num: 5 });
        }}
      >
        5씩 감소
      </button>
      <button
        onClick={() => {
          increase('RESET-COUNT');
        }}
      >
        {' '}
        초기화
      </button>
    </div>
  );
}

export default App;
