import React from 'react';
import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';

import { BooleanItemValue, StringItemValue } from '../../components';
import { IItemRecordPane } from '../../interfaces';
import { t } from '../../utilities';

/**
 * An Accordion Set and Accordion used to provide a common structure for an ItemRecordNode sub-component.
 */
export const ItemRecordNodeSet: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};

  return <AccordionSet>
    <Accordion label={ t('workflows.item.node.deserializeAs.' + selected?.deserializeAs) } id={ selected?.id + '.deserializeAs.' + selected?.deserializeAs }>
      { props?.children }
    </Accordion>
  </AccordionSet>;
};
