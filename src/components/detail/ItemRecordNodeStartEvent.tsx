import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, ItemRecordNodeSet, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node StartEvent detail information.
 */
export const ItemRecordNodeStartEvent: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'StartEvent') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={6}>
        <StringItemValue label='workflows.item.node.type' value={ selected?.type } />
      </Col>
      <Col xs={6}>
        <BooleanItemValue label='workflows.item.node.interrupting' value={ selected?.interrupting } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
