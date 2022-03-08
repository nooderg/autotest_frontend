
export const isEmail = (email: string): boolean => {
    const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    return regex.test(email);
  };
  