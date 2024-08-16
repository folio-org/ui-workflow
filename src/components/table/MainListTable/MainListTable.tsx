import { isEqual, noop } from 'lodash';
import React, { useEffect } from 'react';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { Loading, LoadingPane, MultiColumnList, Row } from '@folio/stripes/components';
import { PrevNextPagination, usePagination } from '@folio/stripes-acq-components';

import { ITEMS_VISIBLE_COLUMNS, ITEMS_COLUMN_WIDTHS, CURRENT_PAGE_OFFSET_KEY } from '../../../constants';
import { usePrevious, useMainListTable } from '../../../hooks';
import { IItemRecord, IListProperties } from '../../../interfaces';
import { listTableMapping, listTableResultFormatter } from './helpers';

/**
 * A table consisting of the Workflow Item Records.
 */
export const MainListTable: React.FC<IListProperties> = ({ view, data, isLoading, limit, offset, readFilters, rowSelect }) => {
  if (isLoading) return <LoadingPane />;

  const pagination = usePagination({ limit, offset });
  const prevFilters = usePrevious(readFilters);
  const mainTable = useMainListTable(pagination, data);

  useEffect(() => {
    if (prevFilters && !isEqual(prevFilters, readFilters)) {
      writeStorage(CURRENT_PAGE_OFFSET_KEY, 0);
      pagination.changePage({ offset: 0, limit });
    }
  }, [ prevFilters, readFilters ]);

  useEffect(() => {
    if (isLoading) return;

    if (data?.workflows) {
      mainTable.setTotalRecords(data?.totalRecords ?? 0);
      mainTable.setPage((mainTable.totalRecords > limit && offset > 0 && limit > 0) ? Math.floor(offset / limit) : 0);
      mainTable.setTotalPages(mainTable.totalRecords > limit && limit > 0
        ? Math.floor(mainTable.totalRecords / limit) + (mainTable.totalRecords % limit ? 1 : 0)
        : 1
      );

      mainTable.setContentData(data.workflows);
    }
  }, [ data, pagination ]);

  return (
    <>
      <MultiColumnList
        interactive
        contentData={ mainTable.contentData }
        columnWidths={ITEMS_COLUMN_WIDTHS}
        visibleColumns={ITEMS_VISIBLE_COLUMNS}
        pageAmount={ mainTable.totalPages }
        totalCount={ mainTable.totalRecords }
        formatter={listTableResultFormatter}
        columnMapping={listTableMapping}
        onRowClick={ !!rowSelect ? rowSelect : noop }
      />
      <PrevNextPagination
        { ...pagination.pagination }
        totalCount={ mainTable.totalRecords }
        onChange={ mainTable.onNeedMoreData }
      />
    </>
  );
};
