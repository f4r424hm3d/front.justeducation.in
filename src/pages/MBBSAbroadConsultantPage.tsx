import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaChevronDown, FaChevronUp, FaBrain, FaClock, FaUsers, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const MBBSAbroadConsultantPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching MBBS abroad consultant details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/mbbs-abroad-consultant/${id}`);
  }, [navigate]);

  // Sample MBBS abroad consultant services data
  const consultants = [
    {
      id: 1,
      name: 'Russia MBBS Admission Expert',
      provider: 'Global Education Consultants',
      duration: 'Complete Process',
      participants: '500+',
      location: 'Mumbai',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
      information: 'Specialized in MBBS admissions to top Russian medical universities. We provide end-to-end support including university selection, application processing, visa assistance, and pre-departure guidance. Our services cover documentation, entrance exam preparation, interview coaching, and accommodation arrangements. We have partnerships with leading medical universities in Moscow, St. Petersburg, and other major cities. Our success rate is 98% with students successfully placed in prestigious institutions. We also provide ongoing support during the course duration including academic guidance and cultural adaptation assistance.'
    },
    {
      id: 2,
      name: 'China Medical University Specialist',
      provider: 'Asia Education Hub',
      duration: 'Full Service',
      participants: '300+',
      location: 'Delhi',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
      information: 'Expert guidance for MBBS admissions in Chinese medical universities. We specialize in top-tier institutions like Peking University, Fudan University, and Shanghai Jiao Tong University. Our comprehensive services include university application, NEET counseling, document verification, and visa processing. We provide Mandarin language training and cultural orientation programs. Our team includes former students who have successfully completed MBBS in China. We offer pre-departure briefings, airport pickup services, and ongoing academic support throughout the course. Regular parent-student communication and progress tracking included.'
    },
    {
      id: 3,
      name: 'Philippines Medical Education Guide',
      provider: 'Pacific Education Services',
      duration: 'Complete Package',
      participants: '250+',
      location: 'Bangalore',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      information: 'Comprehensive MBBS consulting for Philippines medical universities. We work with institutions like University of Santo Tomas, University of the Philippines, and Ateneo de Manila University. Our services cover entrance exam preparation, application processing, and visa documentation. We provide detailed information about living costs, accommodation options, and student life in the Philippines. Our team includes medical professionals who understand the curriculum and career prospects. We offer pre-departure orientation, airport transfer services, and ongoing academic counseling. Regular updates on curriculum changes and licensing requirements for Indian students.'
    },
    {
      id: 4,
      name: 'Kazakhstan Medical University Advisor',
      provider: 'Central Asia Education',
      duration: 'End-to-End Support',
      participants: '180+',
      location: 'Chennai',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?auto=format&fit=crop&w=800&q=80',
      information: 'Specialized consulting for MBBS admissions in Kazakhstan medical universities. We partner with institutions like Kazakh National Medical University and Astana Medical University. Our services include university selection, application processing, and visa assistance. We provide information about the Russian language requirements and offer language preparation courses. Our team includes alumni from Kazakh medical universities who provide authentic insights. We offer accommodation booking, airport pickup, and cultural orientation programs. Regular academic monitoring and career counseling throughout the course duration.'
    },
    {
      id: 5,
      name: 'Georgia Medical Education Consultant',
      provider: 'European Education Partners',
      duration: 'Full Process',
      participants: '220+',
      location: 'Hyderabad',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      information: 'Expert guidance for MBBS admissions in Georgian medical universities. We work with institutions like Tbilisi State Medical University and Batumi Shota Rustaveli State University. Our comprehensive services include university application, document verification, and visa processing. We provide detailed information about the English-medium curriculum and living expenses. Our team includes medical professionals who understand the Georgian education system. We offer pre-departure training, accommodation assistance, and ongoing academic support. Regular updates on MCI recognition and licensing requirements for Indian students.'
    },
    {
      id: 6,
      name: 'Ukraine Medical University Specialist',
      provider: 'Eastern Europe Education',
      duration: 'Complete Support',
      participants: '150+',
      location: 'Pune',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
      information: 'Specialized consulting for MBBS admissions in Ukrainian medical universities. We partner with institutions like Bogomolets National Medical University and Kharkiv National Medical University. Our services include university selection, application processing, and visa assistance. We provide information about the curriculum structure and clinical training opportunities. Our team includes former students who provide authentic insights about student life. We offer pre-departure orientation, accommodation booking, and airport transfer services. Regular academic monitoring and career guidance throughout the course duration.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const consultantsPerPage = 8;

  // Filter states
  const [providerExpanded, setProviderExpanded] = useState(false);
  const [providerSearch, setProviderSearch] = useState('');
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [durationExpanded, setDurationExpanded] = useState(false);
  const [categoryExpanded, setCategoryExpanded] = useState(false);
  const [locationExpanded, setLocationExpanded] = useState(false);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [nearMeExpanded, setNearMeExpanded] = useState(false);
  const [nearMeSearch, setNearMeSearch] = useState('');

  // Available providers
  const allProviders = [
    'Global Education Consultants', 'Asia Education Hub', 'Pacific Education Services', 'Central Asia Education',
    'European Education Partners', 'Eastern Europe Education', 'International Medical Consultants', 'Study Abroad Experts',
    'Medical Education Advisors', 'Global Student Services', 'Education Bridge Consultants', 'Overseas Education Partners'
  ];

  // Available locations
  const allLocations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Gurgaon',
    'Noida', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal'
  ];

  // Filter providers based on search
  const filteredProviders = allProviders.filter(provider =>
    provider.toLowerCase().includes(providerSearch.toLowerCase())
  );

  // Handle provider selection
  const handleProviderChange = (provider: string) => {
    setSelectedProviders(prev => 
      prev.includes(provider) 
        ? prev.filter(p => p !== provider)
        : [...prev, provider]
    );
  };

  // Handle location selection
  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  // Show more providers functionality
  const [showMoreProviders, setShowMoreProviders] = useState(false);
  const displayedProviders = showMoreProviders ? filteredProviders : filteredProviders.slice(0, 8);

  // Duration options
  const durationOptions = [
    'Complete Process', 'Full Service', 'Complete Package', 'End-to-End Support', 'Full Process', 'Complete Support'
  ];

  // Category options
  const categoryOptions = [
    { name: 'Russia MBBS', count: 45 },
    { name: 'China MBBS', count: 38 },
    { name: 'Philippines MBBS', count: 32 },
    { name: 'Kazakhstan MBBS', count: 28 },
    { name: 'Georgia MBBS', count: 25 },
    { name: 'Ukraine MBBS', count: 22 },
    { name: 'Kyrgyzstan MBBS', count: 18 },
    { name: 'Other Countries', count: 15 }
  ];

  // Handle filter changes
  const handleDurationChange = (duration: string) => {
    setSelectedDurations(prev => 
      prev.includes(duration) 
        ? prev.filter(d => d !== duration)
        : [...prev, duration]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Apply filters
  const filteredConsultants = consultants.filter(consultant => {
    const matchesSearch = consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consultant.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consultant.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProvider = selectedProviders.length === 0 || selectedProviders.some(provider => 
      consultant.provider.toLowerCase().includes(provider.toLowerCase())
    );
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(consultant.location);
    
    return matchesSearch && matchesProvider && matchesLocation;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredConsultants.length / consultantsPerPage);
  const startIndex = (currentPage - 1) * consultantsPerPage;
  const currentConsultants = filteredConsultants.slice(startIndex, startIndex + consultantsPerPage);

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
          className="relative text-white py-16 md:py-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                MBBS Abroad Consultants
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Expert guidance for MBBS admissions in top international medical universities
              </p>
              
              {/* Search Bar */}
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center bg-white rounded-xl shadow-2xl p-2">
                  <input
                    type="text"
                    placeholder="Search MBBS consultants by name, provider, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-3 text-gray-800 focus:outline-none text-base placeholder-gray-500"
                  />
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition duration-300 flex items-center">
                    <FaSearch className="mr-2" />
                    Search
                  </button>
                </div>
              </div>
              
              {/* Additional info */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-200">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-2" />
                  <span>500+ Success Stories</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-teal-300 mr-2" />
                  <span>20+ Countries</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="text-teal-300 mr-2" />
                  <span>98% Success Rate</span>
                </div>
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
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-teal-500"
                          />
                        </div>
                      </div>
                      
                      <div className="px-2 pb-2">
                        <button className="flex items-center text-teal-600 hover:text-teal-700 text-xs font-medium">
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
                      <div className="max-h-60 overflow-y-auto">
                        {allLocations.map((location) => (
                          <div key={location} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`location-${location}`}
                              checked={selectedLocations.includes(location)}
                              onChange={() => handleLocationChange(location)}
                              className="mr-2 text-teal-600 focus:ring-teal-500 scale-75"
                            />
                            <label 
                              htmlFor={`location-${location}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {location}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Provider Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setProviderExpanded(!providerExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Consultant Provider</span>
                    {providerExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {providerExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="p-2">
                        <div className="relative">
                          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                          <input
                            type="text"
                            placeholder="Search by provider name"
                            value={providerSearch}
                            onChange={(e) => setProviderSearch(e.target.value)}
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-teal-500"
                          />
                        </div>
                      </div>
                      
                      <div className="max-h-60 overflow-y-auto">
                        {displayedProviders.map((provider) => (
                          <div key={provider} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`provider-${provider}`}
                              checked={selectedProviders.includes(provider)}
                              onChange={() => handleProviderChange(provider)}
                              className="mr-2 text-teal-600 focus:ring-teal-500 scale-75"
                            />
                            <label 
                              htmlFor={`provider-${provider}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {provider}
                            </label>
                          </div>
                        ))}
                        
                        {filteredProviders.length > 8 && (
                          <div className="p-2">
                            <button
                              onClick={() => setShowMoreProviders(!showMoreProviders)}
                              className="text-teal-600 text-xs font-medium hover:text-teal-700"
                            >
                              {showMoreProviders ? 'Show Less' : `+ ${filteredProviders.length - 8} More`}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Duration Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setDurationExpanded(!durationExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Service Type</span>
                    {durationExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {durationExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {durationOptions.map((duration) => (
                          <div key={duration} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`duration-${duration}`}
                              checked={selectedDurations.includes(duration)}
                              onChange={() => handleDurationChange(duration)}
                              className="mr-2 text-teal-600 focus:ring-teal-500 scale-75"
                            />
                            <label 
                              htmlFor={`duration-${duration}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {duration}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Category Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setCategoryExpanded(!categoryExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Country Specialization</span>
                    {categoryExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {categoryExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {categoryOptions.map((category) => (
                          <div key={category.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="checkbox"
                                id={`category-${category.name}`}
                                checked={selectedCategories.includes(category.name)}
                                onChange={() => handleCategoryChange(category.name)}
                                className="mr-2 text-teal-600 focus:ring-teal-500 scale-75"
                              />
                              <label 
                                htmlFor={`category-${category.name}`}
                                className="text-xs text-gray-600 cursor-pointer"
                              >
                                {category.name}
                              </label>
                            </div>
                            <span className="text-xs text-gray-400">({category.count})</span>
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
              {/* Consultants Grid */}
              <div className="rounded-xl bg-gradient-to-br from-teal-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {currentConsultants.map(consultant => (
                    <div
                      key={consultant.id}
                      className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                    >
                      {/* Top Rated Badge */}
                      {consultant.rating >= 4.7 && (
                        <span className="absolute top-2 left-2 z-10 bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-teal-600 transition">Top Rated</span>
                      )}
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src={consultant.image}
                          alt={consultant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold mb-2 text-gray-800">{consultant.name}</h3>
                        
                        {/* Row 1: Provider and Duration */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                          <div className="flex items-center">
                            <FaBrain className="mr-1 text-gray-500" />
                            <span>{consultant.provider}</span>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="mr-1 text-gray-500" />
                            <span>{consultant.duration}</span>
                          </div>
                        </div>
                        
                        {/* Row 2: Location, Participants, and Rating */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-1 text-gray-500" />
                            <span>{consultant.location}</span>
                          </div>
                          <div className="flex items-center">
                            <FaUsers className="mr-1 text-gray-500" />
                            <span>{consultant.participants}</span>
                          </div>
                          <div className="flex items-center">
                            <FaStar className="mr-1 text-yellow-400" size={10} />
                            <span>{consultant.rating}</span>
                          </div>
                        </div>
                        
                        {/* Information Section */}
                        <div className="mb-3 flex-grow">
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {truncateText(consultant.information)}
                            {consultant.information.length > 155 && (
                              <button
                                onClick={(e) => handleViewDetails(e, consultant.id)}
                                onMouseEnter={handlePrefetch}
                                className="text-teal-600 text-xs font-medium ml-1 hover:text-teal-700 transition inline"
                              >
                                More
                              </button>
                            )}
                          </p>
                        </div>
                        
                        <button
                          onClick={(e) => handleViewDetails(e, consultant.id)}
                          onMouseEnter={handlePrefetch}
                          className="block w-full py-1.5 bg-teal-600 text-white rounded text-center font-medium text-xs hover:bg-teal-700 transition mt-auto"
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
                        className={`px-2 py-1 rounded text-xs border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-teal-600'}`}
                      >
                        Previous
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={`px-2 py-1 rounded text-xs border ${currentPage === i + 1 ? 'bg-teal-600 text-white' : 'bg-white text-teal-600'}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-1 rounded text-xs border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-teal-600'}`}
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

export default MBBSAbroadConsultantPage; 