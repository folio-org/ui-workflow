import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';

export const StringItemValue: React.FC<IItemValue> = ({ id, value }) => {
  const label = <FormattedMessage id={id} />;

  if (typeof value !== 'string') {
    return null;
  }

  return (
    <KeyValue label={label}>{ value }</KeyValue>
  );
};
