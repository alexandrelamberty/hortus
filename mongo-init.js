/**
 * Initialize the database with the necessary data to run the application.
 * https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/
 */

db.createUser({
  user: "hortus",
  pwd: "hortus",
  roles: [
    {
      role: "readWrite",
      db: "hortus",
    },
  ],
});

/**
 * Complete list of plant
 */
db.families.drop();
db.families.insertMany([
  {
    name: "Amaryllidaceae",
  },
  {
    name: "Apiaceae",
  },
  {
    name: "Araliaceae",
  },
  {
    name: "Asteraceae",
  },
  {
    name: "Brassicaceae",
  },
  {
    name: "Chenopodiaceae",
  },
  {
    name: "Convolvulaceae",
  },
  {
    name: "Cucurbitaceae",
  },
  {
    name: "Ericaceae",
  },
  {
    name: "Euphorbiaceae",
  },
  {
    name: "Fabaceae",
  },
  {
    name: "Grossulariaceae",
  },
  {
    name: "Lamiaceae",
  },
  {
    name: "Liliaceae",
  },
  {
    name: "Poaceae",
  },
  {
    name: "Polygonaceae",
  },
  {
    name: "Rosaceae",
  },
  {
    name: "Solanaceae",
  },
  {
    name: "Umbelliferae",
  },
  {
    name: "Valerianaceae",
  },
]);

db.genera.drop();
db.genera.insertMany([
  {
    name: "Allium",
  },
  {
    name: "Anthriscus",
  },
  {
    name: "Apium",
  },
  {
    name: "Aralia",
  },
  {
    name: "Arctium",
  },
  {
    name: "Armoracia",
  },
  {
    name: "Asparagus",
  },
  {
    name: "Beta",
  },
  {
    name: "Brassica",
  },
  {
    name: "Capsicum",
  },
  {
    name: "Chichorium",
  },
  {
    name: "Cicer",
  },
  {
    name: "Citrullus",
  },
  {
    name: "Cucumis",
  },
  {
    name: "Cucurbita",
  },
  {
    name: "Cynara",
  },
  {
    name: "Daucus",
  },
  {
    name: "Eruca",
  },
  {
    name: "Fagopyrum",
  },
  {
    name: "Foeniculum",
  },
  {
    name: "Fragaria",
  },
  {
    name: "Helianthus",
  },
  {
    name: "Ipomoae",
  },
  {
    name: "Latuca",
  },
  {
    name: "Lens",
  },
  {
    name: "Manihot",
  },
  {
    name: "Mentha",
  },
  {
    name: "Ocimum",
  },
  {
    name: "Pastinaca",
  },
  {
    name: "Petroselinum",
  },
  {
    name: "Phaseolus",
  },
  {
    name: "Pisum",
  },
  {
    name: "Raphanus",
  },
  {
    name: "Rheum",
  },
  {
    name: "Ribes",
  },
  {
    name: "Rubus",
  },
  {
    name: "Rumex",
  },
  {
    name: "Salvia",
  },
  {
    name: "Solanum",
  },
  {
    name: "Spinacia",
  },
  {
    name: "Thymus",
  },
  {
    name: "Tragopogon",
  },
  {
    name: "Vaccinium",
  },
  {
    name: "Valerianella",
  },
  {
    name: "Vigna",
  },
  {
    name: "Vivia",
  },
  {
    name: "Zea",
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
    name: "Garlic",
  },
  {
    name: "Carrot",
  },
]);

db.seeds.drop();
db.seeds.insertMany([
  {
    name: "Garlic",
  },
  {
    name: "Carrot",
  },
]);

db.crops.drop();
db.crops.insertMany([
  {
    name: "Roman Garlic",
  },
  {
    name: "Spanish Carrot",
  },
]);

