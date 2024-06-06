import React, { useCallback, useContext, useState } from 'react';
import { ErrorBoundary, Pane } from '@folio/stripes/components';
import { CalloutContext } from '@folio/stripes/core';
import { FileUploader } from '@folio/stripes-data-transfer-components';

import { IImportDetailPane } from '../../interfaces';
import { t } from '../../utilities';

export const ImportDetailPane: React.FC<IImportDetailPane> = ({ importDetail, view }) => {
  const { onClose, showDetail } = importDetail;
  const [ busy, setBusy ] = useState(false);
  const [ isDropZoneActive, setIsDropZoneActive ] = useState(false);
  const callout = useContext(CalloutContext);

  const onDrop = useCallback((files: any) => {
    if (!!files && !!files[0]) {
      if (!busy) {
        callout.sendCallout({
          type: 'success',
          message: t('import.callout.message.import', { name: files[0]?.name })
        });

        // TODO: perform import here.
      } else {
        callout.sendCallout({
          type: 'success',
          message: t('import.callout.failure.import', { name: files[0]?.name, reason: t('import.callout.failure.busy') })
        });
      }
    } else {
      callout.sendCallout({ type: 'error', message: t('import.callout.failure.missing') });
    }

    setIsDropZoneActive(false);
  }, [ busy, callout, isDropZoneActive ]);

  const onDragEnter = useCallback(() => {
    if (!busy) {
      setIsDropZoneActive(true);
    }
  }, [ busy, isDropZoneActive ]);

  const onDragLeave = useCallback(() => {
    if (!busy) {
      setIsDropZoneActive(false);
    }
  }, [ busy, isDropZoneActive ]);

  const onError = useCallback((error: any) => {
    setIsDropZoneActive(false);
    setBusy(false);
    callout.sendCallout({ type: 'error', message: t('import.callout.failure.import', { name: 'filename', reason: 'some reason' }) });
  }, [ busy, callout, isDropZoneActive ]);

  if (!showDetail) {
    return null;
  }

  return (
    <ErrorBoundary>
      <Pane defaultWidth='fill' dismissible onClose={onClose} paneTitle={ t('import.workflow.title') } >
        <FileUploader
          title={ t('import.workflow.drop') }
          uploadButtonText={ t('import.workflow.upload') }
          isDropZoneActive={isDropZoneActive}
          onDrop={onDrop}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onError={onError}
          multiple={false}
        />
      </Pane>
    </ErrorBoundary>
  );
};
