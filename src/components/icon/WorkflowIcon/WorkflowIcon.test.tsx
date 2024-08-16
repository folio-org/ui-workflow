import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { WorkflowIcon } from './WorkflowIcon';

describe('WorkflowIcon', () => {
  beforeEach(() => {
    render(<WorkflowIcon />);
  });

  it('expected to renders the WorkflowIcon component', () => {
    const icon = screen.getByTestId('app-icon');

    expect(icon).toBeInTheDocument();
  });

  it('expected to pass correct app name for the app icon', () => {
    const icon = screen.getByTestId('app-icon');

    expect(icon).toContainHTML('@folio/workflow');
  });

  it('expected to pass correct iconKey for the app icon', () => {
    const icon = screen.getByTestId('app-icon');

    expect(icon).toContainHTML('app');
  });

  it('expected to has the correct icon size', () => {
    const icon = screen.getByTestId('app-icon');

    expect(icon).toContainHTML('small');
  });
});
