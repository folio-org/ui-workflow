import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { IItemRecordPane } from '../../interfaces';
import { ItemRecordNodeSet, PasswordItemValue, StringItemValue, UriItemValue } from '..';

/**
 * A sub-component for displaying Workflow Item Record Node DatabaseConnectionTask detail information.
 */
export const ItemRecordNodeDatabaseConnectionTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'DatabaseConnectionTask') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.designation" value={ selected?.designation } />
      </Col>
      <Col xs={12}>
        <UriItemValue label="workflows.item.node.url" value={ selected?.url } />
      </Col>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.username" value={ selected?.username } />
      </Col>
      <Col xs={12}>
        <PasswordItemValue label="workflows.item.node.password" value={ selected?.password } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
