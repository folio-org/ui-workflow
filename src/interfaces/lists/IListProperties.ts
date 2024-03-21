export interface IListProperties {
  path: string,
  activeFilters: string[],
  setTotalRecords: (totalRecords: number) => void
}
