import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, CodeItemValue, StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node ScriptTask detail information.
 */
export const ItemRecordNodeScriptTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'ScriptTask') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={6}>
          <StringItemValue label='workflows.item.node.scriptFormat' value={ selected?.scriptFormat } />
        </Col>
        <Col xs={6}>
          <StringItemValue label='workflows.item.node.resultVariable' value={ selected?.resultVariable } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CodeItemValue label='workflows.item.node.code' value={ selected?.code } control={ props.control } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
