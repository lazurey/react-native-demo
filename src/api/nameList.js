const aryaList = [
  { name: 'Ser Amory Lorch', reason: 'For killing Yoren.', killed: false },
  { name: 'Queen Cersei Lannister', reason: 'For her father, for Lady, and for everyone in the Stark household', killed: false },
  { name: 'Chiswyck', reason: 'For capturing them, for thinking that Polliver taking her Needle was funny.', killed: false },
  { name: 'Dunsen', reason: 'For capturing them, for taking Gendry\'s bull\'s horn helmet', killed: false },
  { name: 'Ser Gregor Clegane', reason: 'For capturing them, for being the main reason they were tortured', killed: false },
  { name: 'Ser Ilyn Payne', reason: 'For chopping off her father\'s head', killed: false },
  { name: 'King Joffrey Baratheon', reason: 'For her father, for Lady, and for everyone in the Stark household who were killed.', killed: false },
  { name: 'Ser Meryn Trant', reason: 'For killing Syrio Forel', killed: false },
  { name: 'Polliver', reason: 'For capturing them, for taking Needle from her', killed: false },
  { name: 'Raff the Sweetling', reason: 'For capturing them, for killing Lommy Greenhands', killed: false },
  { name: 'Sandor Clegane / Hound', reason: 'For Mycah', killed: false },
  { name: 'The Tickler', reason: 'For the torture of all the captives', killed: false },
  { name: 'Weese', reason: 'For mistreating her in Harrenhal', killed: false }
]

export default {
  loadNames: () => aryaList,
  addName: (name) => aryaList.push({ name, reason: 'no reason', killed: false}),
  killByName: (name) => aryaList
}
