import isArray from 'lodash/isArray';
import { Validator } from '@lib/types';

export default function cond(
  predicate: (input?: any) => boolean,
  validator: Validator | Validator[],
  fallback?: Validator | Validator[]
): Validator {
  return (input: unknown) =>
    predicate(input)
      ? isArray(validator)
        ? validator.map((fn) => fn(input)).find(Boolean)
        : validator(input)
      : isArray(fallback)
      ? fallback?.map((fn) => fn(input)).find(Boolean)
      : fallback?.(input);
}
