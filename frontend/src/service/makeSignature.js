import CryptoJS from "crypto-js";

export const makeSignature = (time) => {
  console.log(time);
  const space = " "; // one space
  const newLine = "\n"; // new line
  const method = "POST"; // method
  const url =
    "/sms/v2/services/" + process.env.REACT_APP_NAVER_SERVICE_ID + "/messages"; // url (include query string)
  const accessKey = process.env.REACT_APP_NAVER_ACCESS_KEY; // access key id (from portal or Sub Account)
  const secretKey = process.env.REACT_APP_NAVER_SECRET_KEY; // secret key (from portal or Sub Account)

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(time);
  hmac.update(newLine);
  hmac.update(accessKey);

  const hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);

  // const headers = [];
  // const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

  // headers.push(method);
  // headers.push(space);
  // headers.push(url);
  // headers.push(newLine);
  // headers.push(time);
  // console.log(hmac);
  // headers.push(newLine);
  // headers.push(accessKey);

  // return headers.toString(CryptoJS.enc.Base64);
};
