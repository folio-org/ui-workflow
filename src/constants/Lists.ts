import { IItemRecord } from '../interfaces';

export const PAGINATION_AMOUNT = 100;

export const CURRENT_PAGE_OFFSET_KEY = '@folio/workflow/workflows/currentPageOffset';

export const ITEM_COLUMNS_NAME = {
  NAME: 'name',
  DESCRIPTION: 'description',
  VERSIONTAG: 'versionTag',
  ACTIVE: 'active',
};

export const ITEMS_COLUMN_WIDTHS = {
  [ITEM_COLUMNS_NAME.NAME]: '200px',
  [ITEM_COLUMNS_NAME.DESCRIPTION]: '400px',
  [ITEM_COLUMNS_NAME.VERSIONTAG]: '75px',
  [ITEM_COLUMNS_NAME.ACTIVE]: '75px'
};

export const ITEMS_VISIBLE_COLUMNS = Object.values(ITEM_COLUMNS_NAME) as (keyof IItemRecord)[];
