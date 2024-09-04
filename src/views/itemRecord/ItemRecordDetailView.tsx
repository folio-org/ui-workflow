import React from 'react';

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
} from '../../components';

import { IItemRecordPane } from '../../interfaces';

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
