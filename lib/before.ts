import isValid from 'date-fns/isValid';
import isAfter from 'date-fns/isAfter';
import deref, { RefObject } from '@lib/deref';
import { Validator } from '@lib/types';

export default function after(
  ref: RefObject<Date | string> | Date | string,
  message: string
): Validator {
  return (input: unknown) => {
    const date = new Date(deref(ref));
    const value = new Date(String(input));

    return isValid(date) && isValid(value) && isAfter(value, date)
      ? message
      : undefined;
  };
}
