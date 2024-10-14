import React, { useEffect, useState } from 'react';
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
  // Define states
  const [activeCard, setActiveCard] = useState<string | null>(null); // Tracks the active card
  const hoveredCard = document.querySelector('.styleCard') as HTMLElement | null;
 
  const [isHovered, setIsHovered] = useState('0');

  const onClick = (e: any) => {
    if (!!onSelect) onSelect(e, value);
  };

  useEffect(()=> {
 
  if (hoveredCard) {
    const hovered = hoveredCard.style.getPropertyValue('--is-hovered').trim();
    setIsHovered(hovered);
  }

  }, [hoveredCard]);

  const cardClass = activeCard === value.id || isHovered ? css?.selected : '';

    return (
          <Card
            key={value.id} 
            tabIndex={0} 
            onClick={(e: any) => {setActiveCard(value.id); onClick(e);}} 
            style={{
              cursor: 'pointer'
            }}
              headerClass={css?.nodeHeader}
              bodyClass={css?.nodeBody}
              cardClass={cardClass}
              headerEnd={<span className={css?.headerEnd}>{value?.name}</span>}
              headerStart={<GraphItemIcon type={value?.deserializeAs} />}
              roundedBorder
            >
              {value?.description}
            </Card>
  );
};
