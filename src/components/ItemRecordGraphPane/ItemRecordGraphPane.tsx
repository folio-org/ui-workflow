import React from 'react';
import { ErrorBoundary, Pane } from '@folio/stripes/components';

import { IItemRecordView } from '../../interfaces';
import { t } from '../../utilities';

export const ItemRecordGraphPane: React.FC<IItemRecordView> = ({ itemRecordDetail, view, stripes }) => {
  const paneTitle = !!itemRecordDetail?.selectedItem?.name
    ? itemRecordDetail.selectedItem.name
    : t('title.itemRecordGraphPane');

  return <Pane defaultWidth='fill' paneTitle={paneTitle}>
    <ErrorBoundary>
    </ErrorBoundary>
  </Pane>;
};
