import { IPaneControl } from '../';

/**
 * Provide properties for managing the Item Record and its sub-parts.
 *
 * detailControl: The detail pane control settings.
 * onItemClick: Event handler.
 * onNodeClick: Event handler.
 * recordControl: The Item Record pane control settings.
 * selectedItem: The selected Item Record.
 * selectedNode: The selected Node graph of the selected Item Record.
 * setSelectedItem: State selector.
 * setSelectedNode: State selector.
 */
export interface IItemRecordControl {
  detailControl?: IPaneControl;
  onItemClick?: any;
  onNodeClick?: any;
  recordControl?: IPaneControl;
  selectedItem?: any;
  selectedNode?: any;
  setSelectedItem?: any;
  setSelectedNode?: any;
}
