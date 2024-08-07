import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ErrorBoundary, Pane } from '@folio/stripes/components';

import { IItemRecordView } from '../../interfaces';

export const ItemRecordGeneralPane: React.FC<IItemRecordView> = ({ itemRecordDetail, view, stripes }) => {
  const paneTitle= <FormattedMessage id='ui-workflow.title.itemRecordGeneralPane' />
  const onClose = !!itemRecordDetail?.onClose ? itemRecordDetail.onClose : false;

  return <Pane defaultWidth='fill' dismissible onClose={onClose} paneTitle={paneTitle}>
    <ErrorBoundary>
    </ErrorBoundary>
  </Pane>;
};
