import { IDetailPaneProperties } from '../';

/**
 * Provide properties for managing the Item Record.
 * 
 * selectedItem: The selected Item Record.
 * selectedNode: The selected Node of the selected Item Record.
 * onRowClick: Event handler.
 */
export interface IItemRecordControl extends IDetailPaneProperties {
  selectedItem?: any;
  selectedNode?: any;
  onRowClick?: any;
}
