import { IItemRecordControl } from '../';

/**
 * Provide properties for an Item Value.
 *
 * column: A label part to use associate columns, such as constructing the label via `workflows.label.${column}` or `workflows.label.${column}.id`.
 * control: The Item Record control data.
 * empty: If TRUE, then return NULL when the value is undefined or not a valid type.
 * format: Specific to each Item value type, but generally designates formatting such as 'text/html' or 'text/plain' for TextItemValue.
 * label: The identifier string used for localization of the label.
 * onSelect: Event handler.
 * raw: If TRUE, then do not perform JSON.parse() when needed.
 * selected: The selected Item value, if any.
 * value: The Item value to process (the type is specific to each implementing class).
 */
export interface IItemValue {
  column?: string;
  control?: IItemRecordControl;
  empty?: boolean;
  format?: any;
  label?: any;
  onSelect?: any;
  raw?: boolean;
  selected?: any;
  value?: any;
}
