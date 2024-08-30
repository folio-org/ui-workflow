import React from 'react';

import {
  GraphItemIconCompressFileTaskSvg,
  GraphItemIconConditionSvg,
  GraphItemIconConnectToSvg,
  GraphItemIconDatabaseConnectionTaskSvg,
  GraphItemIconDatabaseDisconnectTaskSvg,
  GraphItemIconDatabaseQueryTaskSvg,
  GraphItemtIconDefaultSvg,
  GraphItemIconEmailTaskSvg,
  GraphItemIconEndEventSvg,
  GraphItemIconEventTriggerSvg,
  GraphItemIconFileTaskSvg,
  GraphItemIconInclusiveGatewaySvg,
  GraphItemIconInputTaskSvg,
  GraphItemIconMoveToNodeSvg,
  GraphItemIconParallelGatewaySvg,
  GraphItemIconRequestTaskSvg,
  GraphItemIconScriptTaskSvg,
  GraphItemIconStartEventSvg,
  GraphItemIconSubprocessSvg
} from './GraphItemIconSvgs';
import css from './GraphItemIcon.module.css';

export const GraphItemIcon: React.FC<{ type: string }> = ({ type }) => {
  let icon;
  switch(type) {
    case "CompressFileTask":  icon =  <GraphItemIconCompressFileTaskSvg />;
    break;
    case "Condition":  icon =  <GraphItemIconConditionSvg />;
    break;
    case "ConnectTo":  icon =  <GraphItemIconConnectToSvg />;
    break;
    case "DatabaseConnectionTask":  icon =  <GraphItemIconDatabaseConnectionTaskSvg />;
    break;
    case "DatabaseDisconnectTask":  icon =  <GraphItemIconDatabaseDisconnectTaskSvg />;
    break;
    case "DatabaseQueryTask":  icon =  <GraphItemIconDatabaseQueryTaskSvg />;
    break;
    case "EmailTask":  icon =  <GraphItemIconEmailTaskSvg />;
    break;
    case "EndEvent":  icon =  <GraphItemIconEndEventSvg />;
    break;
    case "EventTrigger":  icon =  <GraphItemIconEventTriggerSvg />;
    break;
    case "FileTask":  icon =  <GraphItemIconFileTaskSvg />;
    break;
    case "InclusiveGateway":  icon =  <GraphItemIconInclusiveGatewaySvg />;
    break;
    case "InputTask":  icon =  <GraphItemIconInputTaskSvg />;
    break;
    case "MoveToNode":  icon =  <GraphItemIconMoveToNodeSvg />;
    break;
    case "ParallelGateway":  icon =  <GraphItemIconParallelGatewaySvg />;
    break;
    case "RequestTask":  icon =  <GraphItemIconRequestTaskSvg />;
    break;
    case "ScriptTask":  icon =  <GraphItemIconScriptTaskSvg />;
    break;
    case "StartEvent":  icon =  <GraphItemIconStartEventSvg />;
    break;
    case "Subprocess":  icon =  <GraphItemIconSubprocessSvg />;
    break;
    default: return <GraphItemtIconDefaultSvg />;
  }
  return <div className={css?.graphItemtIconTypeDiv}>{icon}<span>{type}</span></div>;

};
