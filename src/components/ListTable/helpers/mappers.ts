import { ReactNode } from 'react';
import { ITEM_COLUMNS_NAME } from '../../../constants';
import { t } from '../../../utilities';

export const listTableMapping: Record<string, ReactNode> = {
  [ITEM_COLUMNS_NAME.ID]: t('workflows.item.id'),
  [ITEM_COLUMNS_NAME.NAME]: t('workflows.item.name'),
  [ITEM_COLUMNS_NAME.DESCRIPTION]: t('workflows.item.description'),
  [ITEM_COLUMNS_NAME.VERSIONTAG]: t('workflows.item.versionTag'),
  [ITEM_COLUMNS_NAME.ACTIVE]: t('workflows.item.active'),
};
