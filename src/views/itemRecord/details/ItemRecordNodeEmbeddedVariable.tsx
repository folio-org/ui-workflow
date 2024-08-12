import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node EmbeddedVariable detail information.
 */
export const ItemRecordNodeEmbeddedVariable: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'EmbeddedVariable') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.key' value={ selected?.key } />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <StringItemValue label='workflows.item.node.type' value={ selected?.type } />
        </Col>
        <Col xs={6}>
          <BooleanItemValue label='workflows.item.node.spin' value={ selected?.spin } />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <BooleanItemValue label='workflows.item.node.asJson' value={ selected?.asJson } />
        </Col>
        <Col xs={6}>
          <BooleanItemValue label='workflows.item.node.asTransient' value={ selected?.asTransient } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
