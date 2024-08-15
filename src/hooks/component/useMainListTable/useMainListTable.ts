import React, { useCallback, useState } from 'react';
import { writeStorage } from '@rehooks/local-storage';

import { CURRENT_PAGE_OFFSET_KEY } from '../../../constants';

/**
 * A hook specific to the MainListTable component for managing a table.
 *
 * data: The table content data.
 * pagination: The table pagination data.
 */
export const useMainListTable = (data: any, pagination: any) => {
  const [ page, setPage ] = useState(0);
  const [ totalPages, setTotalPages ] = useState(0);
  const [ totalRecords, setTotalRecords ] = useState(0);
  const [ contentData, setContentData ] = useState(data);
  const [ showDetailPane, setShowDetailPane ] = useState(true);

  const onNeedMoreData = useCallback((thePagination: any) => {
    writeStorage(CURRENT_PAGE_OFFSET_KEY, thePagination?.offset);
    pagination?.changePage(thePagination);
  }, [ pagination ]);

  return {
    contentData,
    onNeedMoreData,
    page,
    pagination,
    setContentData,
    setPage,
    setShowDetailPane,
    setTotalPages,
    setTotalRecords,
    showDetailPane,
    totalPages,
    totalRecords
  };
};
