import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';
import { t } from '../../utilities';

/**
 * Provide an Item value for displaying an SQL string.
 */
export const SqlItemValue: React.FC<IItemValue> = ({ empty, label, value }) => {
  const tag = typeof value === 'string' ? value : undefined;

  if (typeof value !== 'string' && empty === true) {
    return null;
  }

  return <KeyValue label={ t(label) }>{tag}</KeyValue>;
};
