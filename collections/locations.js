var LocationGeolocationSchema = new SimpleSchema({
  lat: {
    type: Number,
    decimal: true
  },
  long: {
    type: Number,
    decimal: true
  }
});

var LocationSchema = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  url: {
    type: String,
    optional: true
  },
  address: {
    type: String,
  },
  geolocation: {
    type: LocationGeolocationSchema,
  },
  image: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  },
  categoryName: {
    type: String,
    optional: true
  }
});

Locations = new Mongo.Collection('locations');
Locations.attachSchema(LocationSchema);
