import { useCallback, useState } from 'react';

/**
 * A ctoggle control for executing some callback with a show state.
 *
 * The optional toggleCallback is executed after the show state is toggled.
 */
export const useToggleControl = (toggleCallback?: any) => {
  const [ toggle, setToggle ] = useState(false);

  const onToggle = useCallback(() => {
    setToggle(!toggle);

    /* eslint-disable-next-line no-extra-boolean-cast */
    if (!!toggleCallback) {
      toggleCallback();
    }
  }, [ toggle, toggleCallback ]);

  return { toggle, onToggle, setToggle };
};
