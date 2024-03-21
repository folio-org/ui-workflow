import { IItemRecord } from '../interfaces';

export const PAGINATION_AMOUNT = 100;

export const CURRENT_PAGE_OFFSET_KEY = '@folio/workflow/workflows/currentPageOffset';

export const ITEM_COLUMNS_NAME = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
  VERSIONTAG: 'versionTag',
  ACTIVE: 'active',
};

export const ITEMS_VISIBLE_COLUMNS = Object.values(ITEM_COLUMNS_NAME) as (keyof IItemRecord)[];
