import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import {
  ArrowRight, Users as UsersIcon, Award, Building,
  Calendar, Users, MapPin, ExternalLink, Clock, Filter, Search,
  Wrench, Heart, Briefcase, Scale, Calculator
} from 'lucide-react';

// Local inline components to keep everything in one page file

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Entrance Exam
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guide to all Indian entrance exams for Engineering, Medical, MBA, Law, and more.
            Find the right exam for your dream career.
          </p>
          <button className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
            Explore Exams
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 p-4 rounded-full">
                <Award className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-blue-200">Entrance Exams</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 p-4 rounded-full">
                <Building className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">10,000+</h3>
            <p className="text-blue-200">Colleges & Universities</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 p-4 rounded-full">
                <UsersIcon className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">1M+</h3>
            <p className="text-blue-200">Students Helped</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Inlined exam data (previously from ./data/examData)
const examData = [
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Entrance exams for B.Tech, B.E., and engineering programs',
    icon: Wrench,
    color: 'bg-blue-600',
    exams: [
      {
        id: 'jee-main',
        name: 'JEE Main',
        fullName: 'Joint Entrance Examination (Main)',
        description: 'National level engineering entrance exam for admission to NITs, IIITs, CFTIs and other engineering colleges.',
        examDate: 'January & April 2024',
        applicationDeadline: 'December 2023',
        eligibility: '12th pass with Physics, Chemistry, Mathematics',
        participatingColleges: 1500,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'jee-advanced',
        name: 'JEE Advanced',
        fullName: 'Joint Entrance Examination (Advanced)',
        description: 'Entrance exam for admission to Indian Institutes of Technology (IITs) and other prestigious institutions.',
        examDate: 'May 2024',
        applicationDeadline: 'May 2024',
        eligibility: 'JEE Main qualified candidates',
        participatingColleges: 25,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'bitsat',
        name: 'BITSAT',
        fullName: 'BITS Admission Test',
        description: 'Computer based online test for admission to integrated first degree programmes at BITS campuses.',
        examDate: 'May-June 2024',
        applicationDeadline: 'March 2024',
        eligibility: '12th pass with minimum 75% aggregate',
        participatingColleges: 4,
        level: 'Institute',
        mode: 'Online'
      },
      {
        id: 'viteee',
        name: 'VITEEE',
        fullName: 'VIT Engineering Entrance Examination',
        description: 'Online entrance exam for admission to B.Tech programs at VIT campuses across India.',
        examDate: 'April-May 2024',
        applicationDeadline: 'February 2024',
        eligibility: '12th pass with Physics, Chemistry, Mathematics',
        participatingColleges: 4,
        level: 'Institute',
        mode: 'Online'
      },
      {
        id: 'srmjeee',
        name: 'SRMJEEE',
        fullName: 'SRM Joint Engineering Entrance Examination',
        description: 'University level exam for admission to B.Tech programmes at SRM Institute of Science and Technology.',
        examDate: 'April-May 2024',
        applicationDeadline: 'March 2024',
        eligibility: '12th pass with minimum 50% in PCM',
        participatingColleges: 8,
        level: 'Institute',
        mode: 'Online'
      },
      {
        id: 'comedk-uget',
        name: 'COMEDK UGET',
        fullName: 'Consortium of Medical, Engineering and Dental Colleges of Karnataka',
        description: 'State level engineering entrance exam for admission to engineering colleges in Karnataka.',
        examDate: 'May 2024',
        applicationDeadline: 'March 2024',
        eligibility: '12th pass with Physics, Chemistry, Mathematics',
        participatingColleges: 180,
        level: 'State',
        mode: 'Online'
      }
    ]
  },
  {
    id: 'medical',
    name: 'Medical',
    description: 'Entrance exams for MBBS, BDS, AYUSH, and medical programs',
    icon: Heart,
    color: 'bg-red-600',
    exams: [
      {
        id: 'neet-ug',
        name: 'NEET UG',
        fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
        description: 'National level medical entrance exam for admission to MBBS, BDS, AYUSH courses in India.',
        examDate: 'May 2024',
        applicationDeadline: 'March 2024',
        eligibility: '12th pass with Physics, Chemistry, Biology',
        participatingColleges: 1800,
        level: 'National',
        mode: 'Offline'
      },
      {
        id: 'neet-pg',
        name: 'NEET PG',
        fullName: 'National Eligibility cum Entrance Test (Postgraduate)',
        description: 'National level entrance exam for admission to MD/MS and PG Diploma courses.',
        examDate: 'March 2024',
        applicationDeadline: 'February 2024',
        eligibility: 'MBBS degree from MCI recognized college',
        participatingColleges: 500,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'aiims',
        name: 'AIIMS',
        fullName: 'All Institute of Medical Sciences',
        description: 'Institute specific entrance exam for MBBS admission to AIIMS colleges across India.',
        examDate: 'May 2024',
        applicationDeadline: 'March 2024',
        eligibility: '12th pass with minimum 60% in PCB',
        participatingColleges: 20,
        level: 'Institute',
        mode: 'Online'
      },
      {
        id: 'jipmer',
        name: 'JIPMER',
        fullName: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
        description: 'Institute level exam for MBBS admission to JIPMER Puducherry and Karaikal.',
        examDate: 'June 2024',
        applicationDeadline: 'April 2024',
        eligibility: '12th pass with Physics, Chemistry, Biology',
        participatingColleges: 2,
        level: 'Institute',
        mode: 'Online'
      }
    ]
  },
  {
    id: 'mba',
    name: 'MBA & Management',
    description: 'Entrance exams for MBA, PGDM, and management programs',
    icon: Briefcase,
    color: 'bg-green-600',
    exams: [
      {
        id: 'cat',
        name: 'CAT',
        fullName: 'Common Admission Test',
        description: 'Premier MBA entrance exam for admission to IIMs and top B-schools across India.',
        examDate: 'November 2024',
        applicationDeadline: 'September 2024',
        eligibility: 'Graduation with minimum 50% marks',
        participatingColleges: 25,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'xat',
        name: 'XAT',
        fullName: 'Xavier Aptitude Test',
        description: 'National level management entrance exam conducted by XLRI for MBA admissions.',
        examDate: 'January 2024',
        applicationDeadline: 'November 2023',
        eligibility: 'Graduation in any discipline',
        participatingColleges: 150,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'snap',
        name: 'SNAP',
        fullName: 'Symbiosis National Aptitude Test',
        description: 'University level test for admission to MBA/PGDM programs at Symbiosis institutes.',
        examDate: 'December 2024',
        applicationDeadline: 'November 2024',
        eligibility: 'Graduation with minimum 50% marks',
        participatingColleges: 15,
        level: 'Institute',
        mode: 'Online'
      },
      {
        id: 'cmat',
        name: 'CMAT',
        fullName: 'Common Management Admission Test',
        description: 'National level test for admission to AICTE approved MBA/PGDM courses.',
        examDate: 'January & May 2024',
        applicationDeadline: 'December 2023',
        eligibility: 'Graduation in any discipline',
        participatingColleges: 1000,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'mat',
        name: 'MAT',
        fullName: 'Management Aptitude Test',
        description: 'National level test conducted multiple times a year for MBA admissions.',
        examDate: 'Feb, May, Sep, Dec 2024',
        applicationDeadline: 'Ongoing',
        eligibility: 'Graduation in any discipline',
        participatingColleges: 600,
        level: 'National',
        mode: 'Online/Offline'
      }
    ]
  },
  {
    id: 'law',
    name: 'Law',
    description: 'Entrance exams for LLB, LLM, and law programs',
    icon: Scale,
    color: 'bg-purple-600',
    exams: [
      {
        id: 'clat',
        name: 'CLAT',
        fullName: 'Common Law Admission Test',
        description: 'National level entrance exam for admission to 24 National Law Universities in India.',
        examDate: 'December 2024',
        applicationDeadline: 'October 2024',
        eligibility: '12th pass for UG, LLB for PG',
        participatingColleges: 24,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'ailet',
        name: 'AILET',
        fullName: 'All India Law Entrance Test',
        description: 'University level entrance exam conducted by NLU Delhi for BA LLB, LLM programs.',
        examDate: 'May 2024',
        applicationDeadline: 'March 2024',
        eligibility: '12th pass for UG, LLB for PG',
        participatingColleges: 1,
        level: 'Institute',
        mode: 'Offline'
      },
      {
        id: 'lsat-india',
        name: 'LSAT India',
        fullName: 'Law School Admission Test',
        description: 'Standardized test for admission to law schools and universities across India.',
        examDate: 'Multiple dates',
        applicationDeadline: 'Ongoing',
        eligibility: '12th pass or equivalent',
        participatingColleges: 85,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'slat',
        name: 'SLAT',
        fullName: 'Symbiosis Law Admission Test',
        description: 'University level entrance exam for admission to law programs at Symbiosis Law Schools.',
        examDate: 'December 2024',
        applicationDeadline: 'November 2024',
        eligibility: '12th pass with minimum 45%',
        participatingColleges: 5,
        level: 'Institute',
        mode: 'Online'
      }
    ]
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    description: 'Competitive exams for banking, insurance, and finance sector jobs',
    icon: Calculator,
    color: 'bg-yellow-600',
    exams: [
      {
        id: 'ibps-po',
        name: 'IBPS PO',
        fullName: 'Institute of Banking Personnel Selection - Probationary Officer',
        description: 'National level exam for recruitment of Probationary Officers in public sector banks.',
        examDate: 'October 2024',
        applicationDeadline: 'August 2024',
        eligibility: 'Graduation in any discipline',
        participatingColleges: 12,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'sbi-po',
        name: 'SBI PO',
        fullName: 'State Bank of India - Probationary Officer',
        description: 'Recruitment exam conducted by SBI for the post of Probationary Officer.',
        examDate: 'July 2024',
        applicationDeadline: 'May 2024',
        eligibility: 'Graduation in any discipline',
        participatingColleges: 1,
        level: 'Institute',
        mode: 'Online'
      },
      {
        id: 'ibps-clerk',
        name: 'IBPS Clerk',
        fullName: 'Institute of Banking Personnel Selection - Clerk',
        description: 'Common recruitment process for clerical cadre posts in participating banks.',
        examDate: 'December 2024',
        applicationDeadline: 'October 2024',
        eligibility: 'Graduation in any discipline',
        participatingColleges: 12,
        level: 'National',
        mode: 'Online'
      }
    ]
  },
  {
    id: 'government',
    name: 'Government Jobs',
    description: 'Civil services and other government job entrance exams',
    icon: Building,
    color: 'bg-indigo-600',
    exams: [
      {
        id: 'upsc-cse',
        name: 'UPSC CSE',
        fullName: 'Union Public Service Commission - Civil Services Examination',
        description: 'Premier examination for recruitment to various central government services including IAS, IPS, IFS.',
        examDate: 'June 2024 (Prelims)',
        applicationDeadline: 'February 2024',
        eligibility: 'Graduation in any discipline',
        participatingColleges: 1,
        level: 'National',
        mode: 'Offline'
      },
      {
        id: 'ssc-cgl',
        name: 'SSC CGL',
        fullName: 'Staff Selection Commission - Combined Graduate Level',
        description: 'Recruitment exam for Group B and Group C posts in various government departments.',
        examDate: 'June-July 2024',
        applicationDeadline: 'April 2024',
        eligibility: 'Graduation in any discipline',
        participatingColleges: 1,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'railway-ntpc',
        name: 'Railway NTPC',
        fullName: 'Railway Non-Technical Popular Categories',
        description: 'Recruitment exam for non-technical popular category posts in Indian Railways.',
        examDate: 'March-April 2024',
        applicationDeadline: 'January 2024',
        eligibility: 'Graduation/12th pass (post specific)',
        participatingColleges: 1,
        level: 'National',
        mode: 'Online'
      }
    ]
  },
  {
    id: 'other',
    name: 'Other Fields',
    description: 'Entrance exams for architecture, design, hospitality, and other specializations',
    icon: Users,
    color: 'bg-pink-600',
    exams: [
      {
        id: 'nata',
        name: 'NATA',
        fullName: 'National Aptitude Test in Architecture',
        description: 'National level entrance exam for admission to B.Arch programs across India.',
        examDate: 'April & July 2024',
        applicationDeadline: 'March 2024',
        eligibility: '12th pass with Mathematics as subject',
        participatingColleges: 400,
        level: 'National',
        mode: 'Online'
      },
      {
        id: 'nid-dat',
        name: 'NID DAT',
        fullName: 'National Institute of Design - Design Aptitude Test',
        description: 'Entrance test for admission to undergraduate and postgraduate design programs at NID.',
        examDate: 'January 2024',
        applicationDeadline: 'November 2023',
        eligibility: '12th pass for UG, Graduation for PG',
        participatingColleges: 7,
        level: 'Institute',
        mode: 'Online'
      },
      {
        id: 'nchmct-jee',
        name: 'NCHMCT JEE',
        fullName: 'National Council for Hotel Management Joint Entrance Examination',
        description: 'National level entrance exam for admission to hotel management and catering courses.',
        examDate: 'May 2024',
        applicationDeadline: 'March 2024',
        eligibility: '12th pass from recognized board',
        participatingColleges: 60,
        level: 'National',
        mode: 'Online'
      }
    ]
  }
];

