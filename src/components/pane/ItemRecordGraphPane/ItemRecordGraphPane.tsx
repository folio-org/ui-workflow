import React from 'react';
import { ErrorBoundary, Pane, Paneset } from '@folio/stripes/components';

import { GraphsItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A pane for displaying the Workflow Item Record graphs.
 */
export const ItemRecordGraphPane: React.FC<IItemRecordPane> = ({ control, view, stripes }) => {
  const selectedItem = !!control?.selectedItem ? control.selectedItem : {};
  const paneTitle = selectedItem?.name ? selectedItem.name : t('title.itemRecordGraphPane');

  return <Paneset>
    <Pane defaultWidth='fill' paneTitle={paneTitle}>
      <ErrorBoundary>
        <GraphsItemValue label='workflows.label.graphs' value={ selectedItem?.nodes } onSelect={ control?.onNodeClick } selected={ control?.selectedNode } />
      </ErrorBoundary>
    </Pane>
  </Paneset>;
};
