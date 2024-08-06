import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';

export const NumberItemValue: React.FC<IItemValue> = ({ id, value }) => {
  const label = <FormattedMessage id={id} />;
  const tag = typeof value === 'number' ? value.toString() : value;

  if (typeof tag !== 'string') {
    return null;
  }

  return (
    <KeyValue label={label}>{ value }</KeyValue>
  );
};
