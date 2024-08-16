import React, { useCallback, useState } from 'react';

/**
 * Control structure for using an Item Record.
 */
export const useItemRecordControl = () => {
  const [ selectedItem, setSelectedItem ] = useState();
  const [ selectedNode, setSelectedNode ] = useState();
  const [ showDetail, setShowDetail ] = useState(false);
  const [ showRecord, setShowRecord ] = useState(false);

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
      setSelectedNode(undefined);
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
