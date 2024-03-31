import React from 'react';
import { useSelector } from 'react-redux';
import GrandSunBox from './GrandSunBox';

const Box = () => {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  return (
    <div>
      <h1>id : {id}</h1>
      Box {count}
      <GrandSunBox />
    </div>
  );
};

export default Box;
