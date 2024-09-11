import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { CodeItemValue, ItemRecordNodeSet, NumberItemValue, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node EmbeddedProcessor detail information.
 */
export const ItemRecordNodeEmbeddedProcessor: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'EmbeddedProcessor') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.scriptType' value={ selected?.scriptType } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.functionName' value={ selected?.functionName } />
      </Col>
    </Row>
    <Row>
      <Col xs={6}>
        <NumberItemValue label='workflows.item.node.buffer' value={ selected?.buffer } />
      </Col>
      <Col xs={6}>
        <NumberItemValue label='workflows.item.node.delay' value={ selected?.delay } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <CodeItemValue label='workflows.item.node.code' value={ selected?.code } control={ props.control } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
