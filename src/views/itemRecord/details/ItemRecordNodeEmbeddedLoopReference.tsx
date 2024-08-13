import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node EmbeddedLoopReference detail information.
 */
export const ItemRecordNodeEmbeddedLoopReference: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'EmbeddedLoopReference') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.cardinalityExpression' value={ selected?.cardinalityExpression } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.dataInputRefExpression' value={ selected?.dataInputRefExpression } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.inputDataName' value={ selected?.inputDataName } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.completeConditionExpression' value={ selected?.completeConditionExpression } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <BooleanItemValue label='workflows.item.node.parallel' value={ selected?.parallel } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
