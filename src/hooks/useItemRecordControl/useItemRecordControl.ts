import React from 'react';

/**
 * Control structure for using an Item Record.
 */
export const useItemRecordControl = (path: any) => {
  const [ selectedItem, setSelectedItem ] = React.useState();
  const [ selectedNode, setSelectedNode ] = React.useState();
  const [ showDetail, setShowDetail ] = React.useState(false);
  const [ showRecord, setShowRecord ] = React.useState(false);

  const onItemClick = (event: any, item: any) => {
    setSelectedItem(!!item ? item : null);
    setShowRecord(!!item);
  };

  const onNodeClick = (event: any, node: any, append: any) => {
    setSelectedNode(!!node ? node : null);
    setShowDetail(!!node);
  };

  const detailControl = {
    onClose: () => {
      setSelectedNode(null);
      setShowDetail(false);
    },
    setShow: setShowDetail,
    show: showDetail
  };

  const recordControl = {
    onClose: () => {
      setShowDetail(false);
      setShowRecord(false);
    },
    setShow: setShowRecord,
    show: showRecord
  };

  return { detailControl, onItemClick, onNodeClick, recordControl, selectedItem, selectedNode, setSelectedItem, setSelectedNode };
}
