import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';
import { t } from '../../utilities';

export const NumberItemValue: React.FC<IItemValue> = ({ empty, id, value }) => {
  const tag = typeof value === 'number'
    ? value.toString()
    : typeof value === 'string'
      ? value
      : undefined;

  if (typeof tag !== 'string' && empty === true) {
    return null;
  }

  return <KeyValue label={ t(id) }>{tag}</KeyValue>;
};
