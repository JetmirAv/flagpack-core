const codeList = require("./countryCodeList.json");

function isoToCountryCode(isoCode, keyToGet = "alpha2") {
  if (isoCode !== undefined) {
    const alpha2Code = codeList.find((countryObj) => {
      console.log({ countryObj });

      return countryObj.alpha2 === isoCode || countryObj.alpha3 === isoCode || countryObj.numeric === isoCode;
    });

    console.log({ alpha2Code });

    return alpha2Code[keyToGet];
  }

  throw new Error(
    "This code returns undefined, see https://www.flagpack.xyz/docs/flag-index for all the available codes."
  );
}

let res = isoToCountryCode("AL");
console.log({ res });

// console.log({ codeList });