db.plants.drop();
db.plants.insertMany([
  {
    name: "Leek",
    binomial: "Allium ampeloprrasum",
    family: "Liliaceae",
    genus: "Allium",
    species: "ampeloprrasum",
    subspecies: "",
    variety: "porrum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Onion",
    binomial: "Allium cepa",
    family: "Liliaceae",
    genus: "Allium",
    species: "cepa",
    subspecies: "",
    variety: "Echalote",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Welsh oignon, bunching oignon,  long green oignion",
    binomial: "Allium fistulosum",
    family: "Liliaceae",
    genus: "Allium",
    species: "fistulosum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Soft-necked garlic",
    binomial: "Allium sativum",
    family: "Amaryllidaceae",
    genus: "Allium",
    species: "sativum",
    subspecies: "",
    variety: "sativum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Serpent garlic",
    binomial: "Allium sativum",
    family: "Amaryllidaceae",
    genus: "Allium",
    species: "sativum",
    subspecies: "",
    variety: "ophioscorodon",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Chives",
    binomial: "Allium schoenoprasum",
    family: "Liliaceae",
    genus: "Allium",
    species: "schoenoprasum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Chervil",
    binomial: "Anthriscus cerefolium",
    family: "Apiaceae",
    genus: "Anthriscus",
    species: "cerefolium",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Celery",
    binomial: "Apium graveolens",
    family: "Apiaceae",
    genus: "Apium",
    species: "graveolens",
    subspecies: "dulce",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Celeriac",
    binomial: "Apium graveolens",
    family: "Apiaceae",
    genus: "Apium",
    species: "graveolens",
    subspecies: "",
    variety: "rapaceum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Leaf celery,Chinese celery or Nan Ling celery",
    binomial: "Apium graveolens",
    family: "Apiaceae",
    genus: "Apium",
    species: "graveolens",
    subspecies: "",
    variety: "secalinum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Udo",
    binomial: "Aralia cordata",
    family: "Araliaceae",
    genus: "Aralia",
    species: "cordata",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Greater burdock",
    binomial: "Arctium Arctium lappa",
    family: "Asteraceae",
    genus: "Arctium",
    species: "Arctium lappa",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Horseradish",
    binomial: "Armoracia rusticana",
    family: "Brassicaceae",
    genus: "Armoracia",
    species: "rusticana",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Asparagus",
    binomial: "Asparagus officinalis",
    family: "Liliaceae",
    genus: "Asparagus",
    species: "officinalis",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Orache",
    binomial: "Atriplex hortensis",
    family: "Chenopodiaceae",
    genus: "Atriplex",
    species: "hortensis",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Beets",
    binomial: "Beta vulgaris",
    family: "Chenopodiaceae",
    genus: "Beta",
    species: "vulgaris",
    subspecies: "",
    variety: "conditiva",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Rutabaga",
    binomial: "Brassica napus",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "napus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Broccoli",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Chinese broccoli, Kai-lan",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Cabbage",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "capitata",
    forma: "alba",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Collard",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Brussels sprouts",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Savoy cabbage",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "capitata ",
    forma: "sabauda",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Curly kale",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "sabellica",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Cabbage",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "capitata",
    forma: "acuta",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Red cabbage",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "capitata",
    forma: "rubra",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Cauliflower",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "botrytis",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Kohlrabi",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "gongylodes",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Kai-lan",
    binomial: "Brassica oleracea",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "oleracea",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Petsai, navet, Pak-choï (bok choy)",
    binomial: "Brassica rapa",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "rapa",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "Golden Ball Turnip",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Capsicum annuum",
    family: "Solanaceae",
    genus: "Capsicum",
    species: "annuum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Curly",
    binomial: "Chichorium endivia",
    family: "Asteraceae",
    genus: "Chichorium",
    species: "endivia",
    subspecies: "",
    variety: "crispum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Escarole",
    binomial: "Chichorium endivia",
    family: "Asteraceae",
    genus: "Chichorium",
    species: "endivia",
    subspecies: "",
    variety: "latifolia",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Puntarelle, Catalogna chicory ",
    binomial: "Chichorium intybus",
    family: "Asteraceae",
    genus: "Chichorium",
    species: "intybus",
    subspecies: "",
    variety: "foliosum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Radicchio",
    binomial: "Chichorium intybus",
    family: "Asteraceae",
    genus: "Chichorium",
    species: "intybus",
    subspecies: "",
    variety: "foliosum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Chickpea",
    binomial: "Cicer arietinum",
    family: "Fabaceae",
    genus: "Cicer",
    species: "arietinum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Watermelon",
    binomial: "Citrullus lanatus",
    family: "Cucurbitaceae",
    genus: "Citrullus",
    species: "lanatus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Cantaloupe",
    binomial: "Cucumis melo",
    family: "Cucurbitaceae",
    genus: "Cucumis",
    species: "melo",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Cucumbers",
    binomial: "Cucumis sativus",
    family: "Cucurbitaceae",
    genus: "Cucumis",
    species: "sativus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Pickle",
    binomial: "Cucumis sativus",
    family: "Cucurbitaceae",
    genus: "Cucumis",
    species: "sativus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita argyrosperma",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "argyrosperma",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita ficifolia",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "ficifolia",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita maxima",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "maxima",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita maxima",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "maxima",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita maxima",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "maxima",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Butternut",
    binomial: "Cucurbita moschata",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "moschata",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita moschata",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "moschata",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Pumpkin",
    binomial: "Cucurbita pepo",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "pepo",
    subspecies: "",
    variety: "pepo",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita pepo",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "pepo",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita pepo",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "pepo",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Cucurbita pepo",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "pepo",
    subspecies: "",
    variety: "ovifera",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Crookneck",
    binomial: "Cucurbita pepo",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "pepo",
    subspecies: "",
    variety: "torticollia",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Artichoke",
    binomial: "Cynara cardunculus",
    family: "Asteraceae",
    genus: "Cynara",
    species: "cardunculus",
    subspecies: "",
    variety: "scolymus",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Carrots",
    binomial: "Daucus carota",
    family: "Apiaceae",
    genus: "Daucus",
    species: "carota",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Arugula",
    binomial: "Eruca sativa",
    family: "Brassicaceae",
    genus: "Eruca",
    species: "sativa",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Buckwheat",
    binomial: "Fagopyrum esculentum",
    family: "Polygonaceae",
    genus: "Fagopyrum",
    species: "esculentum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Fennel",
    binomial: "Foeniculum vulgare",
    family: "Apiaceae",
    genus: "Foeniculum",
    species: "vulgare",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Strawberries",
    binomial: "Fragaria ananassa",
    family: "Rosaceae",
    genus: "Fragaria",
    species: "ananassa",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Common Sunflower",
    binomial: "Helianthus annuus",
    family: "Asteraceae",
    genus: "Helianthus",
    species: "annuus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Jerusalem artichoke",
    binomial: "Helianthus tuberosus",
    family: "Asteraceae",
    genus: "Helianthus",
    species: "tuberosus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Sweet potato",
    binomial: "Ipomoae batatas",
    family: "Convolvulaceae",
    genus: "Ipomoae",
    species: "batatas",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Lettuce",
    binomial: "Latuca sativa",
    family: "Asteraceae",
    genus: "Latuca",
    species: "sativa",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Lentil",
    binomial: "Lens culinaris",
    family: "Fabaceae",
    genus: "Lens",
    species: "culinaris",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Manioc",
    binomial: "Manihot esculenta",
    family: "Euphorbiaceae",
    genus: "Manihot",
    species: "esculenta",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Mint",
    binomial: "Mentha Mentha",
    family: "Lamiaceae",
    genus: "Mentha",
    species: "Mentha",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Sweet basil",
    binomial: "Ocimum basilicum",
    family: "Lamiaceae",
    genus: "Ocimum",
    species: "basilicum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Parsnip",
    binomial: "Pastinaca sativa",
    family: "Apiaceae",
    genus: "Pastinaca",
    species: "sativa",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Parsley",
    binomial: "Petroselinum crispum",
    family: "Apiaceae",
    genus: "Petroselinum",
    species: "crispum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Beans",
    binomial: "Phaseolus vulgaris",
    family: "Fabaceae",
    genus: "Phaseolus",
    species: "vulgaris",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Pea",
    binomial: "Pisum sativum",
    family: "Fabaceae",
    genus: "Pisum",
    species: "sativum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Radis rouge, radis noir",
    binomial: "Raphanus sativus",
    family: "Brassicaceae",
    genus: "Raphanus",
    species: "sativus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Rhubarb",
    binomial: "Rheum rhabarbarum",
    family: "Polygonaceae",
    genus: "Rheum",
    species: "rhabarbarum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Blackcurrant",
    binomial: "Ribes nigrum",
    family: "Grossulariaceae",
    genus: "Ribes",
    species: "nigrum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Redcurrant",
    binomial: "Ribes rubrum",
    family: "Grossulariaceae",
    genus: "Ribes",
    species: "rubrum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Gooseberries",
    binomial: "Ribes uva-crispa",
    family: "Grossulariaceae",
    genus: "Ribes",
    species: "uva-crispa",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Blackberries",
    binomial: "Rubus fruticosus",
    family: "Rosaceae",
    genus: "Rubus",
    species: "fruticosus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Raspberry",
    binomial: "Rubus idaeus",
    family: "Rosaceae",
    genus: "Rubus",
    species: "idaeus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Sorrel",
    binomial: "Rumex Rumex",
    family: "Polygonaceae",
    genus: "Rumex",
    species: "Rumex",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Sage",
    binomial: "Salvia officinalis",
    family: "Lamiaceae",
    genus: "Salvia",
    species: "officinalis",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Rosemary",
    binomial: "Salvia rosmarinus",
    family: "Lamiaceae",
    genus: "Salvia",
    species: "rosmarinus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Tomato",
    binomial: "Solanum lycopersicum",
    family: "Solanaceae",
    genus: "Solanum",
    species: "lycopersicum",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Dwarf Aubergine",
    binomial: "Solanum melongena",
    family: "Solanaceae",
    genus: "Solanum",
    species: "melongena",
    subspecies: "",
    variety: "depressum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Eggplant, Brinjal",
    binomial: "Solanum melongena",
    family: "Solanaceae",
    genus: "Solanum",
    species: "melongena",
    subspecies: "",
    variety: "esculentum",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Snake aubergine",
    binomial: "Solanum melongena",
    family: "Solanaceae",
    genus: "Solanum",
    species: "melongena",
    subspecies: "",
    variety: "serpentium",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Potato",
    binomial: "Solanum tuberosum",
    family: "Solanaceae",
    genus: "Solanum",
    species: "tuberosum",
    subspecies: "",
    variety: "Vitelotte",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Spinach",
    binomial: "Spinacia oleracea",
    family: "Chenopodiaceae",
    genus: "Spinacia",
    species: "oleracea",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Thyme",
    binomial: "Thymus vulgaris",
    family: "Lamiaceae",
    genus: "Thymus",
    species: "vulgaris",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Salsify",
    binomial: "Tragopogon porrifolius",
    family: "Asteraceae",
    genus: "Tragopogon",
    species: "porrifolius",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Blueberries",
    binomial: "Vaccinium myrtillus",
    family: "Ericaceae",
    genus: "Vaccinium",
    species: "myrtillus",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Corn salad",
    binomial: "Valerianella locusta",
    family: "Valerianaceae",
    genus: "Valerianella",
    species: "locusta",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Adzuki beans",
    binomial: "Vigna angularis",
    family: "Fabaceae",
    genus: "Vigna",
    species: "angularis",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "Fava bean, Aguadulce Beans",
    binomial: "Vivia faba",
    family: "Fabaceae",
    genus: "Vivia",
    species: "faba",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "Zea mays",
    family: "Poaceae",
    genus: "Zea",
    species: "mays",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "",
    family: "Fabaceae",
    genus: "Vivia",
    species: "faba",
    subspecies: "",
    variety: "major",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
  {
    name: "",
    binomial: "",
    family: "",
    genus: "",
    species: "",
    subspecies: "",
    variety: "",
    forma: "",
    cultivar: "",
    hybrid: "",
  },
]);
db.types.drop();
