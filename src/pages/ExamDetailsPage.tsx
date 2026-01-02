import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, MapPin, BookOpen, CheckCircle, AlertCircle, Download, ExternalLink, Star, Target, Award, TrendingUp, FileText, Calculator, Brain, Lightbulb, DollarSign, GraduationCap, Building, Trophy, ChevronDown, ChevronUp, Info, Phone, Mail, X } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const ExamDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    batchType: '',
    batchTime: '',
    preferredMode: '',
    course: '',
    duration: '',
    city: ''
  });

  // Function to handle tab change with smooth scroll to top
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    // Smooth scroll to top of the main content area
    setTimeout(() => {
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        // Get the position of the main content relative to the viewport
        const rect = mainContent.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Account for mobile header height (50px) and desktop (56px) with additional offset
        const headerOffset = window.innerWidth < 640 ? 70 : 70; // Mobile vs desktop
        const targetPosition = rect.top + scrollTop - headerOffset;
        
        // Use smooth scrolling with fallback for older browsers
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({ 
            top: targetPosition, 
            behavior: 'smooth' 
          });
        } else {
          // Fallback for browsers that don't support smooth scrolling
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 500; // 500ms animation
          let start: number | null = null;
          
          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };
          
          requestAnimationFrame(animation);
        }
      } else {
        // Fallback: scroll to top of page
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      }
    }, 100); // Small delay to ensure tab content is rendered
  };

  // Easing function for smooth animation fallback
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const keyDates = [
    { event: "Application Start", date: "November 2024", status: "upcoming", description: "Online application form available" },
    { event: "Application Deadline", date: "December 2024", status: "upcoming", description: "Last date to submit application" },
    { event: "Application Correction", date: "December 2024", status: "upcoming", description: "Edit application details" },
    { event: "Admit Card Release", date: "January 2025", status: "upcoming", description: "Download hall ticket" },
    { event: "JEE Main Session 1", date: "January 2025", status: "upcoming", description: "First attempt examination" },
    { event: "Result Declaration", date: "February 2025", status: "upcoming", description: "Session 1 results" },
    { event: "JEE Main Session 2", date: "April 2025", status: "upcoming", description: "Second attempt examination" },
    { event: "Final Result", date: "May 2025", status: "upcoming", description: "Combined result of both sessions" }
  ];

  const eligibilityPoints = [
    { 
      title: "Educational Qualification",
      points: [
        "Passed 12th standard or equivalent examination",
        "Must have studied Physics, Chemistry, and Mathematics as compulsory subjects",
        "Candidates appearing in 12th in 2025 are also eligible"
      ]
    },
    {
      title: "Minimum Marks Requirement",
      points: [
        "General/OBC-NCL: 75% marks in 12th or be in top 20 percentile",
        "SC/ST/PwD: 65% marks in 12th or be in top 20 percentile",
        "No minimum marks for admission to NITs, IIITs, CFTIs"
      ]
    },
    {
      title: "Age Criteria",
      points: [
        "No age limit for JEE Main 2025",
        "However, individual institutes may have age restrictions",
        "Check specific college requirements before applying"
      ]
    },
    {
      title: "Attempt Limit",
      points: [
        "No limit on number of attempts",
        "Can appear in consecutive years",
        "Best score considered for admission"
      ]
    }
  ];

  const examPattern = {
    paper1: {
      name: "Paper 1 (B.E./B.Tech)",
      subjects: [
        { subject: "Physics", questions: "20 MCQ + 10 Numerical", marks: 100, duration: "1 hour" },
        { subject: "Chemistry", questions: "20 MCQ + 10 Numerical", marks: 100, duration: "1 hour" },
        { subject: "Mathematics", questions: "20 MCQ + 10 Numerical", marks: 100, duration: "1 hour" }
      ],
      totalMarks: 300,
      totalDuration: "3 hours",
      negativeMarking: "MCQ: -1 for wrong answer, Numerical: No negative marking"
    },
    paper2: {
      name: "Paper 2 (B.Arch/B.Planning)",
      subjects: [
        { subject: "Mathematics", questions: "20 MCQ + 10 Numerical", marks: 100, duration: "1 hour" },
        { subject: "Aptitude Test", questions: "50 MCQ", marks: 200, duration: "1 hour" },
        { subject: "Drawing Test", questions: "2 Questions", marks: 100, duration: "1 hour" }
      ],
      totalMarks: 400,
      totalDuration: "3 hours",
      negativeMarking: "MCQ: -1 for wrong answer, Numerical: No negative marking"
    }
  };

  const detailedSyllabus = {
    physics: {
      units: [
        {
          name: "Mechanics",
          topics: ["Kinematics", "Laws of Motion", "Work, Energy and Power", "Rotational Motion", "Gravitation"]
        },
        {
          name: "Thermodynamics",
          topics: ["Thermal Properties", "Kinetic Theory of Gases", "Thermodynamics Laws"]
        },
        {
          name: "Electrodynamics",
          topics: ["Electrostatics", "Current Electricity", "Magnetic Effects", "Electromagnetic Induction", "AC Circuits"]
        },
        {
          name: "Optics",
          topics: ["Ray Optics", "Wave Optics", "Optical Instruments"]
        },
        {
          name: "Modern Physics",
          topics: ["Dual Nature of Matter", "Atoms and Nuclei", "Electronic Devices", "Communication Systems"]
        }
      ]
    },
    chemistry: {
      units: [
        {
          name: "Physical Chemistry",
          topics: ["Atomic Structure", "Chemical Bonding", "Gaseous State", "Thermodynamics", "Chemical Equilibrium", "Ionic Equilibrium", "Electrochemistry", "Chemical Kinetics"]
        },
        {
          name: "Inorganic Chemistry", 
          topics: ["Classification of Elements", "Hydrogen", "s-Block Elements", "p-Block Elements", "d-Block Elements", "f-Block Elements", "Coordination Compounds"]
        },
        {
          name: "Organic Chemistry",
          topics: ["Basic Principles", "Hydrocarbons", "Organic Compounds with Functional Groups", "Biomolecules", "Polymers", "Chemistry in Everyday Life"]
        }
      ]
    },
    mathematics: {
      units: [
        {
          name: "Algebra",
          topics: ["Sets and Relations", "Complex Numbers", "Quadratic Equations", "Sequences and Series", "Permutations and Combinations", "Binomial Theorem", "Mathematical Induction"]
        },
        {
          name: "Trigonometry",
          topics: ["Trigonometric Functions", "Inverse Trigonometric Functions", "Trigonometric Equations"]
        },
        {
          name: "Coordinate Geometry",
          topics: ["Straight Lines", "Circles", "Parabola", "Ellipse", "Hyperbola"]
        },
        {
          name: "Calculus",
          topics: ["Limits and Continuity", "Differentiation", "Applications of Derivatives", "Integration", "Applications of Integrals", "Differential Equations"]
        },
        {
          name: "Statistics and Probability",
          topics: ["Statistics", "Probability"]
        },
        {
          name: "Vector Algebra",
          topics: ["Vectors", "Three Dimensional Geometry"]
        }
      ]
    }
  };

  const topColleges = [
    { 
      name: "IIT Delhi", 
      rank: 1, 
      fees: "₹2.5L/year", 
      placement: "₹45L",
      cutoff: "JEE Advanced Rank 1-500",
      location: "New Delhi"
    },
    { 
      name: "IIT Bombay", 
      rank: 2, 
      fees: "₹2.5L/year", 
      placement: "₹42L",
      cutoff: "JEE Advanced Rank 1-600",
      location: "Mumbai"
    },
    { 
      name: "IIT Madras", 
      rank: 3, 
      fees: "₹2.5L/year", 
      placement: "₹40L",
      cutoff: "JEE Advanced Rank 1-700",
      location: "Chennai"
    },
    { 
      name: "NIT Trichy", 
      rank: 4, 
      fees: "₹1.8L/year", 
      placement: "₹25L",
      cutoff: "JEE Main Rank 1000-5000",
      location: "Tiruchirappalli"
    },
    { 
      name: "IIIT Hyderabad", 
      rank: 5, 
      fees: "₹4.5L/year", 
      placement: "₹35L",
      cutoff: "JEE Main Rank 500-2000",
      location: "Hyderabad"
    }
  ];

  const preparationTips = [
    {
      icon: Target,
      title: "Create a Study Plan",
      description: "Develop a comprehensive study schedule covering all subjects with regular revision cycles."
    },
    {
      icon: BookOpen,
      title: "Focus on NCERT",
      description: "Master NCERT textbooks thoroughly as they form the foundation for JEE Main questions."
    },
    {
      icon: Calculator,
      title: "Practice Mock Tests",
      description: "Take regular mock tests to improve speed, accuracy, and time management skills."
    },
    {
      icon: Brain,
      title: "Analyze Mistakes",
      description: "Keep track of errors and weak areas to focus your preparation effectively."
    },
    {
      icon: Lightbulb,
      title: "Conceptual Clarity",
      description: "Focus on understanding concepts rather than rote learning for better problem-solving."
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Practice solving questions within time limits to excel in the actual exam."
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Online Registration",
      description: "Visit the official NTA JEE Main website and create an account with basic details.",
      documents: ["Valid email ID", "Mobile number", "Class 10th certificate"]
    },
    {
      step: 2,
      title: "Fill Application Form",
      description: "Complete the application form with personal, academic, and contact details.",
      documents: ["Class 12th details", "Category certificate (if applicable)", "Passport size photo"]
    },
    {
      step: 3,
      title: "Upload Documents",
      description: "Upload scanned copies of required documents in specified format and size.",
      documents: ["Photo (10-200 KB)", "Signature (4-30 KB)", "Category certificate"]
    },
    {
      step: 4,
      title: "Pay Application Fee",
      description: "Pay the application fee online through debit/credit card or net banking.",
      documents: ["Fee payment receipt", "Transaction details"]
    },
    {
      step: 5,
      title: "Submit & Print",
      description: "Review all details, submit the form, and take a printout for future reference.",
      documents: ["Application confirmation page", "Fee receipt"]
    }
  ];

  const feeStructure = {
    application: [
      { category: "General/OBC-NCL", fee: "₹1,000", description: "For all papers" },
      { category: "SC/ST/PwD/Transgender", fee: "₹500", description: "For all papers" },
      { category: "Foreign Nationals", fee: "$25", description: "For all papers" }
    ],
    counselling: [
      { category: "JoSAA Counselling", fee: "₹40,000", description: "Refundable security deposit" },
      { category: "CSAB Counselling", fee: "₹35,000", description: "For NITs, IIITs, GFTIs" }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Info },
    { id: 'eligibility', name: 'Eligibility', icon: CheckCircle },
    { id: 'pattern', name: 'Exam Pattern', icon: FileText },
    { id: 'syllabus', name: 'Syllabus', icon: BookOpen },
    { id: 'application', name: 'Application', icon: FileText },
    { id: 'preparation', name: 'Preparation', icon: Target },
    { id: 'colleges', name: 'Colleges', icon: Building }
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowApplyForm(false);
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      batchType: '',
      batchTime: '',
      preferredMode: '',
      course: '',
      duration: '',
      city: ''
    });
  };

  return (
    <MainLayout>
    <div className="min-h-screen bg-gray-50" style={{ 
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch' // Better scrolling on iOS
    }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
            {/* <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button> */}
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">JEE Main 2025</h1>
              <p className="text-xs sm:text-sm text-gray-600">Joint Entrance Examination (Main)</p>
            </div>
            <div className="hidden sm:flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                National Level
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Online Mode
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-[50px] sm:top-[56px] z-30 shadow-sm" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center space-x-1 sm:space-x-2 py-3 sm:py-4 px-2 sm:px-3 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors flex-shrink-0 bg-white ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 main-content">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Overview */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Overview</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    JEE Main is a national level engineering entrance examination conducted by the National Testing Agency (NTA) 
                    for admission to NITs, IIITs, CFTIs and other engineering colleges across India. It serves as the gateway 
                    to prestigious engineering institutions and is also the qualifying exam for JEE Advanced.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">Exam Date</p>
                          <p className="text-gray-600">January & April 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="font-medium text-gray-900">Duration</p>
                          <p className="text-gray-600">3 Hours</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">Participating Colleges</p>
                          <p className="text-gray-600">1500+</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-medium text-gray-900">Mode</p>
                          <p className="text-gray-600">Online (CBT)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Key Highlights</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <GraduationCap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Multiple Attempts</h3>
                          <p className="text-sm text-gray-600">Two sessions per year - January and April</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Trophy className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Best Score Considered</h3>
                          <p className="text-sm text-gray-600">Higher score from both attempts is considered</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Building className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Wide Acceptance</h3>
                          <p className="text-sm text-gray-600">Accepted by 1500+ engineering colleges</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Star className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Gateway to IITs</h3>
                          <p className="text-sm text-gray-600">Qualifying exam for JEE Advanced</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Eligibility Tab */}
            {activeTab === 'eligibility' && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
                <div className="space-y-6">
                  {eligibilityPoints.map((section, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>{section.title}</span>
                      </h3>
                      <div className="space-y-2">
                        {section.points.map((point, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-600">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exam Pattern Tab */}
            {activeTab === 'pattern' && (
              <div className="space-y-6">
                {/* Paper 1 */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{examPattern.paper1.name}</h2>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Subject</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Questions</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Marks</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examPattern.paper1.subjects.map((subject, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-900">{subject.subject}</td>
                            <td className="py-3 px-4 text-gray-600">{subject.questions}</td>
                            <td className="py-3 px-4 text-gray-600">{subject.marks}</td>
                            <td className="py-3 px-4 text-gray-600">{subject.duration}</td>
                          </tr>
                        ))}
                        <tr className="bg-blue-50 font-semibold">
                          <td className="py-3 px-4 text-gray-900">Total</td>
                          <td className="py-3 px-4 text-gray-900">90 Questions</td>
                          <td className="py-3 px-4 text-gray-900">{examPattern.paper1.totalMarks}</td>
                          <td className="py-3 px-4 text-gray-900">{examPattern.paper1.totalDuration}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Marking Scheme:</strong> {examPattern.paper1.negativeMarking}
                    </p>
                  </div>
                </div>

                {/* Paper 2 */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{examPattern.paper2.name}</h2>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Subject</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Questions</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Marks</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examPattern.paper2.subjects.map((subject, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-900">{subject.subject}</td>
                            <td className="py-3 px-4 text-gray-600">{subject.questions}</td>
                            <td className="py-3 px-4 text-gray-600">{subject.marks}</td>
                            <td className="py-3 px-4 text-gray-600">{subject.duration}</td>
                          </tr>
                        ))}
                        <tr className="bg-orange-50 font-semibold">
                          <td className="py-3 px-4 text-gray-900">Total</td>
                          <td className="py-3 px-4 text-gray-900">82 Questions</td>
                          <td className="py-3 px-4 text-gray-900">{examPattern.paper2.totalMarks}</td>
                          <td className="py-3 px-4 text-gray-900">{examPattern.paper2.totalDuration}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Marking Scheme:</strong> {examPattern.paper2.negativeMarking}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Syllabus Tab */}
            {activeTab === 'syllabus' && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Detailed Syllabus</h2>
                <div className="space-y-6">
                  {Object.entries(detailedSyllabus).map(([subject, data], index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleSection(subject)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="font-semibold text-gray-900 capitalize flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${
                            subject === 'physics' ? 'bg-blue-500' :
                            subject === 'chemistry' ? 'bg-green-500' : 'bg-orange-500'
                          }`}></div>
                          <span>{subject}</span>
                        </h3>
                        {expandedSection === subject ? 
                          <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        }
                      </button>
                      {expandedSection === subject && (
                        <div className="px-4 pb-4">
                          <div className="space-y-4">
                            {data.units.map((unit, idx) => (
                              <div key={idx} className="border-l-4 border-gray-200 pl-4">
                                <h4 className="font-medium text-gray-900 mb-2">{unit.name}</h4>
                                <div className="flex flex-wrap gap-2">
                                  {unit.topics.map((topic, topicIdx) => (
                                    <span
                                      key={topicIdx}
                                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                    >
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button className="mt-6 flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                  <Download className="h-4 w-4" />
                  <span>Download Complete Syllabus PDF</span>
                </button>
              </div>
            )}

            {/* Application Tab */}
            {activeTab === 'application' && (
              <div className="space-y-6">
                {/* Application Process */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Application Process</h2>
                  <div className="space-y-6">
                    {applicationProcess.map((step, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 mb-3">{step.description}</p>
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-900">Required Documents:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {step.documents.map((doc, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                  <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                                  <span>{doc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fee Structure */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Fee Structure</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-blue-700 mb-4 pl-4">Application Fee</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Fee</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feeStructure.application.map((fee, index) => (
                              <tr key={index} className="border-b border-gray-100">
                                <td className="py-3 px-4 font-medium text-gray-900">{fee.category}</td>
                                <td className="py-3 px-4 text-gray-600 font-semibold">{fee.fee}</td>
                                <td className="py-3 px-4 text-gray-600">{fee.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 mb-4 pl-4">Counselling Fee</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Process</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Fee</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feeStructure.counselling.map((fee, index) => (
                              <tr key={index} className="border-b border-gray-100">
                                <td className="py-3 px-4 font-medium text-gray-900">{fee.category}</td>
                                <td className="py-3 px-4 text-gray-600 font-semibold">{fee.fee}</td>
                                <td className="py-3 px-4 text-gray-600">{fee.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Preparation Tab */}
            {activeTab === 'preparation' && (
              <div className="space-y-6">
                {/* Preparation Tips */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Preparation Strategy</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {preparationTips.map((tip, index) => (
                      <div key={index} className="flex space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <tip.icon className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-600 text-sm">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Study Schedule */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended Study Schedule</h2>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">Phase 1 (6 months)</h3>
                        <p className="text-blue-800 text-sm">Complete syllabus coverage with NCERT focus</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-green-900 mb-2">Phase 2 (3 months)</h3>
                        <p className="text-green-800 text-sm">Practice questions and mock tests</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h3 className="font-semibold text-orange-900 mb-2">Phase 3 (1 month)</h3>
                        <p className="text-orange-800 text-sm">Revision and final preparation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended Books */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended Books</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-blue-600">Physics</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• NCERT Physics (Class 11 & 12)</li>
                        <li>• Concepts of Physics - H.C. Verma</li>
                        <li>• Fundamentals of Physics - Halliday, Resnick & Walker</li>
                        <li>• Problems in General Physics - I.E. Irodov</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-green-600">Chemistry</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• NCERT Chemistry (Class 11 & 12)</li>
                        <li>• Organic Chemistry - O.P. Tandon</li>
                        <li>• Concise Inorganic Chemistry - J.D. Lee</li>
                        <li>• Physical Chemistry - P. Bahadur</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-orange-600">Mathematics</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• NCERT Mathematics (Class 11 & 12)</li>
                        <li>• Objective Mathematics - R.D. Sharma</li>
                        <li>• IIT Mathematics - M.L. Khanna</li>
                        <li>• Coordinate Geometry - S.L. Loney</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Colleges Tab */}
            {activeTab === 'colleges' && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Top Colleges Accepting JEE Main</h2>
                <div className="space-y-4">
                  {topColleges.map((college, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full font-bold">
                          {college.rank}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{college.name}</h3>
                          <p className="text-sm text-gray-600">{college.location}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center space-x-1">
                              <DollarSign className="h-3 w-3" />
                              <span>{college.fees}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <TrendingUp className="h-3 w-3" />
                              <span>{college.placement}</span>
                            </span>
                          </div>
                          <p className="text-xs text-blue-600 mt-1">{college.cutoff}</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Cutoff ranks are approximate and may vary based on category, branch, and year. 
                    Visit official websites for accurate and updated information.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Quick Actions</h3>
              <div className="space-y-2 sm:space-y-3">
                <button 
                  onClick={() => setShowApplyForm(true)}
                  className="w-full bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Apply Now
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Download Brochure
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Previous Year Papers
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Sample Papers
                </button>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Important Dates</h3>
              <div className="space-y-3 sm:space-y-4">
                {keyDates.map((date, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        date.status === 'completed' ? 'bg-green-500' : 
                        date.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-300'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{date.event}</p>
                        <p className="text-xs text-gray-600">{date.date}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">{date.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Stats */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 text-black">
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Exam Statistics 2024</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-black-100">Total Applicants</span>
                  <span className="font-bold">13.97 Lakh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black-100">Success Rate</span>
                  <span className="font-bold">7.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black-100">Avg. Score</span>
                  <span className="font-bold">87/300</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black-100">Top Score 2024</span>
                  <span className="font-bold">300/300</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black-100">Qualifying Percentile</span>
                  <span className="font-bold">89.75</span>
                </div>
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Need Help?</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-black-600" />
                  <span className="text-gray-600">Call: 0120-6895200</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-black-600" />
                  <span className="text-gray-600">Email: jeemain@nta.ac.in</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
                  Live Chat Support
                </button>
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                  FAQ Section
                </button>
              </div>
            </div>

            {/* Latest Updates */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Latest Updates</h3>
              <div className="space-y-2 sm:space-y-3">
              <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-sm text-blue-800">
                    <strong>New:</strong> Application form for JEE Main 2025 to be released soon
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Update:</strong> Exam pattern remains same as previous year
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Info:</strong> No age limit for JEE Main 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Form Popup */}
      {showApplyForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-center relative p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">JEE Main Inquiry</h2>
              <button
                onClick={() => setShowApplyForm(false)}
                className="absolute right-4 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="+91 9XXXXXXXXX"
                    required
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Batch Type */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Batch type
                  </label>
                  <select
                    name="batchType"
                    value={formData.batchType}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  >
                    <option value="">Select batch type</option>
                    <option value="Regular">Regular</option>
                    <option value="Weekend">Weekend</option>
                    <option value="Crash">Crash</option>
                  </select>
                </div>

                {/* Batch Time */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Batch time
                  </label>
                  <select
                    name="batchTime"
                    value={formData.batchTime}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  >
                    <option value="">Select batch time</option>
                    <option value="06:00 AM - 08:00 AM">06:00 AM - 08:00 AM</option>
                    <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                    <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                    <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
                  </select>
                </div>

                {/* Preferred Mode */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Preferred mode
                  </label>
                  <select
                    name="preferredMode"
                    value={formData.preferredMode}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  >
                    <option value="">Select mode</option>
                    <option value="Offline (Classroom)">Offline (Classroom)</option>
                    <option value="Online (Live Classes)">Online (Live Classes)</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                {/* Course */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  >
                    <option value="">Select course</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Target">Target</option>
                    <option value="Achiever">Achiever</option>
                    <option value="Leader">Leader</option>
                  </select>
                </div>

                {/* Duration */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Duration
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="1 month">1 month</option>
                    <option value="3 months">3 months</option>
                    <option value="6 months">6 months</option>
                    <option value="1 year">1 year</option>
                    <option value="2 years">2 years</option>
                  </select>
                </div>
              </div>

              {/* City/Branch */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  City / Branch
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md  text-sm"
                  placeholder="e.g. Pune"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </MainLayout>
  );
};

export default ExamDetailsPage;