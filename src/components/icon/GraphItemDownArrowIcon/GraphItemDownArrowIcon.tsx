import React from 'react';
import { Icon } from '@folio/stripes/components';

import css from './GraphItemDownArrowIcon.module.css';

export const GraphItemDownArrowIcon: React.FC = () => {
  const icon = () => (
    <svg fill="#000000" height="100%" width="100%" version="1.1" className={ css?.graphItemDownArrowSvg } viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
      <polygon points="283.7,298.7 283.7,0 198.3,0 198.3,298.7 70.3,298.7 241,512 411.7,298.7" />
    </svg>
  );

  return <Icon icon={icon} iconClassName={ css?.graphItemDownArrow } />;
};
