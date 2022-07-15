import isNumber from 'lodash/isNumber';
import isEmpty from '@lib/isEmpty';
import deref, { RefObject } from '@lib/deref';
import { Validator } from '@lib/types';

export default function max(
  ref: RefObject<number> | number,
  message: string
): Validator {
  return (input: unknown) => {
    if (isEmpty(input)) return undefined;
    const value = isNumber(input) ? input : parseFloat(String(input));
    return !isNaN(value) && value > deref(ref) ? message : undefined;
  };
}
