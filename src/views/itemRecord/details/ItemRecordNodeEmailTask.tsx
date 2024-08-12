import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { StringItemValue, TextItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node EmailTask detail information.
 */
export const ItemRecordNodeEmailTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'EmailTask') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.mailTo' value={ selected?.mailTo } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.mailCc' value={ selected?.mailCc } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.mailBcc' value={ selected?.mailBcc } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.mailFrom' value={ selected?.mailFrom } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.mailSubject' value={ selected?.mailSubject } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <TextItemValue label='workflows.item.node.mailText' value={ selected?.mailText } format='text/plain' />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <TextItemValue label='workflows.item.node.mailMarkup' value={ selected?.mailMarkup } format='text/html' />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.attachmentPath' value={ selected?.attachmentPath } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.includeAttachment' value={ selected?.includeAttachment } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
