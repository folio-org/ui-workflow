/**
 * Provide properties for controlling a click.
 *
 * @param busy The busy click state value.
 * @param onClick Click callback for triggering the controlled callback.
 * @param onDone Callback for resetting the click state to allow for another click.
 * @param setBusy Callback for manually setting the busy click state.
 */
export interface IClickControl {
  busy?: boolean;
  onClick: any;
  onDone: any;
  setBusy: any;
}
