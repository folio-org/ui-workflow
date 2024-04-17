export interface IItemRecord {
  nodes: Object;
  id: string;
  name: string;
  description: string;
  versionTag: string;
  active: boolean;
  historyTimeToLive: string;
  deploymentId: string;
  initialContext: Object;
  setup: Object;
  _links: Object;
}
