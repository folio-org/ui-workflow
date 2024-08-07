import React from 'react';
import { Accordion, AccordionSet, Button, Col, ErrorBoundary, Pane, Row } from '@folio/stripes/components';
import { noop } from 'lodash';

import { BooleanItemValue, BooleanMapItemValue, NodesItemValue, NumberItemValue, StringItemValue } from '../../components';
import { IItemRecordData, IWorkflowNodes } from '../../interfaces';
import { t } from '../../utilities';

export const ItemRecordDetailPane: React.FC<IItemRecordData> = ({ itemRecordDetail, view, stripes }) => {
  const selected = !!itemRecordDetail?.selectedItem ? itemRecordDetail.selectedItem : {};

  const actionMenu = <Button bottomMargin0 buttonStyle='primary' onClick={noop}>{ t('button.actions') }</Button>;

  return <Pane defaultWidth='fill' lastMenu={actionMenu} paneTitle={ t('title.itemRecordDetailPane') }>
    <ErrorBoundary>
      <AccordionSet>
        <Accordion label={ t('workflows.detail.item.label') } id={ selected?.id }>
          <Row>
            <Col xs={12}>
              <StringItemValue id='workflows.label.name' value={ selected?.name } />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <StringItemValue id='workflows.label.description' value={ selected?.description } />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <StringItemValue id='workflows.label.id' value={ selected?.id } />
            </Col>
            <Col xs={6}>
              <BooleanItemValue id='workflows.label.active' value={ selected?.active } />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <StringItemValue id='workflows.detail.item.deploymentId' value={ selected?.deploymentId } />
            </Col>
            <Col xs={6}>
              <NumberItemValue id='workflows.detail.item.historyTimeToLive' value={ selected?.historyTimeToLive } />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <BooleanMapItemValue id='workflows.detail.item.setup' value={ selected?.setup } />
            </Col>
            <Col xs={3}>
              <StringItemValue id='workflows.label.version' value={ selected?.versionTag } />
            </Col>
          </Row>
        </Accordion>
        <Accordion id='nodes' label={ t('workflows.detail.item.nodes.label') } >
          <NodesItemValue id='workflows.label.nodes' value={ selected?.nodes } />
        </Accordion>
      </AccordionSet>
    </ErrorBoundary>
  </Pane>;
};
