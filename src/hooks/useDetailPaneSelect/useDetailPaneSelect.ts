import React from 'react';

import { IItemRecordDetail } from '../../interfaces'; 

export const useDetailPaneSelect = (path: any) => {
  const [selectedItem, setSelectedItem] = React.useState();
  const [showDetail, setShowDetail] = React.useState(true);

  const onRowClick = (event: any, item: any) => {
    // event?.preventDefault();
    console.log(selectedItem);
    console.log('ROW CLICKED', item);
    setSelectedItem(item);
    setShowDetail(true);
  };
  
  return { selectedItem, showDetail, onRowClick };
};
