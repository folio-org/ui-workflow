import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { PasswordItemValue, ItemRecordNodeSet, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node FileTask detail information.
 */
export const ItemRecordNodeFtpTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'FtpTask') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.originPath' value={ selected?.originPath } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.destinationPath' value={ selected?.destinationPath } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.op' value={ selected?.op } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.scheme' value={ selected?.scheme } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.host' value={ selected?.host } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.port' value={ selected?.port } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.username' value={ selected?.username } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <PasswordItemValue label='workflows.item.node.password' value={ !!selected?.password } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
