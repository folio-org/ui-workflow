import React from 'react';
import { Card, Pane } from '@folio/stripes/components';
import { IItemRecord } from '../../interfaces';


interface ItemRecordDetailProps {
  selectedItem: IItemRecord | null;
  showDetailPane: boolean | null;
}

export const ItemRecordDetailPane: React.FC<ItemRecordDetailProps> = ({ selectedItem, showDetailPane }) => {
  const [showDetail, setShowDetail] = React.useState(true);
  // const [loading, setLoading] = React.useState(true);

  const toggleDetailPane = () => {
    console.log(showDetail, selectedItem?.nodes);
    setShowDetail(false);
  };

  if (!selectedItem) {
    return <div>No item selected</div>;
  }

  return (
    <div style={{ border: '5px solid blue' }}>
      <Pane
        defaultWidth="fill"
        paneTitle={selectedItem.name}
        dismissible
        onClose={toggleDetailPane}
      >
        <Card
          headerClass="my-card-header"
          headerStart={<span className="my-card-header">{selectedItem.name}</span>}
        >
          <p>ID: {selectedItem.id}</p>
          <p>Name: {selectedItem.name}</p>
          <p>description: {selectedItem.description}</p>
          <p>Active: {selectedItem.active ? 'Yes' : 'No'}</p>
          <p>History Time To Live: {selectedItem.historyTimeToLive}</p>
          <p>Deployment ID: {selectedItem.deploymentId}</p>
          {/* <ul>
            {selectedItem.nodes && selectedItem.nodes.length > 0 ? (
              selectedItem.nodes.map(node => (
                <li key={node.id}>
                  <strong>{node.name}</strong> - {node.description}
                </li>
              ))
            )}
          </ul> */}
          <p>Version Tag: {selectedItem.versionTag}</p>
          <p>Set up:</p>
        </Card>
      </Pane>
    </div>
  );
};
