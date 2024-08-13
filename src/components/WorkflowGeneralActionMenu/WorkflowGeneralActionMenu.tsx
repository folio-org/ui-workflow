import React, { useCallback, useContext, useState } from 'react';
import { Button, Dropdown, DropdownMenu } from '@folio/stripes/components';

import { USER_PERMS } from '../../constants';
import { IWorkflowGeneralActionMenu } from '../../interfaces';
import { t } from '../../utilities';

/**
 * An action menu for the Workflow general view pane.
 */
export const WorkflowGeneralActionMenu: React.FC<IWorkflowGeneralActionMenu> = ({ control, stripes }) => {
  const [ open, setOpen ] = useState(false);

  const onToggle = useCallback(() => {
    setOpen(!open);
  }, [ open ]);

  const onDeleteClick = useCallback(() => {
    onToggle();
    control?.onClick(control);
  }, [ control ]);

  return <Dropdown id='menu-actions-workflow-dropdown' label={ t('button.actions') } buttonProps={{ buttonStyle: 'primary', marginBottom0: true }}>
    <DropdownMenu data-role='menu' aria-label={ t('create.action.menu') } onToggle={onToggle} open>
      <Button
        data-role='menuitem'
        buttonStyle='dropdownItem'
        onClick={onDeleteClick}
        disabled={ !stripes.hasPerm(USER_PERMS.WorkflowsItemDelete) }
      >
        { t('button.workflows.item.delete') }
      </Button>
    </DropdownMenu>
  </Dropdown>;
};
