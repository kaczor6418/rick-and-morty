export namespace UTILS {
  export function isDefined<T>(value: T | null | undefined): value is T {
    return value != null;
  }

  export function isNullOrUndefined(value: unknown): value is null | undefined {
    return value == null;
  }
}
