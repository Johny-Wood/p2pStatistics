export const getTruthyIndices = (arr) => {
  return arr
    .map((obj, index) => {
      const isTruthy = Object.values(obj).every(
        (field) => field || field === 0 || field !== ""
      );
      return isTruthy ? index : null;
    })
    .filter((index) => index !== null);

  // return arr
  //   .filter((obj, index) => {
  //     return Object.values(obj).every((value) => value === 0 || !!value);
  //     // (!obj.spread || obj.spread.length === 0)
  //   })
  //   .map((_, index) => index);
};
