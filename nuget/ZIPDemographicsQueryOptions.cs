using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.ZIPDemographics
{
    /// <summary>
    /// Query options for the ZIP Demographics API
    /// </summary>
    public class ZIPDemographicsQueryOptions
    {
        /// <summary>
        /// 5-digit US ZIP code
        /// </summary>
        [JsonProperty("zip")]
        public string Zip { get; set; }
    }
}
