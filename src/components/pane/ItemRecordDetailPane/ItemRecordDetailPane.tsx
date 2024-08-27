import React from 'react';
import { ErrorBoundary, Pane, Paneset } from '@folio/stripes/components';

import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';
import { ItemRecordDetailView } from '../../../views';

/**
 * A pane for displaying the Workflow Item Record details.
 */
export const ItemRecordDetailPane: React.FC<IItemRecordPane> = ({ control, view, stripes }) => {
  const selected = !!control?.selectedNode ? control.selectedNode : {};

  if (!control?.detailControl?.show || !control?.selectedNode) {
    return null;
  }

  const paneTitle = !!selected?.name
    ? 'HERE'+ t('title.itemRecordDetailPane.node', { name: selected.name })
    : 'ALSO HERE' + t('title.itemRecordDetailPane');
  const onClose = !!control?.detailControl?.onClose ? control.detailControl.onClose : false;

  return <Paneset>
    <Pane defaultWidth='fill' dismissible onClose={onClose} paneTitle={paneTitle}>
      <ErrorBoundary>
        <ItemRecordDetailView control={control} view={view} stripes={stripes} />
      </ErrorBoundary>
    </Pane>
  </Paneset>;
};
