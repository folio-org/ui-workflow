import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * Provide an Item value for displaying a number.
 *
 * This handles representation of the number as a literal number or as a string representing a number.
 */
export const NumberItemValue: React.FC<IItemValue> = ({ empty, label, value }) => {
  const tag = typeof value === 'number'
    ? value.toString()
    : typeof value === 'string'
      ? value
      : undefined;

  if (typeof tag !== 'string' && empty === true) {
    return null;
  }

  return <KeyValue label={ t(label) }>{tag}</KeyValue>;
};
