import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { ItemRecordNodeSet, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node CompressFileTask detail information.
 */
export const ItemRecordNodeCompressFileTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'CompressFileTask') {
    return null;
  }

  return <ItemRecordNodeSet { ...props }>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.source' value={ selected?.source } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label='workflows.item.node.destination' value={ selected?.destination } />
      </Col>
    </Row>
    <Row>
      <Col xs={6}>
        <StringItemValue label='workflows.item.node.format' value={ selected?.format } />
      </Col>
      <Col xs={6}>
        <StringItemValue label='workflows.item.node.container' value={ selected?.container } />
      </Col>
    </Row>
  </ItemRecordNodeSet>;
};
