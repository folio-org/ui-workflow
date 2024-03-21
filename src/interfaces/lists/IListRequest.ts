export interface IListRequest {
  query?: string,
  filters?: Array<string>,
  idsToTrack?: Array<string>,
  size?: number,
  offset?: number
}
