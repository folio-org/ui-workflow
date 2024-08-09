import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Accordion, AccordionSet, Col, ErrorBoundary, Pane, Row } from '@folio/stripes/components';

import { BooleanItemValue, BooleanMapItemValue, NumberItemValue, StringItemValue } from '../../components';
import { IItemRecordView } from '../../interfaces';
import { t } from '../../utilities';

export const ItemRecordGeneralPane: React.FC<IItemRecordView> = ({ itemRecordControl, view, stripes }) => {
  const selected = !!itemRecordControl?.selectedItem ? itemRecordControl.selectedItem : {};
  const onClose = !!itemRecordControl?.onClose ? itemRecordControl.onClose : false;

  return <Pane defaultWidth='fill' dismissible onClose={onClose} paneTitle={ t('title.itemRecordGeneralPane') }>
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
      </AccordionSet>
    </ErrorBoundary>
  </Pane>;
};
