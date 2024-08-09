import React from 'react';

import { GraphItemValue } from '../../components';
import { IItemValue } from '../../interfaces';

/**
 * Provide an Item value for displaying a list of Nodes as a graph.
 *
 * This handles representation of a map of Nodes such that each Node is interactable.
 * This passes the onSelect event handler onto each individual graph.
 *
 * This shall return NULL even if empty is not set.
 * The empty property is passed onto the individual graphs.
 */
export const GraphsItemValue: React.FC<IItemValue> = ({ empty, id, onSelect, value }) => {
  const values: any[] = [];

  if (typeof value === 'object') {
    Object.values(value).forEach(v => {
      values.push(<GraphItemValue value={v} onSelect={onSelect} empty />);
    });
  }

  return values.length == 0 ? null : <>{values}</>;
};
