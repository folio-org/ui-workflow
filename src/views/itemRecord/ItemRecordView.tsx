import type { FunctionComponent } from 'react';
import React from 'react';

import { ErrorBoundary, Layer, Paneset } from '@folio/stripes/components';

import { ItemRecordDetailPane, ItemRecordGeneralPane, ItemRecordGraphPane } from '../../components';
import { IItemRecordView } from '../../interfaces';

export const ItemRecordView: FunctionComponent<IItemRecordView> = ({ itemRecordDetail, view, stripes }) => {
  return <Layer isOpen={!!itemRecordDetail?.showDetail ? itemRecordDetail.showDetail : false}>
    <ErrorBoundary>
      <Paneset>
        <ItemRecordGeneralPane itemRecordDetail={itemRecordDetail} view={view} stripes={stripes} />
        <ItemRecordGraphPane itemRecordDetail={itemRecordDetail} view={view} stripes={stripes} />
        <ItemRecordDetailPane itemRecordDetail={itemRecordDetail} view={view} stripes={stripes} />
      </Paneset>
    </ErrorBoundary>
  </Layer>;
};
