import { IPaneControl } from '..';

/**
 * Provide properties for managing the Item Record and its sub-parts.
 *
 * @param close A callback for closing the Item Record pane.
 * @param detailControl The detail pane control settings.
 * @param onNodeClick Event handler.
 * @param selectedNode The selected Node graph of the selected Item Record.
 * @param setSelectedNode State selector.
 */
export interface IItemRecordControl {
  close?: any;
  detailControl?: IPaneControl;
  onNodeClick?: any;
  selectedNode?: any;
  setSelectedNode?: any;
}
