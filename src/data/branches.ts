export type BranchDoctor = {
  specialty: string;
  name: string;
  hospital: string;
};

export type Branch = {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  address: string;
  phones: string[];
  hours: { label: string; value: string }[];
  mapEmbed: string;
  tagline: string;
  description: string;
  doctors: BranchDoctor[];
};

export const branches: Branch[] = [
  {
    slug: "hanwella",
    name: "Hanwella Medical Center",
    shortName: "Hanwella",
    image: "/images/Gomez-Hospital-Hanwella2.png",
    address: "93/4/1, Main Street, Hanwella",
    phones: ["036 225 0550", "077 143 9944"],
    hours: [
      { label: "Emergency", value: "Open 24/7" },
      { label: "Laboratory", value: "6:00 AM – 9:00 PM" },
    ],
    mapEmbed:
      "https://maps.google.com/maps?q=W35J%2B65%20Hanwella&t=&z=13&ie=UTF8&iwloc=&output=embed",
    tagline: "Excellence in Local Healthcare",
    description:
      "Conveniently located in Hanwella, offering specialist consultations, laboratory services, and emergency care.",
    doctors: [
      { specialty: "VP (Physician)", name: "Dr. Manivannan", hospital: "Homagama" },
      { specialty: "VP (Physician)", name: "Dr. Pradeep Gunasekara", hospital: "Avissawella" },
      { specialty: "Paediatrician", name: "Dr. Kumuduni Cooray", hospital: "Avissawella" },
      { specialty: "Paediatrician", name: "Dr. Prasanna Liyanage", hospital: "Avissawella" },
      { specialty: "Surgeon", name: "Dr. Arjuna Wijewardhana", hospital: "Colombo" },
      { specialty: "Surgeon", name: "Dr. Mihira Bandara", hospital: "Homagama" },
      { specialty: "Surgeon", name: "Dr. Keerthi Rajapaksha", hospital: "Colombo" },
      { specialty: "VOG (Obs & Gyn)", name: "Dr. Asela Amarasiri", hospital: "Wathupitiwala" },
      { specialty: "VOG (Obs & Gyn)", name: "Dr. Rashanthie Perera", hospital: "Avissawella" },
      { specialty: "VOG (Obs & Gyn)", name: "Dr. Susantha Amarasinghe", hospital: "Avissawella" },
      { specialty: "Cardiologist", name: "Dr. Sampath Withanawasam", hospital: "Colombo" },
      { specialty: "Cardiologist", name: "Dr. Ajith Dissanayaka", hospital: "Avissawella" },
      { specialty: "Cardiologist", name: "Dr. Srilal Liayanarchchi", hospital: "Ratnapura" },
      { specialty: "Dermatologist", name: "Dr. Poorana Weerasinghe", hospital: "Avissawella" },
      { specialty: "Dermatologist", name: "Dr. Tharidu Dinupa", hospital: "Colombo" },
      { specialty: "Rheumatologist", name: "Dr. Surinda Witharana", hospital: "Peraadeniya" },
      { specialty: "Radiologist", name: "Dr. Udaya Jayakody", hospital: "Horana" },
      { specialty: "Radiologist", name: "Dr. Jagath Kosgahakumbura", hospital: "Avissawella" },
      { specialty: "Radiologist", name: "Dr. Aruna Rajapaksha", hospital: "Avissawella" },
      { specialty: "Pulmonologist", name: "Dr. Ruwanthi Jayasekara", hospital: "KDU Hospital" },
      { specialty: "Psychiatrist", name: "Dr. Chalitha Dharmappriya", hospital: "Dambadeniya" },
      { specialty: "Eye Surgeon", name: "Dr. Dasun Mathugamage", hospital: "Colombo" },
      { specialty: "Eye Surgeon", name: "Dr. Ruwani Perera", hospital: "Kalubowila" },
      { specialty: "Eye Surgeon", name: "Dr. Dilan Elvitigala", hospital: "Colombo" },
      { specialty: "Neurosurgeon", name: "Dr. Surath Munasinghe", hospital: "Colombo" },
      { specialty: "Neurosurgeon", name: "Dr. Arjuna Perera", hospital: "Ratnapura" },
      { specialty: "ENT Surgeon", name: "Dr. Visira Weerasekara", hospital: "Avissawella" },
      { specialty: "Endocrinologist", name: "Dr. Kamni Liyanarachchi", hospital: "Kaluthara" },
      { specialty: "Orthopaedic Surgeon", name: "Dr. Ranji Pitagampalage", hospital: "Avissawella" },
      { specialty: "Homeopathy Physician", name: "Dr. Sandun Ranendra Gamage", hospital: "Panadura" },
      { specialty: "Counsellor", name: "Mr. Sisira Kumara", hospital: "—" },
    ],
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);
