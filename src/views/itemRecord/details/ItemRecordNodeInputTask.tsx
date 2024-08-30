import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { InputItemValue } from '../../../components';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';

/**
 * A sub-view for displaying Workflow Item Record Node InputTask detail information.
 */
export const ItemRecordNodeInputTask: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  if (selected?.deserializeAs !== 'InputTask') {
    return null;
  }

  const id = `${ selected?.id }.deserializeAs.${ selected.deserializeAs }`;
  const inputs: any[] = [];
  const initialStatus: Record<string, any> = {};

  if (selected?.inputs?.length || 0 > 0) {
    Object.keys(selected.inputs).forEach((k) => {
      inputs.push(<InputItemValue index={k} parent={selected} parentId={id} value={ selected.inputs[k] } />);
      initialStatus[`${id}.${k}`] = false;
    });
  }

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected.deserializeAs) } id={id}>
      <AccordionSet initialStatus={initialStatus}>{inputs}</AccordionSet>
    </Accordion>
  </AccordionSet>;
};
