
var SHA256 = require("crypto-js/sha256");

const data = "Blockchain Rock!";
const dataObject = {
  id: 1,
  body: "WWith Objetct Works too",
  time: new Date().getTime().toString().slice(0, -3)
};

function generateHash(obj) {
  const consthasDigest = SHA256()
  return consthasDigest
}

console.log(`SHA256 data hash:  ${generateHash(data)}`);
console.log(`*************************`);
console.log(`SHA256 dataObject Hash: ${generateHash(dataObject)}`);
