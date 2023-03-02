export function truncateString(str: string, len: number) {
  return str?.length > len ? str.substring(0, len) + "..." : str;
}
