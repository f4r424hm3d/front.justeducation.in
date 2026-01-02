import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaBaby } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const PlaySchoolPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      // We could load actual data here if we had an API
      console.log("Prefetching play school details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/play-school/${id}`);
  }, [navigate]);

  // Sample play school data
  const playSchools = [
    {
      id: 1,
      name: 'Tiny Tots Play School',
      location: 'Mumbai',
      established: '2015',
      students: '120+',
      rating: 4.9,
      ageGroup: '1.5-4 years',
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80',
      information: 'Tiny Tots Play School is a premier early childhood education center in Mumbai, dedicated to providing a nurturing and stimulating environment for young learners. Our play-based curriculum focuses on holistic development through interactive activities, creative play, and age-appropriate learning experiences. With experienced teachers and modern facilities, we ensure that each child receives personalized attention and care. Our programs include sensory play, music and movement, art and craft, and basic literacy and numeracy skills.'
    },
    {
      id: 2,
      name: 'Little Learners Play School',
      location: 'Delhi',
      established: '2012',
      students: '150+',
      rating: 4.8,
      ageGroup: '2-4 years',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
      information: 'Little Learners Play School in Delhi offers a comprehensive early childhood education program designed to foster creativity, curiosity, and confidence in young children. Our experienced educators use innovative teaching methods to create engaging learning experiences. We provide a safe and secure environment where children can explore, discover, and develop essential social and cognitive skills. Our curriculum includes storytelling, dramatic play, outdoor activities, and hands-on learning experiences that prepare children for their educational journey.'
    },
    {
      id: 3,
      name: 'Joyful Kids Play School',
      location: 'Bangalore',
      established: '2013',
      students: '100+',
      rating: 4.7,
      ageGroup: '1.5-4 years',
      image: 'https://images.unsplash.com/photo-1560948318-e68a40bd00e1?auto=format&fit=crop&w=800&q=80',
      information: 'Joyful Kids Play School in Bangalore is committed to creating joyful learning experiences for young children. Our child-centered approach emphasizes learning through play, exploration, and discovery. We offer a balanced curriculum that includes language development, mathematical concepts, creative arts, and physical activities. Our qualified teachers create a warm and supportive environment where children feel valued and encouraged to express themselves. We also focus on developing social skills, emotional intelligence, and independence in our students.'
    },
    {
      id: 4,
      name: 'Happy Feet Play School',
      location: 'Chennai',
      established: '2014',
      students: '180+',
      rating: 4.6,
      ageGroup: '2-4 years',
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?auto=format&fit=crop&w=800&q=80',
      information: 'Happy Feet Play School in Chennai provides quality early childhood education with a focus on holistic development. Our programs are designed to nurture each child\'s unique potential through structured play activities, creative learning, and social interaction. We maintain small class sizes to ensure individual attention and create a family-like atmosphere where children feel comfortable and secure. Our curriculum includes pre-reading and pre-math skills, nature exploration, cultural activities, and character building exercises.'
    },
    {
      id: 5,
      name: 'Bubbles Play School',
      location: 'Pune',
      established: '2016',
      students: '130+',
      rating: 4.8,
      ageGroup: '1.5-4 years',
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80',
      information: 'Bubbles Play School in Pune is dedicated to providing a fun and engaging learning environment for young children. Our innovative programs combine traditional teaching methods with modern educational practices to create meaningful learning experiences. We focus on developing fine and gross motor skills, language acquisition, and social-emotional development. Our facilities include well-equipped classrooms, outdoor play areas, and specialized activity zones that support various aspects of child development and learning.'
    },
    {
      id: 6,
      name: 'Giggles Play School',
      location: 'Hyderabad',
      established: '2017',
      students: '110+',
      rating: 4.5,
      ageGroup: '2-4 years',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
      information: 'Giggles Play School in Hyderabad offers a comprehensive early learning program that prepares children for their educational journey ahead. Our experienced faculty creates engaging activities that promote cognitive development, creativity, and social skills. We believe in learning through play and provide numerous opportunities for children to explore, experiment, and express themselves. Our programs include interactive learning sessions, group activities, individual projects, and regular assessments to track each child\'s progress and development.'
    },
    {
      id: 7,
      name: 'Merry Tots Play School',
      location: 'Kolkata',
      established: '2011',
      students: '160+',
      rating: 4.7,
      ageGroup: '1.5-4 years',
      image: 'https://images.unsplash.com/photo-1560948318-e68a40bd00e1?auto=format&fit=crop&w=800&q=80',
      information: 'Merry Tots Play School in Kolkata has been providing quality early childhood education for over a decade. Our child-friendly approach focuses on creating positive learning experiences that build confidence and foster a love for learning. We offer age-appropriate activities that support physical, emotional, social, and intellectual development. Our dedicated teachers work closely with parents to ensure continuity of learning between home and school, creating a supportive community for children and families.'
    },
    {
      id: 8,
      name: 'Sunshine Play School',
      location: 'Ahmedabad',
      established: '2018',
      students: '90+',
      rating: 4.4,
      ageGroup: '2-4 years',
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?auto=format&fit=crop&w=800&q=80',
      information: 'Sunshine Play School in Ahmedabad is a modern early learning center that provides innovative educational programs for young children. Our curriculum is designed to stimulate curiosity and encourage exploration through hands-on activities and interactive learning experiences. We maintain a low teacher-to-student ratio to ensure personalized attention and support for each child. Our facilities include bright, colorful classrooms, outdoor play equipment, and specialized learning areas that create an inspiring environment for growth and development.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const playSchoolsPerPage = 8;
  
  // Filter play schools based on search
  const filteredPlaySchools = playSchools.filter(ps =>
    ps.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ps.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredPlaySchools.length / playSchoolsPerPage);
  const startIdx = (currentPage - 1) * playSchoolsPerPage;
  const endIdx = startIdx + playSchoolsPerPage;
  const currentPlaySchools = filteredPlaySchools.slice(startIdx, endIdx);

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
            backgroundImage: "url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-pink-600 opacity-70"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Find the Best Play Schools</h1>
            <p className="text-lg md:text-xl mb-6">Where learning begins with play and fun</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search play schools by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-800 focus:outline-none text-sm"
                />
                <button className="bg-pink-600 text-white px-4 py-2 rounded-md">
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
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option value="">Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="pune">Pune</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option value="">Age Group</option>
                <option value="1-3">1-3 years</option>
                <option value="1.5-4">1.5-4 years</option>
                <option value="2-4">2-4 years</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option value="">Program Type</option>
                <option value="play-based">Play Based</option>
                <option value="montessori">Montessori</option>
                <option value="creative">Creative Learning</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="students">Number of Students</option>
                <option value="established">Year Established</option>
              </select>
            </div>
          </div>

          {/* Play Schools Grid */}
          <div className="rounded-xl bg-gradient-to-br from-pink-50 to-white p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentPlaySchools.map(playSchool => (
                <div
                  key={playSchool.id}
                  className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                >
                  {/* Top Rated Badge */}
                  {playSchool.rating >= 4.7 && (
                    <span className="absolute top-2 left-2 z-10 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-pink-600 transition">Top Rated</span>
                  )}
                  <div className="h-32 bg-gray-200 relative">
                    <img
                      src={playSchool.image}
                      alt={playSchool.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold mb-2 text-gray-800">{playSchool.name}</h3>
                    
                    {/* Location, Rating, Established in one line */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-gray-500" />
                        <span>{playSchool.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="mr-1 text-yellow-400" size={10} />
                        <span>{playSchool.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1 text-gray-500" />
                        <span>Est. {playSchool.established}</span>
                      </div>
                    </div>
                    
                    {/* Information Section */}
                    <div className="mb-3 flex-grow">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {truncateText(playSchool.information)}
                        {playSchool.information.length > 155 && (
                          <button
                            onClick={(e) => handleViewDetails(e, playSchool.id)}
                            onMouseEnter={handlePrefetch}
                            className="text-pink-600 text-xs font-medium ml-1 hover:text-pink-700 transition inline"
                          >
                            More
                          </button>
                        )}
                      </p>
                    </div>
                    
                    <button
                      onClick={(e) => handleViewDetails(e, playSchool.id)}
                      onMouseEnter={handlePrefetch}
                      className="block w-full py-1.5 bg-pink-600 text-white rounded text-center font-medium text-xs hover:bg-pink-700 transition mt-auto"
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
                  className={`px-2 py-1 rounded text-xs border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-pink-600'}`}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-2 py-1 rounded text-xs border ${currentPage === i + 1 ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-2 py-1 rounded text-xs border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-pink-600'}`}
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

export default PlaySchoolPage; 