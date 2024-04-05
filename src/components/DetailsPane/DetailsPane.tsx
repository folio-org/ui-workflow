import React from "react";

import { Card, Pane, PaneHeader, Paneset, Row } from '@folio/stripes/components';

import { IListProperties } from "../../interfaces";
import { useFilterConfig, useFilters, useLists, useSearch } from "../../hooks";
import { PATH, SEARCH_WORKFLOWS_DEFAULT_KEY, VIEW } from "../../constants";

import { t } from '../../utilities';

export const DetailsPane: React.FC<IListProperties>  = ({view, data, isLoading, readFilters }) => {

  const closePane = () => {
    console.log('Pane is closed');
  };

  return (
        <Pane 
          defaultWidth="fill"
          dismissible
          onClose={closePane}
        >
          <div>
            This is a test content
          </div>
        </Pane>
  );
};