import isEmpty from '@lib/is-empty';
import { Validator } from '@lib/types';

export default function required(message: string): Validator {
  return (input: unknown) => (isEmpty(input) ? message : undefined);
}
