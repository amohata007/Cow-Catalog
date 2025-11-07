export interface Cow {
  id: string; // ear tag
  sex: 'Male' | 'Female';
  pen: string;
  status: 'Active' | 'In Treatment' | 'Deceased';
  weight?: number;
  lastEventDate?: string;
  events?: any;
}
