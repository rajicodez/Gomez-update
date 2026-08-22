export type SpecialtyInfo = {
  name: string;
  englishDescription: string;
  sinhalaDescription: string;
};

export const specialtyDescriptions: Record<
  string,
  { englishDescription: string; sinhalaDescription: string }
> = {
  "Family Doctor (OPD)": {
    englishDescription:
      "Provides general medical care for adults and families, including routine check-ups, diagnosis and treatment of common illnesses, health screenings, vaccinations, and referrals to specialists when needed.",
    sinhalaDescription:
      "වැඩිහිටියන් සහ පවුල් සඳහා සාමාන්‍ය වෛද්‍ය සේවා සපයයි. නිතිපතා පරීක්ෂා, සාමාන්‍ය රෝග විනිශ්චය සහ ප්‍රතිකාර, සෞඛ්‍ය පරීක්ෂණ, එන්නත් කිරීම් සහ අවශ්‍ය විට විශේෂඥ වෛද්‍යවරුන් වෙත යොමු කිරීම් ඇතුළත් වේ.",
  },
  "VOG Specialist": {
    englishDescription:
      "A specialist in obstetrics and gynaecology (VOG) who cares for women's reproductive health, including pregnancy care, antenatal and postnatal follow-up, delivery, menstrual disorders, and gynaecological conditions.",
    sinhalaDescription:
      "ස්ත්‍රී රෝග සහ ප්‍රසූති විශේෂඥයෙක් (VOG). ගර්භණී සත්කාරය, ගර්භකාලීන හා ප්‍රසව පසු පරීක්ෂා, ප්‍රසවය, ඔසප් ආබාධ සහ ස්ත්‍රීන්ගේ සංසර්පක ප්‍රශ්න පිළිබඳව ප්‍රතිකාර සපයයි.",
  },
  Pediatrician: {
    englishDescription:
      "Specialises in the health of infants, children, and adolescents — including growth monitoring, childhood illnesses, vaccinations, developmental assessments, and management of paediatric conditions.",
    sinhalaDescription:
      "ළදරුවන්, ළමයින් සහ තරුණයින්ගේ සෞඛ්‍යය පිළිබඳ විශේෂඥයින්. වර්ධනය නිරීක්ෂණය, ළමා රෝග, එන්නත්, සංවර්ධන තත්ත්වය ඇගයීම සහ ළමා රෝග ප්‍රතිකාර ඇතුළත් වේ.",
  },
  "Consultant Physician": {
    englishDescription:
      "A senior medical doctor who diagnoses and manages a wide range of adult internal medicine conditions such as diabetes, hypertension, infections, chest and abdominal illnesses, and complex medical problems requiring specialist care.",
    sinhalaDescription:
      "වැඩිහිටියන්ගේ අභ්‍යන්තර වෛද්‍ය රෝග විනිශ්චය සහ ප්‍රතිකාර කරන ජ්‍යෙෂ්ඨ වෛද්‍යවරයෙක්. දියවැඩියාව, රුධිර පීඩනය, ආසාදන, පපුව සහ උදර සම්බන්ධ රෝග සහ සංකීර්ණ වෛද්‍ය තත්ත්ව ප්‍රතිකාර කරයි.",
  },
  "General Surgeon": {
    englishDescription:
      "Performs surgical operations and manages conditions affecting the abdomen, breast, skin, soft tissues, and other areas — including hernias, gallbladder disease, lumps, wounds, and emergency surgical care.",
    sinhalaDescription:
      "ශල්‍යකර්ම සිදු කරන අතර උදරය, සතුන්, සම සහ මෘදු පටල සම්බන්ධ රෝග ප්‍රතිකාර කරයි. හර්නියා, පිත පිත්තම, ගැටලු, තුවාල සහ හදිසි ශල්‍ය සේවා ඇතුළත් වේ.",
  },
  Cardiologist: {
    englishDescription:
      "Specialises in heart and blood vessel diseases, including chest pain, heart failure, irregular heartbeat, high blood pressure related to the heart, and interpretation of ECG and echocardiography.",
    sinhalaDescription:
      "හදවැල් සහ රුධිර නාල රෝග පිළිබඳ විශේෂඥයින්. පපුවේ වේදනාව, හෘදය අසමත් වීම, අනියම් හදවැල් ස්පන්දනය, රුධිර පීඩනය සහ ECG/එකෝ කාඩියෝග්‍රෑෆි පරීක්ෂා ඇතුළත් වේ.",
  },
  Rheumatologist: {
    englishDescription:
      "Treats joint, muscle, and autoimmune conditions such as arthritis, back and neck pain, gout, lupus, and other disorders causing pain, stiffness, or inflammation in the musculoskeletal system.",
    sinhalaDescription:
      "සන්ධි, මාංශ පේශි සහ ස්වයං ප්‍රතිශරීර රෝග ප්‍රතිකාර කරයි. අර්ථරයිටිස්, පිටුපස සහ බැලුම් වේදනාව, ගවුට්, ලූපස් වැනි රෝග සහ වේදනාව, රිජිදතාව හෝ ආසාදන ඇති තත්ත්ව ප්‍රතිකාර කරයි.",
  },
  Dermatologist: {
    englishDescription:
      "Diagnoses and treats skin, hair, and nail conditions including eczema, acne, fungal infections, allergies, rashes, pigmentation problems, and skin growths.",
    sinhalaDescription:
      "සම, හිසකෙස් සහ නිය පිළිබඳ රෝග විනිශ්චය සහ ප්‍රතිකාර කරයි. සම් ආසාදන, කුරුලෑ, දිලීර ආසාදන, අසාත්මිකතා, සම් පිපිරීම්, වර්ණ වෙනස්වීම් සහ සම් වර්ධනයන් ඇතුළත් වේ.",
  },
  "ENT Specialist": {
    englishDescription:
      "An Ear, Nose & Throat specialist who treats hearing loss, ear infections, sinus problems, tonsillitis, throat pain, voice disorders, snoring, and balance-related ear conditions.",
    sinhalaDescription:
      "කන, නාසය සහ උගුර (ENT) විශේෂඥයෙක්. ශ්‍රවණ අඩුවීම, කන ආසාදන, සයිනස් රෝග, තොටපොල ආසාදන, උගුරු වේදනාව, කටහඬ ආබාධ, හුස්ම ගැනීමේ ගැටලු සහ සමතුලිතතා සම්බන්ධ රෝග ප්‍රතිකාර කරයි.",
  },
  "Radiologist (USS)": {
    englishDescription:
      "Uses ultrasound and imaging techniques to help diagnose medical conditions — including abdominal scans, pregnancy scans, thyroid, breast, and soft tissue imaging for accurate clinical assessment.",
    sinhalaDescription:
      "අල්ට්‍රා සවුන්ඩ් සහ රූපීය පරීක්ෂණ මගින් රෝග විනිශ්චයට සහය වේ. උදර ස්කෑන්, ගර්භණී ස්කෑන්, තයිරොයිඩ්, සතුන් සහ මෘදු පටල රූපීය පරීක්ෂණ ඇතුළත් වේ.",
  },
  Psychiatrist: {
    englishDescription:
      "Specialises in mental health conditions such as depression, anxiety, stress-related disorders, sleep problems, and other emotional or behavioural conditions requiring medical and psychological treatment.",
    sinhalaDescription:
      "මානසික සෞඛ්‍ය තත්ත්ව පිළිබඳ විශේෂඥයින්. මානසික අවපීඩනය, කලබලකාරීත්වය, ආතතිය, නින්දේ ගැටලු සහ හැඟීම් හා හැසිරීම් සම්බන්ධ රෝග වෛද්‍ය සහ මනෝවිද්‍යාත්මක ප්‍රතිකාර සමඟ ප්‍රතිකාර කරයි.",
  },
  Oncologist: {
    englishDescription:
      "A cancer specialist who diagnoses and manages various cancers, coordinates chemotherapy and related treatments, and provides ongoing care and follow-up for patients with malignant conditions.",
    sinhalaDescription:
      "පිළිකා රෝග විශේෂඥයෙක්. විවිධ පිළිකා රෝග විනිශ්චය සහ ප්‍රතිකාර, රසායනික ප්‍රතිකාර සම්බන්ධ සැලසුම් කිරීම සහ පිළිකා රෝගීන්ගේ දිගුකාලීන සත්කාරය සහ නිරීක්ෂණය සිදු කරයි.",
  },
  Ophthalmologist: {
    englishDescription:
      "An eye specialist who treats vision problems, cataracts, glaucoma, eye infections, diabetic eye disease, injuries to the eye, and performs eye examinations and surgical procedures when required.",
    sinhalaDescription:
      "ඇස් විශේෂඥ වෛද්‍යවරයෙක්. දෘෂ්ටි දුර්වලතා, මෝතිය බැම්, ග්ලූකෝමා, ඇස් ආසාදන, දියවැඩියා සම්බන්ධ ඇස් රෝග, ඇස් තුවාල සහ අවශ්‍ය විට ඇස් පරීක්ෂා සහ ශල්‍යකර්ම සිදු කරයි.",
  },
  Orthodontist: {
    englishDescription:
      "Specialises in correcting teeth alignment and bite problems using braces and other dental appliances — helping improve chewing, speech, and the appearance of teeth and jaws.",
    sinhalaDescription:
      "දත් අලයනය සහ දත් කැවීමේ ගැටලු නිවැරදි කිරීමට බ්‍රේසස් සහ වෙනත් දන්ත උපකරණ භාවිතයෙන් ප්‍රතිකාර කරයි. ආහාර යෙදීම, කතා කිරීම සහ දත් හා තවරුන්ගේ පෙනුම වැඩිදියුණු කිරීමට උපකාරී වේ.",
  },
  "Orthopedic Surgeon": {
    englishDescription:
      "Treats bone, joint, and muscle conditions including fractures, sports injuries, arthritis, back pain, joint replacements, and disorders affecting movement and the musculoskeletal system.",
    sinhalaDescription:
      "අස්ථි, සන්ධි සහ මාංශ පේශි රෝග ප්‍රතිකාර කරයි. අස්ථි බිඳීම්, ක්‍රීඩා තුවාල, අර්ථරයිටිස්, පිටුපස වේදනාව, සන්ධි ප්‍රතිස්ථාපනය සහ චලනයට බලපාන රෝග ඇතුළත් වේ.",
  },
  "Facio-maxillary Surgeon": {
    englishDescription:
      "A specialist in oral and maxillofacial surgery who treats jaw, face, and mouth conditions — including impacted teeth, facial injuries, jaw deformities, and surgical dental procedures.",
    sinhalaDescription:
      "මුඛය සහ උපරිහන්ශ ශල්‍යකර්ම විශේෂඥයෙක්. තවරු, මුහුණ සහ මුඛය සම්බන්ධ රෝග, බැඳී ඇති දත්, මුහුණු තුවාල, තවරු අසමමිතිකතා සහ ශල්‍යකර්මීය දන්ත ප්‍රතිකාර සිදු කරයි.",
  },
  Endocrinologist: {
    englishDescription:
      "Manages hormone-related disorders including diabetes, thyroid disease, obesity, polycystic ovary syndrome (PCOS), growth disorders, and other metabolic and endocrine conditions.",
    sinhalaDescription:
      "හෝර්මෝන සම්බන්ධ රෝග ප්‍රතිකාර කරයි. දියවැඩියාව, තයිරොයිඩ් රෝග, ඕනෑවට වඩා බර වැඩීම, PCOS, වර්ධන ආබාධ සහ වෙනත් ආහාර චයාපචය හා අන්තර්ස්‍රාවී රෝග ඇතුළත් වේ.",
  },
  Venereologist: {
    englishDescription:
      "Specialises in sexually transmitted infections (STIs) and related conditions — providing confidential diagnosis, treatment, counselling, and preventive care for sexual health concerns.",
    sinhalaDescription:
      "ලිංගිකව සම්ප්‍රේරණය වන රෝග (STI) සහ සම්බන්ධ තත්ත්ව පිළිබඳ විශේෂඥයින්. රහස්‍යතාවයෙන් යුතුව විනිශ්චය, ප්‍රතිකාර, උපදෙස් සහ ලිංගික සෞඛ්‍යය පිළිබඳ වැළැක්වීමේ සත්කාරය සපයයි.",
  },
  Nephrologist: {
    englishDescription:
      "A kidney specialist who diagnoses and manages kidney disease, urinary protein loss, electrolyte imbalances, dialysis-related care, and complications of diabetes and hypertension affecting the kidneys.",
    sinhalaDescription:
      "වකුගඩු විශේෂඥ වෛද්‍යවරයෙක්. වකුගඩු රෝග, මූත්‍රයේ ප්‍රෝටීන, විද්‍යුත් අයන අසමතුලිතතා, ඩයලිසිස් සම්බන්ධ සත්කාරය සහ දියවැඩියාව හා රුධිර පීඩනය නිසා වකුගඩුවට ඇතිවන අවදි ප්‍රතිකාර කරයි.",
  },
  Neurosurgeon: {
    englishDescription:
      "Performs surgery on the brain, spine, and nervous system — treating head injuries, brain tumours, slipped discs, spinal cord compression, and other conditions requiring neurosurgical intervention.",
    sinhalaDescription:
      "මොළය, කශේරුකාව සහ ස්නායු පද්ධතිය සම්බන්ධ ශල්‍යකර්ම සිදු කරයි. හිස තුවාල, මොළයේ වර්ධන, ස්ලිප් ඩිස්ක්, කශේරුකා ස්නායු තදබදය සහ ස්නායු ශල්‍යකර්ම අවශ්‍ය තත්ත්ව ප්‍රතිකාර කරයි.",
  },
  Neurologist: {
    englishDescription:
      "Treats disorders of the brain, nerves, and spinal cord such as epilepsy, stroke, migraines, numbness, weakness, Parkinson's disease, and other neurological conditions.",
    sinhalaDescription:
      "මොළය, ස්නායු සහ කශේරුකා සම්බන්ධ රෝග ප්‍රතිකාර කරයි. අපස්මාරාව, හිසකැළැස්ම, මයිග්‍රේනය, ඇඟිලි මිරිකීම, දුර්වලතාව, පාර්කින්සන් රෝගය සහ වෙනත් ස්නායු රෝග ඇතුළත් වේ.",
  },
  Pulmonologist: {
    englishDescription:
      "A chest and lung specialist who treats asthma, chronic cough, bronchitis, pneumonia, COPD, breathing difficulties, and other respiratory conditions.",
    sinhalaDescription:
      "පපුව සහ පුප්ඵුස් විශේෂඥ වෛද්‍යවරයෙක්. ආස්මාව, දිගු කැස්ස, බ්‍රොන්කයිටිස්, නිමෝනියාව, COPD, හුස්ම ගැනීමේ අපහසුතා සහ වෙනත් ශ්වසන පද්ධති රෝග ප්‍රතිකාර කරයි.",
  },
  "Urological Surgeon": {
    englishDescription:
      "Specialises in diseases of the urinary tract and male reproductive system — including kidney stones, urinary infections, prostate problems, difficulty passing urine, and urological surgery.",
    sinhalaDescription:
      "මූත්‍රා පද්ධතිය සහ පුරුෂ ලිංගික පද්ධතිය සම්බන්ධ රෝග විශේෂඥයින්. වකුගඩු ගල්, මූත්‍රා ආසාදන, ප්‍රොස්ටේට් ගැටලු, මූත්‍රා කිරීමේ අපහසුතා සහ මූත්‍රා පද්ධති ශල්‍යකර්ම ඇතුළත් වේ.",
  },
};

export function getSpecialtyInfo(specialty: string): SpecialtyInfo | null {
  const info = specialtyDescriptions[specialty];
  if (!info) return null;
  return { name: specialty, ...info };
}

export function getSpecialtyInfos(specialties: string[]): SpecialtyInfo[] {
  return specialties
    .map((specialty) => getSpecialtyInfo(specialty))
    .filter((info): info is SpecialtyInfo => info !== null);
}
