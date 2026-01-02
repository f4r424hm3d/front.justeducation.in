import React, { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const colleges = [
  {
    id: 1,
    name: 'St. Xavier College',
    shortName: 'SXC',
    location: 'Mumbai',
    established: '1869',
    students: '5,000+',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    type: 'Private',
    affiliation: 'UGC',
    information: 'St. Xavier\'s College Mumbai is a prestigious autonomous college affiliated to the University of Mumbai, established in 1869. Known for its academic excellence and holistic education, the college offers undergraduate and postgraduate programs in Arts, Science, and Commerce. The institution has been consistently ranked among the top colleges in India and is famous for its distinguished alumni, including prominent personalities in politics, business, and entertainment. The college provides a vibrant campus life with numerous extracurricular activities and has state-of-the-art facilities.'
  },
  {
    id: 2,
    name: 'Loyola College',
    shortName: 'LOY',
    location: 'Chennai',
    established: '1925',
    students: '8,000+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    type: 'Autonomous',
    affiliation: 'UGC',
    information: 'Loyola College Chennai is an autonomous Jesuit institution established in 1925, affiliated to the University of Madras. The college is renowned for its quality education in Arts, Science, and Commerce streams. With a strong emphasis on values-based education, Loyola College has consistently been ranked among the top colleges in India. The institution offers undergraduate, postgraduate, and research programs and is known for its excellent faculty, modern infrastructure, and active alumni network. The college promotes holistic development through various academic and extracurricular activities.'
  },
  {
    id: 3,
    name: 'Presidency College',
    shortName: 'PC',
    location: 'Kolkata',
    established: '1817',
    students: '3,000+',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    type: 'Government',
    affiliation: 'Presidency University',
    information: 'Presidency College Kolkata, now Presidency University, is a historic institution established in 1817. It is one of the oldest and most prestigious colleges in India, known for its academic excellence and illustrious alumni. The college offers undergraduate and postgraduate programs in Arts, Science, and Commerce. Many Nobel laureates, scientists, writers, and political leaders have been associated with this institution. The college maintains its tradition of academic rigor and continues to be a center of intellectual discourse and cultural activities in Kolkata.'
  },
  {
    id: 4,
    name: 'Fergusson College',
    shortName: 'FC',
    location: 'Pune',
    established: '1885',
    students: '6,000+',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    type: 'Government',
    affiliation: 'University of Pune',
    information: 'Fergusson College Pune is a prestigious institution established in 1885, affiliated to the University of Pune. Named after Sir James Fergusson, the college is known for its academic excellence and beautiful heritage campus. It offers undergraduate and postgraduate programs in Arts, Science, and Commerce. The college has produced many distinguished alumni in various fields and is known for its rich cultural traditions, academic rigor, and vibrant student life. Fergusson College continues to be one of the leading educational institutions in Maharashtra.'
  },
  {
    id: 5,
    name: 'Hindu College',
    shortName: 'HC',
    location: 'Delhi',
    established: '1899',
    students: '4,500+',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=800&q=80',
    type: 'Government',
    affiliation: 'University of Delhi',
    information: 'Hindu College is one of the constituent colleges of the University of Delhi, established in 1899. It is known for its academic excellence and vibrant campus culture. The college offers undergraduate courses in Arts, Science, and Commerce and has consistently been ranked among the top colleges in Delhi University. Hindu College has a rich tradition of academic achievement, cultural activities, and sports. The college has produced many notable alumni who have excelled in various fields including politics, business, entertainment, and academia.'
  },
  {
    id: 6,
    name: 'Madras Christian College',
    shortName: 'MCC',
    location: 'Chennai',
    established: '1837',
    students: '7,000+',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    type: 'Private',
    affiliation: 'University of Madras',
    information: 'Madras Christian College (MCC) is a liberal arts and sciences college in Chennai, established in 1837. It is one of Asia\'s oldest colleges and is affiliated to the University of Madras. MCC is known for its beautiful campus, academic excellence, and holistic education approach. The college offers undergraduate and postgraduate programs in various disciplines and has been consistently ranked among the top colleges in India. MCC has a strong alumni network and is known for its contributions to education, research, and social service in Tamil Nadu and beyond.'
  },
  {
    id: 7,
    name: 'Christ University',
    shortName: 'CU',
    location: 'Bangalore',
    established: '1969',
    students: '18,000+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    type: 'Private',
    affiliation: 'Deemed University',
    information: 'Christ University Bangalore is a private deemed university established in 1969. Known for its academic excellence and innovative teaching methods, the university offers undergraduate, postgraduate, and doctoral programs across various disciplines. Christ University has multiple campuses and is particularly renowned for its management, engineering, and liberal arts programs. The university emphasizes holistic development, research, and community service. With state-of-the-art facilities and a diverse student community, Christ University has established itself as a leading educational institution in South India.'
  },
  {
    id: 8,
    name: "St. Stephen's College",
    shortName: 'SSC',
    location: 'Delhi',
    established: '1881',
    students: '2,000+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    type: 'Private',
    affiliation: 'University of Delhi',
    information: 'St. Stephen\'s College is one of the most prestigious constituent colleges of the University of Delhi, established in 1881. Known for its academic excellence and elite status, the college offers undergraduate courses in Arts, Science, and has consistently been ranked as the top college in India. St. Stephen\'s has produced numerous distinguished alumni including politicians, civil servants, academics, and business leaders. The college is known for its rigorous academic standards, beautiful campus, and strong traditions. Admission to St. Stephen\'s is highly competitive and considered a mark of academic distinction.'
  }
];

const CARDS_PER_PAGE = 8;

const CollegePage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // Filter dropdown state
  const [location, setLocation] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [collegeType, setCollegeType] = useState('');
  const [sortBy, setSortBy] = useState('');
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching college details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/college/${id}`);
  }, [navigate]);
  
  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [location, affiliation, collegeType, sortBy, search]);

  // Filtered and paginated data
  const filtered = colleges.filter(c => {
    const nameMatch = c.name.toLowerCase().includes(search.toLowerCase());
    const locationMatch = location ? c.location === location : true;
    const typeMatch = collegeType ? c.type === collegeType : true;
    const affiliationMatch = affiliation ? c.affiliation === affiliation : true;
    
    return nameMatch && locationMatch && typeMatch && affiliationMatch;
  });
  
  // Sort colleges if sort option is selected
  const sortedColleges = [...filtered].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'established') {
      return Number.parseInt(a.established) - Number.parseInt(b.established);
    }
    if (sortBy === 'students') {
      // Extract numbers from strings like "5,000+"
      const aStudents = Number.parseInt(a.students.replace(/,/g, ''));
      const bStudents = Number.parseInt(b.students.replace(/,/g, ''));
      return bStudents - aStudents;
    }
    return 0;
  });
  
  const totalPages = Math.ceil(sortedColleges.length / CARDS_PER_PAGE) || 1;
  const paginated = sortedColleges.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Function to truncate text to 3 lines
  const truncateText = (text: string, maxLength: number = 105) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 pb-12">
        {/* Hero Section */}
        <div 
          className="relative text-white py-12"
          style={{
            backgroundImage: "url('https://t4.ftcdn.net/jpg/07/08/68/37/360_F_708683779_j6O6O6yLMEezdfumLCwFOTK2tBIMOJO5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Find the Best Colleges</h1>
            <p className="text-lg md:text-xl mb-6">Explore top colleges across India and choose the right one for your future</p>
            
            {/* Search bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search colleges by name or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-800 focus:outline-none text-sm"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <select
                className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={location}
                onChange={e => setLocation(e.target.value)}
              >
                <option value="">Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </select>
              <select
                className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={affiliation}
                onChange={e => setAffiliation(e.target.value)}
              >
                <option value="">Affiliation</option>
                <option value="UGC">UGC</option>
                <option value="University of Delhi">University of Delhi</option>
                <option value="University of Mumbai">University of Mumbai</option>
                <option value="University of Madras">University of Madras</option>
                <option value="Deemed University">Deemed University</option>
              </select>
              <select
                className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={collegeType}
                onChange={e => setCollegeType(e.target.value)}
              >
                <option value="">College Type</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
                <option value="Autonomous">Autonomous</option>
              </select>
              <select
                className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="students">Students</option>
                <option value="established">Established</option>
              </select>
            </div>
          </div>

          {/* Colleges Grid */}
          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-white p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {paginated.length === 0 ? (
                <div className="col-span-4 text-center text-gray-500 py-12">No colleges found.</div>
              ) : (
                paginated.map(college => (
                  <div
                    key={college.id}
                    className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                  >
                    {/* Top Rated Badge */}
                    {college.rating >= 4.6 && (
                      <span className="absolute top-2 left-2 z-10 bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-purple-600 transition">Top Rated</span>
                    )}
                    <div className="h-32 bg-gray-200 relative">
                      <img
                        src={college.image}
                        alt={college.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 flex flex-col flex-grow">
                      <h3 className="text-base font-semibold mb-2 text-gray-800">{college.name}</h3>
                      
                      {/* Location, Rating, Established in one line */}
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-1 text-gray-500" />
                          <span>{college.location}</span>
                        </div>
                        <div className="flex items-center">
                          <FaStar className="mr-1 text-yellow-400" size={10} />
                          <span>{college.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1 text-gray-500" />
                          <span>Est. {college.established}</span>
                        </div>
                      </div>
                      
                      {/* Information Section */}
                      <div className="mb-3 flex-grow">
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {truncateText(college.information)}
                          {college.information.length > 155 && (
                            <button
                              onClick={(e) => handleViewDetails(e, college.id)}
                              onMouseEnter={handlePrefetch}
                              className="text-purple-600 text-xs font-medium ml-1 hover:text-purple-700 transition inline"
                            >
                              More
                            </button>
                          )}
                        </p>
                      </div>
                      
                      <button
                        onClick={(e) => handleViewDetails(e, college.id)}
                        onMouseEnter={handlePrefetch}
                        className="block w-full py-1.5 bg-purple-600 text-white rounded text-center font-medium text-xs hover:bg-purple-700 transition mt-auto"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <nav className="inline-flex items-center space-x-1">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-2 py-1 rounded text-xs border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-purple-600'}`}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-2 py-1 rounded text-xs border ${currentPage === i + 1 ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-2 py-1 rounded text-xs border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-purple-600'}`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default CollegePage; 