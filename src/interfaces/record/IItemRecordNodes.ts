/**
 * Provide properties managed by the Item Record Nodes.
 *
 * This contains the entire details of a particular Workflow Item Node, called Item Record Node.
 *
 * asyncBefore: TRUE to enable asynchronous before Node mode.
 * description: The description of the Item Record.
 * deserializeAs: The object this Node deserializes as, which represents the specific type of the object.
 * expression: A logic, boolean, or mathematical expression used for conditional Nodes.
 * id: The Item Record Node identifier.
 * identifier: An identifier used for the Node used by the Workflow Engine.
 * name: The name of the Item Record Node.
 * type: The type of the Node.
 * interrupting: TRUE to allow for interruption of the Node.
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
