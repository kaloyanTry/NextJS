const DATA_EVENTS = [
  {
    id: '0001',
    title: 'Sozopol Travel',
    description:
      'Sozopol is one of the most... The polis of Apollonia Pontica, the predecessor of Sozopol, was established in 611 B.C. in the southern part of the Burgas bay on the Black Sea as a part of the Greek colonization of the Mediterranean basin, scientifically called “The Great Greek Colonization”. This is why it is imperative that we first present the details on this process, which are useful to every non-professional reader in the field of history. ',
    location: 'Sozopol str. 12, 1234 Sozopol',
    date: '2023-04-07',
    image: 'images/sozopol.jpg',
  },
  {
    id: '0002',
    title: 'Emona Travel',
    description:
      "Emona (Bulgarian: Емона, Greek: Αίμος) is a village and seaside resort in southeast Bulgaria, situated in the Nesebar Municipality of the Burgas Province. The beach Irakli is 5 km from Emona. Emona lies close to Cape Emine. There are ruins of the ancient fortress nearby.Emona is famous for being the birthplace of Thracian king Rhesus, who fought in the Trojan War. According to Homer's Iliad, he was killed by Odysseus and Diomedes.",
    location: 'Emona str. 1, 1111 Emona',
    date: '2023-06-09',
    image: 'images/emona.jpg',
  },
  {
    id: '0003',
    title: 'Rogachevo Holiday',
    description:
      'Rogachevo is a village in Balchik Municipality, Dobrich Province, northeastern Bulgaria. Balchik municipality is located in North-East Bulgaria in Dobrich District. It is a Black Sea municipality, a resort center and a popular tourist destination. There are 2 ports in the Municipality - Cargo berth and Yacht marine.Tourism in the Municipality is developed mainly by Albena AD resort complex, as well as by numerous private companies and rest homes in Balchik city and Kranevo village.',
    location: 'Rogachevo str. 12, 4321 Balchik',
    date: '2023-06-23',
    image: 'images/rogachevo.jpg',
  },
  {
    id: '0004',
    title: 'Bedek Hike, Balkan mountain',
    description:
      'The Balkan mountain range (Ancient Greek: Αἵμος, Latin: Haemus, known locally also as Stara planina) is a mountain range in the eastern part of the Balkan Peninsula in Southeastern Europe. The range is conventionally taken to begin at the peak of Vrashka Chuka on the border between Bulgaria and Serbia. It then runs for about 560 kilometres (350 mi), first in a south-easterly direction along the border, then eastward across Bulgaria, forming a natural barrier between the northern and southern halves of the country, before finally reaching the Black Sea at Cape Emine. The mountains reach their highest point with Botev Peak at 2,376 metres (7,795 ft).',
    location: 'Bedek str. 1488, 5350 Tryavna',
    date: '2023-07-30',
    image: 'images/bedek.jpg',
  },
  {
    id: '0005',
    title: 'Malyovitsa Hike',
    description:
      'Malyovitsa (Bulgarian: Мальовица [mɐˈʎɔvit͡sɐ]) is a peak in the northwestern part of the Rila Mountain in southwestern Bulgaria. It is 2,729 m high and is one of the most popular tourist regions in the mountain. Its northern and eastern slopes are steep and almost inaccessible while the southern and south-western slopes are more oblique.[1] The Rila Monastery is situated at its southern foothills facing the valley of the Rilska River, and Malyovitsa Ski Centre — with two downhill tracks and two ski drags — is to the north.',
    location: 'Malyovitsa str. 2, 2729 Malyovitsa',
    date: '2023-08-04',
    image: 'images/malyovitsa.jpg',
  },
];

export function getAllEvents() {
  return DATA_EVENTS;
}

export function getFilteredEvents({ year, month }) {
  let filteredEvents = DATA_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DATA_EVENTS.find((event) => event.id === id);
}
