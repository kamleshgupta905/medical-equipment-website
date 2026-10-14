export const WHATSAPP = "919315515700";
export const PHONE_DISPLAY = "+91 93155 15700";
export const EMAIL = "hello@nexorahealthcare.in";
export const SITE = "https://nexorahealthcare.in";

export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const defaultWa = waLink(
  "Namaste Nexora Healthcare, mujhe hospital equipment / X-ray installation ka quotation chahiye."
);

export type Category = {
  id: string;
  name: string;
  blurb: string;
  seo: string;
};

export const categories: Category[] = [
  { id: "xray", name: "X-Ray Systems", blurb: "Fixed DR, CR, mobile & portable", seo: "Digital and conventional X-ray machine installation in India" },
  { id: "ultrasound", name: "Ultrasound", blurb: "Color Doppler, portable, 3D/4D", seo: "Ultrasound and color Doppler machines for hospitals and clinics" },
  { id: "carm", name: "C-Arm & Fluoroscopy", blurb: "OT imaging, 6\" / 9\" / FPD", seo: "C-arm X-ray machines for orthopaedic and surgical OT" },
  { id: "ctmri", name: "CT & MRI", blurb: "Turnkey imaging suites", seo: "CT scanner and MRI installation with site planning" },
  { id: "monitoring", name: "Patient Monitoring", blurb: "ICU, OT, ward, fetal", seo: "Multi-parameter patient monitors for ICU and OT" },
  { id: "cardio", name: "Cardiology", blurb: "ECG, TMT, defibrillator", seo: "ECG machines and defibrillators for hospitals" },
  { id: "icu", name: "ICU & Critical Care", blurb: "Ventilator, pumps, crash cart", seo: "ICU ventilators and critical care equipment" },
  { id: "ot", name: "OT Equipment", blurb: "Tables, lights, anesthesia", seo: "Operation theatre tables, LED lights and anesthesia workstations" },
  { id: "furniture", name: "Hospital Furniture", blurb: "Beds, trolleys, CSSD steel", seo: "Hospital beds and medical furniture manufacturer supplier" },
  { id: "cssd", name: "CSSD & Sterile", blurb: "Autoclave, washer, sealing", seo: "Autoclave and CSSD sterilization equipment" },
  { id: "women", name: "Women's Imaging", blurb: "Mammography, fetal Doppler", seo: "Digital mammography machine installation India" },
  { id: "poc", name: "Point of Care", blurb: "Handheld, bedside, ambulance", seo: "Portable X-ray and handheld ultrasound India" },
];

export type Product = {
  slug: string;
  name: string;
  model: string;
  category: string;
  tag: string;
  priceNote: string;
  image: string;
  short: string;
  uses: string[];
  specs: { k: string; v: string }[];
  body: string;
};

