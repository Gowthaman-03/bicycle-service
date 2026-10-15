/**
 * Bicycle Service Center - Services Provided & Customer Intake Data Model
 * File: src/service-center-data.ts
 */

// ==========================================
// 1. INTERFACES & TYPES
// ==========================================

export type ServiceCategory =
  | 'Maintenance'
  | 'Performance'
  | 'Repair'
  | 'Inspection'
  | 'Special Services';

export type BicycleType =
  | 'Road Bike'
  | 'Mountain Bike (MTB)'
  | 'Hybrid / Commuter'
  | 'Gravel / Adventure'
  | 'E-Bike / Electric'
  | 'BMX / Kids Bike'
  | 'Triathlon / TT';

export type ServiceMode =
  | 'Drop-off at Service Center'
  | 'Doorstep Pickup & Delivery'
  | 'On-site Mobile Van Assistance';

export interface ServiceItem {
  id: string;
  code: string;
  name: string;
  category: ServiceCategory;
  description: string;
  estimatedDuration: string;
  startingPrice: number;
  icon: string;
  featured?: boolean;
  includedCheckpoints: string[];
}

export interface IntakeFieldDefinition {
  fieldName: string;
  label: string;
  dataType: 'string' | 'number' | 'boolean' | 'date' | 'select' | 'multiselect' | 'textarea';
  required: boolean;
  placeholder?: string;
  options?: string[];
  description: string;
  validationRules?: string;
}

export interface IntakeCategoryGroup {
  categoryName: string;
  description: string;
  fields: IntakeFieldDefinition[];
}

// ==========================================
// 2. SERVICES PROVIDED IN SERVICE CENTER
// ==========================================

