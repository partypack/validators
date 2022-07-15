import { Validator } from '@lib/types';

export default function truthy(message: string): Validator {
  return (input: unknown) => (Boolean(input) ? undefined : message);
}
