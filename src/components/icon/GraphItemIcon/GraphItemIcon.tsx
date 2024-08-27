import React from 'react';
import { Icon } from '@folio/stripes/components';

import { IGraphItemIcon } from '../../../interfaces';
import css from './GraphItemIcon.module.css';

/**
 * A graph icon based on node type.
 */
export const GraphItemIcon: React.FC<IGraphItemIcon> = ({ type }) => {
  const icon = (props?: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19.9 2.4v10.4l9.7-5.2zM2.4 29.6l9.7-5.2-9.7-5.2zm17.5 0l9.7-5.2-9.7-5.2z" />
    </svg>
  );

  // TODO: if condition for all icons
  return <>
    <Icon icon={icon} size="small" iconClassName={ css?.graphItemIcon } />
    <span>{type}</span>
  </>;
};
