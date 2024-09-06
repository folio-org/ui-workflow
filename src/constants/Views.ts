type stringMap = {
  [key: string]: any
}

type stringToStringMap = {
  [key: string]: string
}

export const VIEW: stringToStringMap = {
  BROWSE: 'browse',
  CREATE: 'create',
  DETAIL: 'detail',
};

export const FILTER_APPLIED_KEY: stringToStringMap = {
  'browse': '@folio/workflow/workflows/browseFilterApplied',
  'create': '@folio/workflow/workflows/createFilterApplied',
  'view': '',
};

export const DEFAULT_FILTERS: stringMap = {
  'browse': {
    'active.Yes': true
  },
  'create': {
  },
};

/**
 * Paths at mod-workflow.
 */
export const BACKEND_PATH: stringMap = {
  'browse': 'workflows/search',
  'create': 'workflows/create',
  'workflow': 'workflows',
};

/**
 * Paths at ui-workflow, relative to the module path.
 */
export const UI_PATH: stringMap = {
  'browse': '',
  'create': 'create',
  'detail': 'detail',
};
