import { act, renderHook } from '@testing-library/react-hooks';
import { Response, Server } from 'miragejs';

import { OKAPI_WORKFLOW_IMPORT } from '../../constants';
import { startMirage } from '../../../test/mirage';
import { useUploadMultipart } from './useUploadMultipart';

const path_prefix = 'workflow/';
let server: Server;

beforeEach(() => {
  server = startMirage({});
});

afterEach(() => {
  server.shutdown();
});

describe('useUploadMultipart', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useUploadMultipart());

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
      expect(result.current.uploadMultipart).toBeDefined();
    });
  });

  describe('When uploadMultipart() fails expectedly', () => {
    const { result } = renderHook(() => useUploadMultipart());
    let file = { name: 'file_name.txt' };
    const onSuccessMock = jest.fn();
    const onErrorMock = jest.fn();

    it('is expected to fail', async () => {
      server.post(path_prefix + OKAPI_WORKFLOW_IMPORT, () => new Response(404));

      await act(() => {
        result.current.uploadMultipart(OKAPI_WORKFLOW_IMPORT, file, onSuccessMock, onErrorMock);
      });

      expect(onErrorMock).toBeCalled();
      expect(onSuccessMock).not.toBeCalled();
    });
  });

});
