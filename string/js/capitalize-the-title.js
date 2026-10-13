var capitalizeTitle = function (title) {
  let title_arr = title.split(" ");
  let capitalize = title_arr
    .map((str) => {
      if (str.length > 2) {
        str = str[0].toUpperCase() + str.slice(1).toLowerCase();
      } else if (str.length <= 2) {
        str = str.toLowerCase();
      }
      return str;
    })
    .join(" ");
  return capitalize;
};
