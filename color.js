const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// console.log(rgbToHex(0, 51, 255));

const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
//   console.log(randomHex());

const randomColorHex = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// console.log(randomColorHex());

const rgbToHSL = (r, g, b) => {
  [r, g, b] = [r, g, b].map((val) => val / 255);
  const [max, min] = [Math.max(r, g, b), Math.min(r, g, b)];
  let h =
    max !== min
      ? ((max === r ? g - b : max === g ? b - r : r - g) / (max - min) +
          (max === g ? 2 : max === b ? 4 : 0)) /
        6
      : 0;
  let s =
    max !== min
      ? ((l) =>
          l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min))(
          l
        )
      : 0;
  let l = (max + min) / 2;
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};
// console.log(rgbToHSL(255, 0, 0)); // Output: { h: 0, s: 100, l: 50 }
