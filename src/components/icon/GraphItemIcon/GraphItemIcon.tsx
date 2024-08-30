import React from 'react';
import { Icon } from '@folio/stripes/components';

import defaultIcon from '../../../../icons/GraphItem/default.png';
import css from './GraphItemIcon.module.css';

export const GraphItemIcon: React.FC<{ type: string }> = ({ type }) => {
  let icon = defaultIcon;

  return <div className={css?.graphItemtIconTypeDiv}>
    <img alt="Graph Item Icon" src={icon} width="22" height="22" />
    <span>{type}</span>
  </div>;
};
