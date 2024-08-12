import type { FunctionComponent } from 'react';
import React from 'react';

import { ErrorBoundary, Layer, Paneset } from '@folio/stripes/components';

import { ItemRecordDetailPane, ItemRecordGeneralPane, ItemRecordGraphPane } from '../../components';
import { IItemRecordPane } from '../../interfaces';
import { t } from '../../utilities';

/**
 * A popup sub-view for displaying Workflow Item Record information.
 */
export const ItemRecordView: FunctionComponent<IItemRecordPane> = (props?: any) => {
  const isOpen = !!props?.control?.recordControl?.show ? props?.control.recordControl.show : false;

  return <Layer isOpen={isOpen} contentLabel={ t('layer.label.itemRecord') }>
    <Paneset>
      <ErrorBoundary>
        <ItemRecordGeneralPane { ... props } />
        <ItemRecordGraphPane { ... props } />
        <ItemRecordDetailPane { ... props } />
      </ErrorBoundary>
    </Paneset>
  </Layer>;
};
