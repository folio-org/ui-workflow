import { useOkapiKy } from '@folio/stripes/core';

import { requestGetErrorReason } from '../../utilities';

/**
 * Perform an OKAPI HTTP multipart POST request.
 */
export const useUploadMultipart = () => {
  const ky = useOkapiKy();

  const uploadMultipart = async (
    path: string,
    file: any,
    onSuccess: (file: any, response: any) => void,
    onError: (file: any, error: any, reason: string) => void
  ) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await ky.post(path, {
        body: formData,
        timeout: false
      });

      onSuccess(file, response);
    } catch (error: any) {
      const reason = await requestGetErrorReason(error);

      onError(file, error, reason);
    }
  };

  return { uploadMultipart };
};
