import { IPaneControl, IView } from '../';

/**
 * Provide properties for using a pane.
 *
 * control: The import pane control data.
 * stripes: The stripes use data.
 */
export interface IPane extends IView {
  control?: IPaneControl;
  stripes?: any;
}
