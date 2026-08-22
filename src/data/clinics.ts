import { 
  Syringe, 
  Activity, 
  Apple, 
  HeartHandshake, 
  Users, 
  Stethoscope 
} from "lucide-react";

export type Clinic = {
  id: string;
  name: string;
  icon: any;
  doctor: string | null;
};

export const clinics: Clinic[] = [
  {
    id: "vaccinations",
    name: "Vaccinations",
    icon: Syringe,
    doctor: null, // "Doctor information will be updated soon."
  },
  {
    id: "physiotherapist",
    name: "Physiotherapist",
    icon: Activity,
    doctor: "Mr. Sampath",
  },
  {
    id: "nutritionist",
    name: "Nutritionist",
    icon: Apple,
    doctor: "Ms. Roshani Meepage",
  },
  {
    id: "counselling",
    name: "Counselling",
    icon: HeartHandshake,
    doctor: "Mr. Mallikarachchi",
  },
  {
    id: "family-planning",
    name: "Family Planning",
    icon: Users,
    doctor: "OPD Doctors",
  },
  {
    id: "dental",
    name: "Dental",
    icon: Stethoscope, 
    doctor: null,
  },
];
