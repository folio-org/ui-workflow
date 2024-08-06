import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Accordion, AccordionSet, Button, Card, Col, ErrorBoundary, KeyValue, Layout, MultiColumnList, Pane, Row } from '@folio/stripes/components';
import { noop } from 'lodash';

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
          <Accordion label={<FormattedMessage id='ui-workflow.workflows.detail.item.label-name' />} id={selectedItem?.id}>
            <Row>
              <Col xs={12}>
                <KeyValue label={<FormattedMessage id='ui-workflow.workflows.detail.item.name' />}>
                  { Boolean(selectedItem?.name) && (<>{ selectedItem?.name }</>) }
                </KeyValue>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <KeyValue label={<FormattedMessage id='ui-workflow.workflows.detail.item.description' />}>
                  { Boolean(selectedItem?.description) && (<>{ selectedItem?.description }</>) }
                </KeyValue>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <KeyValue label={<FormattedMessage id='ui-workflow.workflows.detail.item.id' />}>
                  { Boolean(selectedItem?.id) && (<>{ selectedItem?.id }</>) }
                </KeyValue>
              </Col>
              <Col xs={6}>
                <KeyValue label={<FormattedMessage id='ui-workflow.workflows.detail.item.active' />}>
                  {
                    Boolean(selectedItem?.active) && (<>
                      { selectedItem?.active ?
                        <FormattedMessage id='ui-workflow.workflows.detail.item.active.true' /> :
                        <FormattedMessage id='ui-workflow.workflows.detail.item.active.false' />
                      }
                    </>)
                  }
                </KeyValue>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <KeyValue label={<FormattedMessage id='ui-workflow.workflows.detail.item.deployment-id' />}>
                  { Boolean(selectedItem?.deploymentId) && (<>{ selectedItem?.deploymentId }</>) }
                </KeyValue>
              </Col>
              <Col xs={6}>
                <KeyValue label={<FormattedMessage id='ui-workflow.workflows.detail.item.history-time-to-live' />}>
                  { Boolean(selectedItem?.historyTimeToLive) && (<>{ selectedItem?.historyTimeToLive }</>) }
                </KeyValue>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <KeyValue label={<FormattedMessage id='ui-workflow.workflows.detail.item.set-up' />}>
                  {
                    Object.entries(selectedItem?.setup).map(([k, v]) => (
                      <p key={k}>
                        <span>{k}: </span>
                        <span> {v ? 'true' : 'false'}</span>
                      </p>
                    ))
                  }
                </KeyValue>
              </Col>
              <Col xs={3}>
                <KeyValue label={<FormattedMessage id='ui-workflow.workflows.detail.item.version-tag' />}>
                  { Boolean(selectedItem?.versionTag) && (<>{ selectedItem?.versionTag }</>) }
                </KeyValue>
              </Col>
            </Row>
          </Accordion>
          <Accordion id='nodes' label={<FormattedMessage id='ui-workflow.workflows.detail.item.nodes.label-name' />} >
            { selectedItem?.nodes.map((item: any) => (
              <Card headerClass='node-detail' headerStart={item?.name} key={item.id}><></></Card>
            ))}
          </Accordion>
        </AccordionSet>
      </Pane>
    </ErrorBoundary>
  );
};
