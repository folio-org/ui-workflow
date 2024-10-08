import React, {useState} from 'react';
import { Card } from '@folio/stripes/components';

import { GraphItemIcon } from '../../../components';
import { IItemValue } from '../../../interfaces';
import css from './GraphItemValue.module.css';

/**
 * Provide an Item value for displaying a single graph of a Node.
 *
 * This graph of a Node shall process the onSelect when clicked.
 */
export const GraphItemValue: React.FC<IItemValue> = ({ empty, onSelect, selected, value }) => {
  if (typeof value !== 'object' && empty === true) {
    return null;
  }

  const [isHovered, setIsHovered] = useState(false);
  const cardClass = !!selected?.id && value?.id === selected.id ? css?.selected : null;

  const onClick = (e: any) => {
    if (!!onSelect) onSelect(e, value);

  };

  return (
    <Card
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    headerClass={ css?.nodeHeader }
    bodyClass={ css?.nodeBody }
    cardClass={cardClass}
    cardStyle= {isHovered ? 'positive' : 'default'}
    headerEnd={ <span className={ css?.headerEnd }>{ value?.name }</span> }
    headerStart={ <GraphItemIcon type={ value?.deserializeAs } /> }
    key={ value?.id }
    onClick={onClick}
    style={{
      cursor: 'pointer'
    }}
    roundedBorder
  >
    { value?.description }
  </Card>
  );
};
