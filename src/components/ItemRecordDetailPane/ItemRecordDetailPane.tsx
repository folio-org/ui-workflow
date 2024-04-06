import React from 'react';
import { IItemRecord } from '../../interfaces';
import { Pane } from '@folio/stripes/components';


interface ItemRecordDetailProps {
  selectedItem: IItemRecord | null;
}

export const ItemRecordDetailPane: React.FC<ItemRecordDetailProps> = ({selectedItem}) => {
  if (!selectedItem) {
    return <div>No item selected</div>;
  }

  return (
    <Pane defaultWidth="30%" paneTitle={selectedItem.name}>
      <div>
        <p>ID: {selectedItem.id}</p>
        <p>Name: {selectedItem.name}</p>
        <p>description: {selectedItem.description}</p>
        <p>versionTag: {selectedItem.versionTag}</p>
      </div>
    </Pane>
  );
};