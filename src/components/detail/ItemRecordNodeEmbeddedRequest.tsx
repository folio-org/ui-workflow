import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { IItemRecordPane } from '../../interfaces';
import { BooleanItemValue, CodeItemValue, ItemRecordNodeSet, StringItemValue, UriItemValue } from '..';

/**
 * A sub-component for displaying Workflow Item Record Node EmbeddedRequest detail information.
 */
export const ItemRecordNodeEmbeddedRequest: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'EmbeddedRequest') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={12}>
        <UriItemValue label="workflows.item.node.url" value={ selected?.url } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.method" value={ selected?.method } />
      </Col>
    </Row>
    <Row>
      <Col xs={6}>
        <StringItemValue label="workflows.item.node.contentType" value={ selected?.contentType } />
      </Col>
      <Col xs={6}>
        <StringItemValue label="workflows.item.node.accept" value={ selected?.accept } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <CodeItemValue label="workflows.item.node.bodyTemplate" value={ selected?.bodyTemplate } format="text/plain" control={ props.control } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <BooleanItemValue label="workflows.item.node.iterable" value={ selected?.iterable } />
      </Col>
    </Row>
    <Row>
      <Col xs={6}>
        <StringItemValue label="workflows.item.node.iterableKey" value={ selected?.iterableKey } />
      </Col>
      <Col xs={6}>
        <StringItemValue label="workflows.item.node.responseKey" value={ selected?.responseKey } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
