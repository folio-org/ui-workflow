import { IView } from '../';

/**
 * Provide properties for the Workflow general pane action menu.
 *
 * deleteModal: The popup modal for the delete action.
 * stripes: The stripes use data.
 */
export interface IWorkflowGeneralActionMenu extends IView {
  deleteModal?: any;
  stripes?: any;
}
