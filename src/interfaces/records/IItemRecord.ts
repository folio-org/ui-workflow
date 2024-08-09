/**
 * Provide properties managed by the Item Record.
 *
 * This contains the entire details of a particular Workflow Item, called Item Record.
 *
 * active: TRUE when the Item Record is active.
 * deploymentId: The identifier of an active Item Record (may be an empty string when inactive).
 * description: The description of the Item Record.
 * historyTimeToLive: A string representing a number of how long history is preserved.
 * id: The Item Record identifier.
 * initialContext: The initial context data for the Item Record.
 * name: The name of the Item Record.
 * nodes: A set of all Nodes for Item Record.
 * setup: A set of all setup data for the Item Record.
 * versionTag: A version name or number represented as a tag string of the Item Record.
 */
export interface IItemRecord {
  active: boolean;
  deploymentId: string;
  description: string;
  historyTimeToLive: string;
  id: string;
  initialContext: Object;
  name: string;
  nodes: Object;
  setup: Object;
  versionTag: string;
}
