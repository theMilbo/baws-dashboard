// src/lib/data/countries.ts
function getCountryByIso2(iso2) {
  if (!iso2) {
    return;
  }
  return countries.find((c) => c.iso_2.toLowerCase() === iso2.toLowerCase());
}
var countries = [
  {
    iso_2: "af",
    iso_3: "afg",
    num_code: "4",
    name: "AFGHANISTAN",
    display_name: "Afghanistan"
  },
  {
    iso_2: "al",
    iso_3: "alb",
    num_code: "8",
    name: "ALBANIA",
    display_name: "Albania"
  },
  {
    iso_2: "dz",
    iso_3: "dza",
    num_code: "12",
    name: "ALGERIA",
    display_name: "Algeria"
  },
  {
    iso_2: "as",
    iso_3: "asm",
    num_code: "16",
    name: "AMERICAN SAMOA",
    display_name: "American Samoa"
  },
  {
    iso_2: "ad",
    iso_3: "and",
    num_code: "20",
    name: "ANDORRA",
    display_name: "Andorra"
  },
  {
    iso_2: "ao",
    iso_3: "ago",
    num_code: "24",
    name: "ANGOLA",
    display_name: "Angola"
  },
  {
    iso_2: "ai",
    iso_3: "aia",
    num_code: "660",
    name: "ANGUILLA",
    display_name: "Anguilla"
  },
  {
    iso_2: "aq",
    iso_3: "ata",
    num_code: "10",
    name: "ANTARCTICA",
    display_name: "Antarctica"
  },
  {
    iso_2: "ag",
    iso_3: "atg",
    num_code: "28",
    name: "ANTIGUA AND BARBUDA",
    display_name: "Antigua and Barbuda"
  },
  {
    iso_2: "ar",
    iso_3: "arg",
    num_code: "32",
    name: "ARGENTINA",
    display_name: "Argentina"
  },
  {
    iso_2: "am",
    iso_3: "arm",
    num_code: "51",
    name: "ARMENIA",
    display_name: "Armenia"
  },
  {
    iso_2: "aw",
    iso_3: "abw",
    num_code: "533",
    name: "ARUBA",
    display_name: "Aruba"
  },
  {
    iso_2: "au",
    iso_3: "aus",
    num_code: "36",
    name: "AUSTRALIA",
    display_name: "Australia"
  },
  {
    iso_2: "at",
    iso_3: "aut",
    num_code: "40",
    name: "AUSTRIA",
    display_name: "Austria"
  },
  {
    iso_2: "az",
    iso_3: "aze",
    num_code: "31",
    name: "AZERBAIJAN",
    display_name: "Azerbaijan"
  },
  {
    iso_2: "bs",
    iso_3: "bhs",
    num_code: "44",
    name: "BAHAMAS",
    display_name: "Bahamas"
  },
  {
    iso_2: "bh",
    iso_3: "bhr",
    num_code: "48",
    name: "BAHRAIN",
    display_name: "Bahrain"
  },
  {
    iso_2: "bd",
    iso_3: "bgd",
    num_code: "50",
    name: "BANGLADESH",
    display_name: "Bangladesh"
  },
  {
    iso_2: "bb",
    iso_3: "brb",
    num_code: "52",
    name: "BARBADOS",
    display_name: "Barbados"
  },
  {
    iso_2: "by",
    iso_3: "blr",
    num_code: "112",
    name: "BELARUS",
    display_name: "Belarus"
  },
  {
    iso_2: "be",
    iso_3: "bel",
    num_code: "56",
    name: "BELGIUM",
    display_name: "Belgium"
  },
  {
    iso_2: "bz",
    iso_3: "blz",
    num_code: "84",
    name: "BELIZE",
    display_name: "Belize"
  },
  {
    iso_2: "bj",
    iso_3: "ben",
    num_code: "204",
    name: "BENIN",
    display_name: "Benin"
  },
  {
    iso_2: "bm",
    iso_3: "bmu",
    num_code: "60",
    name: "BERMUDA",
    display_name: "Bermuda"
  },
  {
    iso_2: "bt",
    iso_3: "btn",
    num_code: "64",
    name: "BHUTAN",
    display_name: "Bhutan"
  },
  {
    iso_2: "bo",
    iso_3: "bol",
    num_code: "68",
    name: "BOLIVIA",
    display_name: "Bolivia"
  },
  {
    iso_2: "bq",
    iso_3: "bes",
    num_code: "535",
    name: "BONAIRE, SINT EUSTATIUS AND SABA",
    display_name: "Bonaire, Sint Eustatius and Saba"
  },
  {
    iso_2: "ba",
    iso_3: "bih",
    num_code: "70",
    name: "BOSNIA AND HERZEGOVINA",
    display_name: "Bosnia and Herzegovina"
  },
  {
    iso_2: "bw",
    iso_3: "bwa",
    num_code: "72",
    name: "BOTSWANA",
    display_name: "Botswana"
  },
  {
    iso_2: "bv",
    iso_3: "bvd",
    num_code: "74",
    name: "BOUVET ISLAND",
    display_name: "Bouvet Island"
  },
  {
    iso_2: "br",
    iso_3: "bra",
    num_code: "76",
    name: "BRAZIL",
    display_name: "Brazil"
  },
  {
    iso_2: "io",
    iso_3: "iot",
    num_code: "86",
    name: "BRITISH INDIAN OCEAN TERRITORY",
    display_name: "British Indian Ocean Territory"
  },
  {
    iso_2: "bn",
    iso_3: "brn",
    num_code: "96",
    name: "BRUNEI DARUSSALAM",
    display_name: "Brunei Darussalam"
  },
  {
    iso_2: "bg",
    iso_3: "bgr",
    num_code: "100",
    name: "BULGARIA",
    display_name: "Bulgaria"
  },
  {
    iso_2: "bf",
    iso_3: "bfa",
    num_code: "854",
    name: "BURKINA FASO",
    display_name: "Burkina Faso"
  },
  {
    iso_2: "bi",
    iso_3: "bdi",
    num_code: "108",
    name: "BURUNDI",
    display_name: "Burundi"
  },
  {
    iso_2: "kh",
    iso_3: "khm",
    num_code: "116",
    name: "CAMBODIA",
    display_name: "Cambodia"
  },
  {
    iso_2: "cm",
    iso_3: "cmr",
    num_code: "120",
    name: "CAMEROON",
    display_name: "Cameroon"
  },
  {
    iso_2: "ca",
    iso_3: "can",
    num_code: "124",
    name: "CANADA",
    display_name: "Canada"
  },
  {
    iso_2: "cv",
    iso_3: "cpv",
    num_code: "132",
    name: "CAPE VERDE",
    display_name: "Cape Verde"
  },
  {
    iso_2: "ky",
    iso_3: "cym",
    num_code: "136",
    name: "CAYMAN ISLANDS",
    display_name: "Cayman Islands"
  },
  {
    iso_2: "cf",
    iso_3: "caf",
    num_code: "140",
    name: "CENTRAL AFRICAN REPUBLIC",
    display_name: "Central African Republic"
  },
  {
    iso_2: "td",
    iso_3: "tcd",
    num_code: "148",
    name: "CHAD",
    display_name: "Chad"
  },
  {
    iso_2: "cl",
    iso_3: "chl",
    num_code: "152",
    name: "CHILE",
    display_name: "Chile"
  },
  {
    iso_2: "cn",
    iso_3: "chn",
    num_code: "156",
    name: "CHINA",
    display_name: "China"
  },
  {
    iso_2: "cx",
    iso_3: "cxr",
    num_code: "162",
    name: "CHRISTMAS ISLAND",
    display_name: "Christmas Island"
  },
  {
    iso_2: "cc",
    iso_3: "cck",
    num_code: "166",
    name: "COCOS (KEELING) ISLANDS",
    display_name: "Cocos (Keeling) Islands"
  },
  {
    iso_2: "co",
    iso_3: "col",
    num_code: "170",
    name: "COLOMBIA",
    display_name: "Colombia"
  },
  {
    iso_2: "km",
    iso_3: "com",
    num_code: "174",
    name: "COMOROS",
    display_name: "Comoros"
  },
  {
    iso_2: "cg",
    iso_3: "cog",
    num_code: "178",
    name: "CONGO",
    display_name: "Congo"
  },
  {
    iso_2: "cd",
    iso_3: "cod",
    num_code: "180",
    name: "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
    display_name: "Congo, the Democratic Republic of the"
  },
  {
    iso_2: "ck",
    iso_3: "cok",
    num_code: "184",
    name: "COOK ISLANDS",
    display_name: "Cook Islands"
  },
  {
    iso_2: "cr",
    iso_3: "cri",
    num_code: "188",
    name: "COSTA RICA",
    display_name: "Costa Rica"
  },
  {
    iso_2: "ci",
    iso_3: "civ",
    num_code: "384",
    name: "COTE D'IVOIRE",
    display_name: "Cote D'Ivoire"
  },
  {
    iso_2: "hr",
    iso_3: "hrv",
    num_code: "191",
    name: "CROATIA",
    display_name: "Croatia"
  },
  {
    iso_2: "cu",
    iso_3: "cub",
    num_code: "192",
    name: "CUBA",
    display_name: "Cuba"
  },
  {
    iso_2: "cw",
    iso_3: "cuw",
    num_code: "531",
    name: "CURA\xC7AO",
    display_name: "Cura\xE7ao"
  },
  {
    iso_2: "cy",
    iso_3: "cyp",
    num_code: "196",
    name: "CYPRUS",
    display_name: "Cyprus"
  },
  {
    iso_2: "cz",
    iso_3: "cze",
    num_code: "203",
    name: "CZECH REPUBLIC",
    display_name: "Czech Republic"
  },
  {
    iso_2: "dk",
    iso_3: "dnk",
    num_code: "208",
    name: "DENMARK",
    display_name: "Denmark"
  },
  {
    iso_2: "dj",
    iso_3: "dji",
    num_code: "262",
    name: "DJIBOUTI",
    display_name: "Djibouti"
  },
  {
    iso_2: "dm",
    iso_3: "dma",
    num_code: "212",
    name: "DOMINICA",
    display_name: "Dominica"
  },
  {
    iso_2: "do",
    iso_3: "dom",
    num_code: "214",
    name: "DOMINICAN REPUBLIC",
    display_name: "Dominican Republic"
  },
  {
    iso_2: "ec",
    iso_3: "ecu",
    num_code: "218",
    name: "ECUADOR",
    display_name: "Ecuador"
  },
  {
    iso_2: "eg",
    iso_3: "egy",
    num_code: "818",
    name: "EGYPT",
    display_name: "Egypt"
  },
  {
    iso_2: "sv",
    iso_3: "slv",
    num_code: "222",
    name: "EL SALVADOR",
    display_name: "El Salvador"
  },
  {
    iso_2: "gq",
    iso_3: "gnq",
    num_code: "226",
    name: "EQUATORIAL GUINEA",
    display_name: "Equatorial Guinea"
  },
  {
    iso_2: "er",
    iso_3: "eri",
    num_code: "232",
    name: "ERITREA",
    display_name: "Eritrea"
  },
  {
    iso_2: "ee",
    iso_3: "est",
    num_code: "233",
    name: "ESTONIA",
    display_name: "Estonia"
  },
  {
    iso_2: "et",
    iso_3: "eth",
    num_code: "231",
    name: "ETHIOPIA",
    display_name: "Ethiopia"
  },
  {
    iso_2: "fk",
    iso_3: "flk",
    num_code: "238",
    name: "FALKLAND ISLANDS (MALVINAS)",
    display_name: "Falkland Islands (Malvinas)"
  },
  {
    iso_2: "fo",
    iso_3: "fro",
    num_code: "234",
    name: "FAROE ISLANDS",
    display_name: "Faroe Islands"
  },
  {
    iso_2: "fj",
    iso_3: "fji",
    num_code: "242",
    name: "FIJI",
    display_name: "Fiji"
  },
  {
    iso_2: "fi",
    iso_3: "fin",
    num_code: "246",
    name: "FINLAND",
    display_name: "Finland"
  },
  {
    iso_2: "fr",
    iso_3: "fra",
    num_code: "250",
    name: "FRANCE",
    display_name: "France"
  },
  {
    iso_2: "gf",
    iso_3: "guf",
    num_code: "254",
    name: "FRENCH GUIANA",
    display_name: "French Guiana"
  },
  {
    iso_2: "pf",
    iso_3: "pyf",
    num_code: "258",
    name: "FRENCH POLYNESIA",
    display_name: "French Polynesia"
  },
  {
    iso_2: "tf",
    iso_3: "atf",
    num_code: "260",
    name: "FRENCH SOUTHERN TERRITORIES",
    display_name: "French Southern Territories"
  },
  {
    iso_2: "ga",
    iso_3: "gab",
    num_code: "266",
    name: "GABON",
    display_name: "Gabon"
  },
  {
    iso_2: "gm",
    iso_3: "gmb",
    num_code: "270",
    name: "GAMBIA",
    display_name: "Gambia"
  },
  {
    iso_2: "ge",
    iso_3: "geo",
    num_code: "268",
    name: "GEORGIA",
    display_name: "Georgia"
  },
  {
    iso_2: "de",
    iso_3: "deu",
    num_code: "276",
    name: "GERMANY",
    display_name: "Germany"
  },
  {
    iso_2: "gh",
    iso_3: "gha",
    num_code: "288",
    name: "GHANA",
    display_name: "Ghana"
  },
  {
    iso_2: "gi",
    iso_3: "gib",
    num_code: "292",
    name: "GIBRALTAR",
    display_name: "Gibraltar"
  },
  {
    iso_2: "gr",
    iso_3: "grc",
    num_code: "300",
    name: "GREECE",
    display_name: "Greece"
  },
  {
    iso_2: "gl",
    iso_3: "grl",
    num_code: "304",
    name: "GREENLAND",
    display_name: "Greenland"
  },
  {
    iso_2: "gd",
    iso_3: "grd",
    num_code: "308",
    name: "GRENADA",
    display_name: "Grenada"
  },
  {
    iso_2: "gp",
    iso_3: "glp",
    num_code: "312",
    name: "GUADELOUPE",
    display_name: "Guadeloupe"
  },
  {
    iso_2: "gu",
    iso_3: "gum",
    num_code: "316",
    name: "GUAM",
    display_name: "Guam"
  },
  {
    iso_2: "gt",
    iso_3: "gtm",
    num_code: "320",
    name: "GUATEMALA",
    display_name: "Guatemala"
  },
  {
    iso_2: "gg",
    iso_3: "ggy",
    num_code: "831",
    name: "GUERNSEY",
    display_name: "Guernsey"
  },
  {
    iso_2: "gn",
    iso_3: "gin",
    num_code: "324",
    name: "GUINEA",
    display_name: "Guinea"
  },
  {
    iso_2: "gw",
    iso_3: "gnb",
    num_code: "624",
    name: "GUINEA-BISSAU",
    display_name: "Guinea-Bissau"
  },
  {
    iso_2: "gy",
    iso_3: "guy",
    num_code: "328",
    name: "GUYANA",
    display_name: "Guyana"
  },
  {
    iso_2: "ht",
    iso_3: "hti",
    num_code: "332",
    name: "HAITI",
    display_name: "Haiti"
  },
  {
    iso_2: "hm",
    iso_3: "hmd",
    num_code: "334",
    name: "HEARD ISLAND AND MCDONALD ISLANDS",
    display_name: "Heard Island And Mcdonald Islands"
  },
  {
    iso_2: "va",
    iso_3: "vat",
    num_code: "336",
    name: "HOLY SEE (VATICAN CITY STATE)",
    display_name: "Holy See (Vatican City State)"
  },
  {
    iso_2: "hn",
    iso_3: "hnd",
    num_code: "340",
    name: "HONDURAS",
    display_name: "Honduras"
  },
  {
    iso_2: "hk",
    iso_3: "hkg",
    num_code: "344",
    name: "HONG KONG",
    display_name: "Hong Kong"
  },
  {
    iso_2: "hu",
    iso_3: "hun",
    num_code: "348",
    name: "HUNGARY",
    display_name: "Hungary"
  },
  {
    iso_2: "is",
    iso_3: "isl",
    num_code: "352",
    name: "ICELAND",
    display_name: "Iceland"
  },
  {
    iso_2: "in",
    iso_3: "ind",
    num_code: "356",
    name: "INDIA",
    display_name: "India"
  },
  {
    iso_2: "id",
    iso_3: "idn",
    num_code: "360",
    name: "INDONESIA",
    display_name: "Indonesia"
  },
  {
    iso_2: "ir",
    iso_3: "irn",
    num_code: "364",
    name: "IRAN, ISLAMIC REPUBLIC OF",
    display_name: "Iran, Islamic Republic of"
  },
  {
    iso_2: "iq",
    iso_3: "irq",
    num_code: "368",
    name: "IRAQ",
    display_name: "Iraq"
  },
  {
    iso_2: "ie",
    iso_3: "irl",
    num_code: "372",
    name: "IRELAND",
    display_name: "Ireland"
  },
  {
    iso_2: "im",
    iso_3: "imn",
    num_code: "833",
    name: "ISLE OF MAN",
    display_name: "Isle Of Man"
  },
  {
    iso_2: "il",
    iso_3: "isr",
    num_code: "376",
    name: "ISRAEL",
    display_name: "Israel"
  },
  {
    iso_2: "it",
    iso_3: "ita",
    num_code: "380",
    name: "ITALY",
    display_name: "Italy"
  },
  {
    iso_2: "jm",
    iso_3: "jam",
    num_code: "388",
    name: "JAMAICA",
    display_name: "Jamaica"
  },
  {
    iso_2: "jp",
    iso_3: "jpn",
    num_code: "392",
    name: "JAPAN",
    display_name: "Japan"
  },
  {
    iso_2: "je",
    iso_3: "jey",
    num_code: "832",
    name: "JERSEY",
    display_name: "Jersey"
  },
  {
    iso_2: "jo",
    iso_3: "jor",
    num_code: "400",
    name: "JORDAN",
    display_name: "Jordan"
  },
  {
    iso_2: "kz",
    iso_3: "kaz",
    num_code: "398",
    name: "KAZAKHSTAN",
    display_name: "Kazakhstan"
  },
  {
    iso_2: "ke",
    iso_3: "ken",
    num_code: "404",
    name: "KENYA",
    display_name: "Kenya"
  },
  {
    iso_2: "ki",
    iso_3: "kir",
    num_code: "296",
    name: "KIRIBATI",
    display_name: "Kiribati"
  },
  {
    iso_2: "kp",
    iso_3: "prk",
    num_code: "408",
    name: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
    display_name: "Korea, Democratic People's Republic of"
  },
  {
    iso_2: "kr",
    iso_3: "kor",
    num_code: "410",
    name: "KOREA, REPUBLIC OF",
    display_name: "Korea, Republic of"
  },
  {
    iso_2: "xk",
    iso_3: "xkx",
    num_code: "900",
    name: "KOSOVO",
    display_name: "Kosovo"
  },
  {
    iso_2: "kw",
    iso_3: "kwt",
    num_code: "414",
    name: "KUWAIT",
    display_name: "Kuwait"
  },
  {
    iso_2: "kg",
    iso_3: "kgz",
    num_code: "417",
    name: "KYRGYZSTAN",
    display_name: "Kyrgyzstan"
  },
  {
    iso_2: "la",
    iso_3: "lao",
    num_code: "418",
    name: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
    display_name: "Lao People's Democratic Republic"
  },
  {
    iso_2: "lv",
    iso_3: "lva",
    num_code: "428",
    name: "LATVIA",
    display_name: "Latvia"
  },
  {
    iso_2: "lb",
    iso_3: "lbn",
    num_code: "422",
    name: "LEBANON",
    display_name: "Lebanon"
  },
  {
    iso_2: "ls",
    iso_3: "lso",
    num_code: "426",
    name: "LESOTHO",
    display_name: "Lesotho"
  },
  {
    iso_2: "lr",
    iso_3: "lbr",
    num_code: "430",
    name: "LIBERIA",
    display_name: "Liberia"
  },
  {
    iso_2: "ly",
    iso_3: "lby",
    num_code: "434",
    name: "LIBYA",
    display_name: "Libya"
  },
  {
    iso_2: "li",
    iso_3: "lie",
    num_code: "438",
    name: "LIECHTENSTEIN",
    display_name: "Liechtenstein"
  },
  {
    iso_2: "lt",
    iso_3: "ltu",
    num_code: "440",
    name: "LITHUANIA",
    display_name: "Lithuania"
  },
  {
    iso_2: "lu",
    iso_3: "lux",
    num_code: "442",
    name: "LUXEMBOURG",
    display_name: "Luxembourg"
  },
  {
    iso_2: "mo",
    iso_3: "mac",
    num_code: "446",
    name: "MACAO",
    display_name: "Macao"
  },
  {
    iso_2: "mg",
    iso_3: "mdg",
    num_code: "450",
    name: "MADAGASCAR",
    display_name: "Madagascar"
  },
  {
    iso_2: "mw",
    iso_3: "mwi",
    num_code: "454",
    name: "MALAWI",
    display_name: "Malawi"
  },
  {
    iso_2: "my",
    iso_3: "mys",
    num_code: "458",
    name: "MALAYSIA",
    display_name: "Malaysia"
  },
  {
    iso_2: "mv",
    iso_3: "mdv",
    num_code: "462",
    name: "MALDIVES",
    display_name: "Maldives"
  },
  {
    iso_2: "ml",
    iso_3: "mli",
    num_code: "466",
    name: "MALI",
    display_name: "Mali"
  },
  {
    iso_2: "mt",
    iso_3: "mlt",
    num_code: "470",
    name: "MALTA",
    display_name: "Malta"
  },
  {
    iso_2: "mh",
    iso_3: "mhl",
    num_code: "584",
    name: "MARSHALL ISLANDS",
    display_name: "Marshall Islands"
  },
  {
    iso_2: "mq",
    iso_3: "mtq",
    num_code: "474",
    name: "MARTINIQUE",
    display_name: "Martinique"
  },
  {
    iso_2: "mr",
    iso_3: "mrt",
    num_code: "478",
    name: "MAURITANIA",
    display_name: "Mauritania"
  },
  {
    iso_2: "mu",
    iso_3: "mus",
    num_code: "480",
    name: "MAURITIUS",
    display_name: "Mauritius"
  },
  {
    iso_2: "yt",
    iso_3: "myt",
    num_code: "175",
    name: "MAYOTTE",
    display_name: "Mayotte"
  },
  {
    iso_2: "mx",
    iso_3: "mex",
    num_code: "484",
    name: "MEXICO",
    display_name: "Mexico"
  },
  {
    iso_2: "fm",
    iso_3: "fsm",
    num_code: "583",
    name: "MICRONESIA, FEDERATED STATES OF",
    display_name: "Micronesia, Federated States of"
  },
  {
    iso_2: "md",
    iso_3: "mda",
    num_code: "498",
    name: "MOLDOVA, REPUBLIC OF",
    display_name: "Moldova, Republic of"
  },
  {
    iso_2: "mc",
    iso_3: "mco",
    num_code: "492",
    name: "MONACO",
    display_name: "Monaco"
  },
  {
    iso_2: "mn",
    iso_3: "mng",
    num_code: "496",
    name: "MONGOLIA",
    display_name: "Mongolia"
  },
  {
    iso_2: "me",
    iso_3: "mne",
    num_code: "499",
    name: "MONTENEGRO",
    display_name: "Montenegro"
  },
  {
    iso_2: "ms",
    iso_3: "msr",
    num_code: "500",
    name: "MONTSERRAT",
    display_name: "Montserrat"
  },
  {
    iso_2: "ma",
    iso_3: "mar",
    num_code: "504",
    name: "MOROCCO",
    display_name: "Morocco"
  },
  {
    iso_2: "mz",
    iso_3: "moz",
    num_code: "508",
    name: "MOZAMBIQUE",
    display_name: "Mozambique"
  },
  {
    iso_2: "mm",
    iso_3: "mmr",
    num_code: "104",
    name: "MYANMAR",
    display_name: "Myanmar"
  },
  {
    iso_2: "na",
    iso_3: "nam",
    num_code: "516",
    name: "NAMIBIA",
    display_name: "Namibia"
  },
  {
    iso_2: "nr",
    iso_3: "nru",
    num_code: "520",
    name: "NAURU",
    display_name: "Nauru"
  },
  {
    iso_2: "np",
    iso_3: "npl",
    num_code: "524",
    name: "NEPAL",
    display_name: "Nepal"
  },
  {
    iso_2: "nl",
    iso_3: "nld",
    num_code: "528",
    name: "NETHERLANDS",
    display_name: "Netherlands"
  },
  {
    iso_2: "nc",
    iso_3: "ncl",
    num_code: "540",
    name: "NEW CALEDONIA",
    display_name: "New Caledonia"
  },
  {
    iso_2: "nz",
    iso_3: "nzl",
    num_code: "554",
    name: "NEW ZEALAND",
    display_name: "New Zealand"
  },
  {
    iso_2: "ni",
    iso_3: "nic",
    num_code: "558",
    name: "NICARAGUA",
    display_name: "Nicaragua"
  },
  {
    iso_2: "ne",
    iso_3: "ner",
    num_code: "562",
    name: "NIGER",
    display_name: "Niger"
  },
  {
    iso_2: "ng",
    iso_3: "nga",
    num_code: "566",
    name: "NIGERIA",
    display_name: "Nigeria"
  },
  {
    iso_2: "nu",
    iso_3: "niu",
    num_code: "570",
    name: "NIUE",
    display_name: "Niue"
  },
  {
    iso_2: "nf",
    iso_3: "nfk",
    num_code: "574",
    name: "NORFOLK ISLAND",
    display_name: "Norfolk Island"
  },
  {
    iso_2: "mk",
    iso_3: "mkd",
    num_code: "807",
    name: "NORTH MACEDONIA",
    display_name: "North Macedonia"
  },
  {
    iso_2: "mp",
    iso_3: "mnp",
    num_code: "580",
    name: "NORTHERN MARIANA ISLANDS",
    display_name: "Northern Mariana Islands"
  },
  {
    iso_2: "no",
    iso_3: "nor",
    num_code: "578",
    name: "NORWAY",
    display_name: "Norway"
  },
  {
    iso_2: "om",
    iso_3: "omn",
    num_code: "512",
    name: "OMAN",
    display_name: "Oman"
  },
  {
    iso_2: "pk",
    iso_3: "pak",
    num_code: "586",
    name: "PAKISTAN",
    display_name: "Pakistan"
  },
  {
    iso_2: "pw",
    iso_3: "plw",
    num_code: "585",
    name: "PALAU",
    display_name: "Palau"
  },
  {
    iso_2: "ps",
    iso_3: "pse",
    num_code: "275",
    name: "PALESTINIAN TERRITORY, OCCUPIED",
    display_name: "Palestinian Territory, Occupied"
  },
  {
    iso_2: "pa",
    iso_3: "pan",
    num_code: "591",
    name: "PANAMA",
    display_name: "Panama"
  },
  {
    iso_2: "pg",
    iso_3: "png",
    num_code: "598",
    name: "PAPUA NEW GUINEA",
    display_name: "Papua New Guinea"
  },
  {
    iso_2: "py",
    iso_3: "pry",
    num_code: "600",
    name: "PARAGUAY",
    display_name: "Paraguay"
  },
  {
    iso_2: "pe",
    iso_3: "per",
    num_code: "604",
    name: "PERU",
    display_name: "Peru"
  },
  {
    iso_2: "ph",
    iso_3: "phl",
    num_code: "608",
    name: "PHILIPPINES",
    display_name: "Philippines"
  },
  {
    iso_2: "pn",
    iso_3: "pcn",
    num_code: "612",
    name: "PITCAIRN",
    display_name: "Pitcairn"
  },
  {
    iso_2: "pl",
    iso_3: "pol",
    num_code: "616",
    name: "POLAND",
    display_name: "Poland"
  },
  {
    iso_2: "pt",
    iso_3: "prt",
    num_code: "620",
    name: "PORTUGAL",
    display_name: "Portugal"
  },
  {
    iso_2: "pr",
    iso_3: "pri",
    num_code: "630",
    name: "PUERTO RICO",
    display_name: "Puerto Rico"
  },
  {
    iso_2: "qa",
    iso_3: "qat",
    num_code: "634",
    name: "QATAR",
    display_name: "Qatar"
  },
  {
    iso_2: "re",
    iso_3: "reu",
    num_code: "638",
    name: "REUNION",
    display_name: "Reunion"
  },
  {
    iso_2: "ro",
    iso_3: "rom",
    num_code: "642",
    name: "ROMANIA",
    display_name: "Romania"
  },
  {
    iso_2: "ru",
    iso_3: "rus",
    num_code: "643",
    name: "RUSSIAN FEDERATION",
    display_name: "Russian Federation"
  },
  {
    iso_2: "rw",
    iso_3: "rwa",
    num_code: "646",
    name: "RWANDA",
    display_name: "Rwanda"
  },
  {
    iso_2: "bl",
    iso_3: "blm",
    num_code: "652",
    name: "SAINT BARTH\xC9LEMY",
    display_name: "Saint Barth\xE9lemy"
  },
  {
    iso_2: "sh",
    iso_3: "shn",
    num_code: "654",
    name: "SAINT HELENA",
    display_name: "Saint Helena"
  },
  {
    iso_2: "kn",
    iso_3: "kna",
    num_code: "659",
    name: "SAINT KITTS AND NEVIS",
    display_name: "Saint Kitts and Nevis"
  },
  {
    iso_2: "lc",
    iso_3: "lca",
    num_code: "662",
    name: "SAINT LUCIA",
    display_name: "Saint Lucia"
  },
  {
    iso_2: "mf",
    iso_3: "maf",
    num_code: "663",
    name: "SAINT MARTIN (FRENCH PART)",
    display_name: "Saint Martin (French part)"
  },
  {
    iso_2: "pm",
    iso_3: "spm",
    num_code: "666",
    name: "SAINT PIERRE AND MIQUELON",
    display_name: "Saint Pierre and Miquelon"
  },
  {
    iso_2: "vc",
    iso_3: "vct",
    num_code: "670",
    name: "SAINT VINCENT AND THE GRENADINES",
    display_name: "Saint Vincent and the Grenadines"
  },
  {
    iso_2: "ws",
    iso_3: "wsm",
    num_code: "882",
    name: "SAMOA",
    display_name: "Samoa"
  },
  {
    iso_2: "sm",
    iso_3: "smr",
    num_code: "674",
    name: "SAN MARINO",
    display_name: "San Marino"
  },
  {
    iso_2: "st",
    iso_3: "stp",
    num_code: "678",
    name: "SAO TOME AND PRINCIPE",
    display_name: "Sao Tome and Principe"
  },
  {
    iso_2: "sa",
    iso_3: "sau",
    num_code: "682",
    name: "SAUDI ARABIA",
    display_name: "Saudi Arabia"
  },
  {
    iso_2: "sn",
    iso_3: "sen",
    num_code: "686",
    name: "SENEGAL",
    display_name: "Senegal"
  },
  {
    iso_2: "rs",
    iso_3: "srb",
    num_code: "688",
    name: "SERBIA",
    display_name: "Serbia"
  },
  {
    iso_2: "sc",
    iso_3: "syc",
    num_code: "690",
    name: "SEYCHELLES",
    display_name: "Seychelles"
  },
  {
    iso_2: "sl",
    iso_3: "sle",
    num_code: "694",
    name: "SIERRA LEONE",
    display_name: "Sierra Leone"
  },
  {
    iso_2: "sg",
    iso_3: "sgp",
    num_code: "702",
    name: "SINGAPORE",
    display_name: "Singapore"
  },
  {
    iso_2: "sx",
    iso_3: "sxm",
    num_code: "534",
    name: "SINT MAARTEN",
    display_name: "Sint Maarten"
  },
  {
    iso_2: "sk",
    iso_3: "svk",
    num_code: "703",
    name: "SLOVAKIA",
    display_name: "Slovakia"
  },
  {
    iso_2: "si",
    iso_3: "svn",
    num_code: "705",
    name: "SLOVENIA",
    display_name: "Slovenia"
  },
  {
    iso_2: "sb",
    iso_3: "slb",
    num_code: "90",
    name: "SOLOMON ISLANDS",
    display_name: "Solomon Islands"
  },
  {
    iso_2: "so",
    iso_3: "som",
    num_code: "706",
    name: "SOMALIA",
    display_name: "Somalia"
  },
  {
    iso_2: "za",
    iso_3: "zaf",
    num_code: "710",
    name: "SOUTH AFRICA",
    display_name: "South Africa"
  },
  {
    iso_2: "gs",
    iso_3: "sgs",
    num_code: "239",
    name: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
    display_name: "South Georgia and the South Sandwich Islands"
  },
  {
    iso_2: "ss",
    iso_3: "ssd",
    num_code: "728",
    name: "SOUTH SUDAN",
    display_name: "South Sudan"
  },
  {
    iso_2: "es",
    iso_3: "esp",
    num_code: "724",
    name: "SPAIN",
    display_name: "Spain"
  },
  {
    iso_2: "lk",
    iso_3: "lka",
    num_code: "144",
    name: "SRI LANKA",
    display_name: "Sri Lanka"
  },
  {
    iso_2: "sd",
    iso_3: "sdn",
    num_code: "729",
    name: "SUDAN",
    display_name: "Sudan"
  },
  {
    iso_2: "sr",
    iso_3: "sur",
    num_code: "740",
    name: "SURINAME",
    display_name: "Suriname"
  },
  {
    iso_2: "sj",
    iso_3: "sjm",
    num_code: "744",
    name: "SVALBARD AND JAN MAYEN",
    display_name: "Svalbard and Jan Mayen"
  },
  {
    iso_2: "sz",
    iso_3: "swz",
    num_code: "748",
    name: "SWAZILAND",
    display_name: "Swaziland"
  },
  {
    iso_2: "se",
    iso_3: "swe",
    num_code: "752",
    name: "SWEDEN",
    display_name: "Sweden"
  },
  {
    iso_2: "ch",
    iso_3: "che",
    num_code: "756",
    name: "SWITZERLAND",
    display_name: "Switzerland"
  },
  {
    iso_2: "sy",
    iso_3: "syr",
    num_code: "760",
    name: "SYRIAN ARAB REPUBLIC",
    display_name: "Syrian Arab Republic"
  },
  {
    iso_2: "tw",
    iso_3: "twn",
    num_code: "158",
    name: "TAIWAN, PROVINCE OF CHINA",
    display_name: "Taiwan, Province of China"
  },
  {
    iso_2: "tj",
    iso_3: "tjk",
    num_code: "762",
    name: "TAJIKISTAN",
    display_name: "Tajikistan"
  },
  {
    iso_2: "tz",
    iso_3: "tza",
    num_code: "834",
    name: "TANZANIA, UNITED REPUBLIC OF",
    display_name: "Tanzania, United Republic of"
  },
  {
    iso_2: "th",
    iso_3: "tha",
    num_code: "764",
    name: "THAILAND",
    display_name: "Thailand"
  },
  {
    iso_2: "tl",
    iso_3: "tls",
    num_code: "626",
    name: "TIMOR LESTE",
    display_name: "Timor Leste"
  },
  {
    iso_2: "tg",
    iso_3: "tgo",
    num_code: "768",
    name: "TOGO",
    display_name: "Togo"
  },
  {
    iso_2: "tk",
    iso_3: "tkl",
    num_code: "772",
    name: "TOKELAU",
    display_name: "Tokelau"
  },
  {
    iso_2: "to",
    iso_3: "ton",
    num_code: "776",
    name: "TONGA",
    display_name: "Tonga"
  },
  {
    iso_2: "tt",
    iso_3: "tto",
    num_code: "780",
    name: "TRINIDAD AND TOBAGO",
    display_name: "Trinidad and Tobago"
  },
  {
    iso_2: "tn",
    iso_3: "tun",
    num_code: "788",
    name: "TUNISIA",
    display_name: "Tunisia"
  },
  {
    iso_2: "tr",
    iso_3: "tur",
    num_code: "792",
    name: "TURKEY",
    display_name: "Turkey"
  },
  {
    iso_2: "tm",
    iso_3: "tkm",
    num_code: "795",
    name: "TURKMENISTAN",
    display_name: "Turkmenistan"
  },
  {
    iso_2: "tc",
    iso_3: "tca",
    num_code: "796",
    name: "TURKS AND CAICOS ISLANDS",
    display_name: "Turks and Caicos Islands"
  },
  {
    iso_2: "tv",
    iso_3: "tuv",
    num_code: "798",
    name: "TUVALU",
    display_name: "Tuvalu"
  },
  {
    iso_2: "ug",
    iso_3: "uga",
    num_code: "800",
    name: "UGANDA",
    display_name: "Uganda"
  },
  {
    iso_2: "ua",
    iso_3: "ukr",
    num_code: "804",
    name: "UKRAINE",
    display_name: "Ukraine"
  },
  {
    iso_2: "ae",
    iso_3: "are",
    num_code: "784",
    name: "UNITED ARAB EMIRATES",
    display_name: "United Arab Emirates"
  },
  {
    iso_2: "gb",
    iso_3: "gbr",
    num_code: "826",
    name: "UNITED KINGDOM",
    display_name: "United Kingdom"
  },
  {
    iso_2: "us",
    iso_3: "usa",
    num_code: "840",
    name: "UNITED STATES",
    display_name: "United States"
  },
  {
    iso_2: "um",
    iso_3: "umi",
    num_code: "581",
    name: "UNITED STATES MINOR OUTLYING ISLANDS",
    display_name: "United States Minor Outlying Islands"
  },
  {
    iso_2: "uy",
    iso_3: "ury",
    num_code: "858",
    name: "URUGUAY",
    display_name: "Uruguay"
  },
  {
    iso_2: "uz",
    iso_3: "uzb",
    num_code: "860",
    name: "UZBEKISTAN",
    display_name: "Uzbekistan"
  },
  {
    iso_2: "vu",
    iso_3: "vut",
    num_code: "548",
    name: "VANUATU",
    display_name: "Vanuatu"
  },
  {
    iso_2: "ve",
    iso_3: "ven",
    num_code: "862",
    name: "VENEZUELA",
    display_name: "Venezuela"
  },
  {
    iso_2: "vn",
    iso_3: "vnm",
    num_code: "704",
    name: "VIET NAM",
    display_name: "Viet Nam"
  },
  {
    iso_2: "vg",
    iso_3: "vgb",
    num_code: "92",
    name: "VIRGIN ISLANDS, BRITISH",
    display_name: "Virgin Islands, British"
  },
  {
    iso_2: "vi",
    iso_3: "vir",
    num_code: "850",
    name: "VIRGIN ISLANDS, U.S.",
    display_name: "Virgin Islands, U.S."
  },
  {
    iso_2: "wf",
    iso_3: "wlf",
    num_code: "876",
    name: "WALLIS AND FUTUNA",
    display_name: "Wallis and Futuna"
  },
  {
    iso_2: "eh",
    iso_3: "esh",
    num_code: "732",
    name: "WESTERN SAHARA",
    display_name: "Western Sahara"
  },
  {
    iso_2: "ye",
    iso_3: "yem",
    num_code: "887",
    name: "YEMEN",
    display_name: "Yemen"
  },
  {
    iso_2: "zm",
    iso_3: "zmb",
    num_code: "894",
    name: "ZAMBIA",
    display_name: "Zambia"
  },
  {
    iso_2: "zw",
    iso_3: "zwe",
    num_code: "716",
    name: "ZIMBABWE",
    display_name: "Zimbabwe"
  },
  {
    iso_2: "ax",
    iso_3: "ala",
    num_code: "248",
    name: "\xC5LAND ISLANDS",
    display_name: "\xC5land Islands"
  }
];

export {
  getCountryByIso2,
  countries
};
