import React from 'react';
import { MultiColumnList } from '@folio/stripes/components';

import { NO_VALUE } from '../../../constants';
import { IItemValue } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * Provide an Item value for displaying a list of strings.
 *
 * This handles representation of a map of strings.
 *
 * This shall return NULL even if empty is not set.
 *
 * This produces a non-interactive table.
 *
 * The column is mapped to the `workflows.label.${column}` and so the language file must have this defined.
 */
export const StringListItemValue: React.FC<IItemValue> = ({ column, empty, label, value }) => {
  const values: Record<string, any>[] = [];
  const c: string = !!column ? column : 'values';

  if (typeof value === 'object') {
    Object.entries(value).forEach(([k, v]) => {
      if (!!k && !!v) {
        let val: Record<string, any> = {};
        val[c] = v;
        values.push(val);
      }
    });
  }

  if (values.length == 0 && empty == true) {
    return null;
  }

  // Work-around issue with MultiColumnList where the table headers are not displayed when the list is empty.
  // Only the "The list contains no items" is displayed (without a header/label) and that is confusing.
  if (values.length == 0) {
    let val: Record<string, any> = {};
    val[c] = NO_VALUE;
    values.push(val);
  }

  let columnMapping: Record<string, any> = {};
  columnMapping[c] = t(`workflows.label.${c}`);

  return <MultiColumnList contentData={values} columnMapping={columnMapping} interactive={false} />;
};
