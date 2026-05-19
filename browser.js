const cookie = (name) =>
  `; ${document.cookie}`
    .split(
      `;
    ${name}=`
    )
    .pop()
    .split(";")
    .shift();
cookie("_ga");

const copyToClipboard = (text) => navigator.clipboard.writeText(text);
copyToClipboard("Hello World");

const getSelectedText = () => window.getSelection().toString();
getSelectedText();

const clearCookies = document.cookie
  .split(";")
  .forEach(
    (cookie) =>
      (document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
  );

const getParameters = (URL) => {
  URL = JSON.parse(
    '{"' +
      decodeURI(URL.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return JSON.stringify(URL);
};
console.log(getParameters(window.location));

const goToTop = () => window.scrollTo(0, 0);
goToTop();

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(isDarkMode);
