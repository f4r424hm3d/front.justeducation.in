import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaChevronDown, FaChevronUp, FaBrain, FaClock, FaUsers, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const SkillDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching skill development details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/skill-development/${id}`);
  }, [navigate]);

  // Sample skill development programs data
  const skills = [
    {
      id: 1,
      name: 'Public Speaking & Communication Mastery',
      provider: 'SkillBridge Academy',
      duration: '6 Weeks',
      participants: '2,500+',
      location: 'Mumbai',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
      information: 'Transform your communication skills with this comprehensive public speaking course. Learn to overcome stage fright, structure compelling presentations, and engage audiences effectively. The program covers body language, voice modulation, storytelling techniques, and persuasive speaking. Participants practice through mock presentations, group discussions, and video analysis. The course includes modules on business presentations, interview skills, and leadership communication. Expert feedback and peer evaluation help build confidence and polish speaking abilities. Suitable for professionals, students, and anyone looking to improve their communication impact.'
    },
    {
      id: 2,
      name: 'Leadership & Team Management',
      provider: 'Executive Excellence Institute',
      duration: '8 Weeks',
      participants: '1,800+',
      location: 'Bangalore',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      information: 'Develop essential leadership skills for managing teams and driving organizational success. The program covers leadership styles, team dynamics, conflict resolution, and performance management. Participants learn to motivate teams, delegate effectively, and create high-performance cultures. The course includes case studies from successful leaders, interactive workshops, and personal leadership assessments. Topics include emotional intelligence, decision-making, change management, and strategic thinking. Practical exercises and group projects provide hands-on experience in leadership scenarios. Includes one-on-one coaching sessions and personalized development plans.'
    },
    {
      id: 3,
      name: 'Digital Marketing & Social Media Strategy',
      provider: 'Digital Skills Hub',
      duration: '10 Weeks',
      participants: '3,200+',
      location: 'Delhi',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      information: 'Master modern digital marketing techniques and social media strategies. Learn SEO, content marketing, social media advertising, email marketing, and analytics. The course covers platform-specific strategies for Facebook, Instagram, LinkedIn, Twitter, and YouTube. Participants create real marketing campaigns and analyze performance metrics. Topics include influencer marketing, paid advertising, marketing automation, and customer journey mapping. The program includes hands-on projects with actual businesses and access to premium marketing tools. Career guidance includes portfolio development and freelancing opportunities in digital marketing.'
    },
    {
      id: 4,
      name: 'Creative Writing & Content Creation',
      provider: 'Writer\'s Workshop India',
      duration: '12 Weeks',
      participants: '1,500+',
      location: 'Chennai',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      information: 'Unleash your creative potential with comprehensive writing and content creation training. The program covers storytelling, blog writing, copywriting, and content strategy. Participants learn to write engaging articles, create compelling copy, and develop unique voice and style. The course includes modules on SEO writing, social media content, email newsletters, and creative fiction. Weekly writing assignments, peer reviews, and instructor feedback help improve writing skills. Topics include research techniques, editing, publishing, and building an online writing portfolio. Guest sessions with published authors and content marketing experts provide industry insights.'
    },
    {
      id: 5,
      name: 'Financial Literacy & Investment Planning',
      provider: 'Money Matters Academy',
      duration: '6 Weeks',
      participants: '2,100+',
      location: 'Pune',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      information: 'Build financial literacy and learn smart investment strategies for long-term wealth creation. The course covers budgeting, saving, debt management, and investment fundamentals. Participants learn about stocks, bonds, mutual funds, real estate, and retirement planning. The program includes practical exercises in portfolio creation, risk assessment, and financial goal setting. Topics include tax planning, insurance, emergency funds, and behavioral finance. Real-world case studies and market analysis help understand investment principles. Guest experts from banking and finance industry share insights on current market trends and opportunities.'
    },
    {
      id: 6,
      name: 'Entrepreneurship & Business Development',
      provider: 'Startup Success Academy',
      duration: '10 Weeks',
      participants: '950+',
      location: 'Kolkata',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
      information: 'Learn essential entrepreneurship skills and launch your business idea successfully. The program covers opportunity identification, business model design, market validation, and funding strategies. Participants develop comprehensive business plans and pitch presentations. The course includes modules on marketing, sales, operations, and financial planning for startups. Topics include legal aspects, team building, customer acquisition, and scaling strategies. Mentorship from successful entrepreneurs, investor connect sessions, and real-world case studies provide practical insights. Participants receive ongoing support for business launch and early-stage growth challenges.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const skillsPerPage = 8;

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
    'SkillBridge Academy', 'Executive Excellence Institute', 'Digital Skills Hub', 'Writer\'s Workshop India',
    'Money Matters Academy', 'Creative Arts Studio', 'Wellness & Growth Center', 'Startup Success Academy',
    'Professional Development Institute', 'LifeSkills Training Center', 'Innovation Hub', 'Career Catalyst'
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
    '2-4 Weeks', '4-6 Weeks', '6-8 Weeks', '8-12 Weeks', '3+ Months', 'Self-Paced'
  ];

  // Category options
  const categoryOptions = [
    { name: 'Communication & Presentation', count: 145 },
    { name: 'Leadership & Management', count: 187 },
    { name: 'Digital Marketing', count: 156 },
    { name: 'Creative Skills', count: 134 },
    { name: 'Financial Literacy', count: 98 },
    { name: 'Personal Development', count: 87 },
    { name: 'Entrepreneurship', count: 76 },
    { name: 'Technical Skills', count: 65 }
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
  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProvider = selectedProviders.length === 0 || selectedProviders.some(provider => 
      skill.provider.toLowerCase().includes(provider.toLowerCase())
    );
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(skill.location);
    
    return matchesSearch && matchesProvider && matchesLocation;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const startIndex = (currentPage - 1) * skillsPerPage;
  const currentSkills = filteredSkills.slice(startIndex, startIndex + skillsPerPage);

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
            backgroundImage: "url('https://img.freepik.com/premium-photo/skill-development-personal-growth-concept-learning-education_1314467-56789.jpg?w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Skill Development Programs</h1>
            <p className="text-lg md:text-xl mb-6">Enhance your personal and professional skills with expert-led courses and workshops</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search skill development programs by name, provider, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-800 focus:outline-none text-sm"
                />
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md">
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
                    <span className="text-sm font-medium text-gray-700">Training Provider</span>
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
                    <span className="text-sm font-medium text-gray-700">Duration</span>
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
                    <span className="text-sm font-medium text-gray-700">Skill Category</span>
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
              {/* Skills Grid */}
              <div className="rounded-xl bg-gradient-to-br from-teal-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {currentSkills.map(skill => (
                    <div
                      key={skill.id}
                      className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                    >
                      {/* Top Rated Badge */}
                      {skill.rating >= 4.7 && (
                        <span className="absolute top-2 left-2 z-10 bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-teal-600 transition">Top Rated</span>
                      )}
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold mb-2 text-gray-800">{skill.name}</h3>
                        
                        {/* Row 1: Provider and Duration */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                          <div className="flex items-center">
                            <FaBrain className="mr-1 text-gray-500" />
                            <span>{skill.provider}</span>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="mr-1 text-gray-500" />
                            <span>{skill.duration}</span>
                          </div>
                        </div>
                        
                        {/* Row 2: Location, Participants, and Rating */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-1 text-gray-500" />
                            <span>{skill.location}</span>
                          </div>
                          <div className="flex items-center">
                            <FaUsers className="mr-1 text-gray-500" />
                            <span>{skill.participants}</span>
                          </div>
                          <div className="flex items-center">
                            <FaStar className="mr-1 text-yellow-400" size={10} />
                            <span>{skill.rating}</span>
                          </div>
                        </div>
                        
                        {/* Information Section */}
                        <div className="mb-3 flex-grow">
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {truncateText(skill.information)}
                            {skill.information.length > 155 && (
                              <button
                                onClick={(e) => handleViewDetails(e, skill.id)}
                                onMouseEnter={handlePrefetch}
                                className="text-teal-600 text-xs font-medium ml-1 hover:text-teal-700 transition inline"
                              >
                                More
                              </button>
                            )}
                          </p>
                        </div>
                        
                        <button
                          onClick={(e) => handleViewDetails(e, skill.id)}
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

export default SkillDevelopmentPage; 