import { IDetailPane } from '../panes/IDetailPane';
import { IDetailPaneProperties } from '../panes/IDetailPaneProperties';

export interface IImportDetailPane extends IDetailPane {
  importDetail?: IDetailPaneProperties;
}
