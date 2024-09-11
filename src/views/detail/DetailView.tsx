import React from 'react';
import { Paneset } from '@folio/stripes/components';
import { useStripes } from '@folio/stripes/core';

import { BACKEND_PATH, VIEW } from '../../constants';
import { useItemRecordControl, useWorkflow } from '../../hooks';
import { IItemRecordControl } from '../../interfaces';
import { ItemRecordDetailPane, ItemRecordGeneralPane, ItemRecordGraphPane } from '../../components';
import { t } from '../../utilities';

/**
 * A main view for displaying "detail" information for a Workflow.
 */
export const DetailView: React.FC = (props?: any) => {
  if (!props?.path || !props?.match?.params?.workflowId) {
    return null;
  }

  const workflow = useWorkflow(BACKEND_PATH['workflow'], props.match.params.workflowId);
  const paneProps = {
    control: useItemRecordControl(props.path),
    stripes: useStripes(),
    list: props?.list,
    view: VIEW.DETAIL,
    workflow,
  };

  const layouts = [
    {
      'ItemRecordGeneralPane': '30%',
      'ItemRecordGraphPane': '70%',
    },
    {
      'ItemRecordGeneralPane': '30%',
      'ItemRecordGraphPane': '40%',
      'ItemRecordDetailPane': '30%',
    }
  ];

  return <Paneset isRoot initialLayouts={layouts}>
    <ItemRecordGeneralPane { ... paneProps } id="ItemRecordGeneralPane" />
    <ItemRecordGraphPane { ... paneProps } id="ItemRecordGraphPane" />
    <ItemRecordDetailPane { ... paneProps } id="ItemRecordDetailPane" />
  </Paneset>;
};
