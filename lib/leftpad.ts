import _leftpad from "leftpad";

export function leftpad(str: string, width: number, char: string): number {
  return _leftpad(str, width, char);
}
