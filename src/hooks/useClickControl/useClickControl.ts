import React from 'react';

/**
 * A click control for executing some callback with a busy state.
 *
 * The busy state is controllable by the caller but is otherwise mostly managed here.
 */
export const useClickControl = (clickCallback?: any, doneCallback?: any) => {
  const [ busy, setBusy ] = React.useState(false);

  const onDone = () => {
    if (busy) {
      if (!!doneCallback) {
        doneCallback();
      }

      setBusy(false);
    }
  };

  const onClick = () => {
    if (!busy) {
      setBusy(true);

      if (!!clickCallback) {
        clickCallback(onDone);
      }
    }
  };

  return { busy, onClick, onDone, setBusy };
};
