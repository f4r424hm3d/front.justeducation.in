import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const ITIPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching ITI details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/iti/${id}`);
  }, [navigate]);

  // Sample ITI data with detailed information
  const itis = [
    {
      id: 1,
      name: 'Government ITI Delhi',
      location: 'Delhi',
      established: '1950',
      students: '1,200+',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Government ITI Delhi is one of the premier Industrial Training Institutes in India, established in 1950. The institute offers various trade courses including Electrician, Fitter, Turner, Welder, and Motor Mechanic. With state-of-the-art workshops and experienced instructors, Government ITI Delhi focuses on practical training and skill development. The institute has excellent placement records with leading manufacturing and service companies. Students receive comprehensive training in both theoretical concepts and hands-on practical skills, making them industry-ready upon graduation.'
    },
    {
      id: 2,
      name: 'Industrial Training Institute Mumbai',
      location: 'Mumbai',
      established: '1962',
      students: '900+',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Industrial Training Institute Mumbai is a leading vocational training center established in 1962. The institute specializes in trades such as Electronics Mechanic, Computer Operator, Draughtsman, and Instrument Mechanic. ITI Mumbai is known for its modern infrastructure, well-equipped laboratories, and industry partnerships. The institute maintains strong connections with local industries, ensuring excellent placement opportunities for students. The curriculum is regularly updated to meet industry demands and technological advancements.'
    },
    {
      id: 3,
      name: 'Government ITI Bangalore',
      location: 'Bangalore',
      established: '1970',
      students: '850+',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Government ITI Bangalore is a prominent technical education institute established in 1970. The institute offers courses in Mechanical, Electrical, and Electronics trades. Known for its quality education and skilled faculty, the institute has produced thousands of skilled technicians who are working in various industries. The institute focuses on both traditional manufacturing skills and modern technology integration. Students benefit from extensive practical training and industry exposure through internships and apprenticeships.'
    },
    {
      id: 4,
      name: 'Industrial Training Institute Chennai',
      location: 'Chennai',
      established: '1975',
      students: '750+',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Industrial Training Institute Chennai is a well-established vocational training center founded in 1975. The institute offers comprehensive training in trades like Machinist, Tool and Die Maker, Refrigeration and Air Conditioning, and Automobile Technology. ITI Chennai is equipped with modern machinery and tools, providing students with hands-on experience in real-world scenarios. The institute has strong industry collaborations and maintains high standards of technical education, ensuring graduates are well-prepared for employment in their chosen fields.'
    },
    {
      id: 5,
      name: 'Government ITI Hyderabad',
      location: 'Hyderabad',
      established: '1980',
      students: '700+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Government ITI Hyderabad is a premier vocational training institute established in 1980. The institute is renowned for its excellent infrastructure and quality training programs in various technical trades. Offering courses in Plumber, Painter, Carpenter, and Information Technology, the institute focuses on developing practical skills and industry readiness. With experienced faculty and modern facilities, Government ITI Hyderabad has consistently maintained high placement rates and is highly regarded by employers in the region.'
    },
    {
      id: 6,
      name: 'Industrial Training Institute Kolkata',
      location: 'Kolkata',
      established: '1965',
      students: '850+',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Industrial Training Institute Kolkata has been providing quality vocational education since 1965. The institute offers training in traditional trades like Blacksmith, Foundry, and Pattern Making, alongside modern courses in Electronics and Computer Applications. ITI Kolkata is known for its strong emphasis on practical training and skill development. The institute has well-maintained workshops and laboratories that provide students with comprehensive hands-on experience. Graduates from this institute are highly sought after by industries in the eastern region of India.'
    },
    {
      id: 7,
      name: 'Government ITI Pune',
      location: 'Pune',
      established: '1978',
      students: '600+',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Government ITI Pune is a distinguished vocational training institute established in 1978. The institute specializes in automotive trades, mechanical engineering, and emerging technologies. With strong industry partnerships in the automotive hub of Pune, the institute provides excellent training opportunities and placement prospects. The curriculum is designed to meet the specific needs of local industries, and students receive training on the latest equipment and technologies. The institute is known for its high-quality education and strong alumni network in the automotive and manufacturing sectors.'
    },
    {
      id: 8,
      name: 'Industrial Training Institute Ahmedabad',
      location: 'Ahmedabad',
      established: '1982',
      students: '550+',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Industrial Training Institute Ahmedabad is a well-regarded vocational education center established in 1982. The institute offers training in textile technology, chemical trades, and general engineering courses. Given Ahmedabad\'s prominence in the textile and chemical industries, the institute has developed specialized programs that cater to these sectors. Students receive comprehensive training in both theoretical concepts and practical applications. The institute maintains strong relationships with local industries, ensuring high employment rates for its graduates and continuous improvement of its training programs.'
    },
    {
      id: 9,
      name: 'Government ITI Jaipur',
      location: 'Jaipur',
      established: '1985',
      students: '500+',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Government ITI Jaipur is a prominent vocational training institute established in 1985. The institute specializes in trades such as Electrician, Fitter, and Mechanic. With a focus on practical training and skill development, Government ITI Jaipur provides comprehensive education in various trades. The institute has a strong alumni network and excellent placement records with leading industries in the region.'
    },
    {
      id: 10,
      name: 'Industrial Training Institute Lucknow',
      location: 'Lucknow',
      established: '1972',
      students: '450+',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Industrial Training Institute Lucknow is a vocational training center established in 1972. The institute offers training in trades such as Electrician, Fitter, and Mechanic. With a focus on practical training and skill development, ITI Lucknow provides comprehensive education in various trades. The institute has strong industry collaborations and maintains high standards of technical education, ensuring graduates are well-prepared for employment in their chosen fields.'
    },
    {
      id: 11,
      name: 'Government ITI Chandigarh',
      location: 'Chandigarh',
      established: '1990',
      students: '400+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Government ITI Chandigarh is a prominent vocational training institute established in 1990. The institute specializes in trades such as Electrician, Fitter, and Mechanic. With a focus on practical training and skill development, Government ITI Chandigarh provides comprehensive education in various trades. The institute has a strong alumni network and excellent placement records with leading industries in the region.'
    },
    {
      id: 12,
      name: 'Industrial Training Institute Bhopal',
      location: 'Bhopal',
      established: '1988',
      students: '350+',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      information: 'Industrial Training Institute Bhopal is a vocational training center established in 1988. The institute offers training in trades such as Electrician, Fitter, and Mechanic. With a focus on practical training and skill development, ITI Bhopal provides comprehensive education in various trades. The institute has strong industry collaborations and maintains high standards of technical education, ensuring graduates are well-prepared for employment in their chosen fields.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itisPerPage = 8;
  
  // Filter ITIs based on search
  const filteredITIs = itis.filter(iti =>
    iti.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    iti.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredITIs.length / itisPerPage);
  const startIdx = (currentPage - 1) * itisPerPage;
  const endIdx = startIdx + itisPerPage;
  const currentITIs = filteredITIs.slice(startIdx, endIdx);

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
            backgroundImage: "url('https://png.pngtree.com/background/20210715/original/pngtree-blue-modern-city-skyline-business-banner-background-picture-image_1296687.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Find the Best ITIs</h1>
            <p className="text-lg md:text-xl mb-6">Explore top Industrial Training Institutes across India for quality vocational education</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search ITIs by name or location..."
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
                <option value="hyderabad">Hyderabad</option>
                <option value="kolkata">Kolkata</option>
                <option value="pune">Pune</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Trade</option>
                <option value="electrician">Electrician</option>
                <option value="fitter">Fitter</option>
                <option value="mechanic">Mechanic</option>
                <option value="welder">Welder</option>
                <option value="turner">Turner</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Type</option>
                <option value="government">Government</option>
                <option value="private">Private</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="students">Students</option>
                <option value="established">Established</option>
              </select>
            </div>
          </div>

          {/* ITIs Grid */}
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentITIs.map(iti => (
                <div
                  key={iti.id}
                  className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                >
                  {/* Top Rated Badge */}
                  {iti.rating >= 4.6 && (
                    <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-blue-600 transition">Top Rated</span>
                  )}
                  <div className="h-32 bg-gray-200 relative">
                    <img
                      src={iti.image}
                      alt={iti.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold mb-2 text-gray-800">{iti.name}</h3>
                    
                    {/* Location, Rating, Established in one line */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-gray-500" />
                        <span>{iti.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="mr-1 text-yellow-400" size={10} />
                        <span>{iti.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1 text-gray-500" />
                        <span>Est. {iti.established}</span>
                      </div>
                    </div>
                    
                    {/* Information Section */}
                    <div className="mb-3 flex-grow">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {truncateText(iti.information)}
                        {iti.information.length > 155 && (
                          <button
                            onClick={(e) => handleViewDetails(e, iti.id)}
                            onMouseEnter={handlePrefetch}
                            className="text-blue-600 text-xs font-medium ml-1 hover:text-blue-700 transition inline"
                          >
                            More
                          </button>
                        )}
                      </p>
                    </div>
                    
                    <button
                      onClick={(e) => handleViewDetails(e, iti.id)}
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

export default ITIPage; 