import React from 'react';

export const useItemRecordControl = (path: any) => {
  const [ selectedItem, setSelectedItem ] = React.useState();
  const [ showDetail, setShowDetail ] = React.useState(false);

  const onRowClick = (event: any, item: any) => {
    setSelectedItem(item);
    setShowDetail(true);
  };

  const onClose = () => {
    setShowDetail(false);
  };

  return { selectedItem, setShowDetail, showDetail, onRowClick, onClose };
};
