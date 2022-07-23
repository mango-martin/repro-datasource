import { Constraint } from './validatorconstraint';

export class TestDto {
  @Constraint('test')
  field: any;
}
