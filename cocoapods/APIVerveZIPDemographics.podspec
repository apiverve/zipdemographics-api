Pod::Spec.new do |s|
  s.name             = 'APIVerveZIPDemographics'
  s.version          = '1.2.3'
  s.summary          = 'ZIP Demographics is a demographic data API for any US ZIP code, built on the US Census American Community Survey.'
  s.description      = <<-'DESC'
ZIP Demographics is a demographic data API for any US ZIP code, built on the US Census American Community Survey. Every plan gets total population and median household income, while paid plans add age, per-capita income, education, housing, employment, and racial composition.

This iOS/macOS SDK provides a convenient way to access the ZIP Demographics from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/zipdemographics?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/zipdemographics-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveZIPDemographics/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
