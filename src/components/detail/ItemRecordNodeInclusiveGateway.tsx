import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { IItemRecordPane } from '../../interfaces';
import { ItemRecordNodeSet, StringItemValue } from '..';

/**
 * A sub-component for displaying Workflow Item Record Node InclusiveGateway detail information.
 */
export const ItemRecordNodeInclusiveGateway: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'InclusiveGateway') {
    return null;
  }

  return null;
};
