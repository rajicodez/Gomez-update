import {
  Stethoscope,
  BedDouble,
  Ambulance,
  Activity,
  Baby,
  HeartPulse,
  ScanLine,
  TestTubes,
  Pill,
  Clock,
  Home,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  image: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  contact: string;
  doctors?: string[];
  phone?: {
    label: string;
    display: string;
    tel: string;
  };
  phones?: {
    label: string;
    display: string;
    tel: string;
  }[];
};

export const services: Service[] = [
  {
    slug: "opd-services",
    title: "24 Hours OPD Services",
    image: "/images/OPD-Wellness.jpg",
    icon: Clock,
    description:
      "Round-the-clock outpatient care for everyday health needs — walk in anytime for consultations, prescriptions, minor treatments, and prompt medical attention without an appointment.",
    features: [
      "24/7 Walk-in Consultations",
      "Family Doctor Services",
      "Minor Illness & Injury Care",
      "Prescriptions & Medical Certificates",
      "Referrals to Specialists",
    ],
    contact:
      "Our OPD is open 24 hours a day, every day. Visit us directly or call reception for more information.",
    doctors: [
      "Dr. R.P. Weerasinghe",
      "Dr. Sandamali Weerasinghe",
      "Dr. Padmalal",
      "Dr. Chandana",
      "Dr. Nandasena",
      "Dr. Risho",
    ],
    phones: [
      { label: "Direct", display: "036 720 2525", tel: "0367202525" },
      { label: "Direct", display: "076 836 6339", tel: "0768366339" },
    ],
  },
  {
    slug: "ambulance-service",
    title: "Ambulance Service",
    image: "/images/ambulance.jpg",
    icon: Ambulance,
    description:
      "A fully equipped ambulance service ready to respond when every second counts — providing safe, rapid patient transport to Gomez Hospital for emergency and urgent medical care.",
    features: [
      "24/7 Emergency Response",
      "Trained Paramedic Staff",
      "Life-Support Equipment On Board",
      "Hospital Transfer & Coordination",
      "Island-Wide Coverage",
    ],
    contact:
      "For ambulance assistance, contact our emergency hotline immediately. Our team is on standby around the clock.",
    phone: {
      label: "Ambulance Direct",
      display: "036 720 2000",
      tel: "0367202000",
    },
  },
  {
    slug: "specialist-services",
    title: "Specialist Services",
    image: "/images/spelitiles.png",
    icon: Stethoscope,
    description:
      "We host over 40 renowned consultants offering specialized care across various medical fields, ensuring expert attention for every patient.",
    features: [
      "VOG & VPP Specialists",
      "Cardiologists & Neurologists",
      "General Surgeons & Physicians",
      "Paediatricians & Dermatologists",
      "ENT & Eye Surgeons",
    ],
    contact:
      "Consultations are available by appointment. Please check the doctor's schedule or contact the reception.",
  },
  {
    slug: "inpatient-care",
    title: "Inpatient Care",
    image: "/images/ward.jpg",
    icon: BedDouble,
    description:
      "Our inpatient facilities provide a comfortable healing environment with a range of room options to suit different needs and budgets.",
    features: [
      "Luxury & Semi-Luxury Rooms",
      "A/C & Non-A/C Rooms",
      "Private Rooms with Attached Toilets",
      "Male & Female Wards",
      "24/7 Nursing Care",
    ],
    contact:
      "For room availability and admission inquiries, please contact our admission desk.",
    phones: [
      { label: "Direct", display: "036 223 0790", tel: "0362230790" },
      { label: "Direct", display: "076 820 4910", tel: "0768204910" },
    ],
  },
  {
    slug: "hdu-emergency",
    title: "HDU & Emergency",
    image: "/images/emergency.jpg",
    icon: Ambulance,
    description:
      "Our High Dependency Unit (HDU) and Emergency Treatment Unit (ETU) are equipped to handle critical medical situations 24/7.",
    features: [
      "24/7 Emergency Care",
      "Advanced Patient Monitoring",
      "Critical Life Support Systems",
      "Trauma Care",
      "Immediate Medical Stabilization",
    ],
    contact:
      "In case of an emergency, visit our ETU immediately or contact our emergency hotline.",
  },
  {
    slug: "operation-theatre",
    title: "Operation Theatre",
    image: "/images/theatre-nurse-uk.png",
    icon: Activity,
    description:
      "We boast a state-of-the-art operation theatre complex equipped with the latest surgical technology for safe and precise procedures.",
    features: [
      "General Surgery",
      "Laparoscopic Surgery",
      "Orthopedic Surgery",
      "Caesarean Sections",
      "Laparoscopic Sterilization (LRT)",
    ],
    contact: "Surgeries are scheduled upon consultant recommendation.",
    phones: [
      { label: "Direct", display: "076 367 4644", tel: "0763674644" },
    ],
  },
  {
    slug: "maternity-care",
    title: "Maternity Care",
    image: "/images/maternity.jpg",
    icon: Baby,
    description:
      "A dedicated unit providing comprehensive care for expectant mothers and newborns, ensuring a safe and comfortable birthing experience.",
    features: [
      "Antenatal & Postnatal Care",
      "Normal & Caesarean Delivery",
      "Neonatal Care",
      "Breastfeeding Support",
      "Labor Room Facilities",
    ],
    contact:
      "Maternity packages available. Contact us for registration details.",
  },
  {
    slug: "fertility-services",
    title: "Fertility Services",
    image: "/images/fertility.jpg",
    icon: HeartPulse,
    description:
      "We offer specialized sub-fertility treatments to help couples realize their dream of parenthood with compassionate care.",
    features: [
      "Sub-fertility Consultation",
      "Intrauterine Insemination (IUI)",
      "Follicular Tracking",
      "Hormonal Testing",
      "Counseling Services",
    ],
    contact:
      "Confidential consultations available. Please book an appointment with our fertility specialists.",
  },
  {
    slug: "diagnostic-imaging",
    title: "Diagnostic Imaging",
    image: "/images/diagnostic.jpg",
    icon: ScanLine,
    description:
      "Our imaging department utilizes advanced technology to provide accurate and timely diagnostic results.",
    features: [
      "Digital X-Ray",
      "Ultrasound Scanning (USS)",
      "ECG Services",
      "Colour Doppler Scans",
      "Echocardiography",
    ],
    contact:
      "Walk-in services available for most scans. Specialized scans may require an appointment.",
  },
  {
    slug: "laboratory-services",
    title: "Laboratory Services",
    image: "/images/laboratory.jpg",
    icon: TestTubes,
    description:
      "Our fully automated medical laboratory adheres to international quality standards, delivering precise and reliable test reports.",
    features: [
      "Haematology & Biochemistry",
      "Microbiology & Serology",
      "Hormonal Assays",
      "Pathology Services",
      "Sample Collection Center",
    ],
    contact:
      "Open 24/7 for sample collection. Fast-tracked reports available for urgent cases.",
    phones: [
      { label: "Direct", display: "036 454 9696", tel: "0364549696" },
      { label: "Direct", display: "076 499 7311", tel: "0764997311" },
    ],
  },
  {
    slug: "pharmacy-services",
    title: "Pharmacy Services",
    image: "/images/pharmacy.jpg",
    icon: Pill,
    description:
      "Our in-house pharmacy ensures that essential medicines and surgical consumables are always accessible to our patients.",
    features: [
      "24/7 Service",
      "Prescription Dispensing",
      "Over-the-Counter Medicines",
      "Surgical Consumables",
      "Quality Assured Pharmaceuticals",
    ],
    contact: "Located on the ground floor for your convenience.",
    phone: {
      label: "Pharmacy Direct",
      display: "076 820 4915",
      tel: "0768204915",
    },
  },
  {
    slug: "home-nursing",
    title: "Home Nursing",
    image: "/images/home nursing.png",
    icon: Home,
    description:
      "Professional nursing care brought to your doorstep — ideal for post-operative recovery, elderly care, chronic illness management, and patients who prefer to heal in the comfort of home.",
    features: [
      "Skilled Registered Nurses",
      "Post-Surgery & Wound Care",
      "Medication Administration",
      "Vital Signs Monitoring",
      "Elderly & Palliative Support",
    ],
    contact:
      "To arrange home nursing services, please contact our nursing department or reception for availability and scheduling.",
  },
];

