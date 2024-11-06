import React, { useCallback } from 'react';

/**
 * A basic pane control for showing or hiding some Pane.
 */
export const usePaneControl = (path: any) => {
  const [ show, setShow ] = React.useState(false);

  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  return { setShow, show, onClose };
};
