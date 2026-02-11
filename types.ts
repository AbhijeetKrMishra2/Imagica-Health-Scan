
export enum AppView {
  HOME = 'home',
  BOOKING = 'booking',
  REPORTS = 'reports',
  INVESTORS = 'investors',
  LOCATIONS = 'locations',
  CAREERS = 'careers',
  ABOUT = 'about',
  CONTACT = 'contact'
}

export interface HealthTest {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Pathology' | 'Radiology' | 'Preventive';
}

export interface Booking {
  id: string;
  testId: string;
  patientName: string;
  date: string;
  slot: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
}

export interface InvestorDoc {
  title: string;
  year: string;
  category: 'Financial' | 'Governance' | 'Meeting';
  url: string;
}