export type SpecialtyClinic = {
  name: string;
  slug: string;
  /** Doctor specialty values that belong to this clinic */
  filterSpecialties: string[];
};

export const specialtyClinics: SpecialtyClinic[] = [
  {
    name: "Dental Clinic",
    slug: "dental-clinic",
    filterSpecialties: ["Orthodontist", "Facio-maxillary Surgeon"],
  },
  {
    name: "STD Clinic",
    slug: "std-clinic",
    filterSpecialties: ["Venereologist"],
  },
  {
    name: "Skin Clinic",
    slug: "skin-clinic",
    filterSpecialties: ["Dermatologist"],
  },
  {
    name: "Family Planning",
    slug: "family-planning",
    filterSpecialties: ["VOG Specialist"],
  },
  {
    name: "ENT Clinic",
    slug: "ent-clinic",
    filterSpecialties: ["ENT Specialist"],
  },
  {
    name: "Eye Clinic",
    slug: "eye-clinic",
    filterSpecialties: ["Ophthalmologist"],
  },
  {
    name: "Vaccination Clinic",
    slug: "vaccination-clinic",
    filterSpecialties: ["Pediatrician", "Family Doctor"],
  },
  {
    name: "Physiotherapy",
    slug: "physiotherapy",
    filterSpecialties: ["Orthopedic Surgeon"],
  },
];

/** Resolve a URL `specialty` param to doctor specialty values (clinic slug or exact specialty). */
export function resolveSpecialtyFilter(param: string, availableSpecialties: string[]): string[] {
  const trimmed = param.trim();
  if (!trimmed) return [];

  const clinic = specialtyClinics.find((c) => c.slug === trimmed);
  if (clinic) return clinic.filterSpecialties;

  if (availableSpecialties.includes(trimmed)) return [trimmed];

  const normalized = trimmed.toLowerCase().replace(/-/g, " ");
  const match = availableSpecialties.find((s) => s.toLowerCase() === normalized);
  return match ? [match] : [];
}

export function getSpecialtyClinicLabel(param: string): string | null {
  const clinic = specialtyClinics.find((c) => c.slug === param);
  return clinic?.name ?? null;
}
