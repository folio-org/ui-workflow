import React from 'react';
import { ErrorBoundary, Pane } from '@folio/stripes/components';

import { GraphsItemValue } from '../../components';
import { IItemRecordView } from '../../interfaces';
import { t } from '../../utilities';

export const ItemRecordGraphPane: React.FC<IItemRecordView> = ({ itemRecordControl, view, stripes }) => {
  const selected = !!itemRecordControl?.selectedItem ? itemRecordControl.selectedItem : {};
  const paneTitle = selected?.name ? itemRecordControl.selectedItem.name : t('title.itemRecordGraphPane');

  return <Pane defaultWidth='fill' paneTitle={paneTitle}>
    <ErrorBoundary>
      <GraphsItemValue id='workflows.label.graphs' value={ selected?.nodes } />
    </ErrorBoundary>
  </Pane>;
};