type Category = typeof examData[number];
type Exam = Category['exams'][number];

const InlineExamFilters: React.FC<{
  categories: Array<{ id: string; name: string; color: string }>;
  activeFilter: string;
  searchTerm: string;
  onFilterChange: (filter: string) => void;
  onSearchChange: (value: string) => void;
}> = ({ categories, activeFilter, searchTerm, onFilterChange, onSearchChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Filter Exams</h3>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search exams by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700 mb-3">Filter by Category:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            All Exams
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onFilterChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category.id
                  ? `${category.color} text-white`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const InlineExamCard: React.FC<{ exam: Exam; onViewDetails: (examId: string) => void }> = ({ exam, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group h-full flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">{exam.name}</h4>
            <p className="text-sm text-gray-500 font-medium">{exam.fullName}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            {exam.level}
          </span>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{exam.description}</p>

        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            <span className="font-medium">Exam Date:</span>
            <span className="ml-1">{exam.examDate}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-orange-500" />
            <span className="font-medium">Apply by:</span>
            <span className="ml-1">{exam.applicationDeadline}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-green-500" />
            <span className="font-medium">Colleges:</span>
            <span className="ml-1">{exam.participatingColleges}+</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-purple-500" />
            <span className="font-medium">Mode:</span>
            <span className="ml-1">{exam.mode}</span>
          </div>
        </div>

        <div className="border-t pt-4 mt-auto">
          <p className="text-xs text-gray-500 mb-3">
            <span className="font-medium">Eligibility:</span> {exam.eligibility}
          </p>
          <button 
            onClick={() => onViewDetails(exam.id)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center group-hover:bg-blue-700"
          >
            View Details
            {/* <ExternalLink className="ml-2 h-4 w-4" />enable for add the icon of view details */}
          </button>
        </div>
      </div>
    </div>
  );
};

const ExamPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const categoriesForFilters = useMemo(
    () => examData.map((category) => ({ id: category.id, name: category.name, color: category.color })),
    []
  );

  const filteredData = useMemo(() => {
    let data = examData;
    if (activeFilter !== 'all') {
      data = data.filter((category) => category.id === activeFilter);
    }
    if (searchTerm) {
      data = data
        .map((category) => ({
          ...category,
          exams: category.exams.filter((exam) =>
            exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            exam.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            exam.description.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((category) => category.exams.length > 0);
    }
    return data;
  }, [activeFilter, searchTerm]);

  const totalExams = useMemo(
    () => filteredData.reduce((total, category) => total + category.exams.length, 0),
    [filteredData]
  );

  const handleViewDetails = (examId: string) => {
    navigate(`/exam/${examId}`);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <HeroSection />

        <section id="exams" className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Entrance Exams by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the right entrance exam for your desired field of study and career path
            </p>
          </div>

          <InlineExamFilters
            categories={categoriesForFilters}
            activeFilter={activeFilter}
            searchTerm={searchTerm}
            onFilterChange={setActiveFilter}
            onSearchChange={setSearchTerm}
          />

          <div className="mb-8">
            <p className="text-gray-600">
              {searchTerm || activeFilter !== 'all' ? (
                <>
                  Showing <span className="font-semibold text-gray-900">{totalExams}</span> exam
                  {totalExams !== 1 ? 's' : ''}
                  {searchTerm && (
                    <> matching "<span className="font-semibold text-blue-600">{searchTerm}</span>"</>
                  )}
                  {activeFilter !== 'all' && (
                    <> in <span className="font-semibold text-blue-600">{categoriesForFilters.find((c) => c.id === activeFilter)?.name}</span></>
                  )}
                </>
              ) : (
                <>Total <span className="font-semibold text-gray-900">{totalExams}</span> entrance exams available</>
              )}
            </p>
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No exams found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            filteredData.map((category) => (
              <div key={category.id} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-lg mr-4 ${category.color}`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.exams.map((exam) => (
                    <InlineExamCard key={exam.id} exam={exam} onViewDetails={handleViewDetails} />
                  ))}
                </div>
              </div>
            ))
          )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
export default ExamPage;