export const products: Product[] = [
  {
    slug: "digital-radiography-dr-500",
    name: "Digital Radiography System",
    model: "NX-DR 500",
    category: "xray",
    tag: "Flagship",
    priceNote: "On request",
    image: "/images/xray-digital-dr.jpg",
    short: "Ceiling-free / ceiling-suspended DR with 17×17 FPD, auto-stitching and AERB-ready layout for high-volume diagnostic centres.",
    uses: ["Diagnostic centres", "Multispecialty hospitals", "Orthopaedic clinics", "Trauma units"],
    specs: [
      { k: "Generator", v: "32 / 40 / 50 / 80 kW HF" },
      { k: "Detector", v: "17×17 CsI flat panel" },
      { k: "Pixel pitch", v: "139 μm" },
      { k: "Workstation", v: "DICOM 3.0, PACS ready" },
      { k: "Table", v: "4-way floating, 250 kg" },
      { k: "Compliance", v: "AERB, BIS, IEC 60601" },
    ],
    body: "The NX-DR 500 is specified for Indian diagnostic centres that need film-less workflow without compromising bone and chest detail. We deliver the generator, tube stand, bucky, detector, console, UPS, lead lining drawing and AERB Form II / III paperwork as one package. Installation typically finishes in 4–7 working days after civil clearance, including AEC calibration and radiographer training.",
  },
  {
    slug: "mobile-xray-hf-32",
    name: "High Frequency Mobile X-Ray",
    model: "NX-MOBILE 32",
    category: "xray",
    tag: "Ward favourite",
    priceNote: "On request",
    image: "/images/xray-mobile.jpg",
    short: "Battery-backed 32 kW mobile unit for ICU, OT, NICU and bedside imaging with tight collimation and low-dose protocols.",
    uses: ["ICU bedside", "OT confirmation films", "NICU", "Rural camps"],
    specs: [
      { k: "Output", v: "15 / 32 kW HF" },
      { k: "kV range", v: "40–125 kV" },
      { k: "mAs", v: "0.1–200" },
      { k: "Battery", v: "8-hour typical ward round" },
      { k: "Detector option", v: "Wireless FPD retrofit" },
      { k: "Weight", v: "Compact, 4-wheel castor" },
    ],
    body: "Mobile X-ray remains the workhorse of Indian ICUs. NX-MOBILE 32 is specified with a high-frequency inverter so exposure times stay short even on heavier patients. Optional wireless DR panel converts an analogue mobile into a digital unit without replacing the generator. Our engineers commission collimator alignment, APR charts and radiation survey in a single visit.",
  },
  {
    slug: "portable-battery-xray",
    name: "Portable Battery X-Ray",
    model: "NX-PORT 2.5",
    category: "poc",
    tag: "Field use",
    priceNote: "On request",
    image: "/images/xray-mobile.jpg",
    short: "2.5–4 kW suitcase / trolley portable for camps, veterinary, home visit and small clinics where a full room is not possible.",
    uses: ["Health camps", "Home radiology", "Veterinary", "PHCs"],
    specs: [
      { k: "Output", v: "2.5 / 4 kW" },
      { k: "Power", v: "Battery + 15A mains" },
      { k: "kV", v: "40–100 kV" },
      { k: "Carry", v: "Two-piece, < 25 kg tube head" },
      { k: "DR option", v: "Wireless 14×17 panel" },
      { k: "Use case", v: "AERB type-approved portable" },
    ],
    body: "Portable units are in demand from orthopaedic consultants, veterinary hospitals and camp organisers. We supply type-approved machines only, with TLD badges, lead apron kit and a simple SOP so first-time operators stay within AERB portable-use rules.",
  },
  {
    slug: "color-doppler-ultrasound",
    name: "Color Doppler Ultrasound",
    model: "NX-US 8",
    category: "ultrasound",
    tag: "Best seller",
    priceNote: "On request",
    image: "/images/ultrasound-doppler.jpg",
    short: "Cart-based shared-service ultrasound with convex, linear, TVS and cardiac probes. Suitable for radiology, OB-GYN and vascular.",
    uses: ["Radiology", "OB-GYN", "Cardiology", "Emergency"],
    specs: [
      { k: "Channels", v: "Up to 128 physical" },
      { k: "Monitor", v: "21.5\" LED, articulating" },
      { k: "Modes", v: "B, M, CDI, PDI, PW, CW" },
      { k: "Probes", v: "Convex, linear, TVS, phased, 4D" },
      { k: "Storage", v: "SSD + USB + DICOM" },
      { k: "PC-PNDT", v: "Form F ready workflow" },
    ],
    body: "The NX-US 8 is configured as a shared-service workhorse for Indian nursing homes that cannot buy a separate cardiac and OB machine. We include PC-PNDT documentation support, probe care training and a loaner probe during AMC repairs so scanning never stops for weeks.",
  },
  {
    slug: "portable-ultrasound",
    name: "Portable Ultrasound Scanner",
    model: "NX-US MINI",
    category: "ultrasound",
    tag: "OPD / ambulance",
    priceNote: "On request",
    image: "/images/ultrasound-doppler.jpg",
    short: "Laptop-style and handheld wireless scanners for anaesthesia, MSK, emergency and primary care.",
    uses: ["Emergency", "Anaesthesia", "MSK", "Primary care"],
    specs: [
      { k: "Form", v: "Laptop / handheld wireless" },
      { k: "Battery", v: "2–4 hours scanning" },
      { k: "Probes", v: "Dual-head convex+linear options" },
      { k: "Display", v: "On-device or phone/tablet" },
      { k: "Weight", v: "From 210 g (handheld)" },
      { k: "Export", v: "JPEG, MP4, DICOM" },
    ],
    body: "Point-of-care ultrasound has moved from metro ERs into district hospitals. We demo convex, linear and cardiac presets on-site so the buying doctor sees image quality on their own patients before raising a PO.",
  },
  {
    slug: "digital-c-arm",
    name: "Digital C-Arm",
    model: "NX-CARM 9HF",
    category: "carm",
    tag: "OT essential",
    priceNote: "On request",
    image: "/images/carm-ot.jpg",
    short: "9-inch image intensifier / FPD C-arm with dual 19\" monitors, 100-frame memory and actuator-controlled orbital movement.",
    uses: ["Orthopaedics", "Urology", "Pain clinic", "Gastro OT"],
    specs: [
      { k: "II / FPD", v: "9\" triple field / 21×21 FPD" },
      { k: "Generator", v: "3.5–5 kW, 40 kHz HF" },
      { k: "Memory", v: "100–10,000 frames" },
      { k: "Monitors", v: "Dual 19\" / 32\" 4K option" },
      { k: "Movement", v: "Motorised up/down, orbital" },
      { k: "Dose", v: "Pulse fluoro, last image hold" },
    ],
    body: "A C-arm is only as good as its installation geometry. We check OT door width, C-arm turning radius, lead glass for the control, and earthing before delivery. Pulse fluoroscopy and last-image-hold are commissioned so surgeons do not leave the beam on between reductions.",
  },
  {
    slug: "ct-scanner-64-slice",
    name: "64-Slice CT Scanner",
    model: "NX-CT 64",
    category: "ctmri",
    tag: "Turnkey",
    priceNote: "On request",
    image: "/images/ct-scanner.jpg",
    short: "New and certified refurbished 16/32/64/128 slice CT with full site planning, chiller, UPS, lead and AERB licensing.",
    uses: ["Diagnostic chains", "Trauma hospitals", "Cardiac CT", "Oncology staging"],
    specs: [
      { k: "Slices", v: "16 / 32 / 64 / 128" },
      { k: "Gantry", v: "70–78 cm bore" },
      { k: "Rotation", v: "0.35–0.5 s" },
      { k: "Tube", v: "MHU options on request" },
      { k: "Room", v: "Lead, HVAC, UPS, chiller" },
      { k: "Support", v: "AERB + NABH documentation" },
    ],
    body: "CT is a civil + electrical + radiation project, not a box delivery. Nexora runs the gantry path study, floor loading, chiller placement, UPS autonomy and AERB layout in AutoCAD before the machine ships. Refurbished systems are tube-tested, detector-mapped and delivered with a written remaining-life note.",
  },
  {
    slug: "mri-1-5t",
    name: "1.5T MRI System",
    model: "NX-MRI 1.5",
    category: "ctmri",
    tag: "Turnkey",
    priceNote: "On request",
    image: "https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?auto=compress&cs=tinysrgb&w=1600",
    short: "1.5T and 3.0T MRI projects with RF cage, quench pipe, helium, vibration isolation and finance coordination.",
    uses: ["Neuro", "MSK", "Cardiac MRI", "Whole-body screening"],
    specs: [
      { k: "Field", v: "1.5T / 3.0T" },
      { k: "Channels", v: "8 / 16 / 32" },
      { k: "Helium", v: "Zero boil-off options" },
      { k: "Cage", v: "RF shield, 100 dB typical" },
      { k: "Site", v: "Vibration, magnetic fringe map" },
      { k: "Coils", v: "Head, spine, body, knee, breast" },
    ],
    body: "MRI projects fail on site, not on spec sheets. We start with a fringe-field drawing, check nearby lifts and transformers, and only then freeze the magnet model. Installation includes cryogen protocol, quench pipe routing, and a 2-week applications training block for technicians.",
  },
  {
    slug: "multipara-patient-monitor",
    name: "Multi-Parameter Patient Monitor",
    model: "NX-MPM 15",
    category: "monitoring",
    tag: "ICU staple",
    priceNote: "On request",
    image: "/images/patient-monitor.jpg",
    short: "12 / 15 / 18 inch ICU monitors with ECG, SpO2, NIBP, RESP, TEMP, IBP and EtCO2 options, plus central station.",
    uses: ["ICU / HDU", "OT", "Recovery", "ER"],
    specs: [
      { k: "Display", v: "12.1 / 15.6 / 18.5 inch" },
      { k: "Parameters", v: "ECG, SpO2, NIBP, RESP, TEMP" },
      { k: "Optional", v: "2× IBP, EtCO2, AG, C.O." },
      { k: "Battery", v: "2–4 hours" },
      { k: "Network", v: "Central monitoring station" },
      { k: "Alarms", v: "Colour coded, latching" },
    ],
    body: "We size ICU monitoring as a network, not as single boxes. Cabling, nurse-station layout, UPS on the central server and probe inventory are part of the quote so hospitals are not left with five different probe types six months later.",
  },
  {
    slug: "ecg-12-channel",
    name: "12-Channel ECG Machine",
    model: "NX-ECG 12",
    category: "cardio",
    tag: "OPD",
    priceNote: "On request",
    image: "/images/ecg-machine.jpg",
    short: "Interpretive 12-channel ECG with thermal printer, Glasgow / Minnesota algorithms and USB archive.",
    uses: ["OPD", "Pre-op", "Camps", "Ambulance"],
    specs: [
      { k: "Leads", v: "12 simultaneous" },
      { k: "Printer", v: "216 mm thermal" },
      { k: "Display", v: "7–10 inch colour" },
      { k: "Memory", v: "1000+ ECG files" },
      { k: "Power", v: "Mains + Li-ion" },
      { k: "Interpretation", v: "Adult & paediatric" },
    ],
    body: "A reliable ECG is the first machine most clinics buy from us. We stock paper rolls, clips and bulbs so a ₹ paper jam does not stop a cardiology OPD. Optional Bluetooth models push traces to the hospital EMR.",
  },
  {
    slug: "biphasic-defibrillator",
    name: "Biphasic Defibrillator",
    model: "NX-DEFIB B",
    category: "cardio",
    tag: "Crash cart",
    priceNote: "On request",
    image: "/images/patient-monitor.jpg",
    short: "Biphasic defibrillator-monitor with AED mode, pacemaker and SpO2 for ER and OT crash carts.",
    uses: ["ER", "ICU", "OT", "Cath lab holding"],
    specs: [
      { k: "Energy", v: "1–200 J biphasic" },
      { k: "Modes", v: "Manual, AED, sync, pace" },
      { k: "Monitor", v: "ECG + optional SpO2/NIBP" },
      { k: "Charge", v: "< 5 s to 200 J" },
      { k: "Paddles", v: "Adult / paediatric, internal option" },
      { k: "Battery", v: "Hot-swap, 100+ shocks" },
    ],
    body: "Every defibrillator we commission is tested into a 50 Ω load, with printouts left in the biomedical file for NABH. Staff get a 30-minute crash-cart drill, not just a user manual.",
  },
  {
    slug: "icu-ventilator",
    name: "ICU Ventilator",
    model: "NX-VENT V6",
    category: "icu",
    tag: "Critical care",
    priceNote: "On request",
    image: "/images/anesthesia-machine.jpg",
    short: "Invasive and non-invasive ICU ventilator with volume, pressure, SIMV, PRVC and high-flow options.",
    uses: ["ICU", "HDU", "Isolation", "Transport (selected SKUs)"],
    specs: [
      { k: "Modes", v: "VCV, PCV, SIMV, PRVC, PSV, NIV" },
      { k: "Display", v: "12–15 inch touch" },
      { k: "O2", v: "High-pressure + low-flow" },
      { k: "Battery", v: "2 hours typical" },
      { k: "Sensors", v: "Proximal flow, ETCO2 option" },
      { k: "Compliance", v: "IEC 60601-1-12" },
    ],
    body: "Ventilator projects include compressor / central gas check, humidifier, circuit kit and biomedical training on leak test and calibration. We do not leave a machine in CMV-only because nobody was taught the other modes.",
  },
  {
    slug: "anesthesia-workstation",
    name: "Anaesthesia Workstation",
    model: "NX-ANES A9",
    category: "ot",
    tag: "OT",
    priceNote: "On request",
    image: "/images/anesthesia-machine.jpg",
    short: "Three-gas anaesthesia machine with electronic flow, ventilator, vaporizers and AGSS interface.",
    uses: ["Modular OT", "Day care surgery", "OB OT"],
    specs: [
      { k: "Gases", v: "O2, N2O, Air" },
      { k: "Vaporizers", v: "Isoflurane / Sevoflurane" },
      { k: "Ventilator", v: "Ascending bellows, PCV/VCV" },
      { k: "Safety", v: "Hypoxic guard, O2 fail" },
      { k: "Display", v: "Colour, loops optional" },
      { k: "AGSS", v: "Ready" },
    ],
    body: "We match the workstation to your gas pipeline (or cylinders), install AGSS if the OT is NABH-bound, and calibrate vaporizers with a gas analyser before first case.",
  },
  {
    slug: "led-ot-lights",
    name: "LED Surgical Lights",
    model: "NX-OT LED 160",
    category: "ot",
    tag: "OT",
    priceNote: "On request",
    image: "/images/ot-table-lights.jpg",
    short: "Single and dual-dome LED OT lights, 160,000 lux, shadow-reduced, with optional camera and wall control.",
    uses: ["Modular OT", "Minor OT", "Labour room"],
    specs: [
      { k: "Lux", v: "1,20,000 – 1,60,000" },
      { k: "CRI", v: "> 93" },
      { k: "Colour temp", v: "3500–5000 K adjustable" },
      { k: "Life", v: "50,000 hours LED" },
      { k: "Mount", v: "Ceiling / wall / mobile" },
      { k: "Camera", v: "HD/4K optional" },
    ],
    body: "Light placement is decided on the OT drawing so the dual dome does not clash with the pendant and laminar flow. We provide a lux certificate after install for NABH files.",
  },
  {
    slug: "electro-hydraulic-ot-table",
    name: "Electro-Hydraulic OT Table",
    model: "NX-TABLE EH",
    category: "ot",
    tag: "OT",
    priceNote: "On request",
    image: "/images/ot-table-lights.jpg",
    short: "C-arm compatible, 5-section electro-hydraulic table with kidney bridge, 250 kg rating and memory positions.",
    uses: ["General surgery", "Ortho", "Gynae", "Neuro (selected)"],
    specs: [
      { k: "Top", v: "5-section, radiolucent" },
      { k: "Load", v: "250–300 kg" },
      { k: "Movements", v: "Height, trendelenburg, lateral, flex" },
      { k: "Control", v: "Handset + column override" },
      { k: "Base", v: "C-arm access, antistatic" },
      { k: "Mattress", v: "Conductive, pressure distributing" },
    ],
    body: "Ortho theatres get a table with wide C-arm clearance and traction accessories. General OT gets a kidney bridge and split-leg. We never quote a single SKU for every speciality.",
  },
  {
    slug: "electric-hospital-bed",
    name: "5-Function Electric Hospital Bed",
    model: "NX-BED E5",
    category: "furniture",
    tag: "Ward",
    priceNote: "On request",
    image: "https://images.pexels.com/photos/8410647/pexels-photo-8410647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    short: "ICU and ward electric beds with trendelenburg, cardiac chair, weighing option and polymer side rails.",
    uses: ["ICU", "Private ward", "HDU", "Day care"],
    specs: [
      { k: "Functions", v: "5 motorised" },
      { k: "Safe load", v: "220 kg" },
      { k: "Rails", v: "Split polymer, drop" },
      { k: "Castors", v: "125 mm, central lock" },
      { k: "Battery", v: "Backup on power cut" },
      { k: "Options", v: "Weighing, nurse control, CPR" },
    ],
    body: "Furniture is where most vendors cut corners. Our beds ship with a spare handset, documented weld gauge and a 2-year motor warranty. Bulk ward orders include layout so circulation and nurse-station sight lines work.",
  },
  {
    slug: "vertical-autoclave",
    name: "Vertical Autoclave",
    model: "NX-AUTO V",
    category: "cssd",
    tag: "CSSD",
    priceNote: "On request",
    image: "/images/ot-table-lights.jpg",
    short: "Vertical and horizontal steam sterilizers from 22L clinic units to 250L CSSD with printer and vacuum.",
    uses: ["CSSD", "Dental", "OT sterile", "Lab"],
    specs: [
      { k: "Volume", v: "22 – 250 L" },
      { k: "Cycle", v: "121 / 134 °C" },
      { k: "Vacuum", v: "Pre / post vacuum options" },
      { k: "Record", v: "Printer / USB" },
      { k: "Safety", v: "Pressure lock, dual sensors" },
      { k: "Power", v: "Single / three phase" },
    ],
    body: "Sterile supply is a process. We pair autoclaves with sealing machines, indicator tape and a simple CSSD flow drawing — dirty, clean, sterile — so NABH assessors do not flag the room on day one.",
  },
  {
    slug: "digital-mammography",
    name: "Digital Mammography",
    model: "NX-MAM FFDM",
    category: "women",
    tag: "Women's health",
    priceNote: "On request",
    image: "/images/xray-digital-dr.jpg",
    short: "Full-field digital mammography with isocentric C-arm, tungsten tube and optional tomosynthesis.",
    uses: ["Breast clinics", "Oncology", "Women's hospitals", "Camps"],
    specs: [
      { k: "Detector", v: "24×30 cm a-Se / CsI" },
      { k: "Tube", v: "W/Rh, W/Ag" },
      { k: "Paddle", v: "Smart compression" },
      { k: "3D", v: "Tomosynthesis optional" },
      { k: "Dose", v: "AEC, low-dose modes" },
      { k: "Room", v: "AERB mammography layout" },
    ],
    body: "Mammography rooms need privacy, specific AERB shielding and a trained technologist. We handle the layout, changing cubicle, viewing workstation and AERB file so a women's hospital can start screening without juggling four vendors.",
  },
];

