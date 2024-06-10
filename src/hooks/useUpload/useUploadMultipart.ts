import { useOkapiKy } from '@folio/stripes/core';

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
      let reason = error.toString();

      if (error?.name === 'HTTPError') {
        const errorJson = await error.response.json();
        if (errorJson?.errors?.length > 0) {
          reason = errorJson.errors[0]?.code + ' ' + errorJson.errors[0]?.message;
        }
      }

      onError(file, error, reason);
    }
  };

  return { uploadMultipart };
};
