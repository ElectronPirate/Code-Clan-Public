const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentFamilyView = require('./views/instrument_family_view.js');
const instrumentFamilyData = require('./data/instrument_family_data.js');

document.addEventListener('DOMContentLoaded', () => {
  const familyDropdown = new SelectView();
  familyDropdown.bindEvents();

  const instrumentFamilyView = new InstrumentFamilyView();
  instrumentFamilyView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();
});
