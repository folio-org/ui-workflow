import { IItemRecordControl } from '../';

/**
 * Provide properties for an Item Value.
 *
 * column: A label part to use associate columns, such as constructing the label via `workflows.label.${column}` or `workflows.label.${column}.id`.
 * columns: A name of columns, similar to the column value, but is used to construct both the label such as workflows.label.${columns[0]} and to setup the table columns.
 * columnsWidths: A keyed mapping of custom widths to assign to each individual column from the 'columns' array.
 * control: The Item Record control data.
 * empty: If TRUE, then return NULL when the value is undefined or not a valid type.
 * format: Specific to each Item value type, but generally designates formatting such as 'text/html' or 'text/plain' for TextItemValue.
 * index: An index position (or object key) for when the value is an array list or is part of a keyed object.
 * label: The identifier string used for localization of the label.
 * onSelect: Event handler.
 * parent: The parent object.
 * parentId: The pre-calculated Identifier of the parent.
 * raw: If TRUE, then do not perform JSON.parse() when needed.
 * selected: The selected Item value, if any.
 * value: The Item value to process (the type is specific to each implementing class).
 */
export interface IItemValue {
  column?: string;
  columns?: string[];
  columnsWidths?: object;
  control?: IItemRecordControl;
  empty?: boolean;
  format?: any;
  id?: any;
  index?: any;
  label?: any;
  onSelect?: any;
  parent?: any;
  parentId?: string;
  raw?: boolean;
  selected?: any;
  value?: any;
}
