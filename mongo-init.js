/**
 * Initialize the database with the necessary data to run the application.
 * https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/
 */

db.createUser({
  user: 'hortus',
  pwd: 'hortus',
  roles: [
    {
      role: 'readWrite',
      db: 'hortus',
    },
  ],
});

db.families.drop();
db.families.insertMany([
  {
    name: 'Amaryllidaceae',
  },
  {
    name: 'Apiaceae',
  },
  {
    name: 'Araliaceae',
  },
  {
    name: 'Asteraceae',
  },
  {
    name: 'Brassicaceae',
  },
  {
    name: 'Chenopodiaceae',
  },
  {
    name: 'Convolvulaceae',
  },
  {
    name: 'Cucurbitaceae',
  },
  {
    name: 'Ericaceae',
  },
  {
    name: 'Euphorbiaceae',
  },
  {
    name: 'Fabaceae',
  },
  {
    name: 'Grossulariaceae',
  },
  {
    name: 'Lamiaceae',
  },
  {
    name: 'Liliaceae',
  },
  {
    name: 'Poaceae',
  },
  {
    name: 'Polygonaceae',
  },
  {
    name: 'Rosaceae',
  },
  {
    name: 'Solanaceae',
  },
  {
    name: 'Umbelliferae',
  },
  {
    name: 'Valerianaceae',
  },
]);

db.genera.drop();
db.genera.insertMany([
  {
    name: 'Allium',
  },
  {
    name: 'Anthriscus',
  },
  {
    name: 'Apium',
  },
  {
    name: 'Aralia',
  },
  {
    name: 'Arctium',
  },
  {
    name: 'Armoracia',
  },
  {
    name: 'Asparagus',
  },
  {
    name: 'Beta',
  },
  {
    name: 'Brassica',
  },
  {
    name: 'Capsicum',
  },
  {
    name: 'Chichorium',
  },
  {
    name: 'Cicer',
  },
  {
    name: 'Citrullus',
  },
  {
    name: 'Cucumis',
  },
  {
    name: 'Cucurbita',
  },
  {
    name: 'Cynara',
  },
  {
    name: 'Daucus',
  },
  {
    name: 'Eruca',
  },
  {
    name: 'Fagopyrum',
  },
  {
    name: 'Foeniculum',
  },
  {
    name: 'Fragaria',
  },
  {
    name: 'Helianthus',
  },
  {
    name: 'Ipomoae',
  },
  {
    name: 'Latuca',
  },
  {
    name: 'Lens',
  },
  {
    name: 'Manihot',
  },
  {
    name: 'Mentha',
  },
  {
    name: 'Ocimum',
  },
  {
    name: 'Pastinaca',
  },
  {
    name: 'Petroselinum',
  },
  {
    name: 'Phaseolus',
  },
  {
    name: 'Pisum',
  },
  {
    name: 'Raphanus',
  },
  {
    name: 'Rheum',
  },
  {
    name: 'Ribes',
  },
  {
    name: 'Rubus',
  },
  {
    name: 'Rumex',
  },
  {
    name: 'Salvia',
  },
  {
    name: 'Solanum',
  },
  {
    name: 'Spinacia',
  },
  {
    name: 'Thymus',
  },
  {
    name: 'Tragopogon',
  },
  {
    name: 'Vaccinium',
  },
  {
    name: 'Valerianella',
  },
  {
    name: 'Vigna',
  },
  {
    name: 'Vivia',
  },
  {
    name: 'Zea',
  },
]);

/*
db.types.drop();
db.types.insertMany([
  {
    name: 'Bulb',
  },
  {
    name: 'Flower',
  },
  {
    name: 'Fruit',
  },
  {
    name: 'Herb',
  },
  {
    name: 'Leaf',
  },
  {
    name: 'Root',
  },
  {
    name: 'Seed',
  },
  {
    name: 'Stem',
  },
  {
    name: 'Other',
  },
]);
*/

db.species.drop();
db.species.insertMany([
  {
    name: 'Garlic',
  },
  {
    name: 'Carrot',
  },
]);

db.seeds.drop();
db.seeds.insertMany([
  {
    name: 'Garlic',
  },
  {
    name: 'Carrot',
  },
]);

db.crops.drop();
db.crops.insertMany([
  {
    name: 'Roman Garlic',
  },
  {
    name: 'Spanish Carrot',
  },
]);

db.plants.drop();
db.types.drop();
