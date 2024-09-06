import { isEqual } from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { Loading, LoadingPane, MultiColumnList, Row } from '@folio/stripes/components';
import { PrevNextPagination, usePagination } from '@folio/stripes-acq-components';

import { ITEMS_VISIBLE_COLUMNS, ITEMS_COLUMN_WIDTHS, CURRENT_PAGE_OFFSET_KEY, UI_PATH, VIEW } from '../../../constants';
import { usePrevious, useWorkflowListTable } from '../../../hooks';
import { IItemRecord, IListProperties } from '../../../interfaces';
import { listTableMapping, listTableResultFormatter } from './helpers';

/**
 * A table consisting of the Workflow Item Records.
 */
export const WorkflowListTable: React.FC<IListProperties> = ({ filters, limit, list, offset, path }) => {
  if (!list || list.isLoading) return <LoadingPane />;

  const navigate = useHistory();
  const pagination = usePagination({ limit, offset });
  const prevFilters = usePrevious(filters);
  const table = useWorkflowListTable(pagination, list.data);

  useEffect(() => {
    if (prevFilters && !isEqual(prevFilters, filters)) {
      writeStorage(CURRENT_PAGE_OFFSET_KEY, 0);
      pagination.changePage({ offset: 0, limit });
    }
  }, [ prevFilters, filters ]);

  useEffect(() => {
    if (list.isLoading) return;

    if (list.data?.workflows) {
      table.setTotalRecords(list.data?.totalRecords ?? 0);
      table.setPage((table.totalRecords > limit && offset > 0 && limit > 0) ? Math.floor(offset / limit) : 0);
      table.setTotalPages(table.totalRecords > limit && limit > 0
        ? Math.floor(table.totalRecords / limit) + (table.totalRecords % limit ? 1 : 0)
        : 1
      );

      table.setContentData(list.data.workflows);
    }
  }, [ list.data, pagination ]);

  const onRowClick = useCallback((event: any, item: any) => {
    // Change this to useNavigate once React 6 or greater is used.
    navigate.push(`${path}/${ UI_PATH[VIEW.DETAIL] }/${ item?.id }`);
  }, []);

  return (
    <>
      <MultiColumnList
        interactive
        contentData={ table.contentData }
        columnWidths={ITEMS_COLUMN_WIDTHS}
        visibleColumns={ITEMS_VISIBLE_COLUMNS}
        pageAmount={ table.totalPages }
        totalCount={ table.totalRecords }
        formatter={listTableResultFormatter}
        columnMapping={listTableMapping}
        onRowClick={onRowClick}
      />
      <PrevNextPagination
        { ...pagination.pagination }
        totalCount={ table.totalRecords }
        onChange={ table.onNeedMoreData }
      />
    </>
  );
};
