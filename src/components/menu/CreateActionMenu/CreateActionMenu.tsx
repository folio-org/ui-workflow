import React, { useContext, useState } from 'react';
import { Button, Dropdown, DropdownMenu } from '@folio/stripes/components';
import { noop } from 'lodash';

import { USER_PERMS } from '../../../constants';
import { useClickControl } from '../../../hooks';
import { ICreateActionMenu } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * An action menu for the create view import pane.
 */
export const CreateActionMenu: React.FC<ICreateActionMenu> = ({ control, stripes }) => {
  const importAction = useClickControl(() => { control?.setShow(true) });

  return <Dropdown id='menu-actions-create-dropdown' label={ t('button.actions') } buttonProps={{ buttonStyle: 'primary', marginBottom0: true }}>
    <DropdownMenu data-role='menu' aria-label={ t('create.action.menu') } onToggle={noop} open>
      <Button
        data-role='menuitem'
        buttonStyle='dropdownItem'
        onClick={ importAction.onClick }
        disabled={ !stripes.hasPerm(USER_PERMS.WorkflowsItemPost) }
      >
        { t('button.create.import') }
      </Button>
    </DropdownMenu>
  </Dropdown>;
};
