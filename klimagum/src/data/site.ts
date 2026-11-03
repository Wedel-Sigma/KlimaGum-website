
export const site = {
  name: "KlimaGum",

  address: {
    street: "ul. Kowalewska 5a",
    city: "Grębocin",
  },

  phone: "+48 123 456 789",

  hours: [
    { days: "Pn-Pt", time: "8:00-16:00" },
    { days: "Sob", time: "8:00-12:00" },
  ],
};

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${site.address.street}, ${site.address.city}, Polska`
  );
