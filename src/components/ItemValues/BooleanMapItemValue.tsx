import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';
import { t } from '../../utilities';

/**
 * Provide an Item value for displaying a list of boolean type.
 *
 * This handles representation of a map of boolean data.
 */
export const BooleanMapItemValue: React.FC<IItemValue> = ({ empty, id, value }) => {
  const values = [];

  if (typeof value === 'object') {
    const trueValue = t('workflows.value.boolean.true');
    const falseValue = t('workflows.value.boolean.false');

    for (const [ k, v ] of Object.entries(value)) {
      const strV = typeof v === 'string' ? v.toLowerCase() : null;

      const boolValue = v === true ||
        typeof v === 'number' && v !== 0 ||
        strV !== null && (strV == 'true' || strV == 't' || strV == 'yes')
          ? trueValue
          : falseValue;

      values.push(<p key={k}><span>{k}: </span><span>{boolValue}</span></p>);
    }
  }

  if (values.length == 0 && empty === true) {
    return null;
  }

  return <KeyValue label={ t(id) }>{values.length ? values : undefined}</KeyValue>;
};
