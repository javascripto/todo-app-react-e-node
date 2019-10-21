import React from 'react';

import IconButton from '../template/iconButton';

export default ({ list = [], handleRemove, handleMarkAsDone, handleMarkAsPending }) => {

  const TableRows = () => list.map((todo, key) => (
    <tr key={key}>
      <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
      <td>
        <IconButton style="success" hide={todo.done}  icon="check" onClick={() => handleMarkAsDone(todo)} />
        <IconButton style="warning" hide={!todo.done} icon="undo" onClick={() => handleMarkAsPending(todo)} />
        <IconButton style="danger"  hide={!todo.done} icon="trash-o" onClick={() => handleRemove(todo)} />
      </td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {/* <TableRows /> */}
        {TableRows()}
      </tbody>
    </table>
  )
};

