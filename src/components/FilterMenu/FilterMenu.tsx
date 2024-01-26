import type { FunctionComponent } from 'react';
import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import { PaneMenu } from '@folio/stripes/components';
import { ExpandFilterPaneButton } from '@folio/stripes/smart-components';

import { FILTER_PANE_VISIBILITY_KEY, HOME_PAGE_URL, USER_PERMS } from '../../constants';

export const FilterMenu: FunctionComponent = (props: any) => {
  const [ filterPaneIsVisible, writeToggleFilterStorage ] = useLocalStorage(FILTER_PANE_VISIBILITY_KEY, true);

  if (filterPaneIsVisible) {
    return null;
  }

  let filterCount = 0;

  return (
    <PaneMenu>
      <ExpandFilterPaneButton filterCount={filterCount} onClick={ () => writeToggleFilterStorage(true) } />
    </PaneMenu>
  );
};
