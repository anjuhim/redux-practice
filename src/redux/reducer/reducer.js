let initialState = {
  count: 0,
};

// reducer는 행동지침을 들고있다.
function reducer(state = initialState, action) {
  // if (action.type === 'INCREASE') {
  //   //...state 를 쓰는 이유는 initialState에 여러 값들이 있을거니깐, 새롭게 복사를 해서 사용.
  //   return { ...state, count: state.count + 1 };
  // }

  // // store는 return이 무조건 있어야 함.
  // // if문 조건이 아니더라도 리턴이 되야하므로 "무조건" 기본 리턴이 필요
  // return { ...state };

  switch (action.type) {
    case 'INCREASE':
      return { ...state, count: state.count + 1 };
    case 'RESET-COUNT':
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}

export default reducer;
