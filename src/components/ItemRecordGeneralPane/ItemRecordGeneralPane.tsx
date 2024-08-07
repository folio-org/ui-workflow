import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ErrorBoundary, Pane } from '@folio/stripes/components';

import { IItemRecordView } from '../../interfaces';
import { t } from '../../utilities';

export const ItemRecordGeneralPane: React.FC<IItemRecordView> = ({ itemRecordDetail, view, stripes }) => {
  const onClose = !!itemRecordDetail?.onClose ? itemRecordDetail.onClose : false;

  return <Pane defaultWidth='fill' dismissible onClose={onClose} paneTitle={ t('title.itemRecordGeneralPane') }>
    <ErrorBoundary>
    </ErrorBoundary>
  </Pane>;
};
