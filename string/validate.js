const isValidDate = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date);
// console.log(isValidDate("2023-08-02"));

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// console.log(isValidEmail("user@example.com"));

// North American format "XXX-XXX-XXXX", where X represents a digit.
const isValidPhoneNumber = (phone) => /^\d{3}-\d{3}-\d{4}$/.test(phone);
// console.log(isValidPhoneNumber("555-123-4567"));

const isValidUSPhoneNumber = (phone) =>
  /^(?:(?:\+1\s?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4})$/.test(phone);
// console.log(isValidUSPhoneNumber("+1 (123) 456-7890"));

// (SSN) in the format "XXX-XX-XXXX", where X represents a digit.
const isValidSSN = (ssn) => /^\d{3}-\d{2}-\d{4}$/.test(ssn);
// console.log(isValidSSN("123-45-6789"));

const isValidTIN = (tin) => /^[A-Z]{2}\d{6}[A-Z\d]{2}$/.test(tin);
// console.log(isValidTIN("AB123456CD"));

const isValidISBN = (isbn) =>
  /^(?:\d{9}[\dX]|(?:\d{3}-){2}\d{1}[\dX])$/.test(isbn);
// console.log(isValidISBN("123456789"));

const isValidCreditCard = (card) =>
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/.test(
    card
  );
// console.log(isValidCreditCard("4012-3456-7890-1234"));

const isValidIPv4 = (ip) =>
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );
const isValidIPAddress = (ip) =>
  /^((25[0-5]|2[0-4]\d|[0-1]?\d{1,2})\.){3}(25[0-5]|2[0-4]\d|[0-1]?\d{1,2})$/.test(
    ip
  );
// console.log(isValidIPv4("192.168.1.1"));

const isValidIPv6 = (ip) => /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(ip);
// console.log(isValidIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));

const isValidMACAddress = (mac) =>
  /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Faf]{2})$/.test(mac);
// console.log(isValidMACAddress("00:1A:2B:3C:4D:5E"));

const isValidURL1 = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
const isValidURL2 = (url) => /^(ftp|http|https):\/\/[^ "]+$/.test(url);
// console.log(isValidURL("https://www.example.com"));

// The regular expression requires that the password contains at
// least one letter ([A-Za-z]), one digit (\d), and one special character ([@$!%*?&]).
const isValidPassword = (password) =>
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
// console.log(isValidPassword("P@ssw0rd"));
