import React, { useCallback } from 'react';

/**
 * A ctoggle control for executing some callback with a show state.
 *
 * The optional toggleCallback is executed after the show state is toggled.
 */
export const useToggleControl = (toggleCallback?: any) => {
  const [ toggle, setToggle ] = React.useState(false);

  const onToggle = useCallback(() => {
    setToggle(!toggle);

    if (!!toggleCallback) {
      toggleCallback();
    }
  }, [ toggle ]);

  return { toggle, onToggle, setToggle };
};
