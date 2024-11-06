/**
 * Provide properties managed by the Item Record Nodes.
 *
 * This contains the entire details of a particular Workflow Item Node, called Item Record Node.
 *
 * @param asyncBefore TRUE to enable asynchronous before Node mode.
 * @param description The description of the Item Record.
 * @param deserializeAs The object this Node deserializes as, which represents the specific type of the object.
 * @param expression A logic, boolean, or mathematical expression used for conditional Nodes.
 * @param id The Item Record Node identifier.
 * @param identifier An identifier used for the Node used by the Workflow Engine.
 * @param name The name of the Item Record Node.
 * @param type The type of the Node.
 * @param interrupting TRUE to allow for interruption of the Node.
 */
export interface IItemRecordNodes {
  asyncBefore?: boolean;
  description?: string;
  deserializeAs?: string;
  expression?: string;
  id?: string;
  identifier?: string;
  name?: boolean;
  type?: string;
  interrupting?: boolean;
}
