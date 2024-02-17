import React, { useState } from 'react';
import UserForm from './UserForm';
import ListProduct from './ListProduct';

const User = () => {
  const [data, setData] = useState([]);

  const saveData = (toggle) => {
    setData((prevData) => [...prevData, toggle]);
  };

  return (
    <div>
      <UserForm toggleData={saveData} />
      <ListProduct tg={data} />
    </div>
  );
}

export default User;