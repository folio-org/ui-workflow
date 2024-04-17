import React from 'react';

export const useDetailPaneSelect = (path: any) => {
  const [selectedItem, setSelectedItem] = React.useState();
  const [showDetail, setShowDetail] = React.useState(true);

  const onRowClick = (event: any, item: any) => {
    setSelectedItem(item);
    setShowDetail(true);
  };

  const onClose = () => {
    setShowDetail(false);
  };

  return { selectedItem, showDetail, onRowClick, onClose };
};