export const SERVICES_PROVIDED: ServiceItem[] = [
  // --- MAINTENANCE ---
  {
    id: 'srv-01',
    code: 'GEN-MAINT',
    name: 'General Bicycle Service',
    category: 'Maintenance',
    description: 'Complete inspection, gear indexing, brake adjustment, chain lubrication, tyre pressure check, and 24-point safety audit.',
    estimatedDuration: '2 - 3 Hours',
    startingPrice: 499,
    icon: 'pi pi-wrench',
    featured: true,
    includedCheckpoints: [
      'Brake cable tension & pad alignment',
      'Front & rear derailleur gear tuning',
      'Chain cleaning and wet/dry lube application',
      'Tyre pressure optimization & bead inspection',
      'Bolt torque check across frame and cockpit',
      'Safety test ride',
    ],
  },
  {
    id: 'srv-02',
    code: 'PREM-MAINT',
    name: 'Premium Complete Service',
    category: 'Maintenance',
    description: 'Deep strip-down service: ultrasonic drivetrain cleaning, wheel truing, headset & bottom bracket regreasing, cable replacement check, and digital health card.',
    estimatedDuration: '1 Day',
    startingPrice: 1299,
    icon: 'pi pi-cog',
    featured: true,
    includedCheckpoints: [
      'Ultrasonic chain, cassette & crankset degreasing',
      'Front and rear wheel precision truing & spoke tensioning',
      'Bottom bracket and headset overhaul with fresh marine grease',
      'Full brake bleed or inner/outer cable renewal',
      'Frame polish and hydrophobic protective coating',
      'Detailed digital condition report with mechanic notes',
    ],
  },
  {
    id: 'srv-03',
    code: 'DRIVE-CLN',
    name: 'Drivetrain Deep Clean & Tune',
    category: 'Maintenance',
    description: 'Removal and eco-friendly degreasing of chain, cassette, crankset, and derailleurs with micro-gap re-alignment.',
    estimatedDuration: '1.5 Hours',
    startingPrice: 599,
    icon: 'pi pi-sync',
    includedCheckpoints: [
      'Cassette removal & ultrasonic bath clean',
      'Chain wear measurement (elongation % check)',
      'Derailleur pulleys disassembly & lubrication',
      'Crank chainring cleaning & torque re-spec',
    ],
  },
  {
    id: 'srv-04',
    code: 'BRK-HYD',
    name: 'Hydraulic & Mechanical Brake Service',
    category: 'Maintenance',
    description: 'Hydraulic mineral/DOT oil bleeding, pad contamination check, rotor trueing, piston reset, and lever stroke calibration.',
    estimatedDuration: '1 Hour',
    startingPrice: 450,
    icon: 'pi pi-circle',
    includedCheckpoints: [
      'Brake caliper & piston clean and reset',
      'Full fluid flush & bubble-free bleed',
      'Rotor truing and degreasing with isopropyl',
      'Brake pad wear assessment & rotor bed-in check',
    ],
  },
  {
    id: 'srv-05',
    code: 'WASH-DETAIL',
    name: 'Bicycle Eco-Wash & Detailing',
    category: 'Maintenance',
    description: 'High-foaming scratch-free frame wash, drivetrain degreasing, tyre dressing, matte/gloss lacquer protection spray.',
    estimatedDuration: '45 Mins',
    startingPrice: 299,
    icon: 'pi pi-refresh',
    includedCheckpoints: [
      'Low-pressure pH-neutral bike shampoo wash',
      'Drivetrain degreasing and scrub',
      'Microfibre towel dry & compressed air moisture purge',
      'Frame UV protective spray & tire shine finish',
    ],
  },

  // --- PERFORMANCE & FITTING ---
  {
    id: 'srv-06',
    code: 'RACE-PREP',
    name: 'Performance & Race Service',
    category: 'Performance',
    description: 'Comprehensive race-day tuning, ceramic bearing optimization, electronic shifting firmware update, and weight-balanced precision setup.',
    estimatedDuration: '4 Hours',
    startingPrice: 1799,
    icon: 'pi pi-bolt',
    featured: true,
    includedCheckpoints: [
      'Shimano Di2 / SRAM AXS / Campagnolo electronic diagnostics',
      'Precision gear calibration under simulated load',
      'Aero cockpit alignment & torque spec safety lock',
      'Tyre casing inspection & high-pressure sealant check',
    ],
  },
  {
    id: 'srv-07',
    code: 'SUSP-OVER',
    name: 'Suspension Fork & Shock Service',
    category: 'Performance',
    description: '50h/200h lower leg service, damper bleed, wiper seal and foam ring replacement with premium suspension oil.',
    estimatedDuration: '1 Day',
    startingPrice: 1499,
    icon: 'pi pi-sliders-h',
    featured: true,
    includedCheckpoints: [
      'Stanchion scratch and wear inspection',
      'Wiper seals and dust scrapers replacement',
      'Bath oil refill to factory manufacturer volume',
      'Sag setup, rebound & compression damping tune for rider weight',
    ],
  },
  {
    id: 'srv-08',
    code: 'FIT-3D',
    name: 'Professional 3D Bike Fitting',
    category: 'Performance',
    description: 'Dynamic motion capture analysis, saddle height/fore-aft setup, handlebar reach/drop adjustment, and pedalling efficiency audit.',
    estimatedDuration: '2 Hours',
    startingPrice: 2499,
    icon: 'pi pi-chart-line',
    includedCheckpoints: [
      'Rider flexibility & anatomical assessment',
      'Dynamic saddle pressure & knee tracking analysis',
      'Stem angle, spacer height & handlebar roll optimization',
      'Personalized fit report with final millimeter dimensions',
    ],
  },
  {
    id: 'srv-09',
    code: 'CLEAT-FIT',
    name: 'Cleat Alignment & Fitting',
    category: 'Performance',
    description: 'SPD, SPD-SL, Look, and Speedplay cleat angle, float, stance width, and fore-aft position adjustment to eliminate knee pain.',
    estimatedDuration: '45 Mins',
    startingPrice: 499,
    icon: 'pi pi-compass',
    includedCheckpoints: [
      'Foot arch & metatarsal bone positioning',
      'Varus/valgus canting wedge assessment',
      'Cleat bolt torque and anti-seize lubrication',
    ],
  },

  // --- REPAIRS & REPLACEMENTS ---
  {
    id: 'srv-10',
    code: 'WHEEL-TRUE',
    name: 'Wheel Truing & Hub Overhaul',
    category: 'Repair',
    description: 'Lateral & radial wheel truing, spoke tension balancing, hub bearing replacement, and freehub pawl maintenance.',
    estimatedDuration: '1.5 Hours',
    startingPrice: 399,
    icon: 'pi pi-circle',
    includedCheckpoints: [
      'Tension gauge spoke balance check',
      'Freehub body flush & high-performance ratchet grease',
      'Cup & cone or cartridge sealed bearing replacement',
    ],
  },
  {
    id: 'srv-11',
    code: 'TUBEL-TYRE',
    name: 'Tyre, Tube & Tubeless Conversion',
    category: 'Repair',
    description: 'Puncture vulcanization, new tyre mounting, tubeless tape & valve installation, fresh sealant injection.',
    estimatedDuration: '30 Mins',
    startingPrice: 199,
    icon: 'pi pi-circle-fill',
    includedCheckpoints: [
      'Rim tape integrity check',
      'Tubeless valve core cleaning & seating',
      'Sealant replenishment (60-120ml per wheel)',
      'High-pressure bead lock seating test',
    ],
  },
  {
    id: 'srv-12',
    code: 'EBIKE-DIAG',
    name: 'E-Bike Diagnostics & Electrical Service',
    category: 'Repair',
    description: 'Diagnostic scan for hub/mid-drive motors, battery health check, throttle/PAS sensor repair, wire harness waterproofing.',
    estimatedDuration: '2 Hours',
    startingPrice: 999,
    icon: 'pi pi-bolt',
    includedCheckpoints: [
      'Battery charge cycle & voltage drop check',
      'Motor controller error code troubleshooting',
      'Torque/cadence sensor calibration',
      'Cable harness insulation & water-ingress sealing',
    ],
  },
  {
    id: 'srv-13',
    code: 'COMP-INSTALL',
    name: 'Custom Component & Accessories Installation',
    category: 'Repair',
    description: 'Installation of child seats, pannier racks, carbon handlebars, GPS mounts, powermeters, and groupset upgrades.',
    estimatedDuration: '1 Hour',
    startingPrice: 299,
    icon: 'pi pi-plus-circle',
    includedCheckpoints: [
      'Component compatibility check',
      'Carbon paste application on clamping surfaces',
      'Torque wrench spec tightening',
    ],
  },

  // --- INSPECTION & HEALTH ---
  {
    id: 'srv-14',
    code: 'INSP-HEALTH',
    name: 'Comprehensive Bicycle Health Audit',
    category: 'Inspection',
    description: 'Detailed 40-point safety check for frame cracks, fork fatigue, bearing play, drivetrain life remaining, and braking efficiency.',
    estimatedDuration: '45 Mins',
    startingPrice: 349,
    icon: 'pi pi-clipboard',
    includedCheckpoints: [
      'Ultrasonic/visual frame weld & carbon delamination scan',
      'Chain wear and gear tooth profile inspection',
      'Brake pad & rotor thickness gauge reading',
      'Digital PDF health report with photos',
    ],
  },
  {
    id: 'srv-15',
    code: 'INSP-PREOWN',
    name: 'Pre-Owned / Used Bike Inspection',
    category: 'Inspection',
    description: 'Third-party buyer inspection for second-hand bicycles, evaluating authentic components, wear history, and estimated repair costs.',
    estimatedDuration: '1 Hour',
    startingPrice: 499,
    icon: 'pi pi-search',
    includedCheckpoints: [
      'Authenticity verification of groupset & frame',
      'Hidden crash damage check & crash history clues',
      'Fair market valuation & required maintenance estimate',
    ],
  },

  // --- SPECIAL SERVICES ---
  {
    id: 'srv-16',
    code: 'BOX-BUILD',
    name: 'Box Bike Unboxing & Pro Assembly',
    category: 'Special Services',
    description: 'Unboxing direct-to-consumer bikes (Canyon, Polygon, Trek, Decathlon, etc.), headset/handlebar assembly, derailleur indexing, and torque setup.',
    estimatedDuration: '2 Hours',
    startingPrice: 799,
    icon: 'pi pi-box',
    includedCheckpoints: [
      'Packaging material recycling & safe unpack',
      'Fork alignment and stem preload setting',
      'Pedal installation with anti-seize lubrication',
      'Brake caliper centering & gear cable pre-stretching',
    ],
  },
  {
    id: 'srv-17',
    code: 'DOOR-EMERG',
    name: 'Emergency Roadside / Doorstep Assistance',
    category: 'Special Services',
    description: 'Mobile mechanic van dispatched to your home, office, or roadside breakdown location for rapid repairs.',
    estimatedDuration: 'On Demand',
    startingPrice: 599,
    icon: 'pi pi-map-marker',
    includedCheckpoints: [
      'Immediate on-the-spot flat tyre / chain snap fix',
      'Shift/brake quick rescue adjustment',
      'Free transport to workshop if catastrophic failure occurs',
    ],
  },
];

