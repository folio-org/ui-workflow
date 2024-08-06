import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';

export const BooleanItemValue: React.FC<IItemValue> = ({ id, value }) => {
  const label = <FormattedMessage id={id} />;
  const strValue = typeof value === 'string' ? value.toLowerCase() : null;
  const tag = value === true ||
    typeof value === 'number' && value !== 0 ||
    strValue !== null && (strValue == 'true' || strValue == 't' || strValue == 'yes')
      ? <FormattedMessage id='ui-workflow.workflows.value.boolean.true' />
      : <FormattedMessage id='ui-workflow.workflows.value.boolean.false' />;

  if (value === null || value === undefined) {
    return null;
  }

  return (
    <KeyValue label={label}>{ tag }</KeyValue>
  );
};