export const services = [
  {
    slug: "turnkey-radiology",
    title: "Turnkey Radiology Projects",
    icon: "ScanLine",
    summary: "From empty room to first exposure: civil, lead, electrical, machine, AERB and training under one contract.",
    points: ["AutoCAD layout & door/floor study", "Lead lining & radiation survey", "Machine install, AEC, DICOM", "Form II / III / IV facilitation"],
  },
  {
    slug: "xray-installation",
    title: "X-Ray Machine Installation",
    icon: "Bolt",
    summary: "Fixed DR, CR retrofit, mobile and portable X-ray commissioning with collimator alignment and dose charts.",
    points: ["HF generator setup", "DR panel pairing", "APR & paediatric charts", "Operator training in Hindi/English"],
  },
  {
    slug: "aerb-site-planning",
    title: "AERB Site Planning",
    icon: "FileCheck",
    summary: "Layout drawings, shielding calculation, TLD, RSO nomination support and inspection readiness.",
    points: ["Shielding calculation", "Warning lights & interlock", "RSO documentation", "Inspection walk-through"],
  },
  {
    slug: "amc-cmc",
    title: "AMC / CMC Service",
    icon: "Wrench",
    summary: "Preventive maintenance, breakdown, spares and uptime SLAs across X-ray, ultrasound, C-arm, CT and ICU.",
    points: ["Quarterly PM visits", "Genuine / tested spares", "Remote first-line support", "Uptime reports for NABH"],
  },
  {
    slug: "icu-ot-fitout",
    title: "ICU & OT Fit-out",
    icon: "HeartPulse",
    summary: "Monitors, ventilators, pendants, OT tables, lights, anaesthesia and gas pipeline coordination.",
    points: ["Bed-head & pendant layout", "Gas & AGSS check", "Crash cart standardisation", "Staff drills"],
  },
  {
    slug: "relocation",
    title: "Relocation & De-install",
    icon: "Truck",
    summary: "Safe shifting of X-ray, C-arm, CT and ultrasound between sites with re-calibration and re-licensing.",
    points: ["Rigging plan", "Insurance assistance", "Re-install & survey", "AERB amendment support"],
  },
];

