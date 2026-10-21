# ZIP Demographics API - PHP Package

ZIP Demographics is a demographic data API for any US ZIP code, built on the US Census American Community Survey. Every plan gets total population and median household income, while paid plans add age, per-capita income, education, housing, employment, and racial composition.

## Installation

Install via Composer:

```bash
composer require apiverve/zipdemographics
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Zipdemographics\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['zip' => '90210']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Zipdemographics\Client;
use APIVerve\Zipdemographics\Exceptions\APIException;
use APIVerve\Zipdemographics\Exceptions\ValidationException;

try {
    $response = $client->execute(['zip' => '90210']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/zipdemographics?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/zipdemographics?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/zipdemographics?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
