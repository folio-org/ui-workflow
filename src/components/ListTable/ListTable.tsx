import React, { FC, useEffect, useState } from 'react';
import { isEqual, noop } from 'lodash';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { Loading, MultiColumnList, Row } from '@folio/stripes/components';
import { PrevNextPagination, usePagination } from '@folio/stripes-acq-components';

import { listTableMapping, listTableResultFormatter } from './helpers';
import { ITEMS_VISIBLE_COLUMNS, CURRENT_PAGE_OFFSET_KEY, PAGINATION_AMOUNT } from '../../constants';
import { IListProperties } from '../../interfaces';
import { useLists, usePrevious } from '../../hooks';

export const ListTable: FC<IListProperties> = ({ path, activeFilters, setTotalRecords = noop }) => {
  const [storedCurrentPageOffset] = useLocalStorage<number>(CURRENT_PAGE_OFFSET_KEY, 0);
  const [recordIds, setRecordIds] = useState<string[]>([]);

  const { changePage, pagination } = usePagination({
    limit: PAGINATION_AMOUNT,
    offset: storedCurrentPageOffset,
  });

  const onNeedMoreData = (thePagination: any) => {
    writeStorage(CURRENT_PAGE_OFFSET_KEY, thePagination.offset);
    // @ts-ignore:next-line
    changePage(thePagination);
    setRecordIds([]);
  };

  const prevActiveFilters = usePrevious(activeFilters);

  useEffect(() => {
    if (prevActiveFilters && !isEqual(prevActiveFilters, activeFilters)) {
      writeStorage(CURRENT_PAGE_OFFSET_KEY, 0);
      // @ts-ignore:next-line
      changePage({ offset: 0, limit: PAGINATION_AMOUNT });
      setRecordIds([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters]);

  const { listsData, isLoading } = useLists(path, { query: "", limit: pagination?.limit, offset: pagination?.offset });

  useEffect(() => {
    if (listsData?.content?.length) {
      setRecordIds(listsData?.content.map(({ id }) => id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listsData]);

  if (isLoading) {
    return (
      <Row center="xs">
        <Loading size="large" />
      </Row>
    );
  }

  const { totalRecords = 0, totalPages } = listsData ?? {};
  let { content } = listsData ?? {};

  setTotalRecords(totalRecords);

  return (
    <>
      <MultiColumnList
        interactive
        contentData={content}
        visibleColumns={ITEMS_VISIBLE_COLUMNS}
        formatter={listTableResultFormatter}
        pagingType={null}
        pageAmount={totalPages}
        totalCount={totalRecords}
        onNeedMoreData={onNeedMoreData}
        columnMapping={listTableMapping}
      />
      <PrevNextPagination
        {...pagination}
        totalCount={totalRecords}
        onChange={onNeedMoreData}
      />
    </>
  );
};
