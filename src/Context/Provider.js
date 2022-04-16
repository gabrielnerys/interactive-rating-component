import React, { useState } from 'react';
import MyContext from './myContext';

function Provider({ children }) {
  const [value, setValue] = useState('');

  const handleClick = ({ target }) => {
    setValue(target.value);
  };

  const context = {
    value,
    setValue,
    handleClick,
  }

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;