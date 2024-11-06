/**
 * Provide properties for a list, such as a table list.
 *
 * filterConfig: The appropriate use filter config hook.
 * filters: A list of filters.
 * limit: The list size limit.
 * list: The list hook properties like data, error, isLoading, and refetch.
 * offset: The list offset.
 * path: The base path of the workflow module.
 * view: The active view being used from the VIEW constant.
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
