import React from 'react';
import { Icon } from '@folio/stripes/components';

import css from './GraphItemIconSvgs.module.css';

export const GraphItemIconEmailTaskSvg: React.FC = () => {
  const icon = () => (
    <svg fill="#000000" height="100%" width="100%" className={css?.graphItemIconSvg} version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
      <polygon points="283.7,298.7 283.7,0 198.3,0 198.3,298.7 70.3,298.7 241,512 411.7,298.7 "/>
    </svg>
  );

  return <Icon icon={icon}/>;
};
