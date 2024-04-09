import React from 'react';

import { IItemRecordDetail } from '../../interfaces';
export const useDetailPaneSelect = (path: any) => {
  const [selectedItem, setSelectedItem] = React.useState();
  const [showDetail, setShowDetail] = React.useState(true);


  const onRowClick = (event: any, item: any) => {
    // event?.preventDefault();
    setSelectedItem(item);
    setShowDetail(true);
  };

  const onClose = () => {
    setShowDetail(false);
  };

  return { selectedItem, showDetail, onRowClick, onClose };
};
