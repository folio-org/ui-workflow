import React from 'react';
import { ErrorBoundary, Pane } from '@folio/stripes/components';

import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';
import { ItemRecordDetailView } from '../../../views';

/**
 * A pane for displaying the Workflow Item Record details.
 */
export const ItemRecordDetailPane: React.FC<IItemRecordPane> = (props?: any) => {
  if (!props?.workflow?.data || !props?.control?.detailControl?.show) {
    return null;
  }

  const selected = props?.workflow?.data;
  const paneTitle = !!selected?.name
    ? t('title.itemRecordDetailPane.node', { name: selected.name })
    : t('title.itemRecordDetailPane');
  const onClose = !!props.control.detailControl?.onClose ? props.control.detailControl.onClose : false;

  return <Pane id={ props?.id } defaultWidth='fill' dismissible onClose={onClose} paneTitle={paneTitle}>
    <ErrorBoundary>
      <ItemRecordDetailView { ...props } />
    </ErrorBoundary>
  </Pane>;
};
