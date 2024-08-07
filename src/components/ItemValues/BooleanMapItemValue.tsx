import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';

export const BooleanMapItemValue: React.FC<IItemValue> = ({ empty, id, value }) => {
  const label = <FormattedMessage id={id} />;
  const values = [];

  if (typeof value === 'object') {
    const trueValue = <FormattedMessage id='ui-workflow.workflows.value.boolean.true' />;
    const falseValue = <FormattedMessage id='ui-workflow.workflows.value.boolean.false' />;

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

  return (
    <KeyValue label={label}>{values.length ? values : undefined}</KeyValue>
  );
};
