import isArrayLike from 'lodash/isArrayLike';
import deref, { RefObject } from '@lib/deref';
import { Validator } from '@lib/types';

export default function maxLength(
  ref: RefObject<number> | number,
  message: string
): Validator {
  return (input: unknown) => {
    return isArrayLike(input) && input.length > deref(ref)
      ? message
      : undefined;
  };
}
