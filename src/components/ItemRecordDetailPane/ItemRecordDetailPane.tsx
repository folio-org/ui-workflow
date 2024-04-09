import React from 'react';
import { Button, Card, ErrorBoundary, Pane } from '@folio/stripes/components';
import { IItemRecordDetailPane } from '../../interfaces';
import { IWorkflowNodes } from '../../interfaces';
import { noop } from 'lodash';

import { t } from '../../utilities';

export const ItemRecordDetailPane: React.FC<IItemRecordDetailPane> = ({ detailPaneSelect }) => {
  const { selectedItem, showDetail, onRowClick, onClose } = detailPaneSelect;

  const actionMenu = <Button bottomMargin0 buttonStyle="primary" onClick={noop}>{ t('button.actions') }</Button>;

  if (!selectedItem) {
    return <div>No item selected</div>;
  }
  const workflowNodes = selectedItem?.nodes;

  if (!showDetail) {
    return null;
  }

  return (
    <Pane
      defaultWidth="fill"
      dismissible
      lastMenu={actionMenu}
      onClose={onClose}
      paneTitle={selectedItem?.name}
    >
      <Card
        headerClass="my-card-header"
        headerStart={<span className="my-card-header">{selectedItem?.name}</span>}
      >
        <p>ID: {selectedItem?.id}</p>
        <p>Name: {selectedItem?.name}</p>
        <p>Description: {selectedItem?.description}</p>
        <p>Active: {selectedItem?.active ? 'Yes' : 'No'}</p>
        <p>History Time To Live: {selectedItem?.historyTimeToLive}</p>
        <p>Deployment ID: {selectedItem?.deploymentId}</p>
        <p>Version Tag: {selectedItem?.versionTag}</p>
        <p>Set up:</p>
      </Card>
      <Card>
        {selectedItem?.nodes.map((item: IWorkflowNodes) => (
          <><p>ID: {item?.id}</p><p>Async Before: {item?.asyncBefore}</p><p>Description: {item?.description}</p><p>DeserializeAs: {item?.deserializeAs}</p><p>Id: {item?.id}</p><p>Identifier: {item?.identifier}</p><p>Name: {item?.name}</p><p>Type: {item?.type}</p></>
        ))}
      </Card>
    </Pane>
  );
};
