import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { ItemRecordNodeSet, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node MoveToLastGateway detail information.
 */
export const ItemRecordNodeMoveToLastGateway: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'MoveToLastGateway') {
    return null;
  }

  return null;
};
