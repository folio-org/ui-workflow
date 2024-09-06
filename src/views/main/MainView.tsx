import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useLocalStorage } from '@rehooks/local-storage';

import {
  CURRENT_PAGE_OFFSET_KEY,
  DEFAULT_FILTERS,
  FILTER_APPLIED_KEY,
  PAGINATION_AMOUNT,
  BACKEND_PATH,
  SEARCH_WORKFLOWS_DEFAULT_KEY,
  SEARCH_WORKFLOWS_VALUE_KEY,
  VIEW,
} from '../../constants';
import { getFilters, useFilterConfig, useWorkflowList } from '../../hooks';
import { BrowseView, CreateView, DetailView } from '../../views';

export const MainView: React.FC = (props: any) => {
  const [ storedCurrentPageOffset ] = useLocalStorage<number>(CURRENT_PAGE_OFFSET_KEY, 0);
  const [ readFilter ] = useLocalStorage(FILTER_APPLIED_KEY[VIEW.BROWSE], DEFAULT_FILTERS[VIEW.BROWSE]);
  const [ readSearch ] = useLocalStorage(SEARCH_WORKFLOWS_VALUE_KEY, SEARCH_WORKFLOWS_DEFAULT_KEY);
  const limit = PAGINATION_AMOUNT;
  const offset = (typeof storedCurrentPageOffset == 'number') ? storedCurrentPageOffset : 0;
  const filters = getFilters(readFilter);
  const filtersConfig = useFilterConfig(VIEW.BROWSE);
  const search = (typeof readSearch == 'object') ? readSearch : { key: SEARCH_WORKFLOWS_DEFAULT_KEY, value: '' };
  const list = useWorkflowList(BACKEND_PATH[VIEW.BROWSE], { filters, filtersConfig, search, limit, offset });

  return <QueryClientProvider client={ props?.client} >
    <Switch>
      <Route path={ props?.path } render={ (routeProps: any) => 
        <BrowseView
          filters={filters}
          limit={limit}
          list={list}
          offset={offset}
          path={ props?.path }
          { ...routeProps }
        />
      } />
    </Switch>
    <Switch>
      <Route path={ `${ props?.path }/create` } render={ (routeProps: any) =>
        <CreateView list={list} path={ props?.path } { ...routeProps } />
      } />
    </Switch>
    <Switch>
      <Route path={ `${ props?.path }/detail/:workflowId` } render={ (routeProps: any) =>
        <DetailView list={list} path={ props?.path } { ...routeProps } />
      } />
    </Switch>
  </QueryClientProvider>;
};
