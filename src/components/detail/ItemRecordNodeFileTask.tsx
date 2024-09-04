import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { ItemRecordNodeSet, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node FileTask detail information.
 */
export const ItemRecordNodeFileTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'FileTask') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={6}>
        <StringItemValue label='workflows.item.node.op' value={ selected?.op } />
      </Col>
      <Col xs={6}>
        <StringItemValue label='workflows.item.node.line' value={ selected?.line } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.path' value={ selected?.path } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.target' value={ selected?.target } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
