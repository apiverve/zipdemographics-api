ZIP Demographics API
============

ZIP Demographics provides detailed demographic data for any US ZIP code including population, income, education, housing, employment, and racial composition from the US Census American Community Survey.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [ZIP Demographics API](https://apiverve.com/marketplace/zipdemographics?utm_source=pypi&utm_medium=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-zipdemographics
```

Using `pip3`:

```bash
pip3 install apiverve-zipdemographics
```

---

## Configuration

Before using the zipdemographics API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_zipdemographics.apiClient import ZipdemographicsAPIClient

# Initialize the client with your APIVerve API key
api = ZipdemographicsAPIClient("[YOUR_API_KEY]")

query = { "zip": "90210" }

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The ZIP Demographics API documentation is found here: [https://docs.apiverve.com/ref/zipdemographics](https://docs.apiverve.com/ref/zipdemographics?utm_source=pypi&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_zipdemographics.apiClient import ZipdemographicsAPIClient

# Initialize the client with your APIVerve API key
api = ZipdemographicsAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = { "zip": "90210" }
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "zip": "90210",
    "name": "ZCTA5 90210",
    "acsYear": 2022,
    "population": {
      "total": 21741,
      "male": 10234,
      "female": 11507,
      "medianAge": 45.3
    },
    "income": {
      "medianHousehold": 153891,
      "perCapita": 98234
    },
    "housing": {
      "medianHomeValue": 2875000,
      "medianRent": 3250,
      "totalUnits": 10234,
      "occupiedUnits": 8976,
      "vacantUnits": 1258,
      "ownerOccupied": 5678,
      "renterOccupied": 3298,
      "homeOwnershipRate": 63.2
    },
    "education": {
      "collegeEducatedPct": 72.4,
      "bachelors": 4523,
      "masters": 2341,
      "professional": 1234,
      "doctorate": 567
    },
    "employment": {
      "laborForce": 11234,
      "unemployed": 423,
      "unemploymentRate": 3.8
    },
    "race": {
      "white": {
        "count": 16892,
        "percent": 77.7
      },
      "black": {
        "count": 542,
        "percent": 2.5
      },
      "asian": {
        "count": 2345,
        "percent": 10.8
      },
      "hispanic": {
        "count": 1423,
        "percent": 6.5
      }
    }
  }
}
```

---

## Error Handling

The API client provides comprehensive error handling through the `ZipdemographicsAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_zipdemographics.apiClient import ZipdemographicsAPIClient, ZipdemographicsAPIClientError

api = ZipdemographicsAPIClient("[YOUR_API_KEY]")

query = { "zip": "90210" }

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except ZipdemographicsAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_zipdemographics.apiClient import ZipdemographicsAPIClient, ZipdemographicsAPIClientError

api = ZipdemographicsAPIClient("[YOUR_API_KEY]")

query = { "zip": "90210" }

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except ZipdemographicsAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_zipdemographics.apiClient import ZipdemographicsAPIClient, ZipdemographicsAPIClientError

query = { "zip": "90210" }

# Using context manager ensures proper cleanup
with ZipdemographicsAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except ZipdemographicsAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_zipdemographics.apiClient import ZipdemographicsAPIClient

# Enable debug mode
api = ZipdemographicsAPIClient("[YOUR_API_KEY]", debug=True)

query = { "zip": "90210" }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_zipdemographics.apiClient import ZipdemographicsAPIClient

api = ZipdemographicsAPIClient("[YOUR_API_KEY]")

try:
    query = { "zip": "90210" }
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
