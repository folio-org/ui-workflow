import { Settings, SettingsProps } from '@folio/stripes/smart-components';

/**
 * Provide properties for the main program.
 *
 * @param match A structure for managing the requested URL path.
 */
export interface IApp {
  match: {
    path: string
  };
}
