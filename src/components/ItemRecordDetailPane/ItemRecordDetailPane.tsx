import React from 'react';
import { Button, Card, ErrorBoundary, Pane } from '@folio/stripes/components';
import { IItemRecordDetailPane } from '../../interfaces';
import { noop } from 'lodash';

import { t } from '../../utilities';

export const ItemRecordDetailPane: React.FC<IItemRecordDetailPane> = ({ detailPaneSelect }) => {
  const { selectedItem, showDetail, onRowClick, onClose } = detailPaneSelect;

  const actionMenu = <Button bottomMargin0 buttonStyle="primary" onClick={noop}>{ t('button.actions') }</Button>;

  if (!selectedItem) {
    return <div>No item selected</div>;
  }

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
        <p>description: {selectedItem?.description}</p>
        <p>Active: {selectedItem?.active ? 'Yes' : 'No'}</p>
        <p>History Time To Live: {selectedItem?.historyTimeToLive}</p>
        <p>Deployment ID: {selectedItem?.deploymentId}</p>
        {/* <ul>
          {selectedItem?.nodes && selectedItem?.nodes.length > 0 ? (
            selectedItem?.nodes.map(node => (
              <li key={node.id}>
                <strong>{node.name}</strong> - {node.description}
              </li>
            ))
          )}
        </ul> */}
        <p>Version Tag: {selectedItem?.versionTag}</p>
        <p>Set up:</p>
      </Card>
    </Pane>
  );
};
