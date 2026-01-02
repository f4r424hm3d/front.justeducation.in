import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const CoachingPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      // We could load actual data here if we had an API
      console.log("Prefetching coaching details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/coaching/${id}`);
  }, [navigate]);

  // Sample coaching data
  const coachingInstitutes = [
    {
      id: 1,
      name: 'FIITJEE',
      location: 'Delhi',
      established: '1992',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
      information: 'FIITJEE is one of India\'s most trusted names in JEE preparation. Founded by Mr. D.K. Goel, FIITJEE has been consistently producing top rankers in JEE Advanced and JEE Main. The institute offers comprehensive programs for IIT-JEE, KVPY, NTSE, and Olympiads. With experienced faculty and proven teaching methodology, FIITJEE has helped thousands of students achieve their engineering dreams. The institute provides integrated classroom programs, correspondence courses, and online learning platforms to cater to different student needs.'
    },
    {
      id: 2,
      name: 'Allen Career Institute',
      location: 'Kota',
      established: '1988',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
      information: 'Allen Career Institute is a premier coaching institute in Kota, known for its exceptional results in medical and engineering entrance exams. Founded by Rajesh Maheshwari, Allen has revolutionized the coaching industry with its innovative teaching methods and comprehensive study material. The institute offers courses for NEET, JEE, AIIMS, JIPMER, and various state entrance exams. Allen\'s success rate in competitive exams is outstanding, with thousands of students securing top ranks every year. The institute provides both classroom and online programs.'
    },
    {
      id: 3,
      name: 'Aakash Institute',
      location: 'New Delhi',
      established: '1988',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      information: 'Aakash Institute is a leading educational institute in India, specializing in preparing students for medical and engineering entrance examinations. With over three decades of experience, Aakash has established itself as a trusted name in competitive exam preparation. The institute offers comprehensive courses for NEET, JEE, AIIMS, JIPMER, and foundation courses for classes 8th to 12th. Aakash\'s teaching methodology combines traditional classroom learning with modern technology, providing students with the best of both worlds.'
    },
    {
      id: 4,
      name: "Resonance",
      location: 'Kota',
      established: '2001',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80',
      information: 'Resonance is a leading coaching institute in Kota, known for its innovative teaching methods and excellent results in IIT-JEE and medical entrance exams. The institute was founded with the vision of providing quality education and has consistently delivered outstanding results. Resonance offers integrated classroom programs, distance learning programs, and online courses. The institute\'s unique teaching methodology, combined with regular assessments and personalized attention, helps students achieve their goals effectively.'
    },
    // Add more sample coaching institutes for pagination demo
    {
      id: 5,
      name: 'Career Point',
      location: 'Kota',
      established: '1993',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      information: 'Career Point is a well-established coaching institute in Kota, offering comprehensive preparation for various competitive exams. The institute has been instrumental in shaping the careers of thousands of students over the years. Career Point provides courses for JEE, NEET, KVPY, NTSE, and various Olympiads. The institute\'s experienced faculty and well-structured curriculum ensure that students receive the best possible preparation for their target exams.'
    },
    {
      id: 6,
      name: 'Bansal Classes',
      location: 'Kota',
      established: '1983',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      information: 'Bansal Classes is one of the pioneering coaching institutes in Kota, founded by V.K. Bansal. The institute has been at the forefront of IIT-JEE preparation for over four decades. Bansal Classes is known for its rigorous training programs and excellent track record in producing IIT toppers. The institute offers integrated classroom programs, regular classroom programs, and correspondence courses. With its proven teaching methodology and experienced faculty, Bansal Classes continues to be a preferred choice for IIT aspirants.'
    },
    {
      id: 7,
      name: 'Vidyamandir Classes',
      location: 'Delhi',
      established: '1986',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      information: 'Vidyamandir Classes (VMC) is a premier coaching institute known for its excellent results in IIT-JEE and medical entrance exams. Founded by a team of IIT alumni, VMC has been providing quality education for over three decades. The institute offers comprehensive courses for JEE, NEET, KVPY, and Olympiads. VMC\'s teaching methodology focuses on conceptual clarity and problem-solving skills, helping students develop a strong foundation in their subjects.'
    },
    {
      id: 8,
      name: 'Motion Education',
      location: 'Kota',
      established: '2007',
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      information: 'Motion Education is a modern coaching institute that has quickly gained recognition for its innovative teaching methods and excellent results. The institute offers comprehensive courses for JEE, NEET, and foundation programs. Motion Education combines traditional classroom teaching with modern technology, providing students with interactive learning experiences. The institute\'s dedicated faculty and student-centric approach have helped many students achieve their goals in competitive exams.'
    },
    {
      id: 9,
      name: 'Triumph Academy',
      location: 'Patna',
      established: '2005',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      information: 'Triumph Academy is a leading coaching institute in Patna, known for its excellent results in medical and engineering entrance exams. The institute has been consistently producing top rankers in NEET and JEE over the years. Triumph Academy offers comprehensive courses with experienced faculty and well-structured study material. The institute\'s personalized attention to each student and regular assessments ensure optimal preparation for competitive exams.'
    },
    {
      id: 10,
      name: 'IMS Learning',
      location: 'Mumbai',
      established: '1977',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=800&q=80',
      information: 'IMS Learning Resources is one of Indias oldest and most respected test preparation companies. With over four decades of experience, IMS has  achieve their career goals through various competitive exams. The institute offers courses for CAT, UPSC, and other management and civil services exams. IMS\'s comprehensive study material, experienced faculty, and proven teaching methodology have helped thousands of students succeed in their chosen fields.'
    },
    {
      id: 11,
      name: 'TIME Institute',
      location: 'Hyderabad',
      established: '1992',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
      information: 'T.I.M.E. (Triumphant Institute of Management Education) is a leading test preparation institute in India, specializing in MBA entrance exams and other competitive tests. Founded in 1992, T.I.M.E. has been consistently producing top rankers in CAT, XAT, GMAT, and other management entrance exams. The institute offers comprehensive courses with experienced faculty and innovative teaching methods. T.I.M.E.\'s focus on conceptual clarity and practical application has made it a preferred choice for management aspirants.'
    },
    {
      id: 12,
      name: 'Vibrant Academy',
      location: 'Kota',
      established: '2005',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
      information: 'Vibrant Academy is a rapidly growing coaching institute in Kota, known for its innovative teaching methods and excellent results in JEE and NEET. The institute was founded with the vision of providing quality education through modern teaching techniques. Vibrant Academy offers integrated classroom programs, crash courses, and online learning platforms. The institute\'s young and dynamic faculty, combined with state-of-the-art infrastructure, creates an ideal learning environment for students.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const institutesPerPage = 8; // Show only 8 institutes per page
  const totalPages = Math.ceil(coachingInstitutes.length / institutesPerPage);
  const startIdx = (currentPage - 1) * institutesPerPage;
  const endIdx = startIdx + institutesPerPage;
  const currentInstitutes = coachingInstitutes.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Function to truncate text to 3 lines
  const truncateText = (text: string, maxLength: number = 155) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-3">Find the Best Coaching Institutes</h1>
            <p className="text-lg mb-6">Explore top coaching institutes across India and choose the right one for your preparation</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search coaching institutes by name, location, or course..."
                  className="flex-1 px-3 py-2 text-gray-800 focus:outline-none text-sm"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Location</option>
                <option value="delhi">Delhi</option>
                <option value="kota">Kota</option>
                <option value="mumbai">Mumbai</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Course</option>
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
                <option value="upsc">UPSC</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Type</option>
                <option value="classroom">Classroom</option>
                <option value="online">Online</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="fees">Fees</option>
                <option value="students">Students</option>
              </select>
            </div>
          </div>

          {/* Coaching Institutes Grid */}
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentInstitutes.map(institute => (
                  <div
                    key={institute.id}
                    className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                  >
                    {/* Top Rated Badge */}
                    {institute.rating >= 4.7 && (
                      <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-blue-600 transition">Top Rated</span>
                    )}
                    <div className="h-32 bg-gray-200 relative">
                      <img
                        src={institute.image}
                        alt={institute.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 flex flex-col flex-grow">
                      <h3 className="text-base font-semibold mb-2 text-gray-800">{institute.name}</h3>
                      
                      {/* Location, Rating, Established in one line */}
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-1 text-gray-500" />
                          <span>{institute.location}</span>
                        </div>
                        <div className="flex items-center">
                          <FaStar className="mr-1 text-yellow-400" size={10} />
                          <span>{institute.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1 text-gray-500" />
                          <span>Est. {institute.established}</span>
                        </div>
                      </div>
                      
                      {/* Information Section */}
                      <div className="mb-3 flex-grow">
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {truncateText(institute.information)}
                          {institute.information.length > 160 && (
                            <button
                              onClick={(e) => handleViewDetails(e, institute.id)}
                              onMouseEnter={handlePrefetch}
                              className="text-blue-600 text-xs font-medium ml-1 hover:text-blue-700 transition inline"
                            >
                              More
                            </button>
                          )}
                        </p>
                      </div>
                      
                      <button
                        onClick={(e) => handleViewDetails(e, institute.id)}
                        onMouseEnter={handlePrefetch}
                        className="block w-full py-1.5 bg-blue-600 text-white rounded text-center font-medium text-xs hover:bg-blue-700 transition mt-auto"
                      >
                        View Details
                      </button>
                                         </div>
                   </div>
               ))}
             </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            <nav className="inline-flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 rounded text-xs border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-600'}`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, idx) => {
                const pageNumber = idx + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-2 py-1 rounded text-xs border ${currentPage === pageNumber ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 rounded text-xs border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-600'}`}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CoachingPage; 