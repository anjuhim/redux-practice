import React from 'react';
import { useSelector } from 'react-redux';

const GrandSunBox = () => {
  const count = useSelector((state) => state.count);
  return <div>GrandSunBox {count}</div>;
};

export default GrandSunBox;
