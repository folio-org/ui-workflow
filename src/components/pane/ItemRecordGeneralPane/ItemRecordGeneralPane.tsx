import React, { useCallback, useContext, useState } from 'react';
import { Accordion, AccordionSet, Button, Col, ErrorBoundary, LoadingPane, Modal, ModalFooter, Pane, Row } from '@folio/stripes/components';
import { CalloutContext } from '@folio/stripes/core';

import { useClickControl, useDeleteRequest, useModal } from '../../../hooks';
import { IItemRecordPane } from '../../../interfaces';
import { t } from '../../../utilities';
import { BooleanItemValue, BooleanMapItemValue, NumberItemValue, StringItemValue, WorkflowGeneralActionMenu } from '../..';

/**
 * A pane for displaying the Workflow Item Record general information.
 */
export const ItemRecordGeneralPane: React.FC<IItemRecordPane> = ({ control, stripes, id, list, workflow }) => {
  const closeWorkflowPane = !!control?.close ? control.close : false;
  const selected = workflow?.data;
  const callout = useContext(CalloutContext);
  const deleteRequest = useDeleteRequest();

  let deleteControl: any;

  const deleteModal = useModal(
    () => deleteControl.setBusy(false),
    () => { if (!!deleteControl.busy) deleteControl.onDone(); }
  );

  deleteControl = useClickControl(
    (onDone: any) => {
      if (!workflow?.data?.id) return;

      deleteRequest.sendDelete(
        `workflows/${selected.id}/delete`,
        (response: any) => {
          callout.sendCallout({
            type: 'success',
            message: t('workflows.item.callout.success.delete', { name: selected?.name, id: selected.id })
          });

          list?.refetch();

          onDone();
          closeWorkflowPane();
        },
        (error: any, reason: string) => {
          onDone();

          callout.sendCallout({
            type: 'error',
            message: t('workflows.item.callout.failure.delete', { name: selected?.name, id: selected.id, reason })
          });
        }
      );
    },
    () => { if (!!deleteModal.show) deleteModal.onHide(); }
  );

  const actionMenu = <WorkflowGeneralActionMenu deleteModal={deleteModal} stripes={stripes} />;

  const deleteModalFooter = <ModalFooter>
    <Button buttonStyle="danger" onClick={ deleteControl?.onClick }>{ t('button.workflows.item.delete.confirm') }</Button>
    <Button onClick={ deleteModal.onHide }>{ t('button.workflows.item.delete.cancel') }</Button>
  </ModalFooter>;

  const loadingPane = (workflow?.isLoading)
    ? <LoadingPane />
    : null;

  return <Pane id={id} defaultWidth="30%" dismissible onClose={closeWorkflowPane} paneTitle={ t('title.itemRecordGeneralPane') } lastMenu={actionMenu}>
    <ErrorBoundary>
      {loadingPane}
      <Modal
        aria-label={ t('workflows.item.delete.modal.aria', { name: selected?.name }) }
        label={ t('workflows.item.delete.modal.label', { name: selected?.name }) }
        dismissible
        closeOnBackgroundClick
        open={ deleteModal.show }
        onOpen={ deleteModal.onShow }
        onClose={ deleteModal.onHide }
        footer={ deleteModalFooter }
      >
        <>{ t('workflows.item.delete.modal.message', {
          name: <strong>{ selected?.name }</strong>,
          action: <strong>{ t('workflows.item.delete.modal.action') }</strong>
        }) }</>
      </Modal>
      <AccordionSet>
        <Accordion label={ t('workflows.item.label') } id={ selected?.id }>
          <Row>
            <Col xs={12}>
              <StringItemValue label="workflows.label.name" value={ selected?.name } />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <StringItemValue label="workflows.label.description" value={ selected?.description } />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <StringItemValue label="workflows.label.id" value={ selected?.id } />
            </Col>
            <Col xs={6}>
              <BooleanItemValue label="workflows.label.active" value={ selected?.active } />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <StringItemValue label="workflows.item.deploymentId" value={ selected?.deploymentId } />
            </Col>
            <Col xs={6}>
              <NumberItemValue label="workflows.item.historyTimeToLive" value={ selected?.historyTimeToLive } />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <BooleanMapItemValue label="workflows.item.setup" value={ selected?.setup } />
            </Col>
            <Col xs={3}>
              <StringItemValue label="workflows.label.version" value={ selected?.versionTag } />
            </Col>
          </Row>
        </Accordion>
      </AccordionSet>
    </ErrorBoundary>
  </Pane>;
};
