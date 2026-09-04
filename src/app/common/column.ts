import { ValidatorFn } from '@angular/forms';

import { Data } from '@angular/router';

export interface Column {
  label: string;

  field: string;

  validators?: ValidatorFn[];

  order?: number;

  type?: 'date' | 'number' | 'text' | 'select';

  options?: { label: any; value: any }[];

  tableHidden?: boolean;

  restrictInsert?: boolean;

  restrictEdit?: boolean;

  defaultvalue?: any;

  tableAlias?: string;

  dbField?: string;

  width?: string;
}
export interface Columns {
  [key: string]: Column;
}

export interface selectoption {
  label: any;

  value: any;
}
