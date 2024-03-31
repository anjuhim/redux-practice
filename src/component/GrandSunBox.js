import React from 'react';
import { useSelector } from 'react-redux';

const GrandSunBox = () => {
  const count = useSelector((state) => state.count);
  const name = useSelector((state) => state.name);
  return (
    <div>
      GrandSun {name} Box {count}
    </div>
  );
};

export default GrandSunBox;
