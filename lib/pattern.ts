import isEmpty from '@lib/isEmpty';
import deref, { RefObject } from '@lib/deref';
import { Validator } from '@lib/types';

export default function pattern(
  ref: RefObject<RegExp | string> | RegExp | string,
  message: string
): Validator {
  return (input: unknown) => {
    const pattern = deref(ref);
    const regexp = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
    return !isEmpty(input) && !regexp.test(String(input)) ? message : undefined;
  };
}
