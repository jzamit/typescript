import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';

import { Location, Localizable } from '../types';


export class Company implements Localizable {
  id: string;
  name: string;
  catchPhrase: string;
  location: Location;
  info: string;

  constructor(){
    this.id = uuidv4();
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location= {lat: parseFloat(faker.address.latitude()), lng: parseFloat(faker.address.longitude())};
    this.info = faker.company.catchPhraseDescriptor();
  }

}