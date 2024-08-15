/**
 * Provide properties for a list, such as a table list.
 *
 * data: Data associated with the list.
 * isLoading: Current loading state.
 * limit: The list size limit.
 * offset: The list offset.
 * readFilters: A list of read filters.
 * rowSelect: Event handler.
 * view: The active view being used from the VIEW constant.
 */
export interface IListProperties {
  data?: any;
  isLoading?: boolean;
  limit?: number;
  offset?: number;
  readFilters?: string[];
  rowSelect?: any;
  view?: any;
}
