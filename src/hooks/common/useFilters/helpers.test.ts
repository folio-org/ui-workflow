import { FilterGroupsState } from '@folio/stripes/components';

import { getFilters } from '.';

describe('getFilters', () => {
  const emptyFilters: FilterGroupsState = {};
  const filledFilters: FilterGroupsState = { yes: true, no: false };

  it('is expected to return empty array', () => {
    expect(getFilters(emptyFilters)).toEqual([]);
  });

  it('is expected to return filled array', () => {
    expect(getFilters(filledFilters)).toEqual([ 'yes' ]);
  });
});
