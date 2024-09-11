/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Button, ErrorBoundary, Pane, Paneset } from '@folio/stripes/components';
import { noop } from 'lodash';

import { FilterMenu, FilterPane, WorkflowListTable, WorkflowIcon } from '../../components';
import { VIEW } from '../../constants';
import { t } from '../../utilities';

/**
 * A main view for displaying "browse" information.
 */
export const BrowseView: React.FC = (props?: any) => {
  return <Paneset isRoot>
    <ErrorBoundary>
      <FilterPane list={ props?.list } view={ VIEW.BROWSE } />
      <Pane
        appIcon={ <WorkflowIcon /> }
        defaultWidth='75%'
        firstMenu={ <FilterMenu /> }
        lastMenu={ <Button bottomMargin0 buttonStyle='primary' onClick={noop}>{ t('button.actions') }</Button> }
        paneTitle={ t('title.workflowList') }
      >
        <WorkflowListTable
          filters={ props?.filters}
          limit={ props?.limit }
          list={ props?.list }
          offset={ props?.offset }
          path={ props?.path }
          view={ VIEW.BROWSE }
        />
      </Pane>
    </ErrorBoundary>
  </Paneset>;
};
