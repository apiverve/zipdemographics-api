# ZIP Demographics API - Ruby Gem

ZIP Demographics is a demographic data API for any US ZIP code, built on the US Census American Community Survey. Every plan gets total population and median household income, while paid plans add age, per-capita income, education, housing, employment, and racial composition.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_zipdemographics'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_zipdemographics
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_zipdemographics'

# Initialize the client
client = APIVerve::Zipdemographics::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ zip: "90210" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ zip: "90210" })
  puts response["data"]
rescue APIVerve::Zipdemographics::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Zipdemographics::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Zipdemographics::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/zipdemographics?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/zipdemographics?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/zipdemographics?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
