// Mock data for Iquanta CRM

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  assignedCounselor: string;
  status: 'New Lead' | 'Contact Attempted' | 'Contacted' | 'Qualified' | 'Interested' | 'Application Started' | 'Application Submitted' | 'Admission Offered' | 'Enrolled' | 'Lost Lead';
  lastContacted: string;
  nextFollowUp: string;
  leadScore: number;
  createdAt: string;
  program: string;
  location: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  status: 'Active' | 'Inactive' | 'Graduated' | 'Dropped';
  enrollmentDate: string;
  counselor: string;
  documents: number;
}

export interface Application {
  id: string;
  studentName: string;
  email: string;
  program: string;
  status: 'Application Started' | 'Documents Pending' | 'Documents Verified' | 'Under Review' | 'Admission Offered' | 'Enrolled';
  submittedDate: string;
  counselor: string;
  completionPercentage: number;
}

export interface Communication {
  id: string;
  studentName: string;
  type: 'Email' | 'Call' | 'WhatsApp' | 'SMS' | 'Meeting';
  message: string;
  timestamp: string;
  counselor: string;
  direction: 'Incoming' | 'Outgoing';
}

export interface Document {
  id: string;
  studentName: string;
  documentType: string;
  uploadDate: string;
  status: 'Pending' | 'Verified' | 'Rejected';
  verifiedBy?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Completed';
  relatedTo: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: string;
  status: 'Active' | 'Paused' | 'Completed';
  leads: number;
  conversions: number;
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
}

export const mockLeads: Lead[] = [
  {
    id: 'L001',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 98765 43210',
    source: 'Website',
    assignedCounselor: 'Priya Patel',
    status: 'Qualified',
    lastContacted: '2026-03-05',
    nextFollowUp: '2026-03-08',
    leadScore: 85,
    createdAt: '2026-02-15',
    program: 'MBA',
    location: 'Mumbai'
  },
  {
    id: 'L002',
    name: 'Ananya Gupta',
    email: 'ananya.gupta@email.com',
    phone: '+91 98765 43211',
    source: 'Social Media',
    assignedCounselor: 'Arjun Singh',
    status: 'Interested',
    lastContacted: '2026-03-06',
    nextFollowUp: '2026-03-09',
    leadScore: 78,
    createdAt: '2026-02-20',
    program: 'MS CS',
    location: 'Bangalore'
  },
  {
    id: 'L003',
    name: 'Vikram Reddy',
    email: 'vikram.reddy@email.com',
    phone: '+91 98765 43212',
    source: 'Referral',
    assignedCounselor: 'Priya Patel',
    status: 'Application Started',
    lastContacted: '2026-03-04',
    nextFollowUp: '2026-03-10',
    leadScore: 92,
    createdAt: '2026-02-10',
    program: 'BBA',
    location: 'Delhi'
  },
  {
    id: 'L004',
    name: 'Sneha Kapoor',
    email: 'sneha.kapoor@email.com',
    phone: '+91 98765 43213',
    source: 'Google Ads',
    assignedCounselor: 'Arjun Singh',
    status: 'Contacted',
    lastContacted: '2026-03-07',
    nextFollowUp: '2026-03-11',
    leadScore: 65,
    createdAt: '2026-02-25',
    program: 'MBA',
    location: 'Chennai'
  },
  {
    id: 'L005',
    name: 'Amit Verma',
    email: 'amit.verma@email.com',
    phone: '+91 98765 43214',
    source: 'Website',
    assignedCounselor: 'Neha Kumar',
    status: 'New Lead',
    lastContacted: '2026-03-07',
    nextFollowUp: '2026-03-08',
    leadScore: 45,
    createdAt: '2026-03-01',
    program: 'MS Data Science',
    location: 'Pune'
  },
  {
    id: 'L006',
    name: 'Pooja Menon',
    email: 'pooja.menon@email.com',
    phone: '+91 98765 43215',
    source: 'Education Fair',
    assignedCounselor: 'Neha Kumar',
    status: 'Application Submitted',
    lastContacted: '2026-03-03',
    nextFollowUp: '2026-03-12',
    leadScore: 95,
    createdAt: '2026-01-30',
    program: 'MBA',
    location: 'Hyderabad'
  },
  {
    id: 'L007',
    name: 'Karan Malhotra',
    email: 'karan.malhotra@email.com',
    phone: '+91 98765 43216',
    source: 'Social Media',
    assignedCounselor: 'Priya Patel',
    status: 'Contact Attempted',
    lastContacted: '2026-03-06',
    nextFollowUp: '2026-03-09',
    leadScore: 55,
    createdAt: '2026-02-28',
    program: 'BBA',
    location: 'Kolkata'
  },
  {
    id: 'L008',
    name: 'Divya Iyer',
    email: 'divya.iyer@email.com',
    phone: '+91 98765 43217',
    source: 'Referral',
    assignedCounselor: 'Arjun Singh',
    status: 'Admission Offered',
    lastContacted: '2026-03-05',
    nextFollowUp: '2026-03-13',
    leadScore: 98,
    createdAt: '2026-01-20',
    program: 'MS CS',
    location: 'Bangalore'
  }
];

