import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';

export const StringItemValue: React.FC<IItemValue> = ({ empty, id, value }) => {
  const label = <FormattedMessage id={id} />;
  const tag = typeof value === 'string' ? value : undefined;

  if (typeof value !== 'string' && empty === true) {
    return null;
  }

  return (
    <KeyValue label={label}>{tag}</KeyValue>
  );
};
