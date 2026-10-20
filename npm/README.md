# ZIP Demographics API

ZIP Demographics is a demographic data API for any US ZIP code, built on the US Census American Community Survey. Every plan gets total population and median household income, while paid plans add age, per-capita income, education, housing, employment, and racial composition.

[![npm version](https://img.shields.io/npm/v/@apiverve/zipdemographics.svg)](https://www.npmjs.com/package/@apiverve/zipdemographics)

This is a JavaScript wrapper for the [ZIP Demographics API](https://apiverve.com/marketplace/zipdemographics?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/zipdemographics
```

Using yarn:
```shell
yarn add @apiverve/zipdemographics
```

---

## Configuration

Before using the ZIP Demographics API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The ZIP Demographics API documentation is found here: [https://docs.apiverve.com/ref/zipdemographics](https://docs.apiverve.com/ref/zipdemographics?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const zipdemographicsAPI = require('@apiverve/zipdemographics');
const api = new zipdemographicsAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  zip: "90210"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  zip: "90210"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  zip: "90210"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "zip": "90210",
    "name": "ZCTA5 90210",
    "acsYear": 2024,
    "population": {
      "total": 19004,
      "male": 9417,
      "female": 9587,
      "medianAge": 51
    },
    "income": {
      "medianHousehold": 187801,
      "perCapita": 147098
    },
    "housing": {
      "medianHomeValue": 2000001,
      "medianRent": 3251,
      "totalUnits": 9531,
      "occupiedUnits": 8029,
      "vacantUnits": 1502,
      "ownerOccupied": 5679,
      "renterOccupied": 2350,
      "homeOwnershipRate": 70.7
    },
    "education": {
      "collegeEducatedPct": 68.1,
      "bachelors": 4837,
      "masters": 2389,
      "professional": 1962,
      "doctorate": 929
    },
    "employment": {
      "laborForce": 9017,
      "unemployed": 468,
      "unemploymentRate": 5.2
    },
    "race": {
      "white": {
        "count": 15147,
        "percent": 79.7
      },
      "black": {
        "count": 403,
        "percent": 2.1
      },
      "asian": {
        "count": 1628,
        "percent": 8.6
      },
      "hispanic": {
        "count": 1138,
        "percent": 6
      }
    },
    "formatted": {
      "medianHouseholdIncome": "$187,801",
      "perCapitaIncome": "$147,098",
      "medianHomeValue": "$2,000,001",
      "medianRent": "$3,251"
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
