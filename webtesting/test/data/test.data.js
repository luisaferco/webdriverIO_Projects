const incorrectCredential = [
      { username: "Penny", password: "testing123" },
      { username: "penny1", password: "Testing123" }
];

const correctCrendential =  { username: "Penny", password: "Testing123" };

const items = [
      {productType: "speakersSection",itemName:"HP Roar Mini Wireless Speaker", price:""},
      {productType: "micesSection",itemName:"HP Z3200 Wireless Mouse", price:""},
      {productType: "speakersSection",itemName:"HP Roar Mini Wireless Speaker", price:""}
]

module.exports.items = items;
module.exports.incorrectCredentialTestData = incorrectCredential;
module.exports.correctCrendential  = correctCrendential;
