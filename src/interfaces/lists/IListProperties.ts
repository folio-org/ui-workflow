/**
 * Provide properties for a detail pane.
 *
 * data: Data associated with the list.
 * detailPaneSelect: Event handler.
 * isLoading: Current loading state.
 * limit: The list size limit.
 * offset: The list offset.
 * readFilters: A list of read filters.
 * view: The active view being used from the VIEW constant.
 */
export interface IListProperties {
  data?: any;
  detailPaneSelect?: any;
  isLoading?: boolean;
  limit?: number;
  offset?: number;
  readFilters?: string[];
  view?: any;
}
