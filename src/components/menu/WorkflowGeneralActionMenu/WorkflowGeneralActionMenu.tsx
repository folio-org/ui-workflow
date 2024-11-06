import React, { useCallback } from 'react';
import { Button, Dropdown, DropdownMenu } from '@folio/stripes/components';

import { USER_PERMS } from '../../../constants';
import { useToggleControl } from '../../../hooks';
import { IWorkflowGeneralActionMenu } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * An action menu for the Workflow general view pane.
 */
export const WorkflowGeneralActionMenu: React.FC<IWorkflowGeneralActionMenu> = ({ deleteModal, stripes }) => {
  const toggle = useToggleControl();

  const onDeleteClick = useCallback(() => {
    toggle.setToggle(false);
    deleteModal?.onShow();
  }, [ deleteModal, toggle ]);

  return <Dropdown id="menu-actions-workflow-dropdown" label={ t('button.actions') } buttonProps={{ buttonStyle: 'primary', marginBottom0: true }}>
    <DropdownMenu data-role="menu" aria-label={ t('create.action.menu') } onToggle={ toggle.onToggle } open>
      <Button
        data-role="menuitem"
        buttonStyle="dropdownItem"
        onClick={onDeleteClick}
        disabled={ !stripes.hasPerm(USER_PERMS.WorkflowsItemDelete) }
      >
        { t('button.workflows.item.delete') }
      </Button>
    </DropdownMenu>
  </Dropdown>;
};
