import React from 'react';
import { Accordion, AccordionSet, MultiColumnList } from '@folio/stripes/components';

import { NO_VALUE } from '../../../constants';
import { IItemValue } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * Provide an Item value for displaying a list of Embedded Variables.
 *
 * This handles representation of a map of Embedded Variable objects.
 *
 * This shall return NULL even if empty is not set.
 * This shall return NULL if columns is empty.
 *
 * This produces a non-interactive table.
 *
 * The column is used for the Accordion name.
 * Each value in columns is mapped to the `workflows.label.${columns[]}` and so the language file must have each value defined.
 */
export const TableListItemValue: React.FC<IItemValue> = ({ column, columns, columnsWidths, empty, label, parentId, value }) => {
  if (!columns || typeof columns !== 'object' || (columns?.length || 0) == 0) {
    return null;
  }

  const values: Record<string, any>[] = [];

  if (typeof value === 'object') {
    Object.entries(value).forEach(([k, v]) => {
      if (!!k && !!v && typeof v === 'object') {
        let val: Record<string, any> = {};

        columns.forEach((c: string) => {
          // The v[c] cannot be directly used because of TS7053, so loop through and find the Objec.
          Object.entries(v).forEach(([vk, vv]) => {
            if (c == vk) {
              const vvType = typeof vv;

              if (vvType == 'string') {
                val[vk] = vv;
              } else if (vvType == 'boolean') {
                val[vk] = vv ? t('workflows.value.boolean.true') : t('workflows.value.boolean.false');
              }
            }
          });
        });

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

    columns.forEach((c: string) => val[c] = NO_VALUE);
    values.push(val);
  }

  const columnId: string = !!column ? column : 'values';
  const initialStatus: Record<string, any> = {};
  let columnMapping: Record<string, any> = {};

  columns.forEach((c: string) => {
    columnMapping[c] = t(`workflows.label.${c}`);
    initialStatus[c] = false;
  });

  return <Accordion label={ t(`workflows.label.${columnId}`) } id={ `${parentId}.${columnId}` }>
    <AccordionSet initialStatus={initialStatus}><MultiColumnList contentData={values} columnMapping={columnMapping} columnWidths={columnsWidths} interactive={false} /></AccordionSet>
  </Accordion>;
};
