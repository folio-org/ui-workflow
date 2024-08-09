import type { FunctionComponent } from 'react';
import React from 'react';

import { ErrorBoundary, Layer, Paneset } from '@folio/stripes/components';

import { ItemRecordDetailPane, ItemRecordGeneralPane, ItemRecordGraphPane } from '../../components';
import { IItemRecordView } from '../../interfaces';

export const ItemRecordView: FunctionComponent<IItemRecordView> = ({ itemRecordControl, view, stripes }) => {
  return <Layer isOpen={ !!itemRecordControl?.showDetail ? itemRecordControl.showDetail : false }>
    <ErrorBoundary>
      <Paneset>
        <ItemRecordGeneralPane itemRecordControl={itemRecordControl} view={view} stripes={stripes} />
        <ItemRecordGraphPane itemRecordControl={itemRecordControl} view={view} stripes={stripes} />
        <ItemRecordDetailPane itemRecordControl={itemRecordControl} view={view} stripes={stripes} />
      </Paneset>
    </ErrorBoundary>
  </Layer>;
};
