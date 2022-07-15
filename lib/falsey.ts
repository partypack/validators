import { Validator } from '@lib/types';

export default function falsey(message: string): Validator {
  return (input: unknown) => (Boolean(input) ? message : undefined);
}
