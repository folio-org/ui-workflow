/**
 * Provide properties for a list, such as a table list.
 *
 * @param filterConfig The appropriate use filter config hook.
 * @param filters A list of filters.
 * @param limit The list size limit.
 * @param list The list hook properties like data, error, isLoading, and refetch.
 * @param offset The list offset.
 * @param path The base path of the workflow module.
 * @param view The active view being used from the VIEW constant.
 */
export interface IListProperties {
  filterConfig?: any;
  filters?: string[];
  limit?: number;
  list?: any;
  offset?: number;
  path?: string;
  view?: any;
}
