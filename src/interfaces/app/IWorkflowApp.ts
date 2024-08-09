import { Settings, SettingsProps } from '@folio/stripes/smart-components';

/**
 * Provide properties for the main program.
 *
 * match: A structure for managing the requested URL path.
 */
export interface IWorkflowApp {
  match: {
    path: string
  };
}
