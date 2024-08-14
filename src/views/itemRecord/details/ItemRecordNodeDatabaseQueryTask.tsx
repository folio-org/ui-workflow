import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, CodeItemValue, StringItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node DatabaseQueryTask detail information.
 */
export const ItemRecordNodeDatabaseQueryTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'DatabaseQueryTask') {
    return null;
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected.deserializeAs }>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.designation' value={ selected?.designation } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CodeItemValue label='workflows.item.node.query' value={ selected?.query } format='application/sql' raw control={ props.control } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StringItemValue label='workflows.item.node.outputPath' value={ selected?.outputPath } />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <StringItemValue label='workflows.item.node.resultType' value={ selected?.resultType } />
        </Col>
        <Col xs={6}>
          <BooleanItemValue label='workflows.item.node.includeHeader' value={ selected?.includeHeader } />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
