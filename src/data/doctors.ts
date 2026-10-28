export type Doctor = {
  name: string;
  specialty: string;
  hospital: string;
  image?: string;
  gender?: "male" | "female";
  clinicDays: string;
  credentials?: string[];
};

export const SPECIALTY_DISPLAY_NAMES: Record<string, string> = {
  Pediatrician: "Paediatrician",
  Pulmonologist: "Chest Physician",
  "General Surgeon": "Surgeon",
  "VOG Specialist": "VOG",
  "Orthopedic Surgeon": "Orthopaedic",
};

export const SPECIALTY_ALIASES: Record<string, string> = {
  paediatrician: "Pediatrician",
  pediatrician: "Pediatrician",
  paediatrics: "Pediatrician",
  pediatrics: "Pediatrician",
  "chest physician": "Pulmonologist",
  pulmonologist: "Pulmonologist",
  pulmonology: "Pulmonologist",
  "chest doctor": "Pulmonologist",
  surgeon: "General Surgeon",
  "general surgeon": "General Surgeon",
  surgery: "General Surgeon",
  vog: "VOG Specialist",
  "vog specialist": "VOG Specialist",
  gynecologist: "VOG Specialist",
  gynaecologist: "VOG Specialist",
  orthopaedic: "Orthopedic Surgeon",
  "orthopaedic surgeon": "Orthopedic Surgeon",
  orthopedic: "Orthopedic Surgeon",
  "orthopedic surgeon": "Orthopedic Surgeon",
  orthopaedics: "Orthopedic Surgeon",
  orthopedics: "Orthopedic Surgeon",
  dermatologist: "Dermatologist",
  dermatology: "Dermatologist",
};

export function getSpecialtyDisplayName(specialty: string): string {
  return SPECIALTY_DISPLAY_NAMES[specialty] || specialty;
}

export function resolveCanonicalSpecialty(value: string): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  const normalized = trimmed.toLowerCase().replace(/-/g, " ");
  if (SPECIALTY_ALIASES[normalized]) {
    return SPECIALTY_ALIASES[normalized];
  }
  for (const [key, display] of Object.entries(SPECIALTY_DISPLAY_NAMES)) {
    if (key.toLowerCase() === normalized || display.toLowerCase() === normalized) {
      return key;
    }
  }
  return null;
}

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
    specialty: "Consultant Physician",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Daily",
  },
  {
    name: "Dr. Rashanthie Perera",
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
    name: "Dr. Chinthaka Rajapaksha",
    specialty: "Pediatrician",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Please contact the hospital to confirm",
  },
  {
    name: "Dr. Sanjaya Walawenayaka",
    specialty: "VOG Specialist",
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
    name: "Dr. Sanath Wanigasooriya",
    specialty: "General Surgeon",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays, Saturday, Sunday",
  },
  {
    name: "Dr. A.W.P. Manjula",
    specialty: "General Surgeon",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Please contact the hospital to confirm",
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
    name: "Dr. V.G. Abeywickrama",
    specialty: "Dermatologist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Please contact the hospital to confirm",
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
    name: "Dr. Sampath Marasinghe",
    specialty: "Orthopedic Surgeon",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Please contact the hospital to confirm",
  },
  {
    name: "Dr. Harsha Jayasundara",
    specialty: "Facio-maxillary Surgeon",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Weekdays",
  },
  {
    name: "Dr. Heshani De Silva",
    specialty: "Pulmonologist",
    hospital: "Avissawella Base Hospital",
    gender: "female",
    clinicDays: "Tuesday, Thursday",
  },
  {
    name: "Dr. Madushankha Rathnayake",
    specialty: "Pulmonologist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Please contact the hospital to confirm",
  },
  {
    name: "Dr. Tharaka S. Nanayakkara",
    specialty: "VOG Specialist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Please contact the hospital to confirm",
  },
  {
    name: "Dr. Sajith Bandara",
    specialty: "VOG Specialist",
    hospital: "Avissawella Base Hospital",
    clinicDays: "Please contact the hospital to confirm",
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
    name: "Dr. Hilary Fernando",
    specialty: "Urological Surgeon",
    hospital: "Teaching Hospital - Ratnapura",
    clinicDays: "Wednesday, Saturday",
  },
];

export const specialties = Array.from(new Set(doctors.map((d) => d.specialty))).sort((a, b) =>
  getSpecialtyDisplayName(a).localeCompare(getSpecialtyDisplayName(b))
);

