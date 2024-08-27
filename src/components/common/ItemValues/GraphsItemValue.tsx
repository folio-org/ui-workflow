import React from 'react';

import { GraphItemValue } from '../../../components';
import { IItemValue } from '../../../interfaces';

/**
 * Provide an Item value for displaying a list of Nodes as a graph.
 *
 * This handles representation of a map of Nodes such that each Node is interactable.
 * This passes the onSelect event handler onto each individual graph.
 *
 * This shall return NULL even if empty is not set.
 * The empty property is passed onto the individual graphs.
 */
export const GraphsItemValue: React.FC<IItemValue> = ({ empty, onSelect, selected, value }) => {
  const values: any[] = [];
  if (typeof value === 'object') {
    Object.values(value).forEach(v => {
      if (!!v) {
        values.push(<GraphItemValue empty onSelect={onSelect} selected={selected} value={v} />);
      }
    });
  }

  return values.length == 0 ? null : <>{values}</>;
};
