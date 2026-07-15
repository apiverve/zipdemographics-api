declare module '@apiverve/zipdemographics' {
  export interface zipdemographicsOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface zipdemographicsResponse {
    status: string;
    error: string | null;
    data: ZIPDemographicsData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface ZIPDemographicsData {
      zip:        null | string;
      name:       null | string;
      acsYear:    number | null;
      population: Population;
      income:     Income;
      housing:    Housing;
      education:  Education;
      employment: Employment;
      race:       Race;
      formatted:  Formatted;
  }
  
  interface Education {
      collegeEducatedPct: number | null;
  }
  
  interface Employment {
      laborForce:       number | null;
      unemploymentRate: number | null;
  }
  
  interface Formatted {
      medianHouseholdIncome: null | string;
      perCapitaIncome:       null | string;
      medianHomeValue:       null | string;
      medianRent:            null | string;
  }
  
  interface Housing {
      medianHomeValue:   number | null;
      medianRent:        number | null;
      totalUnits:        number | null;
      homeOwnershipRate: number | null;
  }
  
  interface Income {
      medianHousehold: number | null;
      perCapita:       number | null;
  }
  
  interface Population {
      total:     number | null;
      male:      number | null;
      female:    number | null;
      medianAge: number | null;
  }
  
  interface Race {
      white: Asian;
      asian: Asian;
  }
  
  interface Asian {
      count:   number | null;
      percent: number | null;
  }

  export default class zipdemographicsWrapper {
    constructor(options: zipdemographicsOptions);

    execute(callback: (error: any, data: zipdemographicsResponse | null) => void): Promise<zipdemographicsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: zipdemographicsResponse | null) => void): Promise<zipdemographicsResponse>;
    execute(query?: Record<string, any>): Promise<zipdemographicsResponse>;
  }
}
