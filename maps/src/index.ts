import { User } from './entities/User';
import { Company } from './entities/Company';
import { Map } from './entities/Map'

const user = new User();
const company = new Company();

const uruguayCoordinates = {
  lat:-32.3329,
  lng:-55.484211
};

const mapOptions = {
  zoomControl: true,
  zoom:7,
  center: uruguayCoordinates
}
const map2 = new Map();
map2.addMarker(user);
map2.addMarker(company);

