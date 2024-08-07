import { ReactNode } from 'react';
import { ITEM_COLUMNS_NAME } from '../../../constants';
import { t } from '../../../utilities';

export const listTableMapping: Record<string, ReactNode> = {
  [ITEM_COLUMNS_NAME.NAME]: t('workflows.label.name'),
  [ITEM_COLUMNS_NAME.DESCRIPTION]: t('workflows.label.description'),
  [ITEM_COLUMNS_NAME.VERSIONTAG]: t('workflows.label.version'),
  [ITEM_COLUMNS_NAME.ACTIVE]: t('workflows.label.active'),
};
