export const findNames = (arr) => {
  return arr.map((element) => {
    return element.name;
  });
};

export const findByBeforeBirth = (arr, year) => {
  return arr.filter((item) => {
    const splitArr = item.birthday.split("-");
    const birthDayYear = Number(splitArr[splitArr.length - 1]);
    if (birthDayYear < year) {
      return item;
    }
  });
};
