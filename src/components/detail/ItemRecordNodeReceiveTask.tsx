import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { ItemRecordNodeSet, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node ReceiveTask detail information.
 */
export const ItemRecordNodeReceiveTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'ReceiveTask') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.message' value={ selected?.message } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
