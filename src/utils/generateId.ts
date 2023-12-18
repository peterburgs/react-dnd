export const generateId = (length: number = 10): string => {
  const characters = "01234567890";
  let counter = 0;
  let result = "";
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    counter += 1;
  }
  return result;
};
