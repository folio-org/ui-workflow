/**
 * A helper utility for handling an HTTP error response.
 *
 * This will return the error reason.
 */
export const requestGetErrorReason = async (error: any) => {
  let reason = error.toString();

  if (error?.name === 'HTTPError') {
    try {
      const errorJson = await error.response.json();
      if (errorJson?.errors?.length > 0) {
        reason = `${errorJson.errors[0]?.code} ${errorJson.errors[0]?.message}`;
      }
    } catch (error: any) {
      // If error.response.json() fails, then do nothing.
    }
  }

  return reason;
}
