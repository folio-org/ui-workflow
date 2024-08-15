import React, { useCallback } from 'react';

/**
 * Control structure for using an Item Record.
 */
export const useItemRecordControl = (path: any) => {
  const [ selectedItem, setSelectedItem ] = React.useState();
  const [ selectedNode, setSelectedNode ] = React.useState();
  const [ showDetail, setShowDetail ] = React.useState(false);
  const [ showRecord, setShowRecord ] = React.useState(false);

  const onItemClick = useCallback((event: any, item: any) => {
    setSelectedItem(!!item ? item : null);
    setShowRecord(!!item);
  }, [ selectedItem, showRecord ]);

  const onNodeClick = useCallback((event: any, node: any, append: any) => {
    setSelectedNode(!!node ? node : null);
    setShowDetail(!!node);
  }, [ selectedNode, showDetail ]);

  const detailControl = {
    onClose: useCallback(() => {
      setSelectedNode(null);
      setShowDetail(false);
    }, [ selectedNode, showDetail ]),
    setShow: setShowDetail,
    show: showDetail
  };

  const recordControl = {
    onClose: useCallback(() => {
      setShowDetail(false);
      setShowRecord(false);
    }, [ showDetail, showRecord ]),
    setShow: setShowRecord,
    show: showRecord
  };

  return { detailControl, onItemClick, onNodeClick, recordControl, selectedItem, selectedNode, setSelectedItem, setSelectedNode };
}
