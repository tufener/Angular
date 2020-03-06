export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    login: string;
    password: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  
  export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export class Address {
    streetnum: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  export class Geo {
    lat: string;
    lng: string;
  }
