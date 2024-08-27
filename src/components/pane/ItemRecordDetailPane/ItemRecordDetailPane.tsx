import React from 'react';
import { ErrorBoundary, Pane, Paneset } from '@folio/stripes/components';

import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';
import { ItemRecordDetailView } from '../../../views';

/**
 * A pane for displaying the Workflow Item Record details.
 */
export const ItemRecordDetailPane: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props?.control.selectedNode : {};

  if (!props?.control?.detailControl?.show || !props?.control?.selectedNode) {
    return null;
  }

  const paneTitle = !!selected?.name
    ? t('title.itemRecordDetailPane.node', { name: selected.name })
    : t('title.itemRecordDetailPane');
  const onClose = !!props?.control?.detailControl?.onClose ? props?.control.detailControl.onClose : false;

  return <Paneset>
    <Pane defaultWidth='fill' dismissible onClose={onClose} paneTitle={paneTitle}>
      <ErrorBoundary>
        <ItemRecordDetailView { ...props } />
      </ErrorBoundary>
    </Pane>
  </Paneset>;
};
