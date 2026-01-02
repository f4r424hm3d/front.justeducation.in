import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp, FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const StudyAbroadPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching study abroad details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/study-abroad/${id}`);
  }, [navigate]);

  // Sample study abroad programs data
  const programs = [
    {
      id: 1,
      name: 'Master of Science in Computer Science',
      country: 'United States',
      university: 'Stanford University',
      duration: '2 Years',
      cost: '$150,000',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
      information: 'Stanford University\'s Master of Science in Computer Science is one of the world\'s premier graduate programs in computing. The program offers cutting-edge research opportunities in artificial intelligence, machine learning, human-computer interaction, and systems. Students work with renowned faculty and have access to state-of-the-art facilities including specialized labs for robotics, virtual reality, and quantum computing. The program prepares graduates for leadership roles in technology companies, research institutions, and entrepreneurial ventures. Stanford\'s location in Silicon Valley provides unparalleled networking opportunities and internship possibilities with top tech companies.'
    },
    {
      id: 2,
      name: 'MBA - International Business',
      country: 'United Kingdom',
      university: 'London Business School',
      duration: '1 Year',
      cost: '£115,000',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=800&q=80',
      information: 'London Business School\'s MBA program is consistently ranked among the top 10 globally. The intensive one-year program focuses on international business with a diverse cohort representing over 60 countries. Students benefit from London\'s position as a global financial center and the school\'s strong connections with leading multinational corporations. The curriculum covers strategic management, finance, marketing, and leadership with opportunities for international exchanges and consulting projects. Graduates pursue careers in investment banking, consulting, technology, and entrepreneurship with excellent placement rates and competitive compensation packages.'
    },
    {
      id: 3,
      name: 'Bachelor of Medicine and Surgery',
      country: 'Australia',
      university: 'University of Melbourne',
      duration: '6 Years',
      cost: 'AUD 350,000',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
      information: 'The University of Melbourne\'s Doctor of Medicine program is Australia\'s leading medical degree, renowned for its innovative curriculum and research excellence. The program combines theoretical knowledge with extensive clinical practice in Melbourne\'s world-class hospitals. Students engage in problem-based learning, simulation training, and early patient contact. The university\'s medical research institutes provide opportunities for students to participate in groundbreaking research in areas such as cancer, neuroscience, and infectious diseases. Graduates are highly sought after globally and the program maintains strong partnerships with international medical institutions.'
    },
    {
      id: 4,
      name: 'Master of Engineering - Renewable Energy',
      country: 'Germany',
      university: 'Technical University of Munich',
      duration: '2 Years',
      cost: '€2,000',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?auto=format&fit=crop&w=800&q=80',
      information: 'The Technical University of Munich offers a world-class Master\'s program in Renewable Energy Systems, reflecting Germany\'s leadership in sustainable technology. The program covers solar, wind, hydro, and biomass energy systems with emphasis on engineering design and system integration. Students benefit from Germany\'s advanced renewable energy infrastructure and collaborate with leading industry partners like Siemens and BMW. The program includes hands-on laboratory work, industry internships, and thesis projects with real-world applications. Low tuition costs and excellent job prospects in Germany\'s thriving green energy sector make this an attractive option for international students.'
    },
    {
      id: 5,
      name: 'Bachelor of Arts - International Relations',
      country: 'France',
      university: 'Sciences Po Paris',
      duration: '3 Years',
      cost: '€45,000',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=800&q=80',
      information: 'Sciences Po Paris is France\'s premier institution for political science and international relations. The undergraduate program offers a rigorous liberal arts education with specializations in international affairs, economics, and public policy. Students benefit from small class sizes, distinguished faculty, and extensive international exchange opportunities. The program\'s location in Paris provides access to international organizations, embassies, and multinational corporations. Sciences Po\'s alumni network includes presidents, prime ministers, and business leaders worldwide. The program prepares students for careers in diplomacy, international business, journalism, and public service.'
    },
    {
      id: 6,
      name: 'Master of Fine Arts - Digital Media',
      country: 'Canada',
      university: 'University of Toronto',
      duration: '2 Years',
      cost: 'CAD 65,000',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80',
      information: 'The University of Toronto\'s Master of Fine Arts in Digital Media combines artistic creativity with cutting-edge technology. The program explores interactive media, virtual reality, game design, and digital storytelling. Students work in state-of-the-art studios and collaborate with the university\'s computer science and engineering departments. Toronto\'s vibrant arts scene and growing tech industry provide excellent opportunities for internships and career development. The program attracts students from diverse backgrounds and emphasizes interdisciplinary collaboration. Graduates pursue careers in entertainment, advertising, education, and emerging media industries.'
    },
    {
      id: 7,
      name: 'PhD in Biotechnology',
      country: 'Singapore',
      university: 'National University of Singapore',
      duration: '4 Years',
      cost: 'S$80,000',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      information: 'The National University of Singapore\'s PhD in Biotechnology is at the forefront of biomedical research in Asia. The program focuses on cutting-edge areas including gene therapy, personalized medicine, and bioengineering. Students work with world-class faculty and have access to state-of-the-art research facilities and partnerships with leading pharmaceutical companies. Singapore\'s strategic location and strong government support for biotech research create excellent opportunities for collaboration and career development. The program offers competitive funding packages and maintains strong connections with biotech hubs in the US and Europe.'
    },
    {
      id: 8,
      name: 'Master of Architecture',
      country: 'Netherlands',
      university: 'Delft University of Technology',
      duration: '2 Years',
      cost: '€18,000',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      information: 'Delft University of Technology\'s Master of Architecture program is consistently ranked among the world\'s best. The program emphasizes sustainable design, urban planning, and innovative building technologies. Students engage in design studios, research projects, and collaborations with Dutch architectural firms renowned for their innovative approach. The Netherlands\' progressive approach to urban development and sustainable architecture provides an ideal learning environment. The program attracts international students and faculty, creating a diverse and dynamic academic community. Graduates are well-prepared for careers in architectural practice, urban planning, and design research.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const programsPerPage = 6;

  // Filter states
  const [countryExpanded, setCountryExpanded] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [durationExpanded, setDurationExpanded] = useState(false);
  const [costExpanded, setCostExpanded] = useState(false);
  const [degreeExpanded, setDegreeExpanded] = useState(false);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedCosts, setSelectedCosts] = useState<string[]>([]);
  const [selectedDegrees, setSelectedDegrees] = useState<string[]>([]);
  const [nearMeExpanded, setNearMeExpanded] = useState(false);
  const [nearMeSearch, setNearMeSearch] = useState('');

  // Available countries
  const allCountries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
    'Netherlands', 'Singapore', 'Switzerland', 'Sweden', 'Denmark', 'Norway',
    'New Zealand', 'Ireland', 'Belgium', 'Austria', 'Italy', 'Spain', 'Japan',
    'South Korea', 'China', 'Hong Kong', 'Malaysia', 'Thailand', 'UAE'
  ];

  // Filter countries based on search
  const filteredCountries = allCountries.filter(country =>
    country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Handle country selection
  const handleCountryChange = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };

  // Show more countries functionality
  const [showMoreCountries, setShowMoreCountries] = useState(false);
  const displayedCountries = showMoreCountries ? filteredCountries : filteredCountries.slice(0, 8);

  // Duration options
  const durationOptions = [
    '1 Year', '1.5 Years', '2 Years', '3 Years', '4 Years', '5+ Years'
  ];

  // Cost options
  const costOptions = [
    'Under $25,000', '$25,000 - $50,000', '$50,000 - $100,000', 
    '$100,000 - $150,000', '$150,000 - $200,000', 'Above $200,000'
  ];

  // Degree options
  const degreeOptions = [
    { name: 'Bachelor\'s Degree', count: 245 },
    { name: 'Master\'s Degree', count: 387 },
    { name: 'PhD/Doctorate', count: 156 },
    { name: 'Diploma/Certificate', count: 198 },
    { name: 'Foundation Course', count: 123 },
    { name: 'Language Course', count: 89 }
  ];

  // Handle filter changes
  const handleDurationChange = (duration: string) => {
    setSelectedDurations(prev => 
      prev.includes(duration) 
        ? prev.filter(d => d !== duration)
        : [...prev, duration]
    );
  };

  const handleCostChange = (cost: string) => {
    setSelectedCosts(prev => 
      prev.includes(cost) 
        ? prev.filter(c => c !== cost)
        : [...prev, cost]
    );
  };

  const handleDegreeChange = (degree: string) => {
    setSelectedDegrees(prev => 
      prev.includes(degree) 
        ? prev.filter(d => d !== degree)
        : [...prev, degree]
    );
  };

  // Apply filters
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(program.country);
    const matchesDuration = selectedDurations.length === 0 || selectedDurations.includes(program.duration);
    
    return matchesSearch && matchesCountry && matchesDuration;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);
  const startIndex = (currentPage - 1) * programsPerPage;
  const currentPrograms = filteredPrograms.slice(startIndex, startIndex + programsPerPage);

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
            backgroundImage: "url('https://img.freepik.com/premium-photo/global-education-concept-graduation-cap-books-world-map_1314467-12234.jpg?w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Study Abroad Programs</h1>
            <p className="text-lg md:text-xl mb-6">Explore world-class educational opportunities and universities across the globe</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search programs by name, university, or country..."
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
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div className="px-2 pb-2">
                        <button className="flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Use my current location
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Country Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setCountryExpanded(!countryExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Country</span>
                    {countryExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {countryExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="p-2">
                        <div className="relative">
                          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                          <input
                            type="text"
                            placeholder="Search by country name"
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div className="max-h-60 overflow-y-auto">
                        {displayedCountries.map((country) => (
                          <div key={country} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`country-${country}`}
                              checked={selectedCountries.includes(country)}
                              onChange={() => handleCountryChange(country)}
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                            />
                            <label 
                              htmlFor={`country-${country}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {country}
                            </label>
                          </div>
                        ))}
                        
                        {filteredCountries.length > 8 && (
                          <div className="p-2">
                            <button
                              onClick={() => setShowMoreCountries(!showMoreCountries)}
                              className="text-blue-600 text-xs font-medium hover:text-blue-700"
                            >
                              {showMoreCountries ? 'Show Less' : `+ ${filteredCountries.length - 8} More`}
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
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
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

                {/* Cost Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setCostExpanded(!costExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Total Cost</span>
                    {costExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {costExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {costOptions.map((cost) => (
                          <div key={cost} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`cost-${cost}`}
                              checked={selectedCosts.includes(cost)}
                              onChange={() => handleCostChange(cost)}
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                            />
                            <label 
                              htmlFor={`cost-${cost}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {cost}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Degree Level Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setDegreeExpanded(!degreeExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Degree Level</span>
                    {degreeExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {degreeExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {degreeOptions.map((degree) => (
                          <div key={degree.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="checkbox"
                                id={`degree-${degree.name}`}
                                checked={selectedDegrees.includes(degree.name)}
                                onChange={() => handleDegreeChange(degree.name)}
                                className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                              />
                              <label 
                                htmlFor={`degree-${degree.name}`}
                                className="text-xs text-gray-600 cursor-pointer"
                              >
                                {degree.name}
                              </label>
                            </div>
                            <span className="text-xs text-gray-400">({degree.count})</span>
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
              {/* Programs Grid */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {currentPrograms.map(program => (
                    <div
                      key={program.id}
                      className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                    >
                      {/* Top Rated Badge */}
                      {program.rating >= 4.7 && (
                        <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-blue-600 transition">Top Rated</span>
                      )}
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold mb-2 text-gray-800">{program.university}</h3>
                        
                        {/* Country, Duration, Rating in one row */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-1 text-gray-500" />
                            <span>{program.country}</span>
                          </div>
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-1 text-gray-500" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <FaStar className="mr-1 text-yellow-400" size={10} />
                            <span>{program.rating}</span>
                          </div>
                        </div>
                        
                        {/* Information Section */}
                        <div className="mb-3 flex-grow">
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {truncateText(program.information)}
                            {program.information.length > 155 && (
                              <button
                                onClick={(e) => handleViewDetails(e, program.id)}
                                onMouseEnter={handlePrefetch}
                                className="text-blue-600 text-xs font-medium ml-1 hover:text-blue-700 transition inline"
                              >
                                More
                              </button>
                            )}
                          </p>
                        </div>
                        
                        <button
                          onClick={(e) => handleViewDetails(e, program.id)}
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
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyAbroadPage; 