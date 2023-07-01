import React, { useState } from 'react';

function Home() {
  const [columns, setColumns] = useState([
    'No',
    'First',
    'Last',
    'Handle'
  ]);

  const addColumn = () => {
    const newColumn = `Column ${columns.length}`;
    setColumns((prevColumns) => [...prevColumns, newColumn]);

    setRows((prevRows) =>
      prevRows.map((row) => {
        return { ...row, [newColumn]: '' };
      })
    );
  };

  const deleteColumn = () => {
    if (columns.length > 1) {
      setColumns((prevColumns) => {
        const updatedColumns = [...prevColumns];
        updatedColumns.pop(); // Remove the last column
        return updatedColumns;
      });

      setRows((prevRows) =>
        prevRows.map((row) => {
          const updatedRow = { ...row };
          delete updatedRow[columns[columns.length - 1]]; // Remove the corresponding cell in each row
          return updatedRow;
        })
      );
    }
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      No: '1dffg',
      First: 'Mark',
      Last: 'Otto',
      Handle: '@mdo'
    },
    {
      id: 2,
      No: '2fghgr',
      First: 'Jacob',
      Last: 'Thornton',
      Handle: '@fat'
    }
  ]);

  const addRow = () => {
    const newRow = { id: rows.length + 1 };
    columns.forEach((column) => {
      newRow[column] = '';
    });

    setRows((prevRows) => [...prevRows, newRow]);
  };

  const deleteRow = () => {
    if (rows.length > 0) {
      setRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows.pop(); // Remove the last row
        return updatedRows;
      });
    }
  };

  const [headers, setHeaders] = useState([]);
  const [texts, setTexts] = useState([]);

  const addHeader = () => {
    const newHeader = prompt('Enter the header:');
    if (newHeader) {
      setHeaders((prevHeaders) => [...prevHeaders, newHeader]);
    }
  };

  const addText = () => {
    const newText = prompt('Enter the text:');
    if (newText) {
      setTexts((prevTexts) => [...prevTexts, newText]);
    }
  };

  return (
    <div className=''>
      <h1 className='d-flex justify-content-center align-items-center rounded bg-secondary m-0'>
        Making Plan Process
      </h1>
      <div className='p-3'>
        {headers.map((header, index) => (
          <h2 key={index}>{header}</h2>
        ))}
        {texts.map((text, index) => (
          <p key={index} style={{ fontSize: 12 }}>
            {text}
          </p>
        ))}
        
      </div>
      <div className='d-flex justify-content-center align-items-center rounded bg-secondary m-1'>
        <table className='bg-white p-3 w-25 table-bordered'>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope='col' contentEditable={index !== 0 ? 'true' : 'false'}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {Object.entries(row).map(([key, value], index) => (
                  <td key={key} contentEditable={index !== 0 ? 'true' : 'false'}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button type='button' onClick={addRow}>
        Add Row
      </button>
      <button type='button' onClick={addColumn}>
        Add Column
      </button>
      <button type='button' onClick={deleteColumn}>
        Delete Column
      </button>
      <button type='button' onClick={deleteRow}>
        Delete Row
      </button>
      <button type='button' onClick={addHeader}>
          Add Header
        </button>
        <button type='button' onClick={addText}>
          Add Text
        </button>
    </div>
  );
}

export default Home;
