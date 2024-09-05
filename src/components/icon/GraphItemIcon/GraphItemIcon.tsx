import React from 'react';

import appIcon from '../../../../icons/GraphItem/app.png';
import compressFileTaskIcon from '../../../../icons/GraphItem/compressFileTaskIcon.png';
import conditionTaskIcon from '../../../../icons/GraphItem/conditionTaskIcon.png';
import databaseConnectionTaskIcon from '../../../../icons/GraphItem/databaseConnectionTaskIcon.png';
import databaseDisconnectionTaskIcon from '../../../../icons/GraphItem/databaseDisconnectionTaskIcon.png';
import databaseQueryTaskIcon from '../../../../icons/GraphItem/databaseQueryTaskIcon.png';
import emailTaskIcon from '../../../../icons/GraphItem/emailTaskIcon.png';
import endEventIcon from '../../../../icons/GraphItem/endEventIcon.png';
import fileTaskIcon from '../../../../icons/GraphItem/fileTaskIcon.png';
import inputTaskIcon from '../../../../icons/GraphItem/inputTaskIcon.png';
import parallelTaskIcon from '../../../../icons/GraphItem/parallelTaskIcon.png';
import requestTaskIcon from '../../../../icons/GraphItem/requestTaskIcon.png';
import scriptTaskIcon from '../../../../icons/GraphItem/scriptTaskIcon.png';
import startEventIcon from '../../../../icons/GraphItem/startEventIcon.png';
import subTaskIcon from '../../../../icons/GraphItem/subTaskIcon.png';
import css from './GraphItemIcon.module.css';

export const GraphItemIcon: React.FC<{ type: string }> = ({ type }) => {
  let icon = appIcon;

  switch(type) {
    case "CompressFileTask":
        icon = compressFileTaskIcon;
        break;
    case "Condition":
        icon = conditionTaskIcon;
        break;
    case "DatabaseConnectionTask":
        icon = databaseConnectionTaskIcon;
        break;
    case "DatabaseDisconnectTask":
        icon = databaseDisconnectionTaskIcon;
        break;
    case "DatabaseQueryTask":
        icon = databaseQueryTaskIcon;
        break;
    case "EmailTask":
        icon = emailTaskIcon;
        break;
    case "EndEvent":
        icon = endEventIcon;
        break;
    case "FileTask":
        icon = fileTaskIcon;
        break;
    case "InputTask":
          icon = inputTaskIcon;
          break;
    case "ParallelGateway":
        icon = parallelTaskIcon;
        break;
    case "RequestTask":
        icon = requestTaskIcon;
        break;
    case "ScriptTask":
        icon = scriptTaskIcon;
        break;
    case "StartEvent":
        icon = startEventIcon
        break;
    case "Subprocess":
        icon = subTaskIcon
        break;
    default:
        icon = appIcon;
        break;
  }

  return <div className={css?.graphItemtIconTypeDiv}>
    <img alt="Graph Item Icon" src={icon} width="22" height="22" />
    <span>{type}</span>
  </div>;
};
