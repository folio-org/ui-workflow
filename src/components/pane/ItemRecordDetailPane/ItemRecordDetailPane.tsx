import React from 'react';
import { ErrorBoundary, LoadingPane, Pane } from '@folio/stripes/components';

import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';
import { ItemRecordDetailView } from '../../../views';

/**
 * A pane for displaying the Workflow Item Record details.
 */
export const ItemRecordDetailPane: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = props?.workflow?.data;
  const paneTitle = !!selected?.name
    ? t('title.itemRecordDetailPane.node', { name: selected?.name })
    : t('title.itemRecordDetailPane');
  const onClose = !!props?.control?.detailControl?.onClose ? props?.control?.detailControl?.onClose : false;

  const loadingPane = (props?.workflow?.isLoading)
    ? <LoadingPane />
    : null;

  if (!props?.workflow?.data || !props?.control?.detailControl?.show) {
    return null;
  }

  return <Pane id={ props?.id } defaultWidth="30%" dismissible onClose={onClose} paneTitle={paneTitle}>
    <ErrorBoundary>
      {loadingPane}
      <ItemRecordDetailView { ...props } />
    </ErrorBoundary>
  </Pane>;
};
