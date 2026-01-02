import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const NGOPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching NGO details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/ngos/${id}`);
  }, [navigate]);

  // Sample NGO programs data
  const ngos = [
    {
      id: 1,
      name: 'Pratham Education Foundation',
      location: 'Mumbai, Maharashtra',
      focus: 'Primary Education',
      established: '1995',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      information: 'Pratham is one of India\'s largest NGOs working to provide quality education to underprivileged children. The organization focuses on improving learning outcomes through innovative teaching methods, community involvement, and technology integration. Pratham\'s programs include Read India, which has helped millions of children learn to read, and the Annual Status of Education Report (ASER), which provides crucial data on education quality across India. The NGO works closely with government schools and communities to create sustainable educational improvements.'
    },
    {
      id: 2,
      name: 'Teach For India',
      location: 'Mumbai, Maharashtra',
      focus: 'Leadership Development',
      established: '2009',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      information: 'Teach For India recruits and trains outstanding college graduates and young professionals to serve as full-time teachers in low-income schools for two years. The organization believes that every child deserves an excellent education and works to build a movement of leaders who will drive long-term systemic change. Fellows receive intensive training and ongoing support to become effective teachers and future leaders in education reform. The program has impacted over 1 million children across multiple cities in India.'
    },
    {
      id: 3,
      name: 'Akshaya Patra Foundation',
      location: 'Bangalore, Karnataka',
      focus: 'Mid-Day Meals',
      established: '2000',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
      information: 'The Akshaya Patra Foundation is the world\'s largest NGO-run mid-day meal program, serving over 1.8 million children daily across 19,039 schools in 12 states and 2 union territories. The organization addresses classroom hunger and encourages children to attend school regularly by providing nutritious meals. Akshaya Patra\'s centralized kitchen model ensures food safety and quality while maintaining cost efficiency. The foundation also implements various educational support programs including digital learning initiatives and skill development workshops.'
    },
    {
      id: 4,
      name: 'Room to Read',
      location: 'New Delhi, Delhi',
      focus: 'Literacy & Girls Education',
      established: '2000',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      information: 'Room to Read focuses on two critical areas: literacy and gender equality in education. The organization works to transform the lives of millions of children in low-income communities by focusing on literacy skills and gender equality in education. Room to Read has established libraries, published children\'s books in local languages, and supported girls\' education through scholarships and life skills training. The organization operates in multiple states across India and has impacted over 2.3 million children through its various programs.'
    },
    {
      id: 5,
      name: 'CRY - Child Rights and You',
      location: 'Mumbai, Maharashtra',
      focus: 'Child Rights Advocacy',
      established: '1979',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=800&q=80',
      information: 'CRY is one of India\'s most trusted NGOs working to ensure children\'s rights. The organization works with 99 grassroot projects across 19 states in India, addressing children\'s critical needs of education, healthcare, protection from exploitation and abuse, and participation in decisions that affect their lives. CRY\'s approach involves working with communities, government bodies, and other stakeholders to create sustainable change. The organization has impacted over 3 million children and continues to advocate for policy changes that benefit children.'
    },
    {
      id: 6,
      name: 'Salaam Baalak Trust',
      location: 'New Delhi, Delhi',
      focus: 'Street Children Education',
      established: '1988',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80',
      information: 'Salaam Baalak Trust works with street and working children in Delhi, providing them with education, healthcare, and opportunities for a better future. The organization runs shelter homes, education centers, and vocational training programs. SBT\'s unique approach includes street outreach programs, counseling services, and family reunification efforts. The organization has helped thousands of children transition from street life to mainstream education and employment. SBT also provides career guidance and skill development training to older children.'
    },
    {
      id: 7,
      name: 'Magic Bus India Foundation',
      location: 'Mumbai, Maharashtra',
      focus: 'Sports for Development',
      established: '1999',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      information: 'Magic Bus uses sports and activity-based learning to help children and young people break out of poverty. The organization\'s programs focus on education, gender equality, health, and livelihood skills. Magic Bus works with children from marginalized communities, using sports as a tool to teach life skills, build confidence, and encourage school attendance. The organization operates in 22 states and has impacted over 1 million children. Magic Bus also provides career guidance and job placement support for young adults.'
    },
    {
      id: 8,
      name: 'Katha',
      location: 'New Delhi, Delhi',
      focus: 'Story-based Learning',
      established: '1988',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      information: 'Katha is a non-profit organization that works to improve children\'s literacy and love for reading through innovative story-based learning programs. The organization publishes children\'s books in multiple languages and runs reading programs in government schools and communities. Katha\'s programs include teacher training, library development, and community reading initiatives. The organization has impacted over 1.5 million children and trained thousands of teachers. Katha also works on women\'s empowerment and community development programs.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const ngosPerPage = 6;

  // Filter states
  const [locationExpanded, setLocationExpanded] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [focusExpanded, setFocusExpanded] = useState(false);
  const [ratingExpanded, setRatingExpanded] = useState(false);
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [nearMeExpanded, setNearMeExpanded] = useState(false);
  const [nearMeSearch, setNearMeSearch] = useState('');

  // Available locations
  const allLocations = [
    'Mumbai, Maharashtra', 'New Delhi, Delhi', 'Bangalore, Karnataka', 'Chennai, Tamil Nadu',
    'Kolkata, West Bengal', 'Hyderabad, Telangana', 'Pune, Maharashtra', 'Ahmedabad, Gujarat',
    'Jaipur, Rajasthan', 'Lucknow, Uttar Pradesh', 'Patna, Bihar', 'Bhopal, Madhya Pradesh',
    'Chandigarh, Punjab', 'Dehradun, Uttarakhand', 'Guwahati, Assam', 'Bhubaneswar, Odisha'
  ];

  // Filter locations based on search
  const filteredLocations = allLocations.filter(location =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  // Handle location selection
  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  // Show more locations functionality
  const [showMoreLocations, setShowMoreLocations] = useState(false);
  const displayedLocations = showMoreLocations ? filteredLocations : filteredLocations.slice(0, 8);

  // Focus area options
  const focusOptions = [
    'Primary Education', 'Secondary Education', 'Girls Education', 'Special Needs Education',
    'Vocational Training', 'Digital Literacy', 'Health Education', 'Environmental Education',
    'Leadership Development', 'Community Development', 'Child Rights', 'Women Empowerment'
  ];

  // Rating options
  const ratingOptions = [
    '4.5+ Stars', '4.0+ Stars', '3.5+ Stars', '3.0+ Stars'
  ];

  // Handle filter changes
  const handleFocusChange = (focus: string) => {
    setSelectedFocusAreas(prev => 
      prev.includes(focus) 
        ? prev.filter(f => f !== focus)
        : [...prev, focus]
    );
  };

  const handleRatingChange = (rating: string) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  // Apply filters
  const filteredNGOs = ngos.filter(ngo => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.focus.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(ngo.location);
    const matchesFocus = selectedFocusAreas.length === 0 || selectedFocusAreas.includes(ngo.focus);
    const matchesRating = selectedRatings.length === 0 || 
      selectedRatings.some(rating => {
        const minRating = parseFloat(rating.split('+')[0]);
        return ngo.rating >= minRating;
      });
    
    return matchesSearch && matchesLocation && matchesFocus && matchesRating;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredNGOs.length / ngosPerPage);
  const startIndex = (currentPage - 1) * ngosPerPage;
  const currentNGOs = filteredNGOs.slice(startIndex, startIndex + ngosPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Truncate text function
  const truncateText = (text: string, maxLength: number = 155) => {
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
            backgroundImage: "url('https://img.freepik.com/premium-photo/volunteers-helping-children-education_23-2148864987.jpg?w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">NGOs & Educational Programs</h1>
            <p className="text-lg md:text-xl mb-6">Discover NGOs working to improve education and create positive change in communities</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search NGOs by name, location, or focus area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-800 focus:outline-none text-sm"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar Filters */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Filters</h3>
                
                {/* Near Me Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setNearMeExpanded(!nearMeExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Near Me</span>
                    {nearMeExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {nearMeExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="p-2">
                        <div className="relative">
                          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                          <input
                            type="text"
                            placeholder="Search your location"
                            value={nearMeSearch}
                            onChange={(e) => setNearMeSearch(e.target.value)}
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-green-500"
                          />
                        </div>
                      </div>
                      
                      <div className="px-2 pb-2">
                        <button className="flex items-center text-green-600 hover:text-green-700 text-xs font-medium">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Use my current location
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Location Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setLocationExpanded(!locationExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Location</span>
                    {locationExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {locationExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="p-2">
                        <div className="relative">
                          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                          <input
                            type="text"
                            placeholder="Search by location"
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-green-500"
                          />
                        </div>
                      </div>
                      
                      <div className="max-h-60 overflow-y-auto">
                        {displayedLocations.map((location) => (
                          <div key={location} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`location-${location}`}
                              checked={selectedLocations.includes(location)}
                              onChange={() => handleLocationChange(location)}
                              className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                            />
                            <label 
                              htmlFor={`location-${location}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {location}
                            </label>
                          </div>
                        ))}
                        
                        {filteredLocations.length > 8 && (
                          <div className="p-2">
                            <button
                              onClick={() => setShowMoreLocations(!showMoreLocations)}
                              className="text-green-600 text-xs font-medium hover:text-green-700"
                            >
                              {showMoreLocations ? 'Show Less' : `+ ${filteredLocations.length - 8} More`}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Focus Area Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setFocusExpanded(!focusExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Focus Area</span>
                    {focusExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {focusExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {focusOptions.map((focus) => (
                          <div key={focus} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`focus-${focus}`}
                              checked={selectedFocusAreas.includes(focus)}
                              onChange={() => handleFocusChange(focus)}
                              className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                            />
                            <label 
                              htmlFor={`focus-${focus}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {focus}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Rating Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setRatingExpanded(!ratingExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Rating</span>
                    {ratingExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {ratingExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {ratingOptions.map((rating) => (
                          <div key={rating} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`rating-${rating}`}
                              checked={selectedRatings.includes(rating)}
                              onChange={() => handleRatingChange(rating)}
                              className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                            />
                            <label 
                              htmlFor={`rating-${rating}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {rating}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Clear Filters Button */}
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition text-sm font-medium">
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
              {/* NGOs Grid */}
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {currentNGOs.map(ngo => (
                    <div
                      key={ngo.id}
                      className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                    >
                      {/* Top Rated Badge */}
                      {ngo.rating >= 4.5 && (
                        <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-green-600 transition">Top Rated</span>
                      )}
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src={ngo.image}
                          alt={ngo.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold mb-2 text-gray-800">{ngo.name}</h3>
                        
                        {/* Location, Focus, Rating in one row */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-1 text-gray-500" />
                            <span>{ngo.location}</span>
                          </div>
                          <div className="flex items-center">
                            <FaHandsHelping className="mr-1 text-gray-500" />
                            <span>{ngo.focus}</span>
                          </div>
                          <div className="flex items-center">
                            <FaStar className="mr-1 text-yellow-400" size={10} />
                            <span>{ngo.rating}</span>
                          </div>
                        </div>
                        
                        {/* Information Section */}
                        <div className="mb-3 flex-grow">
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {truncateText(ngo.information)}
                            {ngo.information.length > 155 && (
                              <button
                                onClick={(e) => handleViewDetails(e, ngo.id)}
                                onMouseEnter={handlePrefetch}
                                className="text-green-600 text-xs font-medium ml-1 hover:text-green-700 transition inline"
                              >
                                More
                              </button>
                            )}
                          </p>
                        </div>
                        
                        <button
                          onClick={(e) => handleViewDetails(e, ngo.id)}
                          onMouseEnter={handlePrefetch}
                          className="block w-full py-1.5 bg-green-600 text-white rounded text-center font-medium text-xs hover:bg-green-700 transition mt-auto"
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
                        className={`px-2 py-1 rounded text-xs border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-green-600'}`}
                      >
                        Previous
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={`px-2 py-1 rounded text-xs border ${currentPage === i + 1 ? 'bg-green-600 text-white' : 'bg-white text-green-600'}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-1 rounded text-xs border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-green-600'}`}
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NGOPage; 