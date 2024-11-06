import { IPaneControl } from '..';

/**
 * Provide properties for the create pane action menu.
 *
 * @param control The pane control data.
 * @param stripes The stripes use data.
 */
export interface ICreateActionMenu {
  control?: IPaneControl;
  stripes?: any;
}
