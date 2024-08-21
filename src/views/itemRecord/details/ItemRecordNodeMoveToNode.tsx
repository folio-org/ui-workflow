import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node MoveToNode detail information.
 */
export const ItemRecordNodeMoveToNode: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'MoveToNode') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.gatewayId' value={ selected?.gatewayId } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
