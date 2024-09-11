import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

/**
 * Control structure for using an Item Record.
 */
export const useItemRecordControl = (path: string) => {
  const [ selectedNode, setSelectedNode ] = useState();
  const [ showDetail, setShowDetail ] = useState(false);
  const navigate = useHistory();

  const close = useCallback((event: any, item: any) => {
    // Change this to useNavigate once React 6 or greater is used.
    navigate.push(path);
  }, []);

  const onNodeClick = useCallback((event: any, node: any, append: any) => {
    setSelectedNode(!!node ? node : undefined);
    setShowDetail(!!node);
  }, [ selectedNode, showDetail ]);

  const detailControl = {
    onClose: useCallback(() => {
      setSelectedNode(undefined);
      setShowDetail(false);
    }, [ selectedNode, showDetail ]),
    setShow: setShowDetail,
    show: showDetail,
  };

  return { close, detailControl, onNodeClick, selectedNode, setSelectedNode };
}
