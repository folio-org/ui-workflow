import { IItemRecordControl } from '..';

/**
 * Provide properties for displaying an Item Record.
 *
 * @param children Used to pass child elements.
 * @param control The Item Record control data.
 * @param id The ID to use for the pane.
 * @param list The list hook properties like data, error, isLoading, and refetch.
 * @param stripes The stripes use data.
 * @param view The active view being used from the VIEW constant.
 * @param workflow The useWorkflow instance.
 */
export interface IItemRecordPane {
  children?: any;
  control?: IItemRecordControl;
  id?: any;
  list?: any;
  stripes?: any;
  view?: any;
  workflow?: any;
}
