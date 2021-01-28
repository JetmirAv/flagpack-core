import codeList from "./countryCodeList";
import flags from "./flags";

function isoToCountryCode(isoCode, keyToGet = "alpha2") {
  if (isoCode !== undefined) {
    const alpha2Code = codeList.find((countryObj) => countryObj.code.indexOf(isoCode.toUpperCase()) >= 0);

    if (alpha2Code !== undefined) {
      return alpha2Code[keyToGet];
    } else {
      return "AL";
    }
  }

  throw new Error(
    "This code returns undefined, see https://www.flagpack.xyz/docs/flag-index for all the available codes."
  );
}

function imageUrl(assetCode, size) {
  const formatAssetCode = assetCode.replace("-", "_");
  try {
    return flags[formatAssetCode][size];
  } catch {
    throw new Error(`No flag found for ${assetCode} / size ${size}`);
  }
}

export { codeList, isoToCountryCode, imageUrl, flags };
