import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';

import { Location, Localizable } from '../types';


export class User implements Localizable {
  id: string;
  name: string;
  location: Location;
  info: string;

  constructor(){
    this.id = uuidv4();
    this.name = faker.name.firstName();
    this.location= {lat: parseFloat(faker.address.latitude()), lng: parseFloat(faker.address.longitude())};
    this.info = faker.hacker.phrase();
  }
}