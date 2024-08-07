import React from 'react';
import { Accordion, AccordionSet, Button, Col, ErrorBoundary, Pane, Row } from '@folio/stripes/components';
import { noop } from 'lodash';

import { NodesItemValue } from '../../components';
import { IItemRecordData } from '../../interfaces';
import { t } from '../../utilities';

export const ItemRecordDetailPane: React.FC<IItemRecordData> = ({ itemRecordDetail, view, stripes }) => {
  const selected = !!itemRecordDetail?.selectedItem ? itemRecordDetail.selectedItem : {};

  const actionMenu = <Button bottomMargin0 buttonStyle='primary' onClick={noop}>{ t('button.actions') }</Button>;

  return <Pane defaultWidth='fill' lastMenu={actionMenu} paneTitle={ t('title.itemRecordDetailPane') }>
    <ErrorBoundary>
      <AccordionSet>
        <Accordion id='nodes' label={ t('workflows.detail.item.nodes.label') } >
          <NodesItemValue id='workflows.label.nodes' value={ selected?.nodes } />
        </Accordion>
      </AccordionSet>
    </ErrorBoundary>
  </Pane>;
};
