import isNil from 'lodash/isNil';
import isArrayLike from 'lodash/isArrayLike';

export default function isEmpty(value: unknown): boolean {
  return isNil(value) || (isArrayLike(value) && value.length === 0);
}
