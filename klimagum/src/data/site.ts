
export const site = {
  name: "KlimaGum",
  owner: "Andrzej Wojciechowski",
  nip: "9561426497",

  address: {
    street: "ul. Kowalewska 5a",
    postalCode: "87-162",
    city: "Grębocin",
  },

  phone: "+48 509 114 781",

  hours: [
    { days: "Pn–Pt", time: "8:00–16:00" },
    { days: "Sob", time: "8:00–12:00 (tylko w sezonie wymiany opon)" },
  ],
};

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${site.address.street}, ${site.address.postalCode} ${site.address.city}, Polska`
  );
