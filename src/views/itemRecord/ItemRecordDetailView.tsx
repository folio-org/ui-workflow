import React from 'react';

import { IItemRecordPane } from '../../interfaces';
import {
  ItemRecordNode,
  ItemRecordNodeCompressFileTask,
  ItemRecordNodeCondition,
  ItemRecordNodeConnectTo,
  ItemRecordNodeDatabaseConnectionTask,
  ItemRecordNodeDatabaseDisconnectTask,
  ItemRecordNodeDatabaseQueryTask,
  ItemRecordNodeEmailTask,
  ItemRecordNodeEmbeddedLoopReference,
  ItemRecordNodeEmbeddedProcessor,
  ItemRecordNodeEmbeddedRequest,
  ItemRecordNodeEmbeddedVariable,
  ItemRecordNodeEndEvent,
  ItemRecordNodeEventSubprocess,
  ItemRecordNodeExclusiveGateway,
  ItemRecordNodeFileTask,
  ItemRecordNodeFtpTask,
  ItemRecordNodeInclusiveGateway,
  ItemRecordNodeInputTask,
  ItemRecordNodeMoveToLastGateway,
  ItemRecordNodeMoveToNode,
  ItemRecordNodeParallelGateway,
  ItemRecordNodeProcessorTask,
  ItemRecordNodeReceiveTask,
  ItemRecordNodeRequestTask,
  ItemRecordNodes,
  ItemRecordNodeScriptTask,
  ItemRecordNodeStartEvent,
  ItemRecordNodeSubprocess,
  ItemRecordNodeVariables,
} from './details';

/**
 * A sub-view for displaying Workflow Item Record Node detail information.
 */
export const ItemRecordDetailView: React.FC<IItemRecordPane> = (props?: any) => {
  return <>
    <ItemRecordNode { ...props } />

    <ItemRecordNodeCompressFileTask { ...props } />
    <ItemRecordNodeCondition { ...props } />
    <ItemRecordNodeConnectTo { ...props } />
    <ItemRecordNodeDatabaseConnectionTask { ...props } />
    <ItemRecordNodeDatabaseDisconnectTask { ...props } />
    <ItemRecordNodeDatabaseQueryTask { ...props } />
    <ItemRecordNodeEmailTask { ...props } />
    <ItemRecordNodeEmbeddedLoopReference { ...props } />
    <ItemRecordNodeEmbeddedProcessor { ...props } />
    <ItemRecordNodeEmbeddedRequest { ...props } />
    <ItemRecordNodeEmbeddedVariable { ...props } />
    <ItemRecordNodeEndEvent { ...props } />
    <ItemRecordNodeEventSubprocess { ...props } />
    <ItemRecordNodeExclusiveGateway { ...props } />
    <ItemRecordNodeFileTask { ...props } />
    <ItemRecordNodeFtpTask { ...props } />
    <ItemRecordNodeInclusiveGateway { ...props } />
    <ItemRecordNodeInputTask { ...props } />
    <ItemRecordNodeMoveToLastGateway { ...props } />
    <ItemRecordNodeMoveToNode { ...props } />
    <ItemRecordNodeParallelGateway { ...props } />
    <ItemRecordNodeProcessorTask { ...props } />
    <ItemRecordNodeReceiveTask { ...props } />
    <ItemRecordNodeRequestTask { ...props } />
    <ItemRecordNodeScriptTask { ...props } />
    <ItemRecordNodeStartEvent { ...props } />
    <ItemRecordNodeSubprocess { ...props } />
    <ItemRecordNodeVariables { ...props } />

    <ItemRecordNodes { ...props } />
  </>;
};
