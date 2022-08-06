import isNumber from 'lodash/isNumber';
import isEmpty from '@lib/is-empty';
import deref, { RefObject } from '@lib/deref';
import { Validator } from '@lib/types';

export default function min(
  ref: RefObject<number> | number,
  message: string
): Validator {
  return (input: unknown) => {
    const min = deref(ref);
    if (isEmpty(input)) return undefined;
    const value = isNumber(input) ? input : parseFloat(String(input));
    return !isNaN(value) && value < min ? message : undefined;
  };
}
