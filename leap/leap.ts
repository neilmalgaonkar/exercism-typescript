function isLeapYear(year: number): boolean {
  let divisibleBy4: number,
    divisibleBy100: number,
    divisibleBy400: number;

  divisibleBy4 = year % 4;
  divisibleBy100 = year % 100;
  divisibleBy400 = year % 400;
  if (divisibleBy4 === 0) {
    if (divisibleBy100 === 0) {
      if (divisibleBy400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

export default isLeapYear