import React, { useEffect, useState, useRef } from 'react';

const ListProduct = ({ tg }) => {
  const [data, setData] = useState([]);
  const tablesRef = useRef(['table1', 'table2', 'table3']);

  useEffect(() => {
    let allData = [];

    tablesRef.current.forEach((table) => {
      const tableData = Object.keys(localStorage)
        .filter((key) => key.startsWith(table))
        .map((key) => JSON.parse(localStorage.getItem(key)));

      allData = allData.concat(tableData);
    });

    setData(allData);
  }, [tg, tablesRef]);

  const loadAllData = () => {
    let allData = [];

    tablesRef.current.forEach((table) => {
      const tableData = Object.keys(localStorage)
        .filter((key) => key.startsWith(table))
        .map((key) => JSON.parse(localStorage.getItem(key)));

      allData = allData.concat(tableData);
    });

    setData(allData);
  };

  return (
    <>
      <div className='container mt-4'>
      <h1>Orders</h1>
        {tablesRef.current.map((table) => (
          <div key={table} className='card'>
            <h2>{table}</h2>
            <ul className='list-group'>
              {data
                .filter((item) => item && item.id && item.name && item.price && item.table === table)
                .map((item, index) => (
                  <li key={index} className='list-group-item'>
                    {'Order Id =' + item.id +  '  Dish =' + item.name + ' Price is =' + item.price}
                    <button
                      className='btn btn-danger ms-4'
                      onClick={() => {
                        localStorage.removeItem(table + '-' + item.id);
                        loadAllData();
                      }}
                    >
                      Delete Order
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProduct;