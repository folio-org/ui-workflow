import React from 'react';

export const useImportDetailPane = (path: any) => {
  const [ showDetail, setShowDetail ] = React.useState(false);

  const onClose = () => {
    setShowDetail(false);
  };

  return { setShowDetail, showDetail, onClose };
};
