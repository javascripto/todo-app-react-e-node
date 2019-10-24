import React from 'react';

import IconButton from '../template/iconButton';

export default ({ list = [], handleRemove, handleMarkAsDone, handleMarkAsPending }) => {

  const TableRows = () => list.map((todo, key) => (
    <tr key={key}>
      <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
      <td>
        <IconButton
          icon="check"
          style="success"
          hide={todo.done}
          onClick={() => handleMarkAsDone(todo)}
        />
        <IconButton
          icon="undo"
          style="warning"
          hide={!todo.done}
          onClick={() => handleMarkAsPending(todo)}
        />
        <IconButton
          icon="trash-o"
          style="danger"
          hide={!todo.done}
          onClick={() => handleRemove(todo)}
        />
      </td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {/* <TableRows /> */}
        {TableRows()}
      </tbody>
    </table>
  )
};

