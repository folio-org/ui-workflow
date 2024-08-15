/**
 * Provide properties for controlling a click.
 *
 * busy: The busy click state value.
 * onClick: Click callback for triggering the controlled callback.
 * onDone: Callback for resetting the click state to allow for another click.
 * setBusy: Callback for manually setting the busy click state.
 */
export interface IClickControl {
  busy?: boolean;
  onClick: any;
  onDone: any;
  setBusy: any;
}
