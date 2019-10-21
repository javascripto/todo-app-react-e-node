import React from 'react';

import If from './if';

export default ({ hide, style, onClick, icon }) => (
  <If test={!hide}>
    <button
      onClick={onClick}
      className={`btn btn-${style}`}>
      <i className={`fa fa-${icon}`}></i>
    </button>
  </If>
)