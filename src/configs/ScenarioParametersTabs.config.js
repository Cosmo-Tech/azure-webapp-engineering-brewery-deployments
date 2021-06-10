// Copyright (c) Cosmo Tech.
// Licensed under the MIT license.

export const SCENARIO_PARAMETERS_TABS_CONFIG = [
  {
    id: 0,
    translationKey: 'commoncomponents.tab.scenario.parameters.bar',
    label: 'Bar parameters',
    value: 'bar_parameters',
    runTemplateIds: ['1', '2']
  },
  {
    id: 1,
    translationKey: 'commoncomponents.tab.scenario.parameters.basic.types',
    label: 'Basic Types template',
    value: 'basic_types',
    runTemplateIds: ['3']
  },
  {
    id: 2,
    translationKey: 'commoncomponents.tab.scenario.parameters.upload.file',
    label: 'Upload File template',
    value: 'upload_file_template',
    // TODO Add run template id compatible with file upload when created
    runTemplateIds: []
  },
  {
    id: 3,
    translationKey: 'commoncomponents.tab.scenario.parameters.array.template',
    label: 'Array Template',
    value: 'array_template',
    // TODO Add run template id compatible with file upload when created
    runTemplateIds: []
  }
];
