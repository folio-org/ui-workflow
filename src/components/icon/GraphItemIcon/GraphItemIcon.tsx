import React from 'react';
import { AppIcon } from '@folio/stripes/core';

import {
  appIcon,
  compressFileTaskIcon,
  conditionTaskIcon,
  databaseConnectionTaskIcon,
  databaseDisconnectionTaskIcon,
  databaseQueryTaskIcon,
  emailTaskIcon,
  endEventIcon,
  fileTaskIcon,
  inputTaskIcon,
  parallelTaskIcon,
  requestTaskIcon,
  scriptTaskIcon,
  startEventIcon,
  subTaskIcon
} from '../../../../icons/GraphItem';
import css from './GraphItemIcon.module.css';

export const GraphItemIcon: React.FC<{ type: string }> = ({ type }) => {
  let icon = appIcon;

  switch (type) {
    case 'CompressFileTask':
      icon = compressFileTaskIcon;
      break;

    case 'Condition':
      icon = conditionTaskIcon;
      break;

    case 'DatabaseConnectionTask':
      icon = databaseConnectionTaskIcon;
      break;

    case 'DatabaseDisconnectTask':
      icon = databaseDisconnectionTaskIcon;
      break;

    case 'DatabaseQueryTask':
      icon = databaseQueryTaskIcon;
      break;

    case 'EmailTask':
      icon = emailTaskIcon;
      break;

    case 'EndEvent':
      icon = endEventIcon;
      break;

    case 'FileTask':
      icon = fileTaskIcon;
      break;

    case 'InputTask':
      icon = inputTaskIcon;
      break;

    case 'ParallelGateway':
      icon = parallelTaskIcon;
      break;

    case 'RequestTask':
      icon = requestTaskIcon;
      break;

    case 'ScriptTask':
      icon = scriptTaskIcon;
      break;

    case 'StartEvent':
      icon = startEventIcon;
      break;

    case 'Subprocess':
      icon = subTaskIcon;
      break;

    default:
      icon = appIcon;
      break;
  }

  return <div className={css?.graphItemtIconTypeDiv}>
    <AppIcon app="@folio/workflow" iconKey="app" size="small" src={icon} />
    <span>{type}</span>
  </div>;
};
