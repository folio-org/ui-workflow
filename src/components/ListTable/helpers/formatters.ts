import { ITEM_COLUMNS_NAME } from '../../../constants';
import { IItemRecord } from '../../../interfaces';
import { t } from '../../../utilities';

export const listTableResultFormatter: Record<string, (item: IItemRecord) => any> = {
  [ITEM_COLUMNS_NAME.ID]: (item) => { item.id },
  [ITEM_COLUMNS_NAME.NAME]: (item) => { item.name },
  [ITEM_COLUMNS_NAME.DESCRIPTION]: (item) => { item.description },
  [ITEM_COLUMNS_NAME.VERSION]: (item) => { item.version },
  [ITEM_COLUMNS_NAME.ACTIVE]: (item) => { t(item.active ? 'workflows.item.active' : 'workflows.item.inactive') }
};
