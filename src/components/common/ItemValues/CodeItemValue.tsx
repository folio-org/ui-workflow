/* eslint-disable react/jsx-indent */
import React from 'react';
import { Button, Col, KeyValue, Modal, Row } from '@folio/stripes/components';

import { BRIEF_CODE_SIZE } from '../../../constants';
import { useModal } from '../../../hooks';
import { IItemValue } from '../../../interfaces';
import { t } from '../../../utilities';
import css from './CodeItemValue.module.css';

/**
 * Provide an Item value for displaying a Code string (such as Ruby or JavaScript).
 */
export const CodeItemValue: React.FC<IItemValue> = ({ control, format, empty, label, raw, value }) => {
  const text = (typeof value === 'string' && value.length > 0)
    ? raw ? value : JSON.parse(value)
    : undefined;

  const textModal = useModal();
  const brief = text?.substring(0, BRIEF_CODE_SIZE);
  const lbl = <Row>
    <Col xs={8}>{ t(label) }</Col>
    <Col xs={4}><Button buttonStyle="primary" onClick={ textModal?.onShow }>{ t('button.fullSource') }</Button></Col>
  </Row>;

  if (typeof value !== 'string' && empty === true) {
    return null;
  }

  if (!!text && text.length > BRIEF_CODE_SIZE) {
    return <>
      <Modal
        aria-label={ t('workflows.item.node.code.modal.aria', { name: control?.selectedNode?.name }) }
        label={ t('workflows.item.node.code.modal.label', { name: control?.selectedNode?.name }) }
        dismissible
        closeOnBackgroundClick
        open={ textModal.show }
        onClose={ textModal.onHide }
        size="large"
      >
        <div className={ css?.codeItemValue }>
          <code className={ css?.codeItemValueTextModal }>{text}</code>
        </div>
      </Modal>
      <KeyValue label={lbl}>
        <div className={ css?.codeItemValue }>
          <code className={ css?.codeItemValueText }>{brief}…</code>
        </div>
      </KeyValue>
    </>;
  }

  const markup = !!text
    ? <div className={ css?.codeItemValue }>
        <code className={ css?.codeItemValueText }>{text}</code>
      </div>
    : undefined;

  return <KeyValue label={ t(label) }>{markup}</KeyValue>;
};