export const mockStudents: Student[] = [
  {
    id: 'S001',
    name: 'Rohan Desai',
    email: 'rohan.desai@email.com',
    phone: '+91 98765 43220',
    program: 'MBA',
    status: 'Active',
    enrollmentDate: '2025-08-15',
    counselor: 'Priya Patel',
    documents: 8
  },
  {
    id: 'S002',
    name: 'Priya Sinha',
    email: 'priya.sinha@email.com',
    phone: '+91 98765 43221',
    program: 'MS CS',
    status: 'Active',
    enrollmentDate: '2025-08-20',
    counselor: 'Arjun Singh',
    documents: 7
  },
  {
    id: 'S003',
    name: 'Aditya Joshi',
    email: 'aditya.joshi@email.com',
    phone: '+91 98765 43222',
    program: 'BBA',
    status: 'Active',
    enrollmentDate: '2025-09-01',
    counselor: 'Neha Kumar',
    documents: 6
  }
];

export const mockApplications: Application[] = [
  {
    id: 'A001',
    studentName: 'Vikram Reddy',
    email: 'vikram.reddy@email.com',
    program: 'BBA',
    status: 'Application Started',
    submittedDate: '2026-03-01',
    counselor: 'Priya Patel',
    completionPercentage: 35
  },
  {
    id: 'A002',
    studentName: 'Pooja Menon',
    email: 'pooja.menon@email.com',
    program: 'MBA',
    status: 'Documents Verified',
    submittedDate: '2026-02-20',
    counselor: 'Neha Kumar',
    completionPercentage: 75
  },
  {
    id: 'A003',
    studentName: 'Divya Iyer',
    email: 'divya.iyer@email.com',
    program: 'MS CS',
    status: 'Admission Offered',
    submittedDate: '2026-02-10',
    counselor: 'Arjun Singh',
    completionPercentage: 100
  },
  {
    id: 'A004',
    studentName: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    program: 'MBA',
    status: 'Documents Pending',
    submittedDate: '2026-03-03',
    counselor: 'Priya Patel',
    completionPercentage: 50
  },
  {
    id: 'A005',
    studentName: 'Ananya Gupta',
    email: 'ananya.gupta@email.com',
    program: 'MS CS',
    status: 'Under Review',
    submittedDate: '2026-02-25',
    counselor: 'Arjun Singh',
    completionPercentage: 85
  }
];

export const mockCommunications: Communication[] = [
  {
    id: 'C001',
    studentName: 'Rahul Sharma',
    type: 'Email',
    message: 'Sent program brochure and admission requirements',
    timestamp: '2026-03-05 10:30 AM',
    counselor: 'Priya Patel',
    direction: 'Outgoing'
  },
  {
    id: 'C002',
    studentName: 'Ananya Gupta',
    type: 'Call',
    message: 'Discussed scholarship opportunities and application process',
    timestamp: '2026-03-06 02:15 PM',
    counselor: 'Arjun Singh',
    direction: 'Outgoing'
  },
  {
    id: 'C003',
    studentName: 'Vikram Reddy',
    type: 'WhatsApp',
    message: 'Answered questions about course curriculum',
    timestamp: '2026-03-04 04:45 PM',
    counselor: 'Priya Patel',
    direction: 'Outgoing'
  },
  {
    id: 'C004',
    studentName: 'Pooja Menon',
    type: 'Email',
    message: 'Application status update - documents verified',
    timestamp: '2026-03-03 11:00 AM',
    counselor: 'Neha Kumar',
    direction: 'Outgoing'
  },
  {
    id: 'C005',
    studentName: 'Divya Iyer',
    type: 'Call',
    message: 'Congratulations call - admission offered',
    timestamp: '2026-03-05 09:30 AM',
    counselor: 'Arjun Singh',
    direction: 'Outgoing'
  }
];

export const mockDocuments: Document[] = [
  {
    id: 'D001',
    studentName: 'Rahul Sharma',
    documentType: 'ID Proof',
    uploadDate: '2026-03-01',
    status: 'Verified',
    verifiedBy: 'Admin'
  },
  {
    id: 'D002',
    studentName: 'Rahul Sharma',
    documentType: 'Academic Certificates',
    uploadDate: '2026-03-02',
    status: 'Pending'
  },
  {
    id: 'D003',
    studentName: 'Pooja Menon',
    documentType: 'Entrance Exam Scorecard',
    uploadDate: '2026-02-28',
    status: 'Verified',
    verifiedBy: 'Admin'
  },
  {
    id: 'D004',
    studentName: 'Vikram Reddy',
    documentType: 'ID Proof',
    uploadDate: '2026-03-03',
    status: 'Rejected'
  }
];

