import React from 'react';
import { Icon } from '@folio/stripes/components';
import css from './GraphItemIcon.module.css';

export const GraphItemIcon: React.FC<{ type: string }> = ({ type }) => {
  const spritePath = '../../../../icons/sprites.svg';

  return (
    <>
      <Icon
        icon={() => (
          <svg className={css.graphItemIcon}>
            <use xlinkHref={`${spritePath}#${type}`} />
          </svg>
        )}
        size="small"
      />
      <span>{type}</span>
    </>
  );
};
