import { noop } from 'lodash';
import React, { useCallback, useContext, useState } from 'react';
import { Button, Dropdown, DropdownMenu } from '@folio/stripes/components';
import { ICreateActionMenu } from '../../interfaces';
import { t } from '../../utilities';

export const CreateActionMenu: React.FC<ICreateActionMenu> = ({ importDetail }) => {
  const [ open, setOpen ] = useState(false);

  const onToggle = useCallback(() => {
    setOpen(!open);
  }, [ open ]);

  const onDropDownClick = useCallback(() => {
    const { setShowDetail } = importDetail;
    onToggle();
    setShowDetail(true);
  }, [ importDetail ]);

  return (
    <Dropdown id='menu-actions-create-dropdown' label={ t('button.actions') } buttonProps={{ buttonStyle: 'primary', marginBottom0: true }}>
      <DropdownMenu data-role='menu' aria-label={ t('create.action.menu') } onToggle={onToggle}>
        <><Button data-role='menuitem' buttonStyle='dropdownItem' onClick={onDropDownClick}>{ t('button.create.import') }</Button></>
      </DropdownMenu>
    </Dropdown>
  );
};
