import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaDownload, FaQuestionCircle, FaCompress, FaTimes, FaChevronLeft, FaChevronRight, FaUser, FaEnvelope, FaPhone, FaGraduationCap } from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';

interface CourseDetails {
  id: string;
  name: string;
  university: string;
  location: string;
  established: string;
  type: string;
  naacGrade: string;

  totalRatings: number;
  duration: string;
  mode: string;
  category: string;
  description: string;
  totalFees: string;
  previousFees: string;
  firstYearFees: string;
  tuitionFees: {
    year1: string;
    year2: string;
    year3: string;
    year4: string;
  };
  universityFees: {
    year1: string;
    year2: string;
    year3: string;
    year4: string;
  };
  yearlyFees: {
    year1: string;
    year2: string;
    year3: string;
    year4: string;
  };
  scholarship: {
    district: string;
    state: string;
    zonal: string;
    national: string;
  };
  photos: string[];
  topCourses: Array<{
    name: string;
    duration: string;
    firstYearFees: string;
  }>;
  tags: string[];
}

const CourseDetailsPage: React.FC = () => {
  const { courseId, universityId } = useParams<{ courseId: string; universityId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<CourseDetails | null>(null);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showSpecializationModal, setShowSpecializationModal] = useState(false);
  const [selectedSpecialization, setSelectedSpecialization] = useState<any>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyForm, setApplyForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentEducation: '',
    preferredYear: '',
    message: ''
  });

  // Sample course data - in real app this would come from API
  const courseData: Record<string, CourseDetails> = {
    'btech-cse-parul': {
      id: 'btech-cse-parul',
      name: 'B.Tech Computer Science and Engineering',
      university: 'Parul University',
      location: 'Vadodara, Gujarat',
      established: '2015',
      type: 'Private University',
      naacGrade: 'NAAC Grade A++',

      totalRatings: 1247,
      duration: '4 Years',
      mode: 'Full Time',
      category: 'General',
      description: 'Parul University offers a comprehensive B.Tech program in Computer Science and Engineering designed to provide students with strong theoretical foundations and practical skills in software development, algorithms, data structures, and computer systems. The program emphasizes hands-on learning through industry projects and internships.\n\nThe curriculum covers core computer science subjects including programming, database management, computer networks, operating systems, and software engineering. Students also have opportunities to specialize in emerging areas like artificial intelligence, machine learning, and cybersecurity.\n\nEligibility: 10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks. Admission is based on merit and entrance exam scores.',
      totalFees: '₹9.68 Lakhs',
      previousFees: '₹5.96 Lakhs',
      firstYearFees: '₹2,42,000',
      tuitionFees: {
        year1: '₹94,800',
        year2: '₹94,800',
        year3: '₹94,800',
        year4: '₹94,800'
      },
      universityFees: {
        year1: '₹1,47,200',
        year2: '₹1,47,200',
        year3: '₹1,47,200',
        year4: '₹1,47,200'
      },
      yearlyFees: {
        year1: '₹2.42 Lakhs',
        year2: '₹2.42 Lakhs',
        year3: '₹2.42 Lakhs',
        year4: '₹2.42 Lakhs'
      },
      scholarship: {
        district: 'District Level: 10% scholarship on tuition fees',
        state: 'State Level: 15% scholarship on tuition fees',
        zonal: 'Zonal Level: 20% scholarship on tuition fees',
        national: 'National/International Level: 25% scholarship on tuition fees'
      },
      photos: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1523240794102-9eb5ccbdd663?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80'
      ],
      topCourses: [
        { name: 'BAMS', duration: '5.5 Years', firstYearFees: '₹1,50,000' },
        { name: 'B.Sc Forensic Sciences', duration: '3 Years', firstYearFees: '₹85,000' },
        { name: 'B.Des Interior & Furniture Design', duration: '4 Years', firstYearFees: '₹1,20,000' }
      ],
      tags: ['For B.Tech By IRF 2024', 'Course Finder', 'Compare']
    },
    'computer-science-and-engineering': {
      id: 'computer-science-and-engineering',
      name: 'B.Tech Computer Science and Engineering',
      university: 'Parul University',
      location: 'Vadodara, Gujarat',
      established: '2015',
      type: 'Private University',
      naacGrade: 'NAAC Grade A++',

      totalRatings: 1247,
      duration: '4 Years',
      mode: 'Full Time',
      category: 'General',
      description: 'Parul University offers a comprehensive B.Tech program in Computer Science and Engineering designed to provide students with strong theoretical foundations and practical skills in software development, algorithms, data structures, and computer systems. The program emphasizes hands-on learning through industry projects and internships.\n\nThe curriculum covers core computer science subjects including programming, database management, computer networks, operating systems, and software engineering. Students also have opportunities to specialize in emerging areas like artificial intelligence, machine learning, and cybersecurity.\n\nEligibility: 10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks. Admission is based on merit and entrance exam scores.',
      totalFees: '₹9.68 Lakhs',
      previousFees: '₹5.96 Lakhs',
      firstYearFees: '₹2,42,000',
      tuitionFees: {
        year1: '₹94,800',
        year2: '₹94,800',
        year3: '₹94,800',
        year4: '₹94,800'
      },
      universityFees: {
        year1: '₹1,47,200',
        year2: '₹1,47,200',
        year3: '₹1,47,200',
        year4: '₹1,47,200'
      },
      yearlyFees: {
        year1: '₹2.42 Lakhs',
        year2: '₹2.42 Lakhs',
        year3: '₹2.42 Lakhs',
        year4: '₹2.42 Lakhs'
      },
      scholarship: {
        district: 'District Level: 10% scholarship on tuition fees',
        state: 'State Level: 15% scholarship on tuition fees',
        zonal: 'Zonal Level: 20% scholarship on tuition fees',
        national: 'National/International Level: 25% scholarship on tuition fees'
      },
      photos: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80'
      ],
      topCourses: [
        { name: 'BAMS', duration: '5.5 Years', firstYearFees: '₹1,50,000' },
        { name: 'B.Sc Forensic Sciences', duration: '3 Years', firstYearFees: '₹85,000' },
        { name: 'B.Des Interior & Furniture Design', duration: '4 Years', firstYearFees: '₹1,20,000' }
      ],
      tags: ['For B.Tech By IRF 2024', 'Course Finder', 'Compare']
    },
    'mechanical-engineering': {
      id: 'mechanical-engineering',
      name: 'B.Tech Mechanical Engineering',
      university: 'Parul University',
      location: 'Vadodara, Gujarat',
      established: '2015',
      type: 'Private University',
      naacGrade: 'NAAC Grade A++',

      totalRatings: 892,
      duration: '4 Years',
      mode: 'Full Time',
      category: 'General',
      description: 'The B.Tech Mechanical Engineering program at Parul University provides students with a solid foundation in mechanical engineering principles, design, and manufacturing processes. The curriculum includes courses in thermodynamics, fluid mechanics, machine design, and manufacturing technology.\n\nStudents gain hands-on experience through laboratory work, workshops, and industry internships. The program prepares graduates for careers in automotive, aerospace, energy, and manufacturing industries.\n\nEligibility: 10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks. Admission is based on merit and entrance exam scores.',
      totalFees: '₹9.68 Lakhs',
      previousFees: '₹5.96 Lakhs',
      firstYearFees: '₹2,42,000',
      tuitionFees: {
        year1: '₹94,800',
        year2: '₹94,800',
        year3: '₹94,800',
        year4: '₹94,800'
      },
      universityFees: {
        year1: '₹1,47,200',
        year2: '₹1,47,200',
        year3: '₹1,47,200',
        year4: '₹1,47,200'
      },
      yearlyFees: {
        year1: '₹2.42 Lakhs',
        year2: '₹2.42 Lakhs',
        year3: '₹2.42 Lakhs',
        year4: '₹2.42 Lakhs'
      },
      scholarship: {
        district: 'District Level: 10% scholarship on tuition fees',
        state: 'State Level: 15% scholarship on tuition fees',
        zonal: 'Zonal Level: 20% scholarship on tuition fees',
        national: 'National/International Level: 25% scholarship on tuition fees'
      },
      photos: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1523240794102-9eb5ccbdd663?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80'
      ],
      topCourses: [
        { name: 'BAMS', duration: '5.5 Years', firstYearFees: '₹1,50,000' },
        { name: 'B.Sc Forensic Sciences', duration: '3 Years', firstYearFees: '₹85,000' },
        { name: 'B.Des Interior & Furniture Design', duration: '4 Years', firstYearFees: '₹1,20,000' }
      ],
      tags: ['For B.Tech By IRF 2024', 'Course Finder', 'Compare']
    }
  };

  useEffect(() => {
    if (courseId && courseData[courseId]) {
      setCourse(courseData[courseId]);
    }
  }, [courseId]);

  const openPhotoModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowPhotoModal(true);
  };

  const closePhotoModal = () => {
    setShowPhotoModal(false);
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex(prev =>
      prev === 0 ? course!.photos.length - 1 : prev - 1
    );
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex(prev =>
      prev === course!.photos.length - 1 ? 0 : prev + 1
    );
  };

  // Specialization data for the modal
  const specializationData = [
    {
      name: 'Computer Science and Engineering',
      firstYearFees: '₹94,800',
      totalFees: '₹3.79 Lakhs',
      previousYearFees: '3.79 Lakhs (In 2024 - 2025)'
    },
    {
      name: 'Mechanical Engineering',
      firstYearFees: '₹94,800',
      totalFees: '₹3.79 Lakhs',
      previousYearFees: '3.79 Lakhs (In 2024 - 2025)'
    },
    {
      name: 'Aircraft Maintenance Engineering in Association with NDC',
      firstYearFees: '₹94,800',
      totalFees: '₹3.79 Lakhs',
      previousYearFees: '4 Lakhs (In 2021 - 2022)'
    }
  ];

  const openSpecializationModal = (specialization: any) => {
    setSelectedSpecialization(specialization);
    setShowSpecializationModal(true);
  };

  const closeSpecializationModal = () => {
    setShowSpecializationModal(false);
    setSelectedSpecialization(null);
  };

  const openApplyModal = () => {
    setShowApplyModal(true);
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
    // Reset form
    setApplyForm({
      fullName: '',
      email: '',
      phone: '',
      currentEducation: '',
      preferredYear: '',
      message: ''
    });
  };

  const handleApplyFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplyForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Apply form submitted:', applyForm);
    // You can add API call here
    alert('Application submitted successfully!');
    closeApplyModal();
  };

  if (!course) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
          Course not found.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Dark Blue Banner Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-blue-200 mb-6">
              <span className="text-blue-300">🏠</span>
              <a href="/" className="hover:text-blue-100 ml-1">Home</a>
              <span className="mx-2">›</span>
              <a href={`/university/${universityId}`} className="hover:text-blue-100">{course.university}</a>
              <span className="mx-2">›</span>
              <span className="text-blue-100">Courses & Fees</span>
              <span className="mx-2">›</span>
              <span className="text-white">Bachelor of Technolo...</span>
            </nav>

            <div className="flex items-start gap-6">
              {/* University Logo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-yellow-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs font-bold text-center">
                      <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center mb-1">
                        <span className="text-xs">📚</span>
                      </div>
                      <div className="text-[8px] leading-tight">PARUL</div>
                    </div>
                  </div>
                </div>

                {/* Ranking Badge */}
                <div className="mt-3 bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center">
                  {/* <span className="mr-2">🍃</span>
                  <span>#43 For B.Tech By IIRF 2024</span>
                  <a href="#" className="ml-2 underline hover:no-underline">+6 More</a> */}
                </div>
              </div>

              {/* Course Title and Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {course.university} {course.name}: Fees 2025, Course Duration, Dates, Eligibility
                </h1>

                {/* University Info */}
                <div className="flex items-center text-sm text-gray-300">
                  <span>{course.location}</span>
                  <span className="mx-2">|</span>
                  <span>🏢 {course.type}</span>
                  <span className="mx-2">|</span>
                  <span>🗓️ Estd {course.established}</span>
                  <span className="mx-2">|</span>
                  <span>🛡️ {course.naacGrade}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">


              {/* Course Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Course Description</h2>
                <div className="text-gray-700 leading-relaxed">
                  {course.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Course Details */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{course.name}</h2>
                    <div className="flex items-center mt-2">
                      {/* <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">{course.rating}</span>
                        <FaStar className="text-yellow-400 ml-1" />
                      </div> */}
                      <span className="text-gray-600 ml-2">{course.duration} | {course.mode}</span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>

                {/* Fees Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Year (2025-2026)</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">1</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">2</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">3</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">Tuition Fees</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.tuitionFees.year1}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.tuitionFees.year2}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.tuitionFees.year3}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.tuitionFees.year4}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">University Fees</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.universityFees.year1}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.universityFees.year2}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.universityFees.year3}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.universityFees.year4}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">Yearly Fees</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">{course.yearlyFees.year1}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">{course.yearlyFees.year2}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">{course.yearlyFees.year3}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">{course.yearlyFees.year4}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">First Year Fees: {course.firstYearFees}</p>
                    {/* <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Check Detailed Fees &gt;
                    </a> */}
                  </div>
                  <div className="flex gap-3">
                    {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Apply For this Course &gt;
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center">
                      <FaDownload className="mr-1" />
                      Download Brochure
                    </button> */}
                    {/* <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center">
                      <FaQuestionCircle className="mr-1" />
                      Ask a question
                    </button> */}
                    {/* <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center">
                      <FaCompress className="mr-1" />
                      Compare
                    </button> */}
                  </div>
                </div>
              </div>

              {/* Fees Structure */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Fees structure for Industry Embedded {course.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Tuition Fees</p>
                    <p className="text-lg font-semibold text-gray-900">₹3,79,200</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">University Fees</p>
                    <p className="text-lg font-semibold text-gray-900">₹5,88,800</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Yearly Fees</p>
                    <p className="text-lg font-semibold text-gray-900">₹9,68,000</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-lg font-semibold text-blue-900">Total package - Rs 968000</p>
                </div>
              </div>

              {/* Scholarship */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Scholarship Offered by the University</h2>
                
                {/* Scholarship Overview */}
                <div className="bg-white-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Scholarship Overview</h3>
                  <p className="text-black-800 text-sm">
                    Parul University offers merit-based scholarships to deserving students based on their academic performance and achievements. 
                    Scholarships are applicable on tuition fees and are renewable annually based on academic performance.
                  </p>
                </div>

                {/* Scholarship Levels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Merit-Based Scholarships</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-white-50 rounded-lg border border-black-200">
                        
                        <div>
                          <span className="text-blue-700 font-medium">District Level:</span>
                          <span className="text-sm text-black-600 font-semibold ml-2">10% scholarship on tuition fees</span>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white-50 rounded-lg border border-black-200">
                        
                        <div>
                          <span className="text-blue-700 font-medium">State Level:</span>
                          <span className="text-sm text-black-600 font-semibold ml-2">15% scholarship on tuition fees</span>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white-50 rounded-lg border border-black-200">
                        {/* <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div> */}
                        <div>
                          <span className="text-blue-700 font-medium">Zonal Level:</span>
                          <span className="text-sm text-black-600 font-semibold ml-2">20% scholarship on tuition fees</span>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white-50 rounded-lg border border-black-200">
                        <div>
                          <span className="text-blue-700 font-medium">National/International Level:</span>
                          <span className="text-sm text-black-600 font-semibold ml-2">25% scholarship on tuition fees</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Scholarships</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-white-50 rounded-lg border border-black-200">
                      <span className="text-blue-700 font-medium">Sports Excellence:</span>
                      <span className="text-sm text-black-600 font-semibold ml-2">Up to 50% scholarship for national/international sports achievers</span>
                        {/* <h4 className="font-medium text-blue-800 mb-1">Sports Excellence</h4>
                        <p className="text-sm font-semibold text-black-700">Up to 50% scholarship for national/international sports achievers</p> */}
                      </div>
                      <div className="p-3 bg-white-50 rounded-lg border border-black-200">
                      <span className="text-blue-700 font-medium">Academic Excellence:</span>
                      <span className="text-sm text-black-600 font-semibold ml-2">100% scholarship for students with 95%+ in 12th standard</span>
                      </div>
                      <div className="p-3 bg-white-50 rounded-lg border border-black-200">
                      <span className="text-blue-700 font-medium">Sibling Discount:</span>
                      <span className="text-sm text-black-600 font-semibold ml-2">10% additional discount for siblings studying at Parul University</span>
                      </div>
                      {/* <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                        <h4 className="font-medium text-teal-800 mb-1">Early Bird Discount</h4>
                        <p className="text-sm text-teal-700">5% discount for early admission (before March 31st)</p>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Scholarship Eligibility & Terms */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligibility & Terms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Eligibility Criteria</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Minimum 75% marks in 12th standard</li>
                        <li>• Valid entrance exam score (JEE Main/GUJCET)</li>
                        <li>• Good academic record in previous education</li>
                        <li>• Active participation in extracurricular activities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Terms & Conditions</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Scholarship is renewable annually</li>
                        <li>• Minimum 75% attendance required</li>
                        <li>• CGPA of 7.5+ to maintain scholarship</li>
                        <li>• No disciplinary actions against student</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Scholarship Application Process */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">How to Apply for Scholarship</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">1</div>
                      <h4 className="font-medium text-black-800 mb-1">Submit Application</h4>
                      <p className="text-sm text-black-700">Apply online with required documents</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">2</div>
                      <h4 className="font-medium text-black-800 mb-1">Document Verification</h4>
                      <p className="text-sm text-black-700">Submit academic certificates and achievements</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">3</div>
                      <h4 className="font-medium text-black-800 mb-1">Scholarship Award</h4>
                      <p className="text-sm text-black-700">Receive confirmation and scholarship amount</p>
                    </div>
                  </div>
                </div>

                {/* Contact for Scholarship */}
                <div className="mt-6 bg-blue-50 p-2 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-1">Need Help with Scholarship?</h3>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Contact Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Most Preferred Specialization */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Specialization in Computer Science and Engineering</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: 'Full Stack Development',
                      // icon: '💻',
                      description: 'Frontend and backend technologies',
                      subjects: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'HTML/CSS', 'JavaScript'],
                      career: 'Full Stack Developer, Web Developer, Software Engineer',
                      avgSalary: '₹8-12 LPA'
                    },
                    {
                      name: 'Data Science',
                      // icon: '📊',
                      description: 'Analyze and interpret complex data sets',
                      subjects: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'Data Visualization'],
                      career: 'Data Scientist, Data Analyst, Business Analyst',
                      avgSalary: '₹10-15 LPA'
                    },
                    {
                      name: 'Machine Learning',
                      // icon: '🤖',
                      description: 'Build intelligent systems and algorithms',
                      subjects: ['Python', 'TensorFlow', 'Scikit-learn', 'Deep Learning', 'Neural Networks', 'AI'],
                      career: 'ML Engineer, AI Developer, Research Scientist',
                      avgSalary: '₹12-18 LPA'
                    },
                    {
                      name: 'Artificial Intelligence',
                      // icon: '🧠',
                      description: 'Create intelligent systems and applications',
                      subjects: ['Python', 'Natural Language Processing', 'Computer Vision', 'Robotics', 'Expert Systems'],
                      career: 'AI Engineer, Research Scientist, AI Consultant',
                      avgSalary: '₹15-25 LPA'
                    },
                    {
                      name: 'Cloud Computing',
                      // icon: '☁️',
                      description: 'Deploy and manage cloud-based solutions',
                      subjects: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'DevOps'],
                      career: 'Cloud Engineer, DevOps Engineer, Solutions Architect',
                      avgSalary: '₹9-14 LPA'
                    },
                    {
                      name: 'Cybersecurity',
                      // icon: '🔒',
                      description: 'Protect systems and networks from threats',
                      subjects: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Security Tools', 'Incident Response'],
                      career: 'Security Analyst, Penetration Tester, Security Engineer',
                      avgSalary: '₹8-15 LPA'
                    }
                  ].map((specialization, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-3">
                        {/* <span className="text-2xl mr-3">{specialization.icon}</span> */}
                        <div>
                          <h3 className="font-semibold text-gray-900">{specialization.name}</h3>
                          <p className="text-sm text-gray-600">{specialization.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Career Options:</span>
                          <span className="text-gray-900 font-medium">{specialization.career}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg. Salary:</span>
                          <span className="text-green-600 font-semibold">{specialization.avgSalary}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => openSpecializationModal(specialization)}
                        className="w-full mt-3 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Now */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Are You Interested in this College?</h3>
                <div className="space-y-3">
                  <button
                    onClick={openApplyModal}
                    className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                  >
                    <FaQuestionCircle className="mr-2" />
                    Apply Now
                  </button>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <FaDownload className="mr-2" />
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Photos */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Photos</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {course.photos.slice(0, 6).map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openPhotoModal(index)}
                    >
                      <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  View All Photos
                </button>
              </div>

              {/* Placement Companies */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top Recruiting Companies</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    {
                      name: 'TCS',
                      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-pegq80l4gq735EXB7CICD3k0t2A_WvHvQ&s',
                      color: 'bg-blue-50'
                    },
                    {
                      name: 'Infosys',
                      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png',
                      color: 'bg-red-50'
                    },
                    {
                      name: 'Wipro',
                      logo: 'https://cdn.imgbin.com/20/23/10/imgbin-wipro-logo-business-information-technology-consulting-business-MtRVBdHP8h1yMVUHPV2vHTHWn.jpg',
                      color: 'bg-purple-50'
                    },
                    {
                      name: 'HCL',
                      logo: 'https://companieslogo.com/img/orig/HCLTECH.NS-a301c3b4.png?t=1723784865',
                      color: 'bg-green-50'
                    },
                    {
                      name: 'Tech Mahindra',
                      logo: 'https://w7.pngwing.com/pngs/244/76/png-transparent-tech-mahindra-new-hd-logo.png',
                      color: 'bg-yellow-50'
                    },
                    {
                      name: 'Cognizant',
                      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzNmckL0RyE_e8eWt3ZXFDh6yka2DDMhspgB-7jZ9G9BD1uezi-gxQu1mwnHFFyyIflM&usqp=CAU',
                      color: 'bg-blue-50'
                    },
                    {
                      name: 'Accenture',
                      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png',
                      color: 'bg-orange-50'
                    },
                    {
                      name: 'IBM',
                      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
                      color: 'bg-blue-50'
                    },
                    {
                      name: 'Amazon',
                      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
                      color: 'bg-orange-50'
                    },
                    {
                      name: 'Microsoft',
                      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png',
                      color: 'bg-blue-50'
                    }
                  ].map((company, index) => (
                    <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-8 h-8 ${company.color} rounded-lg flex items-center justify-center mr-3 overflow-hidden`}>
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<span class="text-xs font-bold text-gray-600">${company.name.substring(0, 2)}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{company.name}</span>
                    </div>
                  ))}
                </div>
                {/* <button className="w-full bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                  View All Companies
                </button> */}
              </div>

              {/* Placed Students */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recently Placed Students</h3>
                <div className="space-y-3 mb-4">
                  {[
                    { name: 'Rahul Sharma', company: 'TCS', package: '₹6.5 LPA', year: '2024' },
                    { name: 'Priya Patel', company: 'Infosys', package: '₹5.8 LPA', year: '2024' },
                    { name: 'Amit Kumar', company: 'Wipro', package: '₹7.2 LPA', year: '2024' },
                    { name: 'Neha Singh', company: 'HCL', package: '₹6.0 LPA', year: '2024' },
                    { name: 'Vikram Mehta', company: 'Tech Mahindra', package: '₹5.5 LPA', year: '2024' }
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{student.name}</p>
                          <p className="text-xs text-gray-600">{student.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-blue-600">{student.package}</p>
                        <p className="text-xs text-gray-500">{student.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <button className="w-full bg-green-50 text-green-600 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors font-medium">
                  View All Placements
                </button> */}
              </div>

              {/* Top Courses */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top Courses</h3>
                <div className="space-y-3">
                  {course.topCourses.map((topCourse, index) => (
                    <div key={index} className="border-b pb-3 last:border-b-0">
                      <p className="font-medium text-gray-900">{topCourse.name}</p>
                      <p className="text-sm text-gray-600">{topCourse.duration}</p>
                      <p className="text-sm font-semibold text-blue-600">{topCourse.firstYearFees}</p>
                    </div>
                  ))}
                </div>
                {/* <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors mt-4">
                  View All Courses
                </button> */}
              </div>

              {/* Extra Activities & Clubs */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Extra Activities & Clubs</h3>
                <div className="space-y-4">
                  {/* Technical Clubs */}
                  {/* <div>
                    <h4 className="font-semibold text-blue-600 mb-2">🤖 Technical Clubs</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Coding Club</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Robotics Club</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">AI/ML Club</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Cybersecurity Club</span>
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Active</span>
                      </div>
                    </div>
                  </div> */}

                  {/* Cultural Activities */}
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2"> Cultural Activities</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Dance Club</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Music Club</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Drama Club</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Sports Activities */}
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2"> Sports Activities</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Cricket Team</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Football Team</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Basketball Team</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Events & Competitions */}
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2"> Events & Competitions</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Hackathon 2025</span>
                        <p className="text-xs text-gray-600 mt-1">Annual coding competition</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Tech Fest</span>
                        <p className="text-xs text-gray-600 mt-1">Technical exhibition & workshops</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Cultural Fest</span>
                        <p className="text-xs text-gray-600 mt-1">Annual cultural celebration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Computer Science Engineering Highlights */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4"> Computer Science Engineering</h3>
                <div className="space-y-4">
                  {/* Core Subjects */}
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2"> Core Subjects</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-xs font-medium text-black">Data Structures</span>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-xs font-medium text-black">Algorithms</span>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-xs font-medium text-black">Database Systems</span>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-xs font-medium text-black">Computer Networks</span>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-xs font-medium text-black">Operating Systems</span>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-xs font-medium text-black">Software Engineering</span>
                      </div>
                    </div>
                  </div>

                  {/* Programming Languages */}
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2"> Programming Languages</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">Python</span>
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">Java</span>
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">PHP</span>
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">Swift</span>
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">C++</span>                   
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">SQL</span>
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">HTML/CSS</span>
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">JavaScript</span>
                      <span className="bg-blue-100 text-black px-2 py-1 rounded text-xs">TypeScript</span>
                    </div>
                  </div>

                  {/* Tools & Technologies */}
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Tools & Technologies</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Git & GitHub</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Version Control</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">Docker</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Containerization</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-black-700">AWS/Azure</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Cloud Platforms</span>
                      </div>
                      {/* <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">VS Code</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IDE</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialization Modal */}
        {showSpecializationModal && selectedSpecialization && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{selectedSpecialization.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedSpecialization.name}</h2>
                    <p className="text-gray-600 mt-1">{selectedSpecialization.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeSpecializationModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="p-6 space-y-6">
                  {/* Overview */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Career Options</h4>
                        <p className="text-sm text-blue-800">{selectedSpecialization.career}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-2">Average Salary</h4>
                        <p className="text-lg font-semibold text-green-800">{selectedSpecialization.avgSalary}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-2">Duration</h4>
                        <p className="text-sm text-purple-800">4 Years (B.Tech)</p>
                      </div>
                    </div>
                  </div>

                  {/* Syllabus */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Detailed Syllabus</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Year-wise breakdown */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Year-wise Subjects</h4>
                        <div className="space-y-3">
                          <div className="border border-gray-200 rounded-lg p-3">
                            <h5 className="font-medium text-blue-600 mb-2">Year 1 & 2 (Foundation)</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Programming Fundamentals</li>
                              <li>• Data Structures & Algorithms</li>
                              <li>• Computer Networks</li>
                              <li>• Database Management Systems</li>
                              <li>• Operating Systems</li>
                            </ul>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-3">
                            <h5 className="font-medium text-green-600 mb-2">Year 3 (Specialization)</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              {selectedSpecialization.subjects.slice(0, 3).map((subject: string, index: number) => (
                                <li key={index}>• {subject}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-3">
                            <h5 className="font-medium text-purple-600 mb-2">Year 4 (Advanced)</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              {selectedSpecialization.subjects.slice(3).map((subject: string, index: number) => (
                                <li key={index}>• {subject}</li>
                              ))}
                              <li>• Capstone Project</li>
                              <li>• Industry Internship</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Skills & Tools */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Skills & Tools</h4>
                        <div className="space-y-3">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-900 mb-2">Core Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                              {selectedSpecialization.subjects.map((subject: string, index: number) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-900 mb-2">Additional Skills</h5>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Git & GitHub</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Agile/Scrum</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Problem Solving</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Team Collaboration</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Projects & Internships */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Projects & Internships</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Academic Projects</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Real-world industry projects</li>
                          <li>• Research-based assignments</li>
                          <li>• Hackathon participation</li>
                          <li>• Open source contributions</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Internship Opportunities</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 6-month industry internship</li>
                          <li>• Summer training programs</li>
                          <li>• Research internships</li>
                          <li>• Startup collaborations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Fees Structure */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Fees Structure</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Tuition Fees</p>
                          <p className="text-lg font-semibold text-gray-900">₹94,800/year</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Program Fee</p>
                          <p className="text-lg font-semibold text-gray-900">₹3.79 Lakhs</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Scholarship Available</p>
                          <p className="text-lg font-semibold text-green-600">Up to 25%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Photo Modal */}
        {showPhotoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closePhotoModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              <div className="relative">
                <img
                  src={course.photos[currentPhotoIndex]}
                  alt={`Photo ${currentPhotoIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                <button
                  onClick={goToPreviousPhoto}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={goToNextPhoto}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center mt-4 text-white">
                {currentPhotoIndex + 1} of {course.photos.length}
              </div>
            </div>
          </div>
        )}

        {/* Apply Modal */}
        {showApplyModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Apply for {course.name}</h2>
                </div>
                <button
                  onClick={closeApplyModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleApplySubmit} className="p-4">
                <div className="space-y-3">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaUser className="inline mr-2 text-gray-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={applyForm.fullName}
                      onChange={handleApplyFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaEnvelope className="inline mr-2 text-gray-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={applyForm.email}
                      onChange={handleApplyFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaPhone className="inline mr-2 text-gray-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={applyForm.phone}
                      onChange={handleApplyFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Current Education */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaGraduationCap className="inline mr-2 text-gray-400" />
                      Current Education Level
                    </label>
                    <select
                      name="currentEducation"
                      value={applyForm.currentEducation}
                      onChange={handleApplyFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your current education</option>
                      <option value="10th">10th Standard</option>
                      <option value="12th">12th Standard</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Year */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Year of Admission
                    </label>
                    <select
                      name="preferredYear"
                      value={applyForm.preferredYear}
                      onChange={handleApplyFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select preferred year</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button - Centered */}
                <div className="mt-4 flex justify-center">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    Submit Application
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

export default CourseDetailsPage; 