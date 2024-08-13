import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node variable detail information.
 */
export const ItemRecordNodeVariables: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (!selected || !selected?.inputVariables && !selected?.outputVariable) {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.variables') } id={ selected?.id + '.variables' }>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.inputVariables' value={ selected?.inputVariables } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.outputVariable' value={ selected?.outputVariable } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
