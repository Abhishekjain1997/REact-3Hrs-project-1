import React, { useState } from 'react';

const UserForm = (props) => {
  const [productId, setProductId] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [selectedTable, setSelectedTable] = useState('table1'); // Default to table1

  const submitHandler = (e) => {
    e.preventDefault();

    if (!productId || !productPrice || !productName) {
      alert('Please Fill Input Field');
    } else {
      let data = {
        id: productId,
        price: productPrice,
        name: productName
      };

      // Add table property to the data
      data.table = selectedTable;

      // Use the selectedTable as the localStorage key
      const key = selectedTable + '-' + data.id;
      localStorage.setItem(key, JSON.stringify(data));

      // Notify the parent component about the data
      props.toggleData(data);

      // Clear input fields
      setProductId('');
      setProductName('');
      setProductPrice('');
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={submitHandler}>
        <label className='form-label'>Unique Order ID:</label>
        <input type='number' className='form-control' value={productId} onChange={(e) => setProductId(e.target.value)} />
        <label className='form-label'>Choose Price:</label>
        <input type='number' className='form-control' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        <label className='form-label'>Choose Dish:</label>
        <input type='text' className='form-control' value={productName} onChange={(e) => setProductName(e.target.value)} />

        {/* Move the select input here */}
        <label className='form-label'>Choose a Table:</label>
        <select className='form-control' value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
          <option value='table1'>Table 1</option>
          <option value='table2'>Table 2</option>
          <option value='table3'>Table 3</option>
        </select>

        <button className='btn btn-success mt-2'>Add to bill</button>
      </form>
    </div>
  );
};

export default UserForm;         