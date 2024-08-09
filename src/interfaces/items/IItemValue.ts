/**
 * Provide properties for an Item Value.
 *
 * empty: If TRUE, then return NULL when the data is empty or non-existent.
 * id: The identifier string used for localization of the label.
 * onSelect: Event handler.
 * value: The Item value to process (the type is specific to each implementing class).
 */
export interface IItemValue {
  empty?: any;
  id?: any;
  onSelect?: any;
  value?: any;
}
