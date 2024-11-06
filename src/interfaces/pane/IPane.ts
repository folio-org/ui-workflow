import { IPaneControl } from '..';

/**
 * Provide properties for using a pane.
 *
 * @param control The import pane control data.
 * @param list The list hook properties like data, error, isLoading, and refetch.
 * @param stripes The stripes use data.
 * @param view The active view being used from the VIEW constant
 */
export interface IPane {
  control?: IPaneControl;
  list?: any;
  stripes?: any;
  view?: string;
}
