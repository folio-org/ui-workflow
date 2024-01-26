import React from 'react';
import { FormattedMessage } from 'react-intl';

import { PROJECT_NAMESPACE } from '../../constants'

/**
 * Translate using the given ID and optional values without needing to include the full ID path for this project.
 *
 * This is best used for strings from this project.
 */
export const t: any = (id: string, values?: { [key: string]: string | number }) => {
  return <FormattedMessage id={PROJECT_NAMESPACE + '.' + id} values={values} />;
};

/**
 * Translate using the given ID and optional values while needing to include the full ID path.
 *
 * This is best used for strings from other projects.
 */
export const tf: any = (id: string, values?: { [key: string]: string | number }) => {
  return <FormattedMessage id={id} values={values} />;
};
