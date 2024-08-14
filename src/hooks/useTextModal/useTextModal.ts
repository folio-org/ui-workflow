import React from 'react';

export const useTextModal = (path?: any) => {
  const [ show, setShow ] = React.useState(false);

  const onClose = () => {
    setShow(false);
  };

  const onClick = () => {
    setShow(true);
  };

  return { setShow, show, onClick, onClose };
};
