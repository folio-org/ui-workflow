import React, { useCallback } from 'react';

/**
 * A state for showing and hiding a generic modal.
 *
 * showCallback: Call this function when the state it set to show.
 * hideCallback: Call this function when the state it set to hide.
 */
export const useModal = (showCallback?: any, hideCallback?: any) => {
  const [ show, setShow ] = React.useState(false);

  const onShow = useCallback(() => {
    setShow(true);

    if (!!showCallback) {
      showCallback();
    }
  }, [ show ]);

  const onHide = useCallback(() => {
    setShow(false);

    if (!!hideCallback) {
      hideCallback();
    }
  }, [ show ]);

  return { onHide, onShow, show };
};
