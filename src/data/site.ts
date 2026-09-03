export const site = {
  name: "Gomez Hospital",
  tagline: "We Care Always!",
  established: "1986",
  mainAddress: "No.63, Colombo Road, Avissawella",
  phones: ["036 2222 324", "036 2222 344", "036 2222 345"],
  ambulancePhone: "036 720 2000",
  pharmacyPhone: "076 820 4915",
  email: "gomezhospital@gmail.com",
  whatsapp: "94768204918",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9167191244495!2d80.20675!3d6.9539248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a998aefebc93%3A0xca78961aaa430a47!2sGomez%20Hospital%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1698263435133!5m2!1sen!2slk",
};

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Packages", href: "/health-packages" },
  {
    label: "Branches",
    href: "/branches/hanwella",
    children: [
      { label: "Hanwella Medical Center", href: "/branches/hanwella" },
      { label: "Sample Collection Centers", href: "/collecting-centers" },
    ],
  },
  { label: "Promotion", href: "/promotion" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
