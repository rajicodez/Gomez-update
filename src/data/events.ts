export type HospitalEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  featured?: boolean;
};

export const events: HospitalEvent[] = [
  {
    id: "eye-checkup-camp",
    title: "Free Eye Checkup Camp",
    description:
      "Complimentary vision screening and basic eye health assessments for all ages, conducted by our visiting ophthalmology team.",
    date: "Saturday, 12 July 2026",
    time: "8:00 AM – 2:00 PM",
    location: "Gomez Hospital Main Lobby, Avissawella",
    image: "/images/eye.jpg",
    featured: true,
  },
  {
    id: "blood-donation-drive",
    title: "Annual Blood Donation Drive",
    description:
      "Join our community blood donation campaign in partnership with the National Blood Bank. Walk in, donate, and help save lives.",
    date: "Sunday, 27 July 2026",
    time: "9:00 AM – 4:00 PM",
    location: "Gomez Hospital Auditorium, Avissawella",
    image: "/images/laboratory.jpg",
  },
  {
    id: "diabetes-seminar",
    title: "Diabetes Awareness Seminar",
    description:
      "An informative session on diabetes prevention, diet management, and early screening — led by our consultant physicians and nutrition team.",
    date: "Friday, 8 August 2026",
    time: "4:00 PM – 6:00 PM",
    location: "Gomez Hospital Conference Hall",
    image: "/images/OPD-Wellness.jpg",
  },
  {
    id: "community-health-fair",
    title: "Community Health Fair",
    description:
      "Free BMI checks, blood pressure screening, and health counselling booths for families — a day dedicated to preventive wellness.",
    date: "Saturday, 30 August 2026",
    time: "9:00 AM – 3:00 PM",
    location: "Gomez Hospital Grounds, Avissawella",
    image: "/images/emergency.jpg",
  },
];

export const featuredEvent = events.find((e) => e.featured) ?? events[0];