export const processSteps = [
  { n: "01", title: "Requirement call", text: "WhatsApp us the speciality, daily patient load and room size. We reply with a short-list, not a 40-page catalogue dump." },
  { n: "02", title: "Site survey", text: "Engineer visits (or video survey for smaller towns) to check power, earthing, door width, floor load and lead path." },
  { n: "03", title: "Layout & quote", text: "You receive a line-item quote, AERB drawing and a realistic timeline — including civil that other vendors hide." },
  { n: "04", title: "Install & calibrate", text: "Delivery, positioning, collimation, AEC, DICOM, radiation survey and a signed installation report." },
  { n: "05", title: "Train & AMC", text: "Radiographer / OT / ICU training in Hindi or English, then a service calendar so the machine does not age in silence." },
];

export const stats = [
  { value: 1800, suffix: "+", label: "Installations" },
  { value: 22, suffix: "", label: "States covered" },
  { value: 60, suffix: "+", label: "Field engineers" },
  { value: 12, suffix: " hr", label: "Metro response" },
];

export const testimonials = [
  {
    quote: "Nexora closed our 300 mA DR room in six days including lead work. Image quality on chest PA is better than the chain centre we used to refer to.",
    name: "Dr. Meenakshi Rao",
    role: "Director, Prakash Diagnostics, Lucknow",
  },
  {
    quote: "Two engineers stayed overnight to finish C-arm and OT light alignment before our first ortho list. That kind of ownership is rare.",
    name: "Dr. Arjun Grewal",
    role: "Ortho surgeon, Grewal Hospital, Ludhiana",
  },
  {
    quote: "We bought eight ICU monitors and two ventilators. Probes, central station and UPS were part of the same PO — no accessories surprise later.",
    name: "Col. (Retd.) S. Kulkarni",
    role: "Admin, Deva Critical Care, Pune",
  },
  {
    quote: "PC-PNDT file, probe set and a loaner during AMC — the ultrasound purchase was boring in the best way.",
    name: "Dr. Farah Qureshi",
    role: "OB-GYN, Qureshi Nursing Home, Bhopal",
  },
];

