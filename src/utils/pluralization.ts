
export const pluralizeRating = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  
  // Special cases for 11-19
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${count} оценок`;
  }
  
  // Cases based on last digit
  if (lastDigit === 1) {
    return `${count} оценка`;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} оценки`;
  } else {
    return `${count} оценок`;
  }
};
