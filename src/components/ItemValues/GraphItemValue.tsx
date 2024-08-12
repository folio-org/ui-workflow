import React from 'react';
import { Card } from '@folio/stripes/components';

import css from './GraphItemValue.module.css';
import { IItemValue } from '../../interfaces';

/**
 * Provide an Item value for displaying a single graph of a Node.
 *
 * This graph of a Node shall process the onSelect when clicked.
 */
export const GraphItemValue: React.FC<IItemValue> = ({ empty, onSelect, selected, value }) => {
  const cardClass = !!selected?.id && value?.id === selected.id ? css?.selected : null;

  const onClick = (e: any) => {
    if (!!onSelect) onSelect(e, value);
  };

  if (typeof value !== 'object' && empty === true) {
    return null;
  }

  return <Card
    headerClass={ css?.nodeHeader }
    bodyClass={ css?.nodeBody }
    cardClass={cardClass}
    headerStart={ value?.name }
    headerEnd={ value?.deserializeAs }
    key={ value?.id }
    onClick={onClick}>{ value?.description }
  </Card>;
};
