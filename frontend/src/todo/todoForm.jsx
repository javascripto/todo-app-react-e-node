import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default ({ handleAdd, handleChange, handleSearch, description }) => {
  const checkEnter = e => (e.key === 'Enter') && handleAdd();
  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          value={description}
          onKeyDown={checkEnter}
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
      </Grid>
    </div>
  );
};
