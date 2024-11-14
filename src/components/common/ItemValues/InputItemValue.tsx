import React from 'react';
import { Accordion, Col, FilterAccordionHeader, Row } from '@folio/stripes/components';

import { IItemValue } from '../../../interfaces';
import { t } from '../../../utilities';
import { BooleanItemValue, StringItemValue, StringListItemValue } from '../..';

/**
 * Provide an Item value for displaying an Embedded Input.
 */
export const InputItemValue: React.FC<IItemValue> = ({ empty, index, label, parent, parentId, value }) => {
  if (typeof value !== 'object' && empty === true) {
    return null;
  }

  return <Accordion label={ t('workflows.item.node.inputs.label', { name: value?.fieldLabel }) } id={ `${parentId}.${index}` }
    // @ts-ignore:next-line
    header={FilterAccordionHeader}
  >
    <Row>
      <Col xs={6}>
        <StringItemValue label="workflows.item.node.inputs.input.inputType" value={ value?.inputType } />
      </Col>
      <Col xs={6}>
        <BooleanItemValue label="workflows.item.node.inputs.input.required" value={ value?.required } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringItemValue label="workflows.item.node.inputs.input.defaultValue" value={ value?.defaultValue } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringListItemValue label="workflows.item.node.inputs.input.attributes" column="attributes" value={ value?.attributes } />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StringListItemValue label="workflows.item.node.inputs.input.options" column="options" value={ value?.options } />
      </Col>
    </Row>
  </Accordion>;
};
