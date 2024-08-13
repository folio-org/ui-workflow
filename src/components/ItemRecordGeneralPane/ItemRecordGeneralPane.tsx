import React, { useCallback, useContext, useState } from 'react';
import { Accordion, AccordionSet, Button, Col, ErrorBoundary, Pane, Paneset, Row } from '@folio/stripes/components';
import { CalloutContext } from '@folio/stripes/core';

import { BooleanItemValue, BooleanMapItemValue, NumberItemValue, StringItemValue, WorkflowGeneralActionMenu } from '../';
import { useClickControl, useDeleteRequest } from '../../hooks';
import { IItemRecordPane } from '../../interfaces';
import { t } from '../../utilities';

/**
 * A pane for displaying the Workflow Item Record general information.
 */
export const ItemRecordGeneralPane: React.FC<IItemRecordPane> = ({ control, view, stripes }) => {
  const callout = useContext(CalloutContext);
  const { sendDelete } = useDeleteRequest();
  const selected = !!control?.selectedItem ? control.selectedItem : {};
  const onClose = !!control?.recordControl?.onClose ? control.recordControl.onClose : false;

  const clickControl = useClickControl(
    (onDone: any) => {
      if (!selected?.id) return;

      sendDelete(
        `workflows/${selected.id}/delete`,
        (response: any) => {
          callout.sendCallout({
            type: 'success',
            message: t('workflows.item.callout.success.delete', { name: selected?.name, id: selected?.id })
          });

          onDone();
          onClose();
        },
        (error: any, reason: string) => {
          onDone();

          callout.sendCallout({
            type: 'error',
            message: t('workflows.item.callout.failure.delete', { name: selected?.name, id: selected?.id, reason })
          });
        }
      );
    }
  );

  const actionMenu = <WorkflowGeneralActionMenu control={clickControl} stripes={stripes} />;

  return <Paneset>
    <Pane defaultWidth='fill' dismissible onClose={onClose} paneTitle={ t('title.itemRecordGeneralPane') } lastMenu={actionMenu}>
      <ErrorBoundary>
        <AccordionSet>
          <Accordion label={ t('workflows.item.label') } id={ selected?.id }>
            <Row>
              <Col xs={12}>
                <StringItemValue label='workflows.label.name' value={ selected?.name } />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <StringItemValue label='workflows.label.description' value={ selected?.description } />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <StringItemValue label='workflows.label.id' value={ selected?.id } />
              </Col>
              <Col xs={6}>
                <BooleanItemValue label='workflows.label.active' value={ selected?.active } />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <StringItemValue label='workflows.item.deploymentId' value={ selected?.deploymentId } />
              </Col>
              <Col xs={6}>
                <NumberItemValue label='workflows.item.historyTimeToLive' value={ selected?.historyTimeToLive } />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <BooleanMapItemValue label='workflows.item.setup' value={ selected?.setup } />
              </Col>
              <Col xs={3}>
                <StringItemValue label='workflows.label.version' value={ selected?.versionTag } />
              </Col>
            </Row>
          </Accordion>
        </AccordionSet>
      </ErrorBoundary>
    </Pane>
  </Paneset>;
};
