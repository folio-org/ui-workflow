import { IDetailPaneProperties } from '../panes/IDetailPaneProperties';

/**
 * Provide properties for the create pane action menu.
 *
 * importDetail: The import data.
 * stripes: The stripes use data.
 */
export interface ICreateActionMenu {
  importDetail?: IDetailPaneProperties;
  stripes?: any;
}
