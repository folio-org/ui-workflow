import { IItemRecordControl } from '..';

/**
 * Provide properties for an Item Value.
 *
 * @param column A label part to use associate columns, such as constructing the label via `workflows.label.${column}` or `workflows.label.${column}.id`.
 * @param columns A name of columns, similar to the column value, but is used to construct both the label such as workflows.label.${columns[0]} and to setup the table columns.
 * @param columnsWidths A keyed mapping of custom widths to assign to each individual column from the 'columns' array.
 * @param control The Item Record control data.
 * @param empty If TRUE, then return NULL when the value is undefined or not a valid type.
 * @param format Specific to each Item value type, but generally designates formatting such as 'text/html' or 'text/plain' for TextItemValue.
 * @param index An index position (or object key) for when the value is an array list or is part of a keyed object.
 * @param label The identifier string used for localization of the label.
 * @param onSelect Event handler.
 * @param parent The parent object.
 * @param parentId The pre-calculated Identifier of the parent.
 * @param raw If TRUE, then do not perform JSON.parse() when needed.
 * @param selected The selected Item value, if any.
 * @param value The Item value to process (the type is specific to each implementing class).
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
