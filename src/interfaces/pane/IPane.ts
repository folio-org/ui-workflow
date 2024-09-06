import { IPaneControl } from '../';

/**
 * Provide properties for using a pane.
 *
 * control: The import pane control data.
 * list: The list hook properties like data, error, isLoading, and refetch.
 * stripes: The stripes use data.
 * view: The active view being used from the VIEW constant
 */
export interface IPane {
  control?: IPaneControl;
  list?: any;
  stripes?: any;
  view?: string;
}
