import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Accordion, AccordionSet, Button, Col, ErrorBoundary, Pane, Row } from '@folio/stripes/components';
import { noop } from 'lodash';

import { BooleanItemValue, BooleanMapItemValue, NodesItemValue, NumberItemValue, StringItemValue } from '../../components';
import { IItemRecordDetailPane, IWorkflowNodes } from '../../interfaces';
import { t } from '../../utilities';

export const ItemRecordDetailPane: React.FC<IItemRecordDetailPane> = ({ itemRecordDetail, view, stripes }) => {
  const { selectedItem, showDetail, onRowClick, onClose } = itemRecordDetail;

  const actionMenu = <Button bottomMargin0 buttonStyle='primary' onClick={noop}>{ t('button.actions') }</Button>;

  if (!showDetail || !selectedItem) {
    return null;
  }

  return (
    <ErrorBoundary>
      <Pane defaultWidth='fill' dismissible lastMenu={actionMenu} onClose={onClose} paneTitle={selectedItem?.name}>
        <AccordionSet>
          <Accordion label={<FormattedMessage id='ui-workflow.workflows.detail.item.label' />} id={selectedItem?.id}>
            <Row>
              <Col xs={12}>
                <StringItemValue id='ui-workflow.workflows.label.name' value={selectedItem?.name} />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <StringItemValue id='ui-workflow.workflows.label.description' value={selectedItem?.description} />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <StringItemValue id='ui-workflow.workflows.label.id' value={selectedItem?.id} />
              </Col>
              <Col xs={6}>
                <BooleanItemValue id='ui-workflow.workflows.label.active' value={selectedItem?.active} />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <StringItemValue id='ui-workflow.workflows.detail.item.deploymentId' value={selectedItem?.deploymentId} />
              </Col>
              <Col xs={6}>
                <NumberItemValue id='ui-workflow.workflows.detail.item.historyTimeToLive' value={selectedItem?.historyTimeToLive} />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <BooleanMapItemValue id='ui-workflow.workflows.detail.item.setup' value={selectedItem?.setup} />
              </Col>
              <Col xs={3}>
                <StringItemValue id='ui-workflow.workflows.label.version' value={selectedItem?.versionTag} />
              </Col>
            </Row>
          </Accordion>
          <Accordion id='nodes' label={<FormattedMessage id='ui-workflow.workflows.detail.item.nodes.label' />} >
            <NodesItemValue id='ui-workflow.workflows.label.nodes' value={selectedItem?.nodes} />
          </Accordion>
        </AccordionSet>
      </Pane>
    </ErrorBoundary>
  );
};
