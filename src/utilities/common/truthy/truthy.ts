/**
 * Check if the value is a true or false value or string.
 *
 * This is intended to be used for parsing form input, lists, and other behavior.
 * This is not intended to match to all Javascript "truthy" values.
 *
 * @param value The value to verify for being true.
 *
 * @return TRUE on true value and FALSE otherwise.
 */
export const isFolioTruthy = (value: any): boolean => {
  const strValue = typeof value === 'string' ? value.toLowerCase().trim() : null;

  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'number') {
    return value !== 0;
  }

  if (value === null || typeof value !== 'string') return false;

  return strValue === 'true' || strValue === 't' || strValue === 'yes';
};
