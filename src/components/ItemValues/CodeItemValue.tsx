import React from 'react';
import { KeyValue } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';
import { t } from '../../utilities';

/**
 * Provide an Item value for displaying a Code string (such as Ruby or JavaScript).
 */
export const CodeItemValue: React.FC<IItemValue> = ({ empty, label, value }) => {
  if (typeof value !== 'string' && empty === true) {
    return null;
  }

  const tag = typeof value === 'string' ? value : undefined;

  return <KeyValue label={ t(label) }>{tag}</KeyValue>;
};
