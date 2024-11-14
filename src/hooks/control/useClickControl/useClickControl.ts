import React, { useCallback } from 'react';

/**
 * A click control for executing some callback with a busy state.
 *
 * The busy state is controllable by the caller but is otherwise mostly managed here.
 */
export const useClickControl = (clickCallback?: any, doneCallback?: any) => {
  const [ busy, setBusy ] = React.useState(false);

  const onDone = useCallback(() => {
    if (!!doneCallback) {
      doneCallback();
    }

    if (busy) {
      setBusy(false);
    }
  }, [ busy, doneCallback ]);

  const onClick = useCallback(() => {
    if (!busy) {
      setBusy(true);

      if (!!clickCallback) {
        clickCallback(onDone);
      }
    }
  }, [ busy, clickCallback, onDone ]);

  return { busy, onClick, onDone, setBusy };
};
