import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaChevronDown, FaChevronUp, FaBrain, FaClock, FaUsers, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const EducationConsultantPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching education consultant details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/education-consultant/${id}`);
  }, [navigate]);

  // Sample education consultant services data
  const consultants = [
    {
      id: 1,
      name: 'Career Guidance & Counseling Expert',
      provider: 'Future Path Consultants',
      duration: 'Complete Process',
      participants: '800+',
      location: 'Mumbai',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      information: 'Comprehensive career guidance and counseling services for students at all levels. We provide personalized career assessment, aptitude testing, and guidance for academic and professional choices. Our services include personality development, interview preparation, resume building, and career planning. We work with students from class 8 onwards to help them make informed decisions about their future. Our team includes certified career counselors, psychologists, and industry experts who provide evidence-based guidance.'
    },
    {
      id: 2,
      name: 'Study Abroad Education Advisor',
      provider: 'Global Education Solutions',
      duration: 'Full Service',
      participants: '600+',
      location: 'Delhi',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
      information: 'Expert guidance for students planning to study abroad. We specialize in university selection, application processing, visa assistance, and pre-departure preparation. Our services cover documentation, entrance exam preparation, interview coaching, and accommodation arrangements. We have partnerships with leading universities worldwide and provide ongoing support during the course duration. Our success rate is 95% with students successfully placed in prestigious institutions.'
    },
    {
      id: 3,
      name: 'Academic Performance Enhancement',
      provider: 'Academic Excellence Partners',
      duration: 'Complete Package',
      participants: '450+',
      location: 'Bangalore',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      information: 'Specialized services to improve academic performance and learning outcomes. We provide personalized study plans, time management strategies, and exam preparation techniques. Our services include subject-specific tutoring, study skills development, and stress management. We work with students from primary to higher education levels. Our team includes experienced educators and learning specialists who use proven methodologies.'
    },
    {
      id: 4,
      name: 'Special Education Needs Consultant',
      provider: 'Inclusive Education Services',
      duration: 'End-to-End Support',
      participants: '300+',
      location: 'Chennai',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      information: 'Specialized consulting for students with learning disabilities and special educational needs. We provide assessment, individualized education plans, and support services. Our services include dyslexia support, ADHD management, and autism spectrum disorder assistance. We work closely with schools, parents, and therapists to ensure comprehensive support. Our team includes special educators, psychologists, and occupational therapists.'
    },
    {
      id: 5,
      name: 'Digital Learning & EdTech Advisor',
      provider: 'Tech Education Consultants',
      duration: 'Full Process',
      participants: '350+',
      location: 'Hyderabad',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      information: 'Expert guidance on digital learning platforms, educational technology, and online education. We help institutions and students adopt and optimize digital learning solutions. Our services include platform selection, implementation support, and training programs. We stay updated with the latest EdTech trends and provide recommendations for effective digital learning strategies.'
    },
    {
      id: 6,
      name: 'Higher Education Planning Specialist',
      provider: 'Academic Pathway Advisors',
      duration: 'Complete Support',
      participants: '400+',
      location: 'Pune',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?auto=format&fit=crop&w=800&q=80',
      information: 'Comprehensive planning and guidance for higher education choices. We help students navigate college admissions, course selection, and career pathways. Our services include university research, application strategy, and financial planning. We provide guidance for both domestic and international higher education options. Our team includes former admissions officers and career counselors.'
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
    'Future Path Consultants', 'Global Education Solutions', 'Academic Excellence Partners', 'Inclusive Education Services',
    'Tech Education Consultants', 'Academic Pathway Advisors', 'Education Bridge Consultants', 'Student Success Partners',
    'Learning Enhancement Services', 'Career Development Experts', 'Educational Planning Advisors', 'Student Support Specialists'
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
    { name: 'Career Guidance', count: 52 },
    { name: 'Study Abroad', count: 45 },
    { name: 'Academic Enhancement', count: 38 },
    { name: 'Special Education', count: 32 },
    { name: 'Digital Learning', count: 28 },
    { name: 'Higher Education', count: 25 },
    { name: 'Skill Development', count: 22 },
    { name: 'Other Services', count: 18 }
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
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
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
                Education Consultants
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Expert guidance for academic success and career development
              </p>
              
              {/* Search Bar */}
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center bg-white rounded-xl shadow-2xl p-2">
                  <input
                    type="text"
                    placeholder="Search education consultants by name, provider, or location..."
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
                  <span>800+ Success Stories</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-teal-300 mr-2" />
                  <span>16+ Cities</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="text-teal-300 mr-2" />
                  <span>95% Success Rate</span>
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
                    <span className="text-sm font-medium text-gray-700">Service Specialization</span>
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

export default EducationConsultantPage; 