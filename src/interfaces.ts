export interface TotalData {
  [key: string]: TotalDataObj;
}

export interface TotalDataObj {
  name: string;
  party: string;
  electoral_data: Electoraldata;
  occupation: string[];
  cv: Cv|any[];
  weblinks: string[];
  committees?: string;
  sidejobs?: Sidejob[];
  votes?: Vote[];
}
//Electoraldata
interface Electoraldata {
  state?: string;
  constituency: Constituency;
}

interface Constituency {
  id: number;
  label: string;
  result: Result[];
}

interface Result {
  id: number;
  label: string;
  party: string;
  result: number;
}

//Cv
export interface Cv {
  Raw: string;
  ShortDescription: string;
  Steps: Step[];
}
interface Step {
  Raw: string;
  Label: string;
  Date: string;
}
//Sidejobs
export interface Sidejob {
  label: string;
  income_level: string;
  date: string;
  organisation: string;
  interval: string;
}
//Votes
interface Vote {
  poll_id: number;
  vote: string;
}