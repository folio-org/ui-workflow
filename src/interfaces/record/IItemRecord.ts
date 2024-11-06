/**
 * Provide properties managed by the Item Record.
 *
 * This contains the entire details of a particular Workflow Item, called Item Record.
 *
 * @param active TRUE when the Item Record is active.
 * @param deploymentId The identifier of an active Item Record (may be an empty string when inactive).
 * @param description The description of the Item Record.
 * @param historyTimeToLive A string representing a number of how long history is preserved.
 * @param id The Item Record identifier.
 * @param initialContext The initial context data for the Item Record.
 * @param name The name of the Item Record.
 * @param nodes A set of all Nodes for Item Record.
 * @param setup A set of all setup data for the Item Record.
 * @param versionTag A version name or number represented as a tag string of the Item Record.
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
