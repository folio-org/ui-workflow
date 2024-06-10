import { ErrorBoundary, Pane } from '@folio/stripes/components';
import { CalloutContext, useOkapiKy } from '@folio/stripes/core';
import { FileUploader } from '@folio/stripes-data-transfer-components';
import { HTTPError } from 'ky';
import React, { useCallback, useContext, useState } from 'react';

import { OKAPI_WORKFLOW_IMPORT, USER_PERMS } from '../../constants';
import { useUploadMultipart } from '../../hooks';
import { IImportDetailPane } from '../../interfaces';
import { t } from '../../utilities';

export const ImportDetailPane: React.FC<IImportDetailPane> = ({ importDetail, view, stripes }) => {
  const { onClose, showDetail } = importDetail;
  const [ busy, setBusy ] = useState(false);
  const [ isDropZoneActive, setIsDropZoneActive ] = useState(false);
  const callout = useContext(CalloutContext);
  const ky = useOkapiKy();
  const { uploadMultipart } = useUploadMultipart();

  const onDrop = useCallback((accepted: any, rejected: any) => {
    if (!!accepted && !!accepted[0]) {
      if (!busy) {
        setBusy(true);

        uploadMultipart(
          OKAPI_WORKFLOW_IMPORT,
          accepted[0],
          (file: any, response: any) => {
            callout.sendCallout({
              type: 'success',
              message: t('import.callout.success.import', { name: file?.name })
            });
          },
          (file: any, error: any, reason: string) => {
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
      }
    } else if (!!rejected && !!rejected[0]) {
      callout.sendCallout({
        type: 'error',
        message: t('import.callout.failure.reject', { name: accepted[0]?.name })
      });
    } else {
      callout.sendCallout({ type: 'error', message: t('import.callout.failure.missing') });
    }

    setIsDropZoneActive(false);
    setBusy(false);
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
          disabled={ !stripes.hasPerm(USER_PERMS.WorkflowsItemPost) }
        />
      </Pane>
    </ErrorBoundary>
  );
};
