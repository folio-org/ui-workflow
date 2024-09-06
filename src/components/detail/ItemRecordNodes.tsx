import React from 'react';
import { Accordion, AccordionSet, MultiColumnList } from '@folio/stripes/components';

import { IItemRecordPane } from '../../interfaces';
import { t } from '../../utilities';

/**
 * A sub-component for displaying Workflow Item Record Node 'nodes' array detail information.
 */
export const ItemRecordNodes: React.FC<IItemRecordPane> = (props?: any) => {
  const selected = !!props?.control?.selectedNode ? props.control.selectedNode : {};
  const nodes: any[] = [];
  const columnMapping = {
    name: t('workflows.label.name'),
    type: t('workflows.label.type'),
    id: t('workflows.label.id')
  };

  if (!selected?.nodes || !(selected.nodes.forEach?.length)) {
    return null;
  }

  selected.nodes.forEach((node: any) => {
    nodes.push({
      name: node?.name,
      type: t('workflows.item.node.deserializeAs.' + node?.deserializeAs),
      id: node?.id
    });
  });

  return <AccordionSet>
    <Accordion label={ t('workflows.item.nodes.label') } id={ selected?.id }>
      <MultiColumnList contentData={nodes} columnMapping={columnMapping} />
    </Accordion>
  </AccordionSet>;
};