export const mockTasks: Task[] = [
  {
    id: 'T001',
    title: 'Follow up with Rahul Sharma',
    description: 'Call to discuss missing documents',
    assignedTo: 'Priya Patel',
    dueDate: '2026-03-08',
    priority: 'High',
    status: 'Pending',
    relatedTo: 'Rahul Sharma'
  },
  {
    id: 'T002',
    title: 'Schedule interview for Ananya Gupta',
    description: 'Arrange admission interview with program coordinator',
    assignedTo: 'Arjun Singh',
    dueDate: '2026-03-09',
    priority: 'High',
    status: 'In Progress',
    relatedTo: 'Ananya Gupta'
  },
  {
    id: 'T003',
    title: 'Send scholarship information to Vikram Reddy',
    description: 'Email scholarship options and eligibility criteria',
    assignedTo: 'Priya Patel',
    dueDate: '2026-03-10',
    priority: 'Medium',
    status: 'Pending',
    relatedTo: 'Vikram Reddy'
  },
  {
    id: 'T004',
    title: 'Verify documents for Pooja Menon',
    description: 'Review and verify submitted academic certificates',
    assignedTo: 'Admin',
    dueDate: '2026-03-07',
    priority: 'High',
    status: 'Completed',
    relatedTo: 'Pooja Menon'
  },
  {
    id: 'T005',
    title: 'Welcome email to Divya Iyer',
    description: 'Send admission confirmation and next steps',
    assignedTo: 'Neha Kumar',
    dueDate: '2026-03-08',
    priority: 'Medium',
    status: 'Pending',
    relatedTo: 'Divya Iyer'
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: 'CAM001',
    name: 'Spring 2026 MBA Admissions',
    type: 'Google Ads',
    status: 'Active',
    leads: 156,
    conversions: 23,
    budget: 50000,
    spent: 32000,
    startDate: '2026-02-01',
    endDate: '2026-04-30'
  },
  {
    id: 'CAM002',
    name: 'Social Media - MS Programs',
    type: 'Social Media',
    status: 'Active',
    leads: 89,
    conversions: 15,
    budget: 30000,
    spent: 18000,
    startDate: '2026-02-15',
    endDate: '2026-04-15'
  },
  {
    id: 'CAM003',
    name: 'Education Fair Mumbai',
    type: 'Event',
    status: 'Completed',
    leads: 234,
    conversions: 45,
    budget: 100000,
    spent: 95000,
    startDate: '2026-01-15',
    endDate: '2026-01-20'
  },
  {
    id: 'CAM004',
    name: 'Email Campaign - BBA Program',
    type: 'Email Marketing',
    status: 'Active',
    leads: 67,
    conversions: 8,
    budget: 15000,
    spent: 8000,
    startDate: '2026-02-20',
    endDate: '2026-03-31'
  }
];

// Analytics data
export const conversionFunnelData = [
  { stage: 'Website Visitors', count: 5000 },
  { stage: 'Leads Generated', count: 1200 },
  { stage: 'Contacted', count: 850 },
  { stage: 'Qualified', count: 450 },
  { stage: 'Applications', count: 280 },
  { stage: 'Enrolled', count: 95 }
];

export const admissionTrendData = [
  { month: 'Sep', enrolled: 45, applications: 120 },
  { month: 'Oct', enrolled: 38, applications: 95 },
  { month: 'Nov', enrolled: 52, applications: 110 },
  { month: 'Dec', enrolled: 41, applications: 88 },
  { month: 'Jan', enrolled: 55, applications: 135 },
  { month: 'Feb', enrolled: 62, applications: 145 },
  { month: 'Mar', enrolled: 28, applications: 78 }
];

export const leadSourceData = [
  { name: 'Website', value: 450 },
  { name: 'Social Media', value: 280 },
  { name: 'Referral', value: 220 },
  { name: 'Google Ads', value: 150 },
  { name: 'Education Fair', value: 100 }
];

export const counselorPerformanceData = [
  { name: 'Priya Patel', leads: 85, conversions: 32, revenue: 1600000 },
  { name: 'Arjun Singh', leads: 78, conversions: 28, revenue: 1400000 },
  { name: 'Neha Kumar', leads: 65, conversions: 24, revenue: 1200000 },
  { name: 'Rajesh Kumar', leads: 52, conversions: 18, revenue: 900000 }
];
