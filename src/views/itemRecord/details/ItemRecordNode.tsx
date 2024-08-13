import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node detail main information.
 */
export const ItemRecordNode: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.label') } id={ selected?.id }>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.label.name' value={ selected?.name } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.label.description' value={ selected?.description } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.label.id' value={ selected?.id } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.identifier' value={ selected?.identifier } />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <BooleanItemValue label='workflows.item.node.asyncBefore' value={ selected?.asyncBefore } />
        </Col>
        <Col xs={6}>
          <BooleanItemValue label='workflows.item.node.asyncAfter' value={ selected?.asyncAfter } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
