import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node ParallelGateway detail information.
 */
export const ItemRecordNodeParallelGateway: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'ParallelGateway') {
    return null;
  }

  return null;
};
