type stringMap = {
  [key: string]: any
}

type stringToStringMap = {
  [key: string]: string
}

export const VIEW: stringToStringMap = {
  BROWSE: 'browse',
  CREATE: 'create',
};

export const FILTER_APPLIED_KEY: stringToStringMap = {
  'browse': '@folio/workflow/workflows/browseFilterApplied',
  'create': '@folio/workflow/workflows/createFilterApplied',
};

export const DEFAULT_FILTERS: stringMap = {
  'browse': {
    'active.Yes': true
  },
  'create': {
  },
};
