import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * Provide an Item value for displaying a boolean type.
 *
 * This handles multiple representations of boolean data.
 */
export const BooleanItemValue: React.FC<IItemValue> = ({ empty, label, value }) => {
  const strValue = typeof value === 'string' ? value.toLowerCase() : null;
  const tag = value === true ||
    typeof value === 'number' && value !== 0 ||
    strValue !== null && (strValue == 'true' || strValue == 't' || strValue == 'yes')
      ? t('workflows.value.boolean.true')
      : value === null || value === undefined
        ? '-'
        : t('workflows.value.boolean.false');

  if ((value === null || value === undefined) && empty === true) {
    return null;
  }

  return <KeyValue label={ t(label) }>{tag}</KeyValue>;
};
