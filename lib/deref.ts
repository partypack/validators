import isObjectLike from 'lodash/isObjectLike';

export interface RefObject<T> {
  readonly current: T;
}

export function isRefObject<T>(ref: RefObject<T> | T): ref is RefObject<T> {
  if (!isObjectLike(ref)) return false;
  const keys = Object.keys(ref);
  return keys.length === 1 && keys[0] === 'current';
}

export default function deref<T>(ref: RefObject<T> | T): T {
  return isRefObject(ref) ? ref.current : ref;
}
