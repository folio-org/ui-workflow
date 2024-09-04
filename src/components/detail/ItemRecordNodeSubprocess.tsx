import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { ItemRecordNodeSet, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node Subprocess detail information.
 */
export const ItemRecordNodeSubprocess: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'Subprocess') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={6}>
        <StringItemValue label='workflows.item.node.type' value={ selected?.type } />
      </Col>
      <Col xs={6}>
        <StringItemValue label='workflows.item.node.loopRef' value={ selected?.loopRef } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
