import { IClickControl, IView } from '../';

/**
 * Provide properties for the Workflow general pane action menu.
 *
 * control: The click control data.
 * stripes: The stripes use data.
 */
export interface IWorkflowGeneralActionMenu extends IView {
  control?: IClickControl;
  stripes?: any;
}
