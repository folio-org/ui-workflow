/**
 * Provide properties for an Item Value.
 *
 * empty: If TRUE, then return NULL when the data is empty or non-existent.
 * format: Specific to each Item value type, but generally designates formatting such as 'text/html' or 'text/plain' for TextItemValue.
 * label: The identifier string used for localization of the label.
 * onSelect: Event handler.
 * selected: The selected Item value, if any.
 * value: The Item value to process (the type is specific to each implementing class).
 */
export interface IItemValue {
  empty?: any;
  format?: any;
  label?: any;
  onSelect?: any;
  selected?: any;
  value?: any;
}
