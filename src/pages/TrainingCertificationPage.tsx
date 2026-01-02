import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp, FaCertificate, FaClock, FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const TrainingCertificationPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching training certification details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/training-certification/${id}`);
  }, [navigate]);

  // Sample training and certification programs data
  const programs = [
    {
      id: 1,
      name: 'Project Management Professional (PMP)',
      provider: 'PMI Training Institute',
      instructor: 'Certified PMP Trainers',
      duration: '5 Days',
      location: 'Mumbai',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      information: 'Comprehensive PMP certification training program aligned with PMI\'s latest PMBOK Guide. This intensive 5-day course covers all knowledge areas of project management including integration, scope, schedule, cost, quality, resource, communications, risk, procurement, and stakeholder management. The program includes hands-on exercises, case studies, and exam preparation strategies. Participants receive 35 PDUs required for PMP exam eligibility. The course is delivered by PMI-certified trainers with extensive industry experience. Includes study materials, practice exams, and post-training support for exam preparation.'
    },
    {
      id: 2,
      name: 'Certified Information Systems Security Professional (CISSP)',
      provider: 'InfoSec Training Center',
      instructor: 'CISSP Certified Experts',
      duration: '7 Days',
      location: 'Bangalore',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      information: 'Elite cybersecurity certification training covering all 8 domains of CISSP. The program includes security and risk management, asset security, security architecture and engineering, communication and network security, identity and access management, security assessment and testing, security operations, and software development security. Hands-on labs with real-world scenarios prepare participants for both the certification exam and practical implementation. The course is delivered by industry experts with extensive cybersecurity experience. Includes comprehensive study materials, practice exams, and access to virtual labs for 6 months post-training.'
    },
    {
      id: 3,
      name: 'AWS Solutions Architect Associate',
      provider: 'Amazon Web Services',
      instructor: 'AWS Certified Architects',
      duration: '4 Days',
      location: 'Delhi',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      information: 'Official AWS training for Solutions Architect Associate certification. Covers designing resilient architectures, high-performing architectures, secure applications and architectures, and cost-optimized architectures. The program includes hands-on labs with AWS services including EC2, S3, RDS, VPC, IAM, and CloudFormation. Participants work on real-world scenarios and case studies. The course prepares students for the AWS Solutions Architect Associate exam and provides practical skills for designing cloud solutions. Includes access to AWS free tier account and training materials. Post-training support includes access to practice exams and AWS documentation.'
    },
    {
      id: 4,
      name: 'Certified ScrumMaster (CSM)',
      provider: 'Scrum Alliance India',
      instructor: 'Certified Scrum Trainers',
      duration: '2 Days',
      location: 'Pune',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      information: 'Official Scrum Alliance CSM certification course covering Scrum framework, roles, events, and artifacts. The interactive workshop includes practical exercises, team simulations, and real-world case studies. Participants learn to facilitate Scrum events, remove impediments, and coach development teams. The course covers Scrum principles, empirical process control, and agile mindset. Delivered by Certified Scrum Trainers with extensive agile coaching experience. Includes 2-year Scrum Alliance membership, access to local user groups, and continuing education resources. Participants receive official CSM certification upon successful completion.'
    },
    {
      id: 5,
      name: 'Six Sigma Green Belt Certification',
      provider: 'Lean Six Sigma Institute',
      instructor: 'Master Black Belts',
      duration: '6 Days',
      location: 'Chennai',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      information: 'Comprehensive Six Sigma Green Belt training focusing on DMAIC methodology (Define, Measure, Analyze, Improve, Control). The program covers statistical analysis, process mapping, root cause analysis, and improvement implementation. Participants work on real projects and learn to use Minitab software for statistical analysis. The course includes lean principles, waste reduction, and process optimization techniques. Delivered by Master Black Belt certified instructors with industry experience. Includes project coaching, statistical software training, and certification exam. Participants must complete a project within 6 months for full certification.'
    },
    {
      id: 6,
      name: 'Google Analytics Individual Qualification (IQ)',
      provider: 'Google Analytics Academy',
      instructor: 'Google Certified Trainers',
      duration: '3 Days',
      location: 'Hyderabad',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      information: 'Official Google Analytics certification training covering web analytics fundamentals, advanced Google Analytics features, and Google Analytics for business. The course includes setting up Analytics accounts, configuring goals and ecommerce tracking, creating custom reports, and using Analytics Intelligence. Participants learn to interpret data, create actionable insights, and measure digital marketing ROI. The program includes hands-on exercises with real Analytics accounts and case studies from various industries. Delivered by Google certified trainers. Includes access to Google Analytics demo account, certification exam voucher, and continuing education resources.'
    },
    {
      id: 7,
      name: 'Salesforce Administrator Certification',
      provider: 'Salesforce Training Center',
      instructor: 'Salesforce Certified Professionals',
      duration: '5 Days',
      location: 'Gurgaon',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
      information: 'Comprehensive Salesforce Administrator certification training covering platform fundamentals, user setup, security, data management, workflow automation, and reports & dashboards. The hands-on course includes creating custom objects, fields, validation rules, workflows, and process builder. Participants learn to manage users, profiles, permission sets, and sharing rules. The program covers data import/export, data quality, and backup strategies. Includes practical exercises with Salesforce developer org and real-world scenarios. Delivered by Salesforce certified professionals with extensive implementation experience. Includes study materials, practice exams, and post-training support.'
    },
    {
      id: 8,
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      provider: 'Microsoft Learning Partners',
      instructor: 'Microsoft Certified Trainers',
      duration: '2 Days',
      location: 'Kolkata',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      information: 'Entry-level Microsoft Azure certification covering cloud concepts, core Azure services, security, privacy, compliance, and Azure pricing and support. The course provides foundational knowledge of cloud services and how they are provided with Microsoft Azure. Covers compute services, networking services, storage services, and database services. Participants learn about Azure solutions including IoT, machine learning, and serverless computing. The program includes hands-on labs with Azure portal and command-line tools. Delivered by Microsoft certified trainers. Includes access to Azure free account, official Microsoft materials, and practice exam. Perfect for beginners starting their cloud journey.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const programsPerPage = 6;

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
    'PMI Training Institute', 'InfoSec Training Center', 'Amazon Web Services', 'Microsoft Learning Partners',
    'Google Analytics Academy', 'Salesforce Training Center', 'Scrum Alliance', 'Lean Six Sigma Institute',
    'Oracle University', 'IBM Training', 'Cisco Academy', 'CompTIA Learning'
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
    '1-2 Days', '3-5 Days', '1 Week', '2 Weeks', '1 Month', '2+ Months'
  ];



  // Category options
  const categoryOptions = [
    { name: 'Project Management', count: 245 },
    { name: 'Information Security', count: 187 },
    { name: 'Cloud Computing', count: 156 },
    { name: 'Agile & Scrum', count: 134 },
    { name: 'Quality Management', count: 98 },
    { name: 'Digital Marketing', count: 87 },
    { name: 'Data Analysis', count: 76 },
    { name: 'IT Service Management', count: 65 }
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
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProvider = selectedProviders.length === 0 || selectedProviders.some(provider => 
      program.provider.toLowerCase().includes(provider.toLowerCase())
    );
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(program.location);
    
    return matchesSearch && matchesProvider && matchesLocation;
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
            backgroundImage: "url('https://img.freepik.com/premium-photo/professional-training-certification-concept-business-education_1314467-45678.jpg?w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Professional Training & Certification</h1>
            <p className="text-lg md:text-xl mb-6">Advance your career with industry-recognized certifications and professional training programs</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search training programs by name, provider, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-800 focus:outline-none text-sm"
                />
                <button className="bg-orange-600 text-white px-4 py-2 rounded-md">
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
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                      </div>
                      
                      <div className="px-2 pb-2">
                        <button className="flex items-center text-orange-600 hover:text-orange-700 text-xs font-medium">
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
                              className="mr-2 text-orange-600 focus:ring-orange-500 scale-75"
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
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
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
                              className="mr-2 text-orange-600 focus:ring-orange-500 scale-75"
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
                              className="text-orange-600 text-xs font-medium hover:text-orange-700"
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
                              className="mr-2 text-orange-600 focus:ring-orange-500 scale-75"
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
                    <span className="text-sm font-medium text-gray-700">Category</span>
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
                                className="mr-2 text-orange-600 focus:ring-orange-500 scale-75"
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
              {/* Programs Grid */}
              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {currentPrograms.map(program => (
                    <div
                      key={program.id}
                      className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                    >
                      {/* Top Rated Badge */}
                      {program.rating >= 4.7 && (
                        <span className="absolute top-2 left-2 z-10 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-orange-600 transition">Top Rated</span>
                      )}
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold mb-2 text-gray-800">{program.name}</h3>
                        
                        {/* Provider and Location */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                          <div className="flex items-center">
                            <FaBuilding className="mr-1 text-gray-500" />
                            <span>{program.provider}</span>
                          </div>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-1 text-gray-500" />
                            <span>{program.location}</span>
                          </div>
                        </div>
                        
                        {/* Duration, Rating */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <div className="flex items-center">
                            <FaClock className="mr-1 text-gray-500" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <FaCertificate className="mr-1 text-orange-500" size={10} />
                            <span>Certified</span>
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
                                className="text-orange-600 text-xs font-medium ml-1 hover:text-orange-700 transition inline"
                              >
                                More
                              </button>
                            )}
                          </p>
                        </div>
                        
                        <button
                          onClick={(e) => handleViewDetails(e, program.id)}
                          onMouseEnter={handlePrefetch}
                          className="block w-full py-1.5 bg-orange-600 text-white rounded text-center font-medium text-xs hover:bg-orange-700 transition mt-auto"
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
                        className={`px-2 py-1 rounded text-xs border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-orange-600'}`}
                      >
                        Previous
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={`px-2 py-1 rounded text-xs border ${currentPage === i + 1 ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-1 rounded text-xs border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-orange-600'}`}
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

export default TrainingCertificationPage; 