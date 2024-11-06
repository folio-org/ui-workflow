import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { IItemRecordPane } from '../../interfaces';
import { CodeItemValue, ItemRecordNodeSet, StringItemValue } from '..';

/**
 * A sub-component for displaying Workflow Item Record Node EmailTask detail information.
 */
export const ItemRecordNodeEmailTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'EmailTask') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.mailTo" value={ selected?.mailTo } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.mailCc" value={ selected?.mailCc } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.mailBcc" value={ selected?.mailBcc } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.mailFrom" value={ selected?.mailFrom } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.mailSubject" value={ selected?.mailSubject } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <CodeItemValue label="workflows.item.node.mailText" value={ selected?.mailText } raw format="text/plain" control={ props.control } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <CodeItemValue label="workflows.item.node.mailMarkup" value={ selected?.mailMarkup } raw format="text/html" control={ props.control } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.attachmentPath" value={ selected?.attachmentPath } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.includeAttachment" value={ selected?.includeAttachment } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
