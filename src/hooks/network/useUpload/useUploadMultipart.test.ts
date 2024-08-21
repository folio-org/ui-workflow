import { act, renderHook } from '@testing-library/react-hooks';
import { Response, Server } from 'miragejs';

import { OKAPI_WORKFLOW_IMPORT } from '../../../constants';
import { startMirage } from '../../../../test/mirage';
import { useUploadMultipart } from './';

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
    let file = { name: 'file_name_1.txt' };
    const onSuccessMock = jest.fn();
    const onErrorMock = jest.fn();

    it('is expected to fail', async () => {
      server.post(OKAPI_WORKFLOW_IMPORT, () => new Response(404));

      await act(async () => {
        await result.current.uploadMultipart(OKAPI_WORKFLOW_IMPORT, file, onSuccessMock, onErrorMock);
      });

      expect(onErrorMock).toBeCalled();
      expect(onSuccessMock).not.toBeCalled();
    });
  });

  describe('When uploadMultipart() succeeds expectedly', () => {
    const { result } = renderHook(() => useUploadMultipart());
    let file = { name: 'file_name_2.txt' };
    const onSuccessMock = jest.fn();
    const onErrorMock = jest.fn();
    const uuid = 'd8b47696-4903-47f7-aeab-76c0f48616f4';

    it('is expected to succeed', async () => {
      server.post(OKAPI_WORKFLOW_IMPORT, () => new Response(201, { id: uuid }));

      await act(async () => {
        await result.current.uploadMultipart(OKAPI_WORKFLOW_IMPORT, file, onSuccessMock, onErrorMock);
      });

      expect(onErrorMock).not.toBeCalled();
      expect(onSuccessMock).toBeCalled();
    });
  });

});
