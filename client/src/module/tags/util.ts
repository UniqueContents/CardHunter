export const duplication = (arr: string[], name: string): string[] => {
  if (arr.includes(name)) {
    return arr.filter((item) => item !== name);
  }
  return [...arr, name];
};
