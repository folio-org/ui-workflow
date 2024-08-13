import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { PasswordItemValue, StringItemValue, UriItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node DatabaseConnectionTask detail information.
 */
export const ItemRecordNodeDatabaseConnectionTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'DatabaseConnectionTask') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.designation' value={ selected?.designation } />
        </Col>
        <Col xs={12}>
          <UriItemValue label='workflows.item.node.url' value={ selected?.url } />
        </Col>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.username' value={ selected?.username } />
        </Col>
        <Col xs={12}>
          <PasswordItemValue label='workflows.item.node.password' value={ selected?.password } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
