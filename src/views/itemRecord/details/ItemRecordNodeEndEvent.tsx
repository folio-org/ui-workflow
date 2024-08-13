import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node EndEvent detail information.
 */
export const ItemRecordNodeEndEvent: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'EndEvent') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={6}>
          <StringItemValue label='workflows.item.node.type' value={ selected?.type } />
        </Col>
        <Col xs={6}>
          <BooleanItemValue label='workflows.item.node.interrupting' value={ selected?.interrupting } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
