import { isEqual, noop } from 'lodash';
import React from 'react';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { Loading, LoadingPane, MultiColumnList, Row } from '@folio/stripes/components';
import { PrevNextPagination, usePagination } from '@folio/stripes-acq-components';

import { listTableMapping, listTableResultFormatter } from './helpers';
import { ITEMS_VISIBLE_COLUMNS, ITEMS_COLUMN_WIDTHS, CURRENT_PAGE_OFFSET_KEY, PATH, VIEW } from '../../constants';
import { usePrevious } from '../../hooks';
import { IListProperties, IItemRecord } from '../../interfaces';
import { DetailsPane } from '../DetailsPane';

export const ListTable: React.FC<IListProperties> = ({ view, data, isLoading, limit, offset, readFilters }) => {
  const { changePage, pagination } = usePagination({ limit, offset });

  const onNeedMoreData = (thePagination: any) => {
    writeStorage(CURRENT_PAGE_OFFSET_KEY, thePagination.offset);
    changePage(thePagination);
  };

  const onRowClick = (e: any , itemRecord: IItemRecord ) => {
    e?.preventDefault();
    console.log('ROW CLICKED', itemRecord);
  };

  const prevFilters = usePrevious(readFilters);

  React.useEffect(() => {
    if (prevFilters && !isEqual(prevFilters, readFilters)) {
      writeStorage(CURRENT_PAGE_OFFSET_KEY, 0);
      changePage({ offset: 0, limit });
    }
  }, [ prevFilters, readFilters ]);

  const [ page, setPage ] = React.useState(0);
  const [ totalPages, setTotalPages ] = React.useState(0);
  const [ totalRecords, setTotalRecords ] = React.useState(0);
  const [ contentData, setContentData ] = React.useState(data);


  const [closePane, setClosePane] = React.useState(false);

  const togglePane = () => {
    setClosePane(curShowFilter => !curShowFilter);
    console.log('HERE in toggle', closePane);
  };


  React.useEffect(() => {
    if (isLoading) return;

    if (data?.workflows) {
      setTotalRecords(data?.totalRecords ?? 0);
      setPage((totalRecords > limit && offset > 0 && limit > 0) ? Math.floor(offset / limit) : 0);
      setTotalPages(totalRecords > limit && limit > 0
        ? Math.floor(totalRecords / limit) + (totalRecords % limit ? 1 : 0)
        : 1
      );

      setContentData(data.workflows);
    }
  }, [ data ]);

  if (isLoading) return <LoadingPane />;

  return (
    <>
      <MultiColumnList
        interactive
        contentData={contentData}
        columnWidths={ITEMS_COLUMN_WIDTHS}
        visibleColumns={ITEMS_VISIBLE_COLUMNS}
        onRowClick={onRowClick}
        pageAmount={totalPages}
        totalCount={totalRecords}
        formatter={listTableResultFormatter}
        columnMapping={listTableMapping}
      />
      <PrevNextPagination
        {...pagination}
        totalCount={totalRecords}
        onChange={onNeedMoreData}
      />
      <DetailsPane
      />
    </>
  );
};
