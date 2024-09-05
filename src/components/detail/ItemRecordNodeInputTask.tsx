import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { InputItemValue, ItemRecordNodeSet } from '../../components';
import { IItemRecordPane } from '../../interfaces';

/**
 * A sub-component for displaying Workflow Item Record Node InputTask detail information.
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
      initialStatus[k] = false;
    });
  }

  return <ItemRecordNodeSet { ...props }>
    <AccordionSet initialStatus={initialStatus}>{inputs}</AccordionSet>
  </ItemRecordNodeSet>;
};