export const cities = [
  "New Delhi", "Noida", "Gurugram", "Faridabad", "Jaipur", "Lucknow", "Kanpur", "Varanasi",
  "Patna", "Ranchi", "Guwahati", "Kolkata", "Bhubaneswar", "Raipur", "Indore", "Bhopal",
  "Ahmedabad", "Surat", "Mumbai", "Pune", "Nagpur", "Hyderabad", "Vijayawada", "Bengaluru",
  "Chennai", "Coimbatore", "Kochi", "Chandigarh", "Dehradun", "Jammu",
];

export const faqs = [
  {
    q: "Do you only sell X-ray machines or do you install them as well?",
    a: "Installation is the core of the business. Every fixed X-ray, DR, C-arm, CT or MRI quote includes positioning, calibration, radiation survey support and operator training. We are not a trading desk that disappears after delivery.",
  },
  {
    q: "Is AERB approval included?",
    a: "We prepare layout drawings, shielding suggestions, equipment data sheets and walk you through Form II / III / IV. The licence is issued by AERB to the institution; we make the file inspection-ready and attend the site if required.",
  },
  {
    q: "Can a small 20-bed nursing home buy from Nexora?",
    a: "Yes. A large share of our orders are 100 mA / 300 mA rooms, portable X-ray, a single ultrasound and a 5-bed ICU package. Quotes are sized to load, not to a metro hospital template.",
  },
  {
    q: "Do you supply refurbished CT and MRI?",
    a: "Yes, with tube-hour / helium / detector reports, installation and a written warranty. We also supply brand-new systems when the clinical case needs it. We will tell you when refurbished is the wrong answer.",
  },
  {
    q: "What is the typical time to install a digital X-ray?",
    a: "After civil and lead clearance: 4–7 working days for a standard DR room, including DICOM test and training. Mobile and portable units are often same-day or next-day commissioning.",
  },
  {
    q: "Do you work outside Delhi NCR?",
    a: "Yes. Engineers travel nationwide. Metro cities have faster spares; for the North-East and far interiors we plan buffer stock with the first invoice so you are not waiting on a courier for a fuse.",
  },
  {
    q: "Can I pay and discuss on WhatsApp?",
    a: "Yes. Most hospitals start on WhatsApp at +91 93155 15700 with room photos. We share a formal quotation PDF, GST invoice and installation report. Advance is collected against a documented PI.",
  },
  {
    q: "Do machines come with warranty and AMC?",
    a: "Standard manufacturer / Nexora warranty is 12–24 months depending on the SKU. AMC and CMC start from year two, with defined PM visits and response times in the contract.",
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  read: string;
  cover: string;
  excerpt: string;
  tags: string[];
  html: string;
};

export const articles: Article[] = [
  {
    slug: "choose-xray-machine-diagnostic-centre-india",
    title: "How to choose an X-ray machine for a diagnostic centre in India",
    date: "12 Jan 2026",
    read: "8 min",
    cover: "/images/xray-digital-dr.jpg",
    excerpt: "100 mA vs 300 mA vs DR: a practical buying framework based on daily patient load, room size and AERB — not brochure peak kW.",
    tags: ["X-Ray", "Buying guide"],
    html: `
      <p>Most diagnostic centres in India over-buy generator power and under-buy workflow. A 50 kW ceiling-suspended DR in a 20-patient-a-day centre is wasted capital; a 100 mA two-pulse unit in a trauma hospital is a clinical risk. This guide is the same filter Nexora engineers use on a first WhatsApp call.</p>
      <h2>Start with daily load, not with kW</h2>
      <p>If you see fewer than 25 films a day, a 100–300 mA high-frequency machine with a CR or a single wireless detector is enough. Between 25 and 80 studies, a 32–40 kW DR with a 17×17 panel pays back in film and chemistry savings within 18–24 months. Above that, look at auto-positioning, dual detectors and auto-stitching for scoliosis / long-leg work.</p>
      <h2>Room size decides the stand, not the salesman</h2>
      <p>A ceiling-suspended system needs height, ceiling channels and a clear floor. Many Indian centres have 9×12 ft rooms with beams. In those rooms a floor-mounted tube stand with a vertical bucky is the honest answer. We refuse to quote a ceiling system that will scrape a beam.</p>
      <h2>CR vs DR in 2026</h2>
      <p>CR still makes sense when you already own a decent generator and want to go film-less on a budget. DR wins on dose, repeat rate and throughput. If you are building a new room, skip CR — the cassette workflow will annoy radiographers within a year. If you are upgrading an existing 300 mA, a wireless FPD retrofit is often the highest-ROI rupee you can spend.</p>
      <h2>AERB is not optional paperwork</h2>
      <p>Layout, lead, warning light, interlock, TLD and RSO nomination are part of the machine cost. A cheap unit from a trader who cannot draw a layout will cost you months of licence delay. Ask any vendor for a sample AERB drawing before you pay an advance.</p>
      <h2>Questions to send on WhatsApp</h2>
      <ul>
        <li>Room inner dimensions and ceiling height (a phone video is enough)</li>
        <li>Single or three-phase power, stabilizer already present or not</li>
        <li>Chest / ortho / paediatric mix</li>
        <li>Whether you already have PACS or will print</li>
        <li>Who the RSO will be</li>
      </ul>
      <p>Send those five points to Nexora on +91 93155 15700 and you will get a short-list, not a catalogue.</p>
    `,
  },
  {
    slug: "aerb-compliance-checklist-xray-installation",
    title: "AERB compliance checklist for X-ray installation",
    date: "28 Jan 2026",
    read: "7 min",
    cover: "/images/installation-team.jpg",
    excerpt: "A room-by-room list of drawings, shielding, interlocks and forms so your first inspection does not become a second visit.",
    tags: ["AERB", "Installation"],
    html: `
      <p>The Atomic Energy Regulatory Board licenses medical diagnostic X-ray equipment in India. Hospitals lose weeks when civil work finishes and the file is still empty. Use this checklist as a wall poster in the radiology store.</p>
      <h2>Before you place the purchase order</h2>
      <ul>
        <li>Confirm the model is type-approved for the intended use (fixed / mobile / portable / C-arm / mammography / CT).</li>
        <li>Nominate an RSO and keep qualification copies ready.</li>
        <li>Freeze the room: doors, windows, occupancy of adjoining rooms, staircase, waiting area.</li>
      </ul>
      <h2>Layout drawing</h2>
      <p>A usable drawing shows equipment footprint, operator console, chest stand, door swing, warning light, occupancy factors and lead thickness on each wall, door and window. “Lead lining done” without a thickness schedule is not a drawing.</p>
      <h2>Shielding and hardware</h2>
      <ul>
        <li>Lead or equivalent on walls as per occupancy</li>
        <li>Lead-lined door with overlap</li>
        <li>Red warning light interlocked with exposure</li>
        <li>Lead glass at the console if the operator is in-room behind a barrier</li>
        <li>Aprons, thyroid collars, TLD badges, gonad shields</li>
      </ul>
      <h2>Commissioning documents</h2>
      <p>Keep the installation report, radiation survey, output / AEC verification, DICOM print, user training attendance and the manufacturer’s QA protocol in one file. NABH assessors and AERB inspectors ask for the same pile, just on different days.</p>
      <h2>Mobile and portable are not exempt from thinking</h2>
      <p>Portable use has its own type approval and SOP. You cannot run a portable as a fixed room machine behind a curtain. If that is the plan, buy a fixed unit.</p>
      <p>Nexora’s installation pack includes the drawing, survey template and a physical walk-through. WhatsApp +91 93155 15700 with your floor plan to start.</p>
    `,
  },
  {
    slug: "hospital-equipment-list-50-bed",
    title: "Equipment list to open a 50-bed hospital in India",
    date: "04 Feb 2026",
    read: "9 min",
    cover: "/images/ot-table-lights.jpg",
    excerpt: "A department-wise starter list covering OT, ICU, radiology, ward furniture and CSSD — sized for a 50-bed unit, not a 300-bed brochure.",
    tags: ["Hospital setup", "ICU", "OT"],
    html: `
      <p>Promoters ask for “complete hospital equipment” and receive a 400-line tender copy meant for a medical college. Here is a realistic 50-bed private hospital starter set that Nexora actually installs.</p>
      <h2>Radiology</h2>
      <ul>
        <li>300 mA HF X-ray with CR or single-panel DR</li>
        <li>Color Doppler ultrasound with convex, linear, TVS</li>
        <li>Optional: C-arm if ortho / urology is a pillar speciality</li>
        <li>Lead aprons, chest stand, mobile lead barrier</li>
      </ul>
      <h2>Operation theatre (one modular + one minor)</h2>
      <ul>
        <li>Electro-hydraulic OT table, C-arm compatible</li>
        <li>Dual-dome LED light + one mobile light for minor OT</li>
        <li>Anaesthesia workstation with ventilator and two vaporizers</li>
        <li>OT monitor with EtCO2, defibrillator, suction, cautery, infuser</li>
      </ul>
      <h2>ICU (6–8 beds)</h2>
      <ul>
        <li>Multi-para monitors on every bed, central station</li>
        <li>2–4 ICU ventilators + 2 high-flow / NIV</li>
        <li>Syringe and infusion pumps (plan 3 per ventilated bed)</li>
        <li>Crash cart with biphasic defibrillator, portable suction</li>
        <li>Electric ICU beds with weighing if budget allows</li>
      </ul>
      <h2>Wards and OPD</h2>
      <ul>
        <li>Fowler / electric beds, over-bed tables, IV stands, crash trolley</li>
        <li>12-channel ECG, nebulizers, pulse oximeters, BP stands</li>
        <li>Examination couches, gynaec table, dressing trolleys</li>
      </ul>
      <h2>CSSD and support</h2>
      <ul>
        <li>Horizontal or large vertical autoclave, sealing machine, ultrasonic cleaner</li>
        <li>CSSD racks, bio-medical waste trolleys, refrigerator, morgue tray as required</li>
      </ul>
      <p>Do not buy a 64-slice CT on day one unless the catchment and radiologist are real. A good DR room plus a service MoU with a nearby CT/MRI is how most 50-bed units should open. Share your DPR or bed mix on WhatsApp and we will mark what is mandatory vs what can wait for year two.</p>
    `,
  },
  {
    slug: "digital-radiography-vs-cr",
    title: "Digital radiography vs CR: which should you buy in 2026?",
    date: "19 Feb 2026",
    read: "6 min",
    cover: "/images/xray-digital-dr.jpg",
    excerpt: "Dose, repeats, cassette fatigue and rupee payback — a blunt comparison for Indian diagnostic owners.",
    tags: ["DR", "CR", "X-Ray"],
    html: `
      <p>Computed radiography replaced film. Digital radiography is replacing CR. The only question left is when the extra capital is justified in an Indian centre.</p>
      <h2>What actually changes for the radiographer</h2>
      <p>CR still means cassettes, a reader, scratching plates and a 60–90 second wait. DR means exposure to image in a few seconds, fewer repeats, and a detector that lives in the bucky or on a wireless handle. In a 60-study day that is an hour of labour and several repeat chests on elderly patients who cannot hold breath twice.</p>
      <h2>Dose</h2>
      <p>A well-set CsI DR panel typically allows a noticeable dose drop versus CR, especially on paediatric and follow-up work. If you market “low dose digital” on your board, CR is a weak claim.</p>
      <h2>Money</h2>
      <p>CR retrofit on a healthy generator is still the lowest entry to film-less. DR costs more up front but removes plates, reader service and most chemistry-era habits. Run a simple sum: monthly film / CR plate replacements + repeat rate + extra staff time. Many 40+ study centres cross over inside two years.</p>
      <h2>Hybrid path</h2>
      <p>Keep CR as backup and put one wireless FPD on the table bucky. You get 80% of DR benefit without throwing the reader away. Nexora commissions this hybrid more often than vendors admit in brochures.</p>
      <p>Send your current generator model and daily count to +91 93155 15700. We will say CR, hybrid or full DR in one paragraph.</p>
    `,
  },
  {
    slug: "c-arm-ot-buying-guide",
    title: "C-arm for orthopaedic OT: 6-inch, 9-inch or flat panel?",
    date: "03 Mar 2026",
    read: "7 min",
    cover: "/images/carm-ot.jpg",
    excerpt: "Field of view, dose, door width and monitor carts — how Indian ortho OTs should spec a C-arm.",
    tags: ["C-Arm", "OT"],
    html: `
      <p>A C-arm that cannot roll through the OT door is not a clinical discussion, it is a civil one. Measure the door, the lift and the corridor before you fall in love with a 4K monitor set.</p>
      <h2>6-inch vs 9-inch</h2>
      <p>6-inch image intensifiers are cheaper and adequate for pain blocks and simple K-wiring. 9-inch triple-field is the default for nailing, spine and urology because the field of view reduces re-positioning. If 70% of your list is ortho trauma, do not save money on a 6-inch.</p>
      <h2>Image intensifier vs FPD</h2>
      <p>Flat panel C-arms give a larger square field, better distortion control and dose options. They cost more and need a careful bumper / drape discipline in crowded Indian OTs. For a first C-arm in a 2-OT nursing home, a good 9-inch HF unit with pulse fluoro is still the rational buy. For a high-volume spine centre, FPD is worth it.</p>
      <h2>Dose discipline</h2>
      <p>Pulse fluoroscopy, last-image-hold and a surgeon who does not ride the pedal are worth more than any detector brochure. We commission these modes in front of the OT team, not in a locked manual.</p>
      <h2>Package, not a naked C-arm</h2>
      <p>Budget for lead aprons for the whole table team, thyroid collars, a mobile barrier, extra drapes and a stabilizer. The machine is half the invoice; the rest is how you stay legal and safe.</p>
      <p>Share an OT photo and door measurement on WhatsApp. We will tell you which frame size physically fits before quoting.</p>
    `,
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Equipment" },
  { href: "/services", label: "Services" },
  { href: "/installation", label: "Installation" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];
