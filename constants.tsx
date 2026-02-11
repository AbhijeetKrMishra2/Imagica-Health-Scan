
import { HealthTest, InvestorDoc } from './types';

export const TESTS: HealthTest[] = [
  { id: '1', name: 'Executive Health Checkup', description: 'Comprehensive panel including CBC, LFT, KFT, Vitamin D, and Lipid Profile.', price: 4999, category: 'Preventive' },
  { 
    id: '2', 
    name: 'Cancer Screening Imaging Package', 
    description: 'Comprehensive Head-to-Toe screening: MRI/CT Brain, USG Thyroid, HRCT Thorax, Sonomammography, USG Abdomen, Prostate MRI/TRUS, and Lumps/Bumps Ultrasound. Includes CEA, CA-125, PSA, and Serum LDH markers.', 
    price: 12500, 
    category: 'Preventive' 
  },
  { 
    id: '3', 
    name: 'Liver Elastography (Resona i9)', 
    description: '1st Time in Jharkhand: 2D Shear-Wave Elastography for non-invasive assessment of liver stiffness, fibrosis, and cirrhosis using RESONA i9 technology.', 
    price: 3500, 
    category: 'Radiology' 
  },
  { 
    id: '4', 
    name: 'Coronary CT & Calcium Scoring', 
    description: 'Non-invasive test using X-rays to produce detailed images of heart and blood vessels. Helps identify coronary artery blockages. Especially useful for asymptomatic diabetes patients age > 40.', 
    price: 8500, 
    category: 'Radiology' 
  },
  { 
    id: '5', 
    name: 'All Kind of Guided True Cut Biopsy', 
    description: 'Medical procedure to obtain a small sample of tissue from a suspected abnormality or mass. Performed under local anesthesia using a special needle for precise core extraction.', 
    price: 5000, 
    category: 'Pathology' 
  },
  { id: '6', name: 'Digital Mammography (MAM)', description: 'High-resolution Venus Digital Mammography for advanced breast screening.', price: 2500, category: 'Radiology' },
];

export const SERVICES_LIST = [
  { name: 'MRI 3 Tesla', color: 'bg-cyan-500' },
  { name: 'CT 512 Slice', color: 'bg-cyan-500' },
  { name: 'Ultrasound', color: 'bg-yellow-500' },
  { name: '2D Liver Elastography', color: 'bg-yellow-500' },
  { name: 'Mammography', color: 'bg-purple-500' },
  { name: '4D Echo', color: 'bg-purple-500' },
  { name: 'Digital X-Ray', color: 'bg-red-500' },
  { name: 'Uroflowmetry', color: 'bg-red-500' },
  { name: 'Endoscopy', color: 'bg-green-500' },
  { name: 'NCV', color: 'bg-green-500' },
  { name: '12 Channel ECG', color: 'bg-slate-700' },
  { name: 'True Guided Biopsies', color: 'bg-slate-700' },
  { name: 'Coronary Angiography', color: 'bg-pink-400' },
  { name: 'Fully Automatic Pathology', color: 'bg-pink-400' },
];

export const EXPERTS = [
  { 
    name: 'Dr. Mihir Kr. Jha', 
    title: 'Director & Consultant Radiologist', 
    qualifications: 'MBBS (CMC, Kolkata), MD Radiology (IPGME & R Kolkata), FRCR-II A (London)', 
    specialty: 'Radiology & Imaging',
    image: '' 
  },
  { 
    name: 'Dr. Suraj H. Chavan', 
    title: 'Consultant Cardiologist', 
    qualifications: 'MBBS, MD, DNB (Cardiology)', 
    specialty: 'Cardiology',
    image: '' 
  },
  { 
    name: 'Dr. Udayan Bhattacharya', 
    title: 'Consultant Radiologist', 
    qualifications: 'MBBS, MD Radiology', 
    specialty: 'Radiology',
    image: '' 
  },
  { 
    name: 'Dr. Cuckoo Udayan', 
    title: 'Consultant Radiologist', 
    qualifications: 'MBBS, DNB Radiodiagnosis, Fellowship in Oncoimaging, FRCR 2A (London)', 
    specialty: 'Oncoimaging',
    image: '' 
  },
  { 
    name: 'Dr. Varsha Sinha', 
    title: 'Sonologist', 
    qualifications: 'MBBS, MS (OBS)', 
    specialty: 'Sonology',
    image: '' 
  },
  { 
    name: 'Dr. Seema Modi', 
    title: 'Sonologist', 
    qualifications: 'MBBS, MS (OBS)', 
    specialty: 'Sonology',
    image: '' 
  },
];

export const EQUIPMENTS = [
  { 
    name: 'Philips Achieva MRI 3 Tesla', 
    description: 'Gold-standard high-field MRI for exceptional image clarity and diagnostic precision.', 
    image: '',
    category: 'Radiology'
  },
  { 
    name: 'Philips Ingenuity 512 Slice CT Scan', 
    description: 'Unmatched speed and resolution with significant dose reduction for patient safety.', 
    image: '',
    category: 'Radiology'
  },
  { 
    name: 'GE Voluson S8 Ultrasound', 
    description: 'Premium ultrasound system with specialized 2D, 3D, and 4D imaging capabilities.', 
    image: '',
    category: 'Ultrasound'
  },
  { 
    name: 'Mindray Resona i9 Ultrasound', 
    description: 'Exclusive 2D Shear-Wave Elastography technology, 1st time in Jharkhand for advanced liver characterization.', 
    image: '',
    category: 'Ultrasound'
  },
  { 
    name: 'Allengers Digital X-Ray (DR System)', 
    description: '1000 mA high-frequency system for instantaneous digital imaging.', 
    image: '',
    category: 'X-Ray'
  },
  { 
    name: 'Allengers MAM - Venus Digital Mammography', 
    description: 'Dedicated digital mammography system for precise breast cancer screening.', 
    image: '',
    category: 'Mammography'
  },
];

export const INVESTOR_DOCS: InvestorDoc[] = [
  { title: 'Annual Report 2023-24', year: '2024', category: 'Financial', url: '#' },
  { title: 'Q3 Financial Statement', year: '2023', category: 'Financial', url: '#' },
  { title: 'Corporate Governance Report', year: '2023', category: 'Governance', url: '#' },
];

export const CONTACT_INFO = {
  name: 'IMAGICA HEALTH SCAN',
  address: 'Sri Ram Vatika, Barwadda Road, Dhaiya Dhanbad, 826001',
  phone: '+91 91550 01150',
  hours: '7:30 AM – 7:00 PM',
  email: 'imagicahealthscandhanbad@gmail.com'
};
