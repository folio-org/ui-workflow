import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../../interfaces';
import { t, isFolioTruthy } from '../../../utilities';

/**
 * Provide an Item value for displaying a list of boolean type.
 *
 * This handles representation of a map of boolean data.
 */
export const BooleanMapItemValue: React.FC<IItemValue> = ({ empty, label, value }) => {
  const values = [];
  const trueValue = t('workflows.value.boolean.true');
  const falseValue = t('workflows.value.boolean.false');

  if (typeof value === 'object') {
    for (const [ k, v ] of Object.entries(value)) {
      const boolValue = isFolioTruthy(v) ? trueValue : falseValue;
      values.push(<p key={k}><span>{k}: </span><span>{boolValue}</span></p>);
    }
  }

  if (values.length === 0 && empty === true) {
    return null;
  }

  return <KeyValue label={ t(label) }>{values.length ? values : undefined}</KeyValue>;
};
