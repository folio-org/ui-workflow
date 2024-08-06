import React from 'react';
import { Card } from '@folio/stripes/components';

import { IItemValue } from '../../interfaces';

export const NodesItemValue: React.FC<IItemValue> = ({ id, value }) => {
  const values = [];

  if (typeof value === 'object') {
    const objValues: Array<any> = Object.values(value);

    for (const v of objValues) {
      if (typeof v !== 'object') continue;

      values.push(<Card headerClass='node-detail' headerStart={ v?.name } key={ v?.id }><></></Card>);
    }
  }

  if (values.length == 0) {
    return null;
  }

  return <>{values}</>;
};
