import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, ItemRecordNodeSet, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node EndEvent detail information.
 */
export const ItemRecordNodeEndEvent: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'EndEvent') {
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
