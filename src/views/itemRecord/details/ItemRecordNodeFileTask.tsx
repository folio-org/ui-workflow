import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node FileTask detail information.
 */
export const ItemRecordNodeFileTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'FileTask') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={6}>
          <StringItemValue label='workflows.item.node.op' value={ selected?.op } />
        </Col>
        <Col xs={6}>
          <StringItemValue label='workflows.item.node.line' value={ selected?.line } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.path' value={ selected?.path } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.target' value={ selected?.target } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
