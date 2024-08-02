import { noop } from 'lodash';
import React, { useCallback, useContext, useState } from 'react';
import { Button, Dropdown, DropdownMenu } from '@folio/stripes/components';

import { USER_PERMS } from '../../constants';
import { ICreateActionMenu } from '../../interfaces';
import { t } from '../../utilities';

export const CreateActionMenu: React.FC<ICreateActionMenu> = ({ importDetail, stripes }) => {
  const [ open, setOpen ] = useState(false);

  const onToggle = useCallback(() => {
    setOpen(!open);
  }, [ open ]);

  const onDropDownClick = useCallback(() => {
    onToggle();
    importDetail?.setShowDetail(true);
  }, [ importDetail ]);

  return (
    <Dropdown id='menu-actions-create-dropdown' label={ t('button.actions') } buttonProps={{ buttonStyle: 'primary', marginBottom0: true }}>
      <DropdownMenu data-role='menu' aria-label={ t('create.action.menu') } onToggle={onToggle} open={open}>
        <><Button
          data-role='menuitem'
          buttonStyle='dropdownItem'
          onClick={onDropDownClick}
          disabled={ !stripes.hasPerm(USER_PERMS.WorkflowsItemPost) }
        >
          { t('button.create.import') }
        </Button></>
      </DropdownMenu>
    </Dropdown>
  );
};
