import React from 'react';
import { ErrorBoundary, LoadingPane, Pane } from '@folio/stripes/components';

import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';
import { GraphsItemValue } from '../..';

/**
 * A pane for displaying the Workflow Item Record graphs.
 */
export const ItemRecordGraphPane: React.FC<IItemRecordPane> = ({ control, id, workflow }) => {
  const selected = {
    ...workflow?.data,
    selectedNode: control?.selectedNode
  };
  const paneTitle = selected?.name ? selected.name : t('title.itemRecordGraphPane');
  const loadingPane = (workflow?.isLoading)
    ? <LoadingPane />
    : null;

  if (!workflow?.data) {
    return null;
  }

  return <Pane id={id} defaultWidth="70%" paneTitle={paneTitle}>
    <ErrorBoundary>
      {loadingPane}
      <GraphsItemValue label="workflows.label.graphs" value={ selected?.nodes } onSelect={ control?.onNodeClick } selected={selected} />
    </ErrorBoundary>
  </Pane>;
};
