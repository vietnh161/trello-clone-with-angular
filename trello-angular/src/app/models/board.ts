import { BaseModel } from './base-model';

export class Board extends BaseModel {
  Title: string = '';
  Background: string = '';
  IsTemplate?: boolean;
  PinDate?: Date;
}

export const listBoard: Board[] = [
  {
    Title: '',
    Background: '',
    IsTemplate: true,
    CreatedDate: new Date(),
    CreatedBy: 'admin',
    ModifiedDate: new Date(),
    ModifiedBy: 'admin',
  },
  {
    Title: '',
    Background: '',
    IsTemplate: true,
    CreatedDate: new Date(),
    CreatedBy: 'admin',
    ModifiedDate: new Date(),
    ModifiedBy: 'admin',
  },
  {
    Title: '',
    Background: '',
    IsTemplate: true,
    CreatedDate: new Date(),
    CreatedBy: 'admin',
    ModifiedDate: new Date(),
    ModifiedBy: 'admin',
  },
  {
    Title: '',
    Background: '',
    IsTemplate: true,
    CreatedDate: new Date(),
    CreatedBy: 'admin',
    ModifiedDate: new Date(),
    ModifiedBy: 'admin',
  },
  {
    Title: '',
    Background: '',
    IsTemplate: true,
    CreatedDate: new Date(),
    CreatedBy: 'admin',
    ModifiedDate: new Date(),
    ModifiedBy: 'admin',
  },
  {
    Title: '',
    Background: '',
    CreatedDate: new Date(),
    CreatedBy: 'admin',
    ModifiedDate: new Date(),
    ModifiedBy: 'admin',
  },
  {
    Title: '',
    Background: '',
    PinDate: new Date(),
    CreatedDate: new Date(),
    CreatedBy: 'admin',
    ModifiedDate: new Date(),
    ModifiedBy: 'admin',
  },
];
