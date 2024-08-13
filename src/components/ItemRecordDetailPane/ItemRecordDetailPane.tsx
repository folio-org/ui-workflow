import React from 'react';
import { Button, ErrorBoundary, Pane, Paneset } from '@folio/stripes/components';
import { noop } from 'lodash';

import { IItemRecordPane } from '../../interfaces';
import { t } from '../../utilities';
import { ItemRecordDetailView } from '../../views';

/**
 * A pane for displaying the Workflow Item Record details.
 */
export const ItemRecordDetailPane: React.FC<IItemRecordPane> = ({ control, view, stripes }) => {
  const selected = !!control?.selectedNode ? control.selectedNode : {};
  const paneTitle = !!selected?.name
    ? t('title.itemRecordDetailPane.node', { name: selected.name })
    : t('title.itemRecordDetailPane');
  const onClose = !!control?.detailControl?.onClose ? control.detailControl.onClose : false;

  const actionMenu = <Button bottomMargin0 buttonStyle='primary' onClick={noop}>{ t('button.actions') }</Button>;

  if (!control?.detailControl?.show || !control?.selectedNode) {
    return null;
  }

  return <Paneset>
    <Pane defaultWidth='fill' dismissible onClose={onClose} lastMenu={actionMenu} paneTitle={paneTitle}>
      <ErrorBoundary>
        <ItemRecordDetailView control={control} view={view} stripes={stripes} />
      </ErrorBoundary>
    </Pane>
  </Paneset>;
};
