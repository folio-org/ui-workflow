import React from 'react';

/**
 * A state for showing and hiding a generic modal.
 *
 * showCallback: Call this function when the state it set to show.
 * hideCallback: Call this function when the state it set to hide.
 */
export const useModal = (showCallback?: any, hideCallback?: any) => {
  const [ show, setShow ] = React.useState(false);

  const onShow = () => {
    setShow(true);

    if (!!showCallback) {
      showCallback();
    }
  };

  const onHide = () => {
    setShow(false);

    if (!!showCallback) {
      hideCallback();
    }
  };

  return { onHide, onShow, show };
};
