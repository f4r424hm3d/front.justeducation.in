import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const VocationalPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching vocational institute details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/vocational/${id}`);
  }, [navigate]);

  // Sample vocational institution data with detailed information
  const vocationalInstitutions = [
    {
      id: 1,
      name: 'National Institute of Fashion Technology',
      location: 'Delhi',
      established: '1986',
      students: '3,500+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
      information: 'National Institute of Fashion Technology (NIFT) is a premier fashion institute in India, established in 1986. NIFT offers undergraduate and postgraduate programs in fashion design, fashion technology, fashion management, and textile design. The institute is known for its innovative curriculum, industry-oriented training, and strong placement records. NIFT has multiple campuses across India and collaborates with international fashion schools. The institute provides state-of-the-art facilities including design studios, CAD labs, and fashion technology labs, preparing students for successful careers in the fashion industry.'
    },
    {
      id: 2,
      name: 'Industrial Training Institute',
      location: 'Mumbai',
      established: '1950',
      students: '2,000+',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Industrial Training Institute (ITI) Mumbai is one of the oldest vocational training institutes in India, established in 1950. The institute offers various trade courses including electrician, fitter, welder, turner, and machinist. ITI Mumbai focuses on practical training and skill development to prepare students for employment in various industries. The institute has well-equipped workshops, experienced instructors, and strong industry connections. Graduates from ITI Mumbai are highly sought after by manufacturing companies, construction firms, and other industries requiring skilled technicians.'
    },
    {
      id: 3,
      name: 'Footwear Design & Development Institute',
      location: 'Noida',
      established: '1986',
      students: '1,500+',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&w=800&q=80',
      information: 'Footwear Design & Development Institute (FDDI) is a premier institution for footwear education, established in 1986 in Noida. FDDI offers specialized programs in footwear design, technology, management, and leather goods. The institute is known for its comprehensive curriculum that combines design creativity with technical expertise. FDDI has state-of-the-art laboratories, design studios, and production facilities. The institute maintains strong industry partnerships and provides excellent placement opportunities with leading footwear brands and manufacturers in India and abroad.'
    },
    {
      id: 4,
      name: 'Institute of Hotel Management',
      location: 'Bangalore',
      established: '1972',
      students: '2,200+',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      information: 'Institute of Hotel Management (IHM) Bangalore is a leading hospitality education institution established in 1972. The institute offers undergraduate and postgraduate programs in hotel management, catering technology, and hospitality administration. IHM Bangalore is known for its practical training approach, world-class facilities including training kitchens, restaurants, and accommodation facilities. The institute has strong industry connections with leading hotels and restaurant chains, ensuring excellent placement opportunities for students. The curriculum emphasizes both theoretical knowledge and hands-on experience in hospitality operations.'
    },
    {
      id: 5,
      name: 'Film and Television Institute of India',
      location: 'Pune',
      established: '1960',
      students: '800+',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
      information: 'Film and Television Institute of India (FTII) is a premier institution for film and television education, established in 1960 in Pune. FTII offers courses in direction, cinematography, editing, sound recording, acting, and animation. The institute is renowned for producing some of the finest talents in Indian cinema and television. FTII has excellent facilities including film studios, editing suites, sound recording rooms, and a comprehensive film archive. The institute follows a unique pedagogy that combines theoretical learning with extensive practical training, preparing students for successful careers in the entertainment industry.'
    },
    {
      id: 6,
      name: 'National Institute of Design',
      location: 'Ahmedabad',
      established: '1961',
      students: '1,200+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
      information: 'National Institute of Design (NID) Ahmedabad is India\'s premier design institution, established in 1961. NID offers undergraduate and postgraduate programs in various design disciplines including product design, communication design, textile design, and furniture design. The institute is known for its innovative design education, multidisciplinary approach, and strong industry connections. NID has well-equipped design studios, workshops, and laboratories. The institute emphasizes research, innovation, and sustainable design practices, preparing designers who can contribute to various sectors of the economy.'
    },
    {
      id: 7,
      name: 'Automotive Skill Development Council',
      location: 'Gurgaon',
      established: '2010',
      students: '3,000+',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      information: 'Automotive Skill Development Council (ASDC) is a leading skill development organization established in 2010 in Gurgaon. ASDC offers various certification programs in automotive technology, vehicle maintenance, and automotive manufacturing. The council works closely with automotive companies to design industry-relevant curriculum and provide hands-on training. ASDC has modern training facilities, vehicle labs, and partnerships with major automotive manufacturers. The programs are designed to bridge the skill gap in the automotive sector and provide employment opportunities to aspiring technicians and engineers.'
    },
    {
      id: 8,
      name: 'Indian Culinary Institute',
      location: 'Chennai',
      established: '2015',
      students: '600+',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
      information: 'Indian Culinary Institute Chennai is a specialized culinary education institution established in 2015. The institute offers professional courses in culinary arts, bakery and confectionery, food production, and restaurant management. ICI Chennai focuses on both traditional Indian cuisine and international culinary techniques. The institute has modern training kitchens, bakery labs, and restaurant simulation facilities. With experienced chef instructors and industry partnerships, the institute provides comprehensive training that prepares students for successful careers in the hospitality and food service industry.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const institutionsPerPage = 6;
  
  // Filter institutions based on search
  const filteredInstitutions = vocationalInstitutions.filter(inst =>
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredInstitutions.length / institutionsPerPage);
  const startIdx = (currentPage - 1) * institutionsPerPage;
  const endIdx = startIdx + institutionsPerPage;
  const currentInstitutions = filteredInstitutions.slice(startIdx, endIdx);

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
            backgroundImage: "url('https://www.thaiosh.net/phoh643/images/slider_1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl text-white md:text-4xl font-bold mb-3">Find the Best Vocational Training Institutes</h1>
            <p className="text-lg md:text-xl mb-6">Explore top vocational training institutes across India and choose the right one for your career</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search institutes by name or location..."
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
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="pune">Pune</option>
                <option value="ahmedabad">Ahmedabad</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Course Type</option>
                <option value="fashion">Fashion & Design</option>
                <option value="hospitality">Hospitality</option>
                <option value="technical">Technical</option>
                <option value="media">Media & Entertainment</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Duration</option>
                <option value="short">Short Term (&lt; 6 months)</option>
                <option value="medium">Medium Term (6-12 months)</option>
                <option value="long">Long Term (&gt; 12 months)</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="fees">Fees</option>
                <option value="students">Students</option>
              </select>
            </div>
          </div>

          {/* Vocational Institutes Grid */}
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentInstitutions.map(institute => (
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
                        {institute.information.length > 155 && (
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

export default VocationalPage; 