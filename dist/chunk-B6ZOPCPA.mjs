import {
  countries,
  getCountryByIso2
} from "./chunk-DG7J63J2.mjs";

// src/lib/addresses.ts
var isSameAddress = (a, b) => {
  if (!a || !b) {
    return false;
  }
  return a.first_name === b.first_name && a.last_name === b.last_name && a.address_1 === b.address_1 && a.address_2 === b.address_2 && a.city === b.city && a.postal_code === b.postal_code && a.province === b.province && a.country_code === b.country_code;
};
var getFormattedAddress = ({
  address
}) => {
  if (!address) {
    return [];
  }
  const {
    first_name,
    last_name,
    company,
    address_1,
    address_2,
    city,
    postal_code,
    province,
    country,
    country_code
  } = address;
  const name = [first_name, last_name].filter(Boolean).join(" ");
  const formattedAddress = [];
  if (name) {
    formattedAddress.push(name);
  }
  if (company) {
    formattedAddress.push(company);
  }
  if (address_1) {
    formattedAddress.push(address_1);
  }
  if (address_2) {
    formattedAddress.push(address_2);
  }
  const cityProvincePostal = [city, province, postal_code].filter(Boolean).join(" ");
  if (cityProvincePostal) {
    formattedAddress.push(cityProvincePostal);
  }
  if (country) {
    formattedAddress.push(country.display_name);
  } else if (country_code) {
    const country2 = getCountryByIso2(country_code);
    if (country2) {
      formattedAddress.push(country2.display_name);
    } else {
      formattedAddress.push(country_code.toUpperCase());
    }
  }
  return formattedAddress;
};
var getFormattedCountry = (countryCode) => {
  if (!countryCode) {
    return "";
  }
  const country = countries.find((c) => c.iso_2 === countryCode);
  return country ? country.display_name : countryCode;
};

export {
  isSameAddress,
  getFormattedAddress,
  getFormattedCountry
};
