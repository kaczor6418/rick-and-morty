export namespace ARRAY_UTILS {
  export function getLastElementReference<T>(array: T[]): T {
    return array[array.length - 1];
  }
}
