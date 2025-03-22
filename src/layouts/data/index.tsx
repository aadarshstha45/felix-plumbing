import { EnvelopeSimple, MapPin, PhoneCall } from "@phosphor-icons/react";

export const navItems = [
  {
    label: "Home",
    to: "#home",
  },
  {
    label: "About Us",
    to: "#about-us",
  },
  {
    label: "Services",
    to: "#our-services",
  },
  {
    label: "Areas we serve",
    to: "#areas-we-serve",
  },

  {
    label: "Our Work",
    to: "#our-work",
  },
  {
    label: "Contact Us",
    to: "#request-an-appointment",
  },
];

export const contactData = [
  {
    label: "Phone",
    value: "(520) 990 5522",
    icon: <PhoneCall />,
    link: "tel:5209905522",
    description: "Need Help? Reach Out Today!.",
  },
  {
    label: "Email",
    value: "felixsplumbingllc@gmail.com",
    link: "mailto:felixsplumbingllc@gmail.com",
    icon: <EnvelopeSimple />,
    description: "Questions or Queries? Get in touch!.",
  },
  {
    label: "Address",
    value: "Tucson, AZ",
    icon: <MapPin />,
    link: "https://maps.app.goo.gl/pM97Wiw2vMjQyZkt8",
  },
];
