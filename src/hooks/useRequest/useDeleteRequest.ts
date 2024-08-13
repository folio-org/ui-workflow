import { useOkapiKy } from '@folio/stripes/core';

import { requestGetErrorReason } from '../../utilities';

/**
 * Perform an OKAPI HTTP DELETE request.
 */
export const useDeleteRequest = () => {
  const ky = useOkapiKy();

  const sendDelete = async (
    path: string,
    onSuccess: (response: any) => void,
    onError: (error: any, reason: string) => void
  ) => {
    try {
      const response = await ky.delete(path, { timeout: false });

      onSuccess(response);
    } catch (error: any) {
      const reason = await requestGetErrorReason(error);

      onError(error, reason);
    }
  };

  return { sendDelete };
};
