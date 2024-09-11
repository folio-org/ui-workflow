import React from 'react';
import { ErrorBoundary, LoadingPane, Pane } from '@folio/stripes/components';

import { GraphsItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A pane for displaying the Workflow Item Record graphs.
 */
export const ItemRecordGraphPane: React.FC<IItemRecordPane> = ({ control, id, workflow }) => {
  if (!workflow?.data) {
    return null;
  }

  const selected = workflow?.data;
  const paneTitle = selected?.name ? selected.name : t('title.itemRecordGraphPane');
  const loadingPane = (workflow?.isLoading)
    ? <LoadingPane />
    : null;

  return <Pane id={id} defaultWidth='70%' paneTitle={paneTitle}>
    <ErrorBoundary>
      {loadingPane}
      <GraphsItemValue label='workflows.label.graphs' value={ selected?.nodes } onSelect={ control?.onNodeClick } selected={selected} />
    </ErrorBoundary>
  </Pane>;
};
