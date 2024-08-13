import { ErrorBoundary, Pane } from '@folio/stripes/components';
import { CalloutContext } from '@folio/stripes/core';
import { FileUploader } from '@folio/stripes-data-transfer-components';
import React, { useCallback, useContext, useState } from 'react';

import { OKAPI_WORKFLOW_IMPORT, USER_PERMS } from '../../constants';
import { useUploadMultipart } from '../../hooks';
import { IPane } from '../../interfaces';
import { t } from '../../utilities';

/**
 * A pane used for importing a view.
 */
export const ImportPane: React.FC<IPane> = ({ control, view, stripes }) => {
  const [ busy, setBusy ] = useState(false);
  const [ isDropZoneActive, setIsDropZoneActive ] = useState(false);
  const callout = useContext(CalloutContext);
  const { uploadMultipart } = useUploadMultipart();

  const onDrop = useCallback((accepted: any, rejected: any) => {
    if (!!accepted && !!accepted[0]) {
      if (!busy) {
        setBusy(true);

        uploadMultipart(
          OKAPI_WORKFLOW_IMPORT,
          accepted[0],
          (file: any, response: any) => {
            setIsDropZoneActive(false);
            setBusy(false);

            callout.sendCallout({
              type: 'success',
              message: t('import.callout.success.import', { name: file?.name })
            });
          },
          (file: any, error: any, reason: string) => {
            setIsDropZoneActive(false);
            setBusy(false);

            callout.sendCallout({
              type: 'error',
              message: t('import.callout.failure.import', { name: file?.name, reason })
            });
          }
        )
      } else {
        callout.sendCallout({
          type: 'error',
          message: t('import.callout.failure.import', { name: accepted[0]?.name, reason: t('import.callout.failure.busy') })
        });

        setIsDropZoneActive(false);
      }
    } else if (!!rejected && !!rejected[0]) {
      callout.sendCallout({
        type: 'error',
        message: t('import.callout.failure.reject', { name: accepted[0]?.name })
      });

      setIsDropZoneActive(false);
    } else {
      callout.sendCallout({ type: 'error', message: t('import.callout.failure.missing') });

      setIsDropZoneActive(false);
    }
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

  if (!control?.show) {
    return null;
  }

  return <Pane defaultWidth='fill' dismissible onClose={ control?.onClose } paneTitle={ t('import.workflow.title') } >
    <ErrorBoundary>
      <FileUploader
        title={ t('import.workflow.drop') }
        uploadButtonText={ t('import.workflow.upload') }
        isDropZoneActive={isDropZoneActive}
        onDrop={onDrop}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onError={onError}
        multiple={false}
        disabled={ !stripes.hasPerm(USER_PERMS.WorkflowsItemPost) }
      />
    </ErrorBoundary>
  </Pane>;
};
