import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { IItemRecordPane } from '../../interfaces';
import { ItemRecordNodeSet, StringItemValue } from '..';

/**
 * A sub-component for displaying Workflow Item Record Node FolioRequestTask detail information.
 */
export const ItemRecordNodeFolioRequestTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'FolioRequestTask') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.request" value={ selected?.request } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
