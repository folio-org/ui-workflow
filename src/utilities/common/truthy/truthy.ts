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
  const strValue = typeof value === 'string' ? value.toLowerCase() : null;

  if (strValue === null || value === false) return false;
  if (typeof value === 'number' && value !== 0) return true;

  return value === true || strValue === 'true' || strValue === 't' || strValue === 'yes';
};
