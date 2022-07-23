import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { DataSource } from 'typeorm';

@ValidatorConstraint()
@Injectable()
export class SomeConstraint implements ValidatorConstraintInterface {
  constructor(private _dataSource: DataSource) {
    console.warn(_dataSource);
  }

  validate() {
    return false;
  }
}

export function Constraint(
  _: any,
  validationOptions?: ValidationOptions,
  compareColumn = 'id',
) {
  return function (object: any, propertyName: string) {
    object[`class_entity_${propertyName}`] = _;
    registerDecorator({
      propertyName,
      target: object.constructor,
      options: validationOptions,
      constraints: [compareColumn],
      validator: SomeConstraint,
    });
  };
}
