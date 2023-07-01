import React, { useState, useRef } from 'react';

function Home() {
  const [headers, setHeaders] = useState([]);
  const [texts, setTexts] = useState([]);
  const [tables, setTables] = useState([]);

  const addHeader = () => {
    const newHeader = prompt('Enter the header:');
    if (newHeader) {
      setHeaders(prevHeaders => [...prevHeaders, newHeader]);
    }
  };

  const addText = () => {
    const newText = prompt('Enter the text:');
    if (newText) {
      setTexts(prevTexts => [...prevTexts, newText]);
    }
  };

  const addTable = () => {
    const newTable = {
      id: Date.now(),
      columns: ['No', 'First', 'Last', 'Handle'],
      rows: [
        { id: 1,No:1, First: 'Mark', Last: 'Otto', Handle: '@mdo' },
        { id: 2,No:2, First: 'Jacob', Last: 'Thornton', Handle: '@fat' }
      ]
    };
    setTables(prevTables => [...prevTables, newTable]);
  };

  const deleteTable = tableId => {
    setTables(prevTables => prevTables.filter(table => table.id !== tableId));
  };

  const handleAddRow = tableId => {
    setTables(prevTables =>
      prevTables.map(table => {
        if (table.id === tableId) {
          const newRow = { id: table.rows.length + 1, No: table.rows.length + 1 };
          table.columns.slice(1).forEach(column => {
            newRow[column] = '';
          });
          return {
            ...table,
            rows: [...table.rows, newRow]
          };
        }
        return table;
      })
    );
  };

  const handleDeleteRow = (tableId, rowIndex) => {
    setTables(prevTables =>
      prevTables.map(table => {
        if (table.id === tableId) {
          if (table.rows.length > 1) {
            return {
              ...table,
              rows: table.rows.filter((_, index) => index !== rowIndex).map((row, index) => ({ ...row, No: index + 1 }))
            };
          }
        }
        return table;
      })
    );
  };

  const handleAddColumn = tableId => {
    setTables(prevTables =>
      prevTables.map(table => {
        if (table.id === tableId) {
          const newColumn = `Column ${table.columns.length}`;
          return {
            ...table,
            columns: [...table.columns, newColumn],
            rows: table.rows.map(row => ({
              ...row,
              [newColumn]: ''
            }))
          };
        }
        return table;
      })
    );
  };

  const handleDeleteColumn = (tableId, columnIndex) => {
    setTables(prevTables =>
      prevTables.map(table => {
        if (table.id === tableId) {
          if (table.columns.length > 1) {
            return {
              ...table,
              columns: table.columns.filter((_, index) => index !== columnIndex),
              rows: table.rows.map(row => {
                const newRow = { ...row };
                delete newRow[table.columns[columnIndex]];
                return newRow;
              })
            };
          }
        }
        return table;
      })
    );
  };

  const tableRef = useRef(null);
  const [selectedTable, setSelectedTable] = useState(null);

  const handleMouseDown = e => {
    if (e.button === 2 && tableRef.current.contains(e.target)) {
      e.preventDefault();
      const tableId = parseInt(e.target.closest('table').dataset.id);
      setSelectedTable(tableId);
    }
  };

  return (
    <div className="">
      <h1 className="d-flex justify-content-center align-items-center rounded bg-secondary m-0">
        Making Plan Process
      </h1>
      <div className="p-3">
        {headers.map((header, index) => (
          <h2 key={index}>{header}</h2>
        ))}
        {texts.map((text, index) => (
          <p key={index} style={{ fontSize: 12 }}>
            {text}
          </p>
        ))}
      </div>
      {tables.map(table => (
        <div key={table.id} className="d-flex justify-content-center align-items-center rounded bg-secondary m-1">
          <table
            ref={tableRef}
            data-id={table.id}
            className={`bg-white p-3 w-25 table-bordered ${selectedTable === table.id ? 'selected' : ''}`}
            onMouseDown={handleMouseDown}
          >
            <thead>
              <tr>
                {table.columns.map((column, columnIndex) => (
                  <th key={columnIndex} scope="col" contentEditable={columnIndex !== 0 ? 'true' : 'false'}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={row.id}>
                  {table.columns.map((column, columnIndex) => (
                    <td key={columnIndex} contentEditable={columnIndex !== 0 ? 'true' : 'false'}>
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="buttons">
            <button type="button" onClick={() => handleAddRow(table.id)}>
              Add Row
            </button>
            <button type="button" onClick={() => handleAddColumn(table.id)}>
              Add Column
            </button>
            <button type="button" onClick={() => handleDeleteColumn(table.id, table.columns.length - 1)}>
              Delete Column
            </button>
            <button type="button" onClick={() => handleDeleteRow(table.id, table.rows.length - 1)}>
              Delete Row
            </button>
            <button type="button" onClick={() => deleteTable(table.id)}>
              Delete Table
            </button>
          </div>
        </div>
      ))}
      <div>
        <button type="button" onClick={addHeader}>
          Add Header
        </button>
        <button type="button" onClick={addText}>
          Add Text
        </button>
        <button type="button" onClick={addTable}>
          Add New Table
        </button>
      </div>
    </div>
  );
}

export default Home;
