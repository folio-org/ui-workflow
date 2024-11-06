import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * Provide an Item value for displaying a password string.
 *
 * The actual password should not be displayed unless under certain circumstances.
 */
export const PasswordItemValue: React.FC<IItemValue> = ({ empty, label, value }) => {
  const tag = typeof value === 'string' ? value : undefined;

  if (typeof value !== 'string' && empty === true) {
    return null;
  }

  return <KeyValue label={ t(label) }>{ t('workflows.value.password.hidden') }</KeyValue>;
};