export function normalizeSearch(value: string): string {
  if (!value) return "";
  const cleaned = value
    .toLowerCase()
    .replace(/[.,\-_/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = cleaned.split(" ");
  const result: string[] = [];
  let currentInitials = "";

  for (const word of words) {
    if (word.length === 1 && /[a-z0-9]/i.test(word)) {
      currentInitials += word;
    } else {
      if (currentInitials) {
        result.push(currentInitials);
        currentInitials = "";
      }
      result.push(word);
    }
  }
  if (currentInitials) {
    result.push(currentInitials);
  }

  return result.join(" ");
}

export function matchesDoctorSearch(doctor: Doctor, query: string): boolean {
  const q = normalizeSearch(query);
  if (!q) return true;

  const docName = normalizeSearch(doctor.name);
  const docNameNoDr = docName.replace(/^dr\s+/, "");
  const qNoDr = q.replace(/^dr\s+/, "");

  // 1. Direct name substring matching
  if (docName.includes(q) || docNameNoDr.includes(qNoDr)) {
    return true;
  }

  // 2. Token-based matching (e.g. initials or first/last name out of order or partial)
  const qWords = qNoDr.split(" ").filter(Boolean);
  const nameWords = docNameNoDr.split(" ").filter(Boolean);
  if (
    qWords.length > 0 &&
    qWords.every((qw) => nameWords.some((nw) => nw.startsWith(qw) || nw.includes(qw)))
  ) {
    return true;
  }

  // 3. Specialty matching (canonical, display, aliases)
  const docSpec = doctor.specialty;
  const docDisplaySpec = getSpecialtyDisplayName(docSpec);
  const normSpec = normalizeSearch(docSpec);
  const normDisplaySpec = normalizeSearch(docDisplaySpec);

  if (normSpec.includes(q) || normDisplaySpec.includes(q)) {
    return true;
  }

  for (const [alias, canonical] of Object.entries(SPECIALTY_ALIASES)) {
    if (canonical.toLowerCase() === docSpec.toLowerCase()) {
      if (alias.includes(q) || q.includes(alias)) {
        return true;
      }
    }
  }

  // 4. Hospital matching
  const docHosp = normalizeSearch(doctor.hospital);
  if (docHosp.includes(q)) {
    return true;
  }

  return false;
}

export type DoctorSuggestionOptions = {
  specialty?: string | string[];
  maxResults?: number;
};

export function getDoctorSuggestions(
  query: string,
  optionsOrMaxResults?: number | DoctorSuggestionOptions
): Doctor[] {
  const options =
    typeof optionsOrMaxResults === "number"
      ? { maxResults: optionsOrMaxResults }
      : optionsOrMaxResults || {};
  const maxResults = options.maxResults ?? 8;
  const specialtyFilter = options.specialty;

  const q = normalizeSearch(query);
  if (!q) return [];

  const qNoDr = q.replace(/^dr\s+/, "");
  const qWords = qNoDr.split(" ").filter(Boolean);

  let pool = doctors;
  if (specialtyFilter) {
    const filterArray = Array.isArray(specialtyFilter)
      ? specialtyFilter
      : [specialtyFilter];

    const allowed = new Set<string>();
    for (const item of filterArray) {
      const trimmed = item.trim();
      if (!trimmed) continue;
      allowed.add(trimmed.toLowerCase());
      const canonical = resolveCanonicalSpecialty(trimmed);
      if (canonical) {
        allowed.add(canonical.toLowerCase());
      }
    }

    if (allowed.size > 0) {
      pool = pool.filter((d) => {
        const specLower = d.specialty.toLowerCase();
        const displayLower = getSpecialtyDisplayName(d.specialty).toLowerCase();
        return allowed.has(specLower) || allowed.has(displayLower);
      });
    }
  }

  const matches = pool
    .map((doctor) => {
      const name = normalizeSearch(doctor.name);
      const nameNoDr = name.replace(/^dr\s+/, "");
      const nameWords = nameNoDr.split(" ").filter(Boolean);

      let score = -1;

      // Highest: name exact or starts with query
      if (name === q || nameNoDr === qNoDr) {
        score = 100;
      } else if (name.startsWith(q) || nameNoDr.startsWith(qNoDr)) {
        score = 80;
      } else if (nameWords.some((w) => w.startsWith(qNoDr))) {
        score = 60;
      } else if (name.includes(q) || nameNoDr.includes(qNoDr)) {
        score = 50;
      } else if (
        qWords.length > 0 &&
        qWords.every((qw) => nameWords.some((nw) => nw.startsWith(qw) || nw.includes(qw)))
      ) {
        score = 45;
      } else {
        // Specialty match
        const docSpec = doctor.specialty;
        const docDisplaySpec = getSpecialtyDisplayName(docSpec);
        const normSpec = normalizeSearch(docSpec);
        const normDisplaySpec = normalizeSearch(docDisplaySpec);

        if (normDisplaySpec === q || normSpec === q) {
          score = 40;
        } else if (normDisplaySpec.startsWith(q) || normSpec.startsWith(q)) {
          score = 35;
        } else if (normDisplaySpec.includes(q) || normSpec.includes(q)) {
          score = 30;
        } else {
          for (const [alias, canonical] of Object.entries(SPECIALTY_ALIASES)) {
            if (canonical.toLowerCase() === docSpec.toLowerCase()) {
              if (alias === q || alias.startsWith(q)) {
                score = 30;
                break;
              } else if (alias.includes(q)) {
                score = 25;
                break;
              }
            }
          }
        }

        // Hospital match
        if (score === -1) {
          const docHosp = normalizeSearch(doctor.hospital);
          if (docHosp.includes(q)) {
            score = 10;
          }
        }
      }

      return { doctor, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return matches.slice(0, maxResults).map((item) => item.doctor);
}

export function getDoctorSlug(doctorOrName: Doctor | string): string {
  const name = typeof doctorOrName === "string" ? doctorOrName : doctorOrName.name;
  return name
    .replace(/^Dr\.\s*|^Dr\s+/i, "")
    .toLowerCase()
    .replace(/\./g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getDoctorBySlug(slug: string): Doctor | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();
  return doctors.find((d) => getDoctorSlug(d) === normalized);
}

export function isConfirmedHospital(hospital?: string): boolean {
  if (!hospital) return false;
  const lower = hospital.toLowerCase();
  return !lower.includes("please contact");
}

export function isConfirmedSchedule(clinicDays?: string): boolean {
  if (!clinicDays) return false;
  const lower = clinicDays.toLowerCase();
  return !lower.includes("please contact");
}
