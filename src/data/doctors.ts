export type Doctor = {
  name: string;
  specialty: string;
  hospital: string;
  image?: string;
  gender?: "male" | "female";
  clinicDays: string;
  credentials?: string[];
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Sandamali Weerasinghe",
    specialty: "Family Doctor",
    hospital: "Gomez Private Hospital",
    gender: "female",
    clinicDays: "Tuesday, Friday",
    credentials: ["MBBS DFM MCGP", "Reg.24488", "MBA (Hospital & Health Services)"],
  },

  // --- Avissawella Base Hospital Specialists (from consultant list) ---
  {
    name: "Dr. Jagath Dalpadadu",
    specialty: "VOG Specialist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Daily",
  },
  {
    name: "Dr. Rashanthi Perera",
    specialty: "VOG Specialist",
    hospital: "Avissawella Base Hospital",
    gender: "female",
    clinicDays: "Monday, Wednesday, Friday, Sunday",
  },
  {
    name: "Dr. Prasanna Liyanage",
    specialty: "Pediatrician",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday",
  },
  {
    name: "Dr. Kumuduni Cooray",
    specialty: "Pediatrician",
    hospital: "Avissawella Base Hospital",
    gender: "female",
    clinicDays: "Weekdays, Saturday, Sunday",
  },
  {
    name: "Dr. Sanjaya Walawe Nayaka",
    specialty: "Consultant Physician",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday",
  },
  {
    name: "Dr. Pradeep Gunasekara",
    specialty: "Consultant Physician",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday",
  },
  {
    name: "Dr. Rohan Gunaratna",
    specialty: "General Surgeon",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday, Sunday",
  },
  {
    name: "Dr. Sanath Wanigasooriya",
    specialty: "General Surgeon",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday, Sunday",
  },
  {
    name: "Dr. Ajith Dissanayake",
    specialty: "Cardiologist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday",
  },
  {
    name: "Dr. Dhanushka Karunarathne",
    specialty: "Rheumatologist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays",
  },
  {
    name: "Dr. Poorna Weerasinghe",
    specialty: "Dermatologist",
    hospital: "Avissawella Base Hospital",
    gender: "female",
    clinicDays: "Monday, Wednesday, Friday",
  },
  {
    name: "Dr. Visira Weerasekara",
    specialty: "ENT Specialist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday",
  },
  {
    name: "Dr. Aruna Rajapaksha",
    specialty: "Radiologist (USS)",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday, Sunday",
  },
  {
    name: "Dr. Jagath Kosgahakumbura",
    specialty: "Radiologist (USS)",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday, Sunday",
  },
  {
    name: "Dr. Pradeepika Hettiarachchi",
    specialty: "Psychiatrist",
    hospital: "Avissawella Base Hospital",
    gender: "female",
    clinicDays: "Monday, Tuesday, Wednesday, Thursday",
  },
  {
    name: "Dr. Buddhini Karunarathna",
    specialty: "Oncologist",
    hospital: "Avissawella Base Hospital",
    gender: "female",
    clinicDays: "Weekdays",
  },
  {
    name: "Dr. Thusitha Gunasekara",
    specialty: "Ophthalmologist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Sunday",
  },
  {
    name: "Dr. Renuka Priyadarshani",
    specialty: "Orthodontist",
    hospital: "Avissawella Base Hospital",
    gender: "female",
    clinicDays: "Saturday",
  },
  {
    name: "Dr. Ranji Pitigampalage",
    specialty: "Orthopedic Surgeon",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday",
  },
  {
    name: "Dr. Harsha Jayasundara",
    specialty: "Facio-maxillary Surgeon",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays",
  },
  {
    name: "Dr. Heshani De Silva",
    specialty: "Endocrinologist",
    hospital: "Avissawella Base Hospital",
    gender: "female",
    clinicDays: "Tuesday, Thursday",
  },
  {
    name: "Dr. Priyantha Weerasinghe",
    specialty: "Venereologist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays",
  },

  // --- Visiting Specialists (Other Hospitals) ---
  {
    name: "Dr. Sampath Withanawasam",
    specialty: "Cardiologist",
    hospital: "National Hospital - Colombo",
    clinicDays: "Wednesday, Saturday",
  },
  {
    name: "Dr. Z. Jamaldeen",
    specialty: "Cardiologist",
    hospital: "Teaching Hospital - Kandy",
    clinicDays: "First Sunday of every month",
  },
  {
    name: "Dr. Srilal Liyanarachchi",
    specialty: "Cardiologist",
    hospital: "Teaching Hospital - Ratnapura",
    clinicDays: "Saturday",
  },
  {
    name: "Dr. Lilani P. Weerasekara",
    specialty: "Rheumatologist",
    hospital: "National Hospital - Colombo",
    gender: "female",
    clinicDays: "Sunday",
  },
  {
    name: "Dr. Sanjaya Heiyanthuduwa",
    specialty: "Nephrologist",
    hospital: "Military Hospital - Colombo",
    clinicDays: "Tuesday",
  },
  {
    name: "Dr. Jalitha Thinna Arachchi",
    specialty: "Nephrologist",
    hospital: "Base Hospital - Gampaha",
    clinicDays: "Saturday",
  },
  {
    name: "Dr. Surath Munasinghe",
    specialty: "Neurosurgeon",
    hospital: "National Hospital - Colombo",
    clinicDays: "Thursday",
  },
  {
    name: "Dr. T. Thivakaran",
    specialty: "Neurologist",
    hospital: "National Hospital - Colombo",
    clinicDays: "Thursday",
  },
  {
    name: "Dr. Rukshani Rupasingha",
    specialty: "Neurologist",
    hospital: "National Hospital - Colombo",
    gender: "female",
    clinicDays: "Saturday",
  },
  {
    name: "Dr. Dasun Mathugamage",
    specialty: "Ophthalmologist",
    hospital: "National Eye Hospital - Colombo",
    clinicDays: "Thursday",
  },
  {
    name: "Dr. Ruwanthi Jayasekara",
    specialty: "Pulmonologist",
    hospital: "National Hospital - Colombo",
    gender: "female",
    clinicDays: "Saturday",
  },
  {
    name: "Dr. Gayan Gajaweera",
    specialty: "Pulmonologist",
    hospital: "National Hospital - Colombo",
    clinicDays: "Weekdays",
  },
  {
    name: "Dr. Hilary Fernando",
    specialty: "Urological Surgeon",
    hospital: "Teaching Hospital - Ratnapura",
    clinicDays: "Wednesday, Saturday",
  },
];

export const specialties = Array.from(new Set(doctors.map((d) => d.specialty))).sort();

export function normalizeSearch(value: string) {
  return (value || "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getDoctorSuggestions(query: string, maxResults = 8): Doctor[] {
  const q = normalizeSearch(query);
  if (!q) return [];

  const matches = doctors
    .map((doctor) => {
      const name = normalizeSearch(doctor.name);
      
      let score = -1;
      
      if (name.startsWith(q) || name.startsWith("dr " + q)) {
        score = 3; // Highest priority: starts with query or starts with "dr " + query
      } else if (name.includes(" " + q)) {
        score = 2; // Medium priority: a word inside the name starts with the query
      } else if (name.includes(q)) {
        score = 1; // Lowest priority: contains the query elsewhere
      }
      
      return { doctor, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return matches.slice(0, maxResults).map((item) => item.doctor);
}
