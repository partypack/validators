import isArray from 'lodash/isArray';
import { Validator } from '@lib/types';

export default function cond(
  predicate: (input?: unknown) => boolean,
  validator: Validator | Validator[]
): Validator {
  return (input: unknown) =>
    predicate(input)
      ? isArray(validator)
        ? validator.map((fn) => fn(input)).find(Boolean)
        : validator(input)
      : undefined;
}
