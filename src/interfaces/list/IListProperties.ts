/**
 * Provide properties for a list, such as a table list.
 *
 * filters: A list of filters.
 * limit: The list size limit.
 * list: The list hook properties like data, error, isLoading, and refetch.
 * offset: The list offset.
 * rowSelect: Event handler.
 * view: The active view being used from the VIEW constant.
 */
export interface IListProperties {
  filters?: string[];
  limit?: number;
  list?: any;
  offset?: number;
  rowSelect?: any;
  view?: any;
}
