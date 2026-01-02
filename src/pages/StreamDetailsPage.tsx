import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { FaArrowLeft, FaGraduationCap, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

// Define stream data interface
interface College {
  id: string;
  name: string;
  location: string;
  rating: number;
  courses: string[];
  image: string;
}

interface StreamData {
  id: string;
  name: string;
  description: string;
  colleges: College[];
  courses: string[];
  careerOptions: string[];
  entranceExams: string[];
}

// Mock exam details
const examDetailsData: Record<string, { name: string; description: string; eligibility: string; pattern: string; officialSite: string }> = {
  'CAT': {
    name: 'CAT',
    description: 'The Common Admission Test (CAT) is a national-level management entrance exam conducted by the IIMs for admission to MBA/PGDM programs.',
    eligibility: 'Bachelor\'s degree with at least 50% marks (45% for SC/ST/PwD).',
    pattern: 'Sections: VARC, DILR, QA. Duration: 2 hours. Mode: Computer-based.',
    officialSite: 'https://iimcat.ac.in/'
  },
  'XAT': {
    name: 'XAT',
    description: 'The Xavier Aptitude Test (XAT) is conducted by XLRI Jamshedpur for admission to management programs.',
    eligibility: 'Bachelor\'s degree in any discipline.',
    pattern: 'Sections: Decision Making, QA & DI, Verbal & LR, GK. Duration: 3 hours. Mode: Computer-based.',
    officialSite: 'https://xatonline.in/'
  },
  'MAT': {
    name: 'MAT',
    description: 'The Management Aptitude Test (MAT) is a standardized test for admission to MBA and allied programs.',
    eligibility: 'Bachelor\'s degree in any discipline.',
    pattern: 'Sections: Language Comprehension, Math Skills, Data Analysis, Intelligence, GK. Duration: 2.5 hours.',
    officialSite: 'https://mat.aima.in/'
  },
  'GMAT': {
    name: 'GMAT',
    description: 'The Graduate Management Admission Test (GMAT) is used for admission to business schools worldwide.',
    eligibility: 'Bachelor\'s degree recommended. No official minimum.',
    pattern: 'Sections: Quantitative, Verbal, IR, AWA. Duration: 3.5 hours. Mode: Computer-based.',
    officialSite: 'https://www.mba.com/'
  },
  'CMAT': {
    name: 'CMAT',
    description: 'The Common Management Admission Test (CMAT) is a national-level entrance exam for management programs in India.',
    eligibility: 'Bachelor\'s degree in any discipline.',
    pattern: 'Sections: Quantitative, LR, Language, GK, Innovation. Duration: 3 hours.',
    officialSite: 'https://cmat.nta.nic.in/'
  },
  // Engineering Exams
  'JEE Main': {
    name: 'JEE Main',
    description: 'Joint Entrance Examination Main is a national-level entrance exam for undergraduate engineering programs (B.E./B.Tech) in India.',
    eligibility: '10+2 with Physics, Mathematics, and Chemistry/Biology/Technical Vocational Subject.',
    pattern: 'Paper 1: Physics, Chemistry, Mathematics. Computer-based. Duration: 3 hours.',
    officialSite: 'https://jeemain.nta.nic.in/'
  },
  'JEE Advanced': {
    name: 'JEE Advanced',
    description: 'JEE Advanced is conducted for admission to the Indian Institutes of Technology (IITs) and a few other institutes.',
    eligibility: 'Top 2,50,000 JEE Main qualifiers. 10+2 with required subjects.',
    pattern: 'Two papers: Physics, Chemistry, Mathematics. Computer-based. Duration: 3 hours each.',
    officialSite: 'https://jeeadv.ac.in/'
  },
  'GATE': {
    name: 'GATE',
    description: 'Graduate Aptitude Test in Engineering (GATE) is for admission to postgraduate engineering programs and PSU recruitment.',
    eligibility: 'Bachelor\'s degree in Engineering/Technology/Science/Arts/Commerce.',
    pattern: 'Multiple choice and numerical answer questions. Duration: 3 hours.',
    officialSite: 'https://gate.iitk.ac.in/'
  },
  'BITSAT': {
    name: 'BITSAT',
    description: 'Birla Institute of Technology and Science Admission Test (BITSAT) is for admission to BITS Pilani and its campuses.',
    eligibility: '10+2 with Physics, Chemistry, Mathematics, and English.',
    pattern: 'Physics, Chemistry, Mathematics, English Proficiency, Logical Reasoning. Computer-based. Duration: 3 hours.',
    officialSite: 'https://www.bitsadmission.com/'
  },
  // Medical Exams
  'NEET UG': {
    name: 'NEET UG',
    description: 'National Eligibility cum Entrance Test (Undergraduate) is for admission to MBBS, BDS, and other undergraduate medical courses in India.',
    eligibility: '10+2 with Physics, Chemistry, Biology/Biotechnology, and English.',
    pattern: 'Physics, Chemistry, Biology. Pen and paper-based. Duration: 3 hours 20 minutes.',
    officialSite: 'https://neet.nta.nic.in/'
  },
  'NEET PG': {
    name: 'NEET PG',
    description: 'National Eligibility cum Entrance Test (Postgraduate) is for admission to MD/MS/PG Diploma courses in India.',
    eligibility: 'MBBS degree or provisional MBBS pass certificate.',
    pattern: 'Multiple choice questions from Pre-Clinical, Para-Clinical, and Clinical subjects. Computer-based. Duration: 3 hours 30 minutes.',
    officialSite: 'https://nbe.edu.in/'
  },
  'AIIMS PG': {
    name: 'AIIMS PG',
    description: 'AIIMS PG is the entrance exam for postgraduate courses (MD/MS/MCh/DM/MDS) at AIIMS institutes.',
    eligibility: 'MBBS degree from a recognized institution.',
    pattern: 'Multiple choice questions. Computer-based. Duration: 3 hours.',
    officialSite: 'https://www.aiimsexams.ac.in/'
  },
  'JIPMER': {
    name: 'JIPMER',
    description: 'Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER) entrance exam for MBBS and other courses.',
    eligibility: '10+2 with Physics, Chemistry, Biology/Biotechnology, and English.',
    pattern: 'Physics, Chemistry, Biology, English, Logical & Quantitative Reasoning. Computer-based. Duration: 2.5 hours.',
    officialSite: 'https://jipmer.edu.in/'
  },
};

const StreamDetailsPage = () => {
  const { streamId } = useParams<{ streamId: string }>();
  const navigate = useNavigate();
  const [streamData, setStreamData] = useState<StreamData | null>(null);
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [showAllColleges, setShowAllColleges] = useState(false);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll simulate fetching data based on the streamId
    const fetchStreamData = () => {
      // Mock data for different streams
      const streamsData: Record<string, StreamData> = {
        'engineering': {
          id: 'engineering',
          name: 'Engineering',
          description: 'Engineering education focuses on the application of scientific and mathematical principles to design, develop, and maintain structures, machines, systems, and processes. It prepares students for careers in various engineering disciplines such as mechanical, electrical, civil, and computer engineering.',
          colleges: [
            { 
              id: 'iit-bombay', 
              name: 'IIT Bombay', 
              location: 'Mumbai, Maharashtra', 
              rating: 4.9, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsillWjv4RAj1YDCTEvUf2uOtXZu-zAFqHTw&s'
            },
            { 
              id: 'iit-delhi', 
              name: 'IIT Delhi', 
              location: 'New Delhi, Delhi', 
              rating: 4.8, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://images.seeklogo.com/logo-png/48/1/indian-institute-of-technology-delhi-logo-png_seeklogo-483677.png'
            },
            { 
              id: 'bits-pilani', 
              name: 'BITS Pilani', 
              location: 'Pilani, Rajasthan', 
              rating: 4.7, 
              courses: ['B.E', 'M.E', 'PhD'],
              image: 'https://images.seeklogo.com/logo-png/48/1/indian-institute-of-technology-delhi-logo-png_seeklogo-483677.png'
            },
            { 
              id: 'iit-kanpur', 
              name: 'IIT Kanpur', 
              location: 'Kanpur, Uttar Pradesh', 
              rating: 4.7, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://upload.wikimedia.org/wikipedia/en/0/0a/IIT_Kanpur_Logo.png'
            },
            { 
              id: 'iit-madras', 
              name: 'IIT Madras', 
              location: 'Chennai, Tamil Nadu', 
              rating: 4.8, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/IIT_Madras_Logo.png'
            },
            { 
              id: 'iit-kharagpur', 
              name: 'IIT Kharagpur', 
              location: 'Kharagpur, West Bengal', 
              rating: 4.6, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://upload.wikimedia.org/wikipedia/en/9/9e/IIT_Kharagpur_Logo.png'
            },
            { 
              id: 'iit-roorkee', 
              name: 'IIT Roorkee', 
              location: 'Roorkee, Uttarakhand', 
              rating: 4.6, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/IIT_Roorkee_Logo.png'
            },
            { 
              id: 'iit-guwahati', 
              name: 'IIT Guwahati', 
              location: 'Guwahati, Assam', 
              rating: 4.5, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://upload.wikimedia.org/wikipedia/en/7/7e/IIT_Guwahati_Logo.png'
            },
            { 
              id: 'nit-trichy', 
              name: 'NIT Trichy', 
              location: 'Tiruchirappalli, Tamil Nadu', 
              rating: 4.4, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://upload.wikimedia.org/wikipedia/en/1/1e/NIT_Trichy_Logo.png'
            },
            { 
              id: 'nit-surathkal', 
              name: 'NIT Surathkal', 
              location: 'Surathkal, Karnataka', 
              rating: 4.3, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/NITK_Logo.png'
            },
            { 
              id: 'vit-vellore', 
              name: 'VIT Vellore', 
              location: 'Vellore, Tamil Nadu', 
              rating: 4.2, 
              courses: ['B.Tech', 'M.Tech', 'PhD'],
              image: 'https://upload.wikimedia.org/wikipedia/en/0/0e/VIT_Logo.png'
            },
          ],
          courses: ['B.Tech', 'M.Tech', 'B.E', 'M.E', 'PhD in Engineering'],
          careerOptions: ['Software Engineer', 'Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Research Scientist'],
          entranceExams: ['JEE Main', 'JEE Advanced', 'GATE', 'BITSAT']
        },
        'management': {
          id: 'management',
          name: 'Management',
          description: 'Management education provides students with the knowledge and skills needed to lead and organize businesses and other organizations effectively. It covers areas such as finance, marketing, operations, human resources, and strategy.',
          colleges: [
            { 
              id: 'iim-ahmedabad', 
              name: 'IIM Ahmedabad', 
              location: 'Ahmedabad, Gujarat', 
              rating: 4.9, 
              courses: ['MBA', 'PGDM', 'PhD'],
              image: 'https://www.iima.ac.in/themes/iima/images/slider/slider-1.jpg'
            },
            { 
              id: 'iim-bangalore', 
              name: 'IIM Bangalore', 
              location: 'Bangalore, Karnataka', 
              rating: 4.8, 
              courses: ['MBA', 'PGDM', 'PhD'],
              image: 'https://www.iima.ac.in/themes/iima/images/slider/slider-1.jpg'
            },
            { 
              id: 'xlri-jamshedpur', 
              name: 'XLRI Jamshedpur', 
              location: 'Jamshedpur, Jharkhand', 
              rating: 4.7, 
              courses: ['MBA', 'PGDM', 'Executive MBA'],
              image: 'https://www.iima.ac.in/themes/iima/images/slider/slider-1.jpg'
            },
            { 
              id: 'iim-calcutta', 
              name: 'IIM Calcutta', 
              location: 'Kolkata, West Bengal', 
              rating: 4.8, 
              courses: ['MBA', 'PGDM', 'PhD'],
              image: 'https://www.iimcal.ac.in/sites/all/themes/iimc/images/logo.png'
            },
            { 
              id: 'iim-lucknow', 
              name: 'IIM Lucknow', 
              location: 'Lucknow, Uttar Pradesh', 
              rating: 4.7, 
              courses: ['MBA', 'PGDM', 'PhD'],
              image: 'https://www.iiml.ac.in/sites/default/files/inline-images/logo_0.png'
            },
            { 
              id: 'fms-delhi', 
              name: 'FMS Delhi', 
              location: 'New Delhi, Delhi', 
              rating: 4.6, 
              courses: ['MBA', 'Executive MBA'],
              image: 'https://www.fms.edu/sites/default/files/fms_logo.png'
            },
            { 
              id: 'spjimr-mumbai', 
              name: 'SPJIMR Mumbai', 
              location: 'Mumbai, Maharashtra', 
              rating: 4.6, 
              courses: ['PGDM', 'MBA', 'Executive MBA'],
              image: 'https://www.spjimr.org/sites/default/files/2021-07/spjimr-logo.png'
            },
            { 
              id: 'mdi-gurgaon', 
              name: 'MDI Gurgaon', 
              location: 'Gurgaon, Haryana', 
              rating: 4.5, 
              courses: ['PGPM', 'PGDM', 'Executive MBA'],
              image: 'https://mdi.ac.in/images/logo.png'
            },
            { 
              id: 'nmims-mumbai', 
              name: 'NMIMS Mumbai', 
              location: 'Mumbai, Maharashtra', 
              rating: 4.4, 
              courses: ['MBA', 'PGDM', 'Executive MBA'],
              image: 'https://www.nmims.edu/images/nmims-logo.png'
            },
            { 
              id: 'sibm-pune', 
              name: 'SIBM Pune', 
              location: 'Pune, Maharashtra', 
              rating: 4.4, 
              courses: ['MBA', 'Executive MBA'],
              image: 'https://www.sibm.edu/assets/images/logo.png'
            },
            { 
              id: 'iift-delhi', 
              name: 'IIFT Delhi', 
              location: 'New Delhi, Delhi', 
              rating: 4.3, 
              courses: ['MBA (IB)', 'Executive MBA'],
              image: 'https://www.iift.ac.in/iift/images/logo.png'
            },
          ],
          courses: ['BBA', 'MBA', 'PGDM', 'PhD in Management'],
          careerOptions: ['Business Manager', 'Marketing Manager', 'Financial Analyst', 'HR Manager', 'Consultant'],
          entranceExams: ['CAT', 'XAT', 'MAT', 'GMAT', 'CMAT']
        },
        'medical': {
          id: 'medical',
          name: 'Medical',
          description: 'Medical education prepares students for careers in healthcare, focusing on the diagnosis, treatment, and prevention of disease. It includes programs in medicine, dentistry, pharmacy, nursing, and allied health fields.',
          colleges: [
            { 
              id: 'aiims-delhi', 
              name: 'AIIMS Delhi', 
              location: 'New Delhi, Delhi', 
              rating: 4.9, 
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://www.aiims.edu/images/slider/slider1.jpg'
            },
            { 
              id: 'cmc-vellore', 
              name: 'Christian Medical College, Vellore', 
              location: 'Vellore, Tamil Nadu', 
              rating: 4.8, 
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://www.aiims.edu/images/slider/slider1.jpg'
            },
            { 
              id: 'kmc-manipal', 
              name: 'Kasturba Medical College, Manipal', 
              location: 'Manipal, Karnataka', 
              rating: 4.7, 
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://www.aiims.edu/images/slider/slider1.jpg'
            },
            { 
              id: 'afmc-pune',
              name: 'Armed Forces Medical College, Pune',
              location: 'Pune, Maharashtra',
              rating: 4.7,
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AFMC_Pune_Logo.png'
            },
            { 
              id: 'mamc-delhi',
              name: 'Maulana Azad Medical College, Delhi',
              location: 'New Delhi, Delhi',
              rating: 4.6,
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AFMC_Pune_Logo.png'
            },
            { 
              id: 'jipmer-pondicherry',
              name: 'JIPMER, Puducherry',
              location: 'Puducherry',
              rating: 4.6,
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AFMC_Pune_Logo.png'
            },
            { 
              id: 'kgmc-lucknow',
              name: "King George's Medical University, Lucknow",
              location: 'Lucknow, Uttar Pradesh',
              rating: 4.5,
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AFMC_Pune_Logo.png'
            },
            { 
              id: 'srmc-chennai',
              name: 'Sri Ramachandra Medical College, Chennai',
              location: 'Chennai, Tamil Nadu',
              rating: 4.5,
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AFMC_Pune_Logo.png'
            },
            { 
              id: 'bmc-bangalore',
              name: 'Bangalore Medical College and Research Institute',
              location: 'Bangalore, Karnataka',
              rating: 4.4,
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AFMC_Pune_Logo.png'
            },
            { 
              id: 'gmc-mumbai',
              name: 'Grant Medical College, Mumbai',
              location: 'Mumbai, Maharashtra',
              rating: 4.4,
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AFMC_Pune_Logo.png'
            },
            { 
              id: 'sms-jaipur',
              name: 'SMS Medical College, Jaipur',
              location: 'Jaipur, Rajasthan',
              rating: 4.3,
              courses: ['MBBS', 'MD', 'MS'],
              image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AFMC_Pune_Logo.png'
            },
          ],
          courses: ['MBBS', 'BDS', 'B.Pharm', 'MD', 'MS', 'DM', 'PhD in Medicine'],
          careerOptions: ['Doctor', 'Surgeon', 'Physician', 'Medical Researcher', 'Public Health Professional'],
          entranceExams: ['NEET UG', 'NEET PG', 'AIIMS PG', 'JIPMER']
        },
        // Add more streams as needed
      };

      // Find the stream data or provide a default
      const data = streamId ? streamsData[streamId] : null;
      
      setStreamData(data);
    };

    fetchStreamData();
  }, [streamId]);

  if (!streamData) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-medium">Stream not found</h3>
            <p>The requested stream information could not be found.</p>
            <button 
              onClick={() => navigate('/')} 
              className="mt-3 inline-flex items-center text-blue-600 hover:underline"
            >
              <FaArrowLeft className="mr-2" /> Return to home page
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Stream header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-3">{streamData.name}</h1>
          <p className="text-lg text-blue-100 max-w-3xl">{streamData.description}</p>
        </div>

        {/* Top colleges section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Top {streamData.name} Colleges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(showAllColleges ? streamData.colleges : streamData.colleges.slice(0, 4)).map(college => (
              <div key={college.id} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col items-center p-3 min-h-[270px]">
                <div className="h-24 w-24 flex items-center justify-center bg-gray-50 rounded-full shadow-sm mb-2 mt-2">
                  <img 
                    src={college.image} 
                    alt={college.name} 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1 text-center line-clamp-2">{college.name}</h3>
                <div className="flex items-center text-gray-500 text-xs mb-1">
                  <FaMapMarkerAlt className="mr-1 text-xs" /> {college.location}
                </div>
                <div className="flex items-center mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(college.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs text-gray-600">{college.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2 justify-center">
                  {college.courses.slice(0, 3).map((course, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">
                      {course}
                    </span>
                  ))}
                  {college.courses.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-50 text-gray-700 text-xs rounded-full">
                      +{college.courses.length - 3}
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => navigate(`/university/${college.id}`)}
                  className="w-full py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs rounded-md hover:from-blue-700 hover:to-blue-600 transition flex items-center justify-center mt-auto"
                >
                <span className="mr-1 text-xs">View College</span>
                </button>
              </div>
            ))}
          </div>
          {streamData.colleges.length > 4 && (
            <div className="mt-6 text-center">
              {!showAllColleges ? (
                <button
                  className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
                  onClick={() => setShowAllColleges(true)}
                >
                  View All {streamData.name} Colleges
                </button>
              ) : (
                <button
                  className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
                  onClick={() => setShowAllColleges(false)}
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </section>

        {/* Courses and career options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaGraduationCap className="mr-2 text-blue-600" /> Popular Courses
            </h2>
            <ul className="space-y-3">
              {streamData.courses.map((course, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {course}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaBriefcase className="mr-2 text-blue-600" /> Career Options
            </h2>
            <ul className="space-y-3">
              {streamData.careerOptions.map((career, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {career}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Entrance exams section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Top Entrance Exams</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {streamData.entranceExams.map((exam, idx) => (
                <button
                  key={idx}
                  className="border border-gray-200 rounded-lg p-4 text-center hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => setSelectedExam(exam)}
                >
                  <h3 className="font-medium">{exam}</h3>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Details Modal */}
        {selectedExam && examDetailsData[selectedExam] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative animate-fade-in">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setSelectedExam(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-2">{examDetailsData[selectedExam].name}</h3>
              <p className="mb-2 text-gray-700">{examDetailsData[selectedExam].description}</p>
              <div className="mb-2">
                <span className="font-semibold">Eligibility:</span> {examDetailsData[selectedExam].eligibility}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Exam Pattern:</span> {examDetailsData[selectedExam].pattern}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Official Site:</span> <a href={examDetailsData[selectedExam].officialSite} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{examDetailsData[selectedExam].officialSite}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default StreamDetailsPage; 