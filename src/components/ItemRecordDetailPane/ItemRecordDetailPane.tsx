import React from 'react';
import { Button, ErrorBoundary, Pane } from '@folio/stripes/components';
import { noop } from 'lodash';

import { IItemRecordData } from '../../interfaces';
import { t } from '../../utilities';

export const ItemRecordDetailPane: React.FC<IItemRecordData> = ({ itemRecordControl, view, stripes }) => {
  const selected = !!itemRecordControl?.selectedNode ? itemRecordControl.selectedNode : {};

  const actionMenu = <Button bottomMargin0 buttonStyle='primary' onClick={noop}>{ t('button.actions') }</Button>;

  return <Pane defaultWidth='fill' lastMenu={actionMenu} paneTitle={ t('title.itemRecordDetailPane') }>
    <ErrorBoundary>
    </ErrorBoundary>
  </Pane>;
};
