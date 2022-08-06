import isArrayLike from 'lodash/isArrayLike';
import isEmpty from '@lib/is-empty';
import deref, { RefObject } from '@lib/deref';
import { Validator } from '@lib/types';

export default function minLength(
  ref: RefObject<number> | number,
  message: string
): Validator {
  return (input: unknown) => {
    return !isEmpty(input) && isArrayLike(input) && input.length < deref(ref)
      ? message
      : undefined;
  };
}
