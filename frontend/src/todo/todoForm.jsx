import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default ({ handleAdd, handleChange, handleSearch, handleClear, description }) => {
  const keyHandler = e => {
    console.log(e.key);
    if (e.key === 'Enter') return e.shiftKey ? handleSearch() : handleAdd();
    if (e.key === 'Escape') return handleClear();
  }

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          value={description}
          onKeyDown={keyHandler}
          onChange={handleChange}
          className="form-control"
          placeholder="Adicione uma tarefa"
        />
      </Grid>
      <Grid cols="12 3 2">
        <IconButton
          icon="plus"
          style="primary"
          onClick={handleAdd}
        />
        <IconButton
          style="info"
          icon="search"
          onClick={handleSearch}
        />
        <IconButton
          icon="close"
          style="default"
          onClick={handleClear}
        />
      </Grid>
    </div>
  );
};
