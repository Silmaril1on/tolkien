const navigationLinks = [
  {
    id: 0,
    name: "movies",
    child: [
      {
        id: 0,
        name: "the lord of the rings",
        link: "lotr",
        child: [
          {
            id: 0,
            name: "the fellowship of the ring",
          },
          {
            id: 1,
            name: "the two tower",
          },
          {
            id: 2,
            name: "the return of the king",
          },
        ],
      },
      {
        id: 1,
        name: "the hobbit",
        link: "hobbit",
        child: [
          {
            id: 0,
            name: "An Unexpected Journey",
          },
          {
            id: 1,
            name: "The Desolation of Smaug",
          },
          {
            id: 2,
            name: "The Battle of the Five Armies",
          },
        ],
      },
      {
        id: 2,
        name: "rings of Power",
        link: "ringsofpower",
      },
    ],
  },
  {
    id: 1,
    name: "realms",
  },
  {
    id: 2,
    name: "creators",
    child: [
      {
        id: 0,
        name: "John Ronald Reuel Tolkien",
      },
      {
        id: 1,
        name: "Eru Ilúvatar",
      },
      {
        id: 2,
        name: "Peter jackson",
      },
    ],
  },
  {
    id: 3,
    name: "races",
    child: [
      {
        id: 0,
        name: "dwarves",
      },
      {
        id: 1,
        name: "humans",
      },
      {
        id: 2,
        name: "elves",
      },
      {
        id: 3,
        name: "elves",
      },
      {
        id: 4,
        name: "hobbits",
      },
      {
        id: 5,
        name: "maiars",
      },
      {
        id: 6,
        name: "istari",
      },
      {
        id: 7,
        name: "mythical creatures",
      },
    ],
  },
];

export default navigationLinks;