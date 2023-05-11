// Copyright (c) Cosmo Tech.
// Licensed under the MIT license.

import { DEFAULT_SOLUTION } from '../default';

const SOLUTION_WITH_TWO_TABLES = {
  ...DEFAULT_SOLUTION,
  parameters: [
    {
      id: 'customers',
      labels: {
        fr: 'Clients',
        en: 'Customers',
      },
      varType: '%DATASETID%',
      options: {
        connectorId: 'c-d7e5p9o0kjn9',
        description: 'customers data',
        subType: 'TABLE',
        columns: [
          {
            field: 'name',
            type: ['nonResizable', 'nonEditable', 'nonSortable'],
          },
          {
            field: 'age',
            type: ['int'],
            minValue: 0,
            maxValue: 120,
            acceptsEmptyFields: true,
          },
          {
            field: 'canDrinkAlcohol',
            type: ['bool'],
          },
          {
            field: 'favoriteDrink',
            type: ['enum'],
            enumValues: ['AppleJuice', 'Beer', 'OrangeJuice', 'Wine'],
          },
          {
            field: 'birthday',
            type: ['date'],
            minValue: '1900-01-01',
            maxValue: '2022-12-19T13:46:15.223Z',
            acceptsEmptyFields: true,
          },
          {
            field: 'height',
            type: ['number'],
            minValue: 0,
            maxValue: 2.5,
            acceptsEmptyFields: true,
          },
        ],
        dateFormat: 'dd/MM/yyyy',
        tooltipText: {
          fr: 'Importez ou exportez un fichier clients',
          en: 'Import or export a customers file',
        },
      },
    },
    {
      id: 'vipCustomers',
      labels: {
        fr: 'VipClients',
        en: 'VipCustomers',
      },
      varType: '%DATASETID%',
      options: {
        connectorId: 'c-d7e5p9o0kjn9',
        description: 'customers vip data',
        subType: 'TABLE',
        columns: [
          {
            field: 'name',
            type: ['nonResizable', 'nonEditable', 'nonSortable'],
          },
          {
            field: 'age',
            type: ['int'],
            minValue: 0,
            maxValue: 120,
            acceptsEmptyFields: true,
          },
          {
            field: 'canDrinkAlcohol',
            type: ['bool'],
          },
          {
            field: 'favoriteDrink',
            type: ['enum'],
            enumValues: ['AppleJuice', 'Beer', 'OrangeJuice', 'Wine'],
          },
          {
            field: 'birthday',
            type: ['date'],
            minValue: '1900-01-01',
            maxValue: '2022-12-19T13:46:15.223Z',
            acceptsEmptyFields: true,
          },
          {
            field: 'height',
            type: ['number'],
            minValue: 0,
            maxValue: 2.5,
            acceptsEmptyFields: true,
          },
        ],
        dateFormat: 'dd/MM/yyyy',
        tooltipText: {
          fr: 'Importez ou exportez un fichier clients',
          en: 'Import or export a customers file',
        },
      },
    },
  ],
  parameterGroups: [
    {
      id: 'customers',
      labels: {
        en: 'Customers',
        fr: 'Clients',
      },
      parameters: ['customers', 'vipCustomers'],
    },
  ],
};

export const SOLUTIONS = [SOLUTION_WITH_TWO_TABLES];
