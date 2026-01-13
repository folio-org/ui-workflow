import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * Provide an Item value for displaying a Java ZonedDateTime integer value.
 */
export const ZonedDateTimeItemValue: React.FC<IItemValue> = ({ empty, label, value }) => {
  const tag = typeof value === 'number' ? new Date(value * 1000).toString() : undefined;

  if (tag === undefined && empty === true) {
    return null;
  }

  return <KeyValue label={ t(label) }>{tag}</KeyValue>;
};
