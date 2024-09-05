import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { TableListItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';
import { t } from '../../utilities';

/**
 * A sub-component for displaying Workflow Item Record Node variable detail information.
 */
export const ItemRecordNodeVariables: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (!selected || !selected?.inputVariables && !selected?.outputVariable) {
    return null;
  }

  const id = `${ selected?.id }.deserializeAs.${ selected.deserializeAs }`;
  const columns: string[] = [ 'key', 'type', 'asJson', 'asTransient', 'spin' ];
  const columnsWidths = { key: { min: 100, max: 300 } };
  const outputVariable = [ selected?.outputVariable ];

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.variables') } id={ selected?.id + '.variables' }>
      <Row>
        <Col xs={12}>
          <TableListItemValue column="inputVariables" columns={columns} columnsWidths={columnsWidths} parentId={id} label='workflows.item.node.inputVariables' value={ selected?.inputVariables } />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <TableListItemValue column="outputVariable" columns={columns} columnsWidths={columnsWidths} parentId={id} label='workflows.item.node.outputVariable' value={outputVariable} />
        </Col>
      </Row>
    </Accordion>
  </AccordionSet>;
};
