import { IPaneControl } from '..';

/**
 * Provide properties for managing the Item Record and its sub-parts.
 *
 * close: A callback for closing the Item Record pane.
 * detailControl: The detail pane control settings.
 * onNodeClick: Event handler.
 * selectedNode: The selected Node graph of the selected Item Record.
 * setSelectedNode: State selector.
 */
export interface IItemRecordControl {
  close?: any;
  detailControl?: IPaneControl;
  onNodeClick?: any;
  selectedNode?: any;
  setSelectedNode?: any;
}
