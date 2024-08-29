import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, StringItemValue, StringListItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node InputTask detail information.
 */
export const ItemRecordNodeInputTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'InputTask') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={6}>
          <StringItemValue label='workflows.item.node.inputType' value={ selected?.inputType } />
        </Col>
        <Col xs={6}>
          <BooleanItemValue label='workflows.item.node.required' value={ selected?.required } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.defaultValue' value={ selected?.defaultValue } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringListItemValue label='workflows.item.node.attributes' column='attributes' value={ selected?.attributes } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringListItemValue label='workflows.item.node.options' column='options' value={ selected?.options } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
