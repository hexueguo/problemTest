const prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj: any, key: string | number | symbol): boolean {
  return obj && prototypeHasOwnProperty.call(obj, key);
}

export function delay(wait: number) {
  return new Promise(resolve => {
    setTimeout(resolve, wait);
  });
}
