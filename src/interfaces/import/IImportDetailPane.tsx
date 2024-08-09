import { IDetailPane } from '../panes/IDetailPane';
import { IDetailPaneProperties } from '../panes/IDetailPaneProperties';

/**
 * Provide properties for an import detail pane.
 *
 * importDetail: The import data.
 */
export interface IImportDetailPane extends IDetailPane {
  importDetail?: IDetailPaneProperties;
}
