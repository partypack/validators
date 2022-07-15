import isEmpty from '@lib/isEmpty';
import deref, { RefObject } from '@lib/deref';
import { Validator } from '@lib/types';

export default function oneOf(
  ref: RefObject<unknown[]> | unknown[],
  message: string
): Validator {
  return (input: unknown) =>
    !isEmpty(input) && !deref(ref).some((item) => item === input)
      ? message
      : undefined;
}
