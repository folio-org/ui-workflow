import React from 'react';
import { Card } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';

/**
 * Provide an Item value for displaying a single graph of a Node.
 *
 * This graph of a Node shall process the onSelect when clicked.
 */
export const GraphItemValue: React.FC<IItemValue> = ({ empty, id, onSelect, value }) => {
  if (typeof value !== 'object' && empty === true) {
    return null;
  }

  return <Card headerClass='node-detail' headerStart={ value?.name } key={ value?.id }>{value?.description}</Card>;
};