// ==========================================
// 3. DATA NAMES TO COLLECT FROM CUSTOMERS (INTAKE FORM)
// ==========================================

export const CUSTOMER_INTAKE_DATA_FIELDS: IntakeCategoryGroup[] = [
  {
    categoryName: 'Customer Personal Details',
    description: 'Basic contact information of the bicycle owner for notifications and invoicing.',
    fields: [
      {
        fieldName: 'customerFullName',
        label: 'Full Name',
        dataType: 'string',
        required: true,
        placeholder: 'e.g. Rahul Sharma',
        description: "Customer's first and last name.",
        validationRules: 'Required, min 3 characters',
      },
      {
        fieldName: 'primaryPhoneNumber',
        label: 'Mobile / WhatsApp Number',
        dataType: 'string',
        required: true,
        placeholder: 'e.g. 9876543210',
        description: 'Primary mobile number for SMS/WhatsApp job-card updates and approval alerts.',
        validationRules: 'Required, 10 digit numerical format',
      },
      {
        fieldName: 'alternatePhoneNumber',
        label: 'Alternate Contact Number',
        dataType: 'string',
        required: false,
        placeholder: 'e.g. 9811223344',
        description: 'Secondary emergency phone number.',
        validationRules: 'Optional, 10 digits if entered',
      },
      {
        fieldName: 'emailAddress',
        label: 'Email Address',
        dataType: 'string',
        required: true,
        placeholder: 'e.g. rahul@example.com',
        description: 'Email for sending digital inspection reports, estimates, and invoice receipts.',
        validationRules: 'Required, valid email format',
      },
      {
        fieldName: 'serviceLocationAddress',
        label: 'Address / Landmark',
        dataType: 'textarea',
        required: false,
        placeholder: 'Door No, Street Name, Landmark, Area',
        description: 'Residential or office address for doorstep pickup or delivery.',
        validationRules: 'Required if Doorstep Pickup service is chosen',
      },
      {
        fieldName: 'pincode',
        label: 'Pincode / Postal Code',
        dataType: 'string',
        required: false,
        placeholder: 'e.g. 600001',
        description: 'Service area validation for mobile mechanics.',
        validationRules: '6 digits',
      },
    ],
  },
  {
    categoryName: 'Bicycle Specifications',
    description: 'Technical details of the bicycle to ensure parts compatibility and appropriate tooling.',
    fields: [
      {
        fieldName: 'bicycleBrand',
        label: 'Bicycle Brand / Maker',
        dataType: 'string',
        required: true,
        placeholder: 'e.g. Trek, Giant, Specialized, Scott, Firefox, Decathlon Btwin',
        description: 'The brand name of the bicycle.',
        validationRules: 'Required',
      },
      {
        fieldName: 'bicycleModel',
        label: 'Model & Year',
        dataType: 'string',
        required: false,
        placeholder: 'e.g. Marlin 7 (2023), Domane AL 2, Rockrider 540',
        description: 'Specific model and approximate manufacturing year.',
      },
      {
        fieldName: 'bicycleType',
        label: 'Bicycle Category / Type',
        dataType: 'select',
        required: true,
        options: [
          'Road Bike',
          'Mountain Bike (MTB)',
          'Hybrid / Commuter',
          'Gravel / Adventure',
          'E-Bike / Electric',
          'BMX / Kids Bike',
          'Triathlon / TT',
        ],
        description: 'Classification of the bicycle.',
        validationRules: 'Required',
      },
      {
        fieldName: 'frameSerialNumber',
        label: 'Frame Number / Serial ID',
        dataType: 'string',
        required: false,
        placeholder: 'Found under the bottom bracket shell (e.g. WTU1234567X)',
        description: 'Unique bicycle frame serial number for theft prevention & warranty records.',
      },
      {
        fieldName: 'drivetrainType',
        label: 'Gearing System Type',
        dataType: 'select',
        required: false,
        options: [
          'Single Speed / Fixie',
          'Mechanical Derailleur (Shimano / SRAM / Microshift)',
          'Electronic Shifting (Shimano Di2 / SRAM eTap AXS)',
          'Internal Gear Hub (Shimano Nexus / Rohloff)',
        ],
        description: 'Type of drivetrain installed.',
      },
      {
        fieldName: 'brakeSystemType',
        label: 'Brake Type',
        dataType: 'select',
        required: false,
        options: [
          'Hydraulic Disc Brakes',
          'Mechanical Disc Brakes (Cable-actuated)',
          'Rim Brakes (V-Brake / Caliper / Cantilever)',
          'Coaster / Drum Brake',
        ],
        description: 'Type of braking mechanism installed.',
      },
      {
        fieldName: 'wheelSize',
        label: 'Wheel / Tyre Size',
        dataType: 'select',
        required: false,
        options: ['29 Inch', '27.5 Inch (650B)', '26 Inch', '700c Road', '24 Inch', '20 Inch'],
        description: 'Wheel rim diameter for replacement tubes and tyres.',
      },
    ],
  },
  {
    categoryName: 'Service Selection & Reported Issues',
    description: 'What services the customer requests and specific problems or symptoms noticed.',
    fields: [
      {
        fieldName: 'selectedServiceIds',
        label: 'Requested Services',
        dataType: 'multiselect',
        required: true,
        description: 'List of Service IDs chosen by the customer (e.g., General Service, Wheel Truing).',
        validationRules: 'At least 1 service must be selected',
      },
      {
        fieldName: 'primaryIssueDescription',
        label: 'Reported Problems / Symptoms',
        dataType: 'textarea',
        required: false,
        placeholder: 'e.g. Clicking noise while pedalling uphill, rear gears skipping between 4th and 5th cog, spongy front brake lever.',
        description: 'Specific concerns, sounds, or issues the rider is facing.',
      },
      {
        fieldName: 'servicePriority',
        label: 'Service Urgency Level',
        dataType: 'select',
        required: true,
        options: ['Standard (24-48 Hours)', 'Express / Same Day Service', 'Race Day Emergency Priority'],
        description: 'Turnaround timeline requested by customer.',
      },
      {
        fieldName: 'estimatedBudgetCap',
        label: 'Pre-Approved Parts Replacement Limit (₹)',
        dataType: 'number',
        required: false,
        placeholder: 'e.g. 1000',
        description: 'Maximum amount our mechanics can replace consumable parts (pads, cables, chain) without pausing for phone approval.',
      },
    ],
  },
  {
    categoryName: 'Scheduling & Logistics',
    description: 'Booking date, time window, and delivery mode preference.',
    fields: [
      {
        fieldName: 'preferredBookingDate',
        label: 'Preferred Service Date',
        dataType: 'date',
        required: true,
        description: 'The date on which the bicycle will be dropped off or picked up.',
        validationRules: 'Required, cannot be in the past',
      },
      {
        fieldName: 'preferredTimeSlot',
        label: 'Preferred Time Window',
        dataType: 'select',
        required: true,
        options: [
          'Morning Slot (09:00 AM - 12:00 PM)',
          'Afternoon Slot (12:00 PM - 04:00 PM)',
          'Evening Slot (04:00 PM - 08:00 PM)',
        ],
        description: 'Convenient time slot for handover.',
      },
      {
        fieldName: 'serviceMode',
        label: 'Service Handover Mode',
        dataType: 'select',
        required: true,
        options: [
          'Drop-off at Service Center',
          'Doorstep Pickup & Delivery',
          'On-site Mobile Van Assistance',
        ],
        description: 'How the bicycle gets to the workshop.',
      },
      {
        fieldName: 'specialInstructions',
        label: 'Special Notes / Rider Instructions',
        dataType: 'textarea',
        required: false,
        placeholder: 'e.g. Keep old replaced parts in a bag, do not wash saddle bag, gate code: 1234.',
        description: 'Any extra preferences for the mechanics or delivery staff.',
      },
    ],
  },
];

// ==========================================
// 4. SUMMARY OF FIELD NAMES (QUICK REFERENCE)
// ==========================================

export const ALL_INTAKE_FIELD_NAMES = [
  // Customer Details
  'customerFullName',
  'primaryPhoneNumber',
  'alternatePhoneNumber',
  'emailAddress',
  'serviceLocationAddress',
  'pincode',

  // Bicycle Specs
  'bicycleBrand',
  'bicycleModel',
  'bicycleType',
  'frameSerialNumber',
  'drivetrainType',
  'brakeSystemType',
  'wheelSize',

  // Service & Issues
  'selectedServiceIds',
  'primaryIssueDescription',
  'servicePriority',
  'estimatedBudgetCap',

  // Scheduling & Logistics
  'preferredBookingDate',
  'preferredTimeSlot',
  'serviceMode',
  'specialInstructions',
] as const;

export type IntakeFieldName = typeof ALL_INTAKE_FIELD_NAMES[number];
