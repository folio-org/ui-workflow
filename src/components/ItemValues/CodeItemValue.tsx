import React from 'react';
import { Button, Col, KeyValue, Modal, Row } from '@folio/stripes/components';

import css from './CodeItemValue.module.css';
import { BRIEF_CODE_SIZE } from '../../constants';
import { useTextModal } from '../../hooks';
import { IItemValue } from '../../interfaces';
import { t } from '../../utilities';

/**
 * Provide an Item value for displaying a Code string (such as Ruby or JavaScript).
 */
export const CodeItemValue: React.FC<IItemValue> = ({ control, format, empty, label, raw, value }) => {
  if (typeof value !== 'string' && empty === true) {
    return null;
  }

  const text = typeof value === 'string'
    ? raw
      ? value
      : value.length > 0 ? JSON.parse(value) : ''
    : undefined;

  if (!!text && text.length > BRIEF_CODE_SIZE) {
    const textModal = useTextModal();
    const brief = text.substring(0, BRIEF_CODE_SIZE);
    const lbl = <Row>
      <Col xs={8}>{ t(label) }</Col>
      <Col xs={4}><Button buttonStyle='primary' onClick={ textModal.onClick }>{ t('button.fullSource') }</Button></Col>
    </Row>;

    return <>
      <Modal
        aria-label={ t('workflows.item.node.code.modal.aria', { name: control?.selectedNode?.name }) }
        label={ t('workflows.item.node.code.modal.label', { name: control?.selectedNode?.name }) }
        dismissible
        closeOnBackgroundClick
        open={ textModal.show }
        onClose={ textModal.onClose }
        size='large'
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

  return <KeyValue label={ t(label) }>
    <div className={ css?.codeItemValue }>
      { !!text ? <code className={ css?.codeItemValueText }>{text}</code> : undefined }
    </div>
  </KeyValue>;
};
