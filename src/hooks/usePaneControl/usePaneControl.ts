import React from 'react';

export const usePaneControl = (path: any) => {
  const [ show, setShow ] = React.useState(false);

  const onClose = () => {
    setShow(false);
  };

  return { setShow, show, onClose };
};
