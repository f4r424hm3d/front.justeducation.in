import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const TuitionsPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching tuition center details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/tuition/${id}`);
  }, [navigate]);

  // Sample tuition center data with detailed information
  const tuitionCenters = [
    {
      id: 1,
      name: 'Edu Spark Home Tuitions',
      location: 'Visakhapatnam',
      established: '2018',
      students: '500+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      information: 'Edu Spark Home Tuitions is a premier home tutoring service in Visakhapatnam, established in 2018. We provide personalized one-on-one tutoring for students from Class I to Class XII. Our experienced teachers specialize in Mathematics, Science, English, and other core subjects. We offer flexible scheduling, customized study plans, and regular progress tracking. Our tutors are qualified professionals with years of teaching experience, ensuring quality education in the comfort of your home.',
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies'],
      classes: ['Class I', 'Class II', 'Class III', 'Class IV', 'Class V'],
      phone: '8804204385',
      fees: '₹800 - ₹1,200 per session'
    },
    {
      id: 2,
      name: 'S K TUITIONS',
      location: 'Visakhapatnam',
      established: '2015',
      students: '800+',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      information: 'S K TUITIONS is a comprehensive tuition center offering both online and offline classes in Visakhapatnam. Established in 2015, we provide specialized coaching for Class IV to Class XII students. Our unique approach combines traditional classroom teaching with modern online platforms. We have expert teachers for all subjects including Mathematics, Physics, Chemistry, Biology, and English. Our center is equipped with modern facilities and we maintain small batch sizes for personalized attention.',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
      classes: ['Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII'],
      phone: '07487893870',
      fees: '₹1,000 - ₹1,500 per month'
    },
    {
      id: 3,
      name: 'AIMS Home Tuitions',
      location: 'Visakhapatnam',
      established: '2016',
      students: '600+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      information: 'AIMS Home Tuitions provides quality home tutoring services in Visakhapatnam since 2016. We specialize in providing individual attention to students who need extra support in their studies. Our tutors are carefully selected based on their qualifications and teaching experience. We offer tutoring for all subjects from primary to higher secondary levels. Our approach focuses on building strong fundamentals and improving academic performance through regular assessments and feedback.',
      subjects: ['All Subjects', 'Mathematics', 'Science', 'English'],
      classes: ['Class I', 'Class II', 'Class III', 'Class IV', 'Class V'],
      phone: '9290907070',
      fees: '₹500 - ₹800 per session'
    },
    {
      id: 3,
      name: 'Bright Future Coaching Center',
      location: 'Hyderabad',
      established: '2012',
      students: '1,200+',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1523240794102-9ebd0b167f3f?auto=format&fit=crop&w=800&q=80',
      information: 'Bright Future Coaching Center is one of the leading tuition centers in Hyderabad, established in 2012. We provide comprehensive coaching for competitive exams like JEE, NEET, and various entrance tests. Our experienced faculty includes IIT and medical college graduates. We offer both regular classroom coaching and online classes. The center is equipped with modern teaching aids, library facilities, and computer labs for better learning experience.',
      subjects: ['JEE Preparation', 'NEET Preparation', 'Mathematics', 'Physics', 'Chemistry'],
      classes: ['Class IX', 'Class X', 'Class XI', 'Class XII'],
      phone: '9876543210',
      fees: '₹2,000 - ₹3,000 per month'
    },
    {
      id: 3,
      name: 'Excel Academy',
      location: 'Bangalore',
      established: '2019',
      students: '400+',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      information: 'Excel Academy in Bangalore specializes in providing quality education through small group tutoring and individual sessions. Established in 2019, we focus on building strong academic foundations for students. Our curriculum is designed to complement school education and help students excel in their studies. We offer flexible timing options and regular parent-teacher meetings to track student progress.',
      subjects: ['Mathematics', 'Science', 'English', 'Computer Science'],
      classes: ['Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'],
      phone: '8765432109',
      fees: '₹1,500 - ₹2,000 per month'
    },
    {
      id: 3,
      name: 'Smart Learning Hub',
      location: 'Chennai',
      established: '2017',
      students: '700+',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      information: 'Smart Learning Hub in Chennai offers innovative teaching methods combined with traditional tutoring approaches. We use technology-enhanced learning tools and interactive sessions to make learning engaging and effective. Our tutors are trained in modern teaching methodologies and regularly update their skills. We provide comprehensive support for all subjects and help students develop critical thinking and problem-solving skills.',
      subjects: ['All Subjects', 'Mathematics', 'Science', 'English', 'Tamil'],
      classes: ['Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI'],
      phone: '7654321098',
      fees: '₹1,200 - ₹1,800 per month'
    },
    {
      id: 3,
      name: 'Knowledge Point',
      location: 'Mumbai',
      established: '2014',
      students: '900+',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      information: 'Knowledge Point in Mumbai is a well-established tuition center providing quality education since 2014. We offer specialized coaching for various competitive exams and school subjects. Our faculty consists of experienced teachers and subject matter experts. We maintain a student-friendly environment and provide regular mock tests and assessments. Our success rate in competitive exams is consistently high.',
      subjects: ['Competitive Exams', 'Mathematics', 'Science', 'English', 'Hindi'],
      classes: ['Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'],
      phone: '6543210987',
      fees: '₹1,800 - ₹2,500 per month'
    },
    {
      id: 3,
      name: 'Study Circle',
      location: 'Delhi',
      established: '2013',
      students: '1,000+',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      information: 'Study Circle in Delhi is a comprehensive educational center offering tutoring services for all age groups. We provide both individual and group coaching sessions. Our approach focuses on understanding each student\'s learning style and adapting our teaching methods accordingly. We offer flexible scheduling and provide study materials and practice tests. Our center is equipped with modern facilities and a well-stocked library.',
      subjects: ['All Subjects', 'Mathematics', 'Science', 'English', 'Social Studies'],
      classes: ['Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI'],
      phone: '5432109876',
      fees: '₹1,000 - ₹1,500 per month'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const centersPerPage = 6;
  
  // Filter centers based on search
  const filteredCenters = tuitionCenters.filter(center =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const totalPages = Math.ceil(filteredCenters.length / centersPerPage);
  const startIdx = (currentPage - 1) * centersPerPage;
  const endIdx = startIdx + centersPerPage;
  const currentCenters = filteredCenters.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Function to truncate text to 3 lines
  const truncateText = (text: string, maxLength: number = 105) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };



  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Background Image */}
        <div 
          className="relative text-white py-12"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl text-white md:text-4xl font-bold mb-3">Find the Best Tuition Centers</h1>
            <p className="text-lg md:text-xl mb-6">Discover quality tutoring services with experienced teachers across India</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search tuition centers by name, location, or subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Location</option>
                <option value="visakhapatnam">Visakhapatnam</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Class Level</option>
                <option value="primary">Primary (I-V)</option>
                <option value="middle">Middle (VI-VIII)</option>
                <option value="secondary">Secondary (IX-X)</option>
                <option value="higher">Higher Secondary (XI-XII)</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Subject</option>
                <option value="mathematics">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="fees">Fees</option>
                <option value="students">Students</option>
                <option value="established">Established</option>
              </select>
            </div>
          </div>

          {/* Tuition Centers Grid */}
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentCenters.map(center => (
                <div
                  key={center.id}
                  className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                >
                  {/* Top Rated Badge */}
                  {center.rating >= 4.7 && (
                    <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-blue-600 transition">Top Rated</span>
                  )}
                  <div className="h-32 bg-gray-200 relative">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold mb-2 text-gray-800">{center.name}</h3>
                    
                    {/* Location, Rating, Established in one line */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-gray-500" />
                        <span>{center.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="mr-1 text-yellow-400" size={10} />
                        <span>{center.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1 text-gray-500" />
                        <span>Est. {center.established}</span>
                      </div>
                    </div>
                    
                    {/* Information Section */}
                    <div className="mb-3 flex-grow">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {truncateText(center.information)}
                        {center.information.length > 155 && (
                          <button
                            onClick={(e) => handleViewDetails(e, center.id)}
                            onMouseEnter={handlePrefetch}
                            className="text-blue-600 text-xs font-medium ml-1 hover:text-blue-700 transition inline"
                          >
                            More
                          </button>
                        )}
                      </p>
                    </div>

                    <button
                      onClick={(e) => handleViewDetails(e, center.id)}
                      onMouseEnter={handlePrefetch}
                      className="block w-full py-1.5 bg-blue-600 text-white rounded text-center font-medium text-xs hover:bg-blue-700 transition mt-auto"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                <nav className="inline-flex items-center space-x-1">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-2 py-1 rounded text-xs border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-600'}`}
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-2 py-1 rounded text-xs border ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-1 rounded text-xs border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-600'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TuitionsPage; 