import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp, FaLaptop, FaClock, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const EduTechOnlinePage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching online course details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/edutech-online/${id}`);
  }, [navigate]);

  // Sample online courses data
  const courses = [
    {
      id: 1,
      name: 'Full Stack Web Development Bootcamp',
      platform: 'CodeAcademy Pro',
      instructor: 'Sarah Johnson',
      duration: '16 Weeks',
      price: '$499',
      students: '125,000+',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      information: 'This comprehensive bootcamp covers everything you need to become a full-stack web developer. Learn HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB through hands-on projects. The course includes 200+ coding exercises, 15 real-world projects, and career support including resume review and interview preparation. Students build a portfolio of applications including an e-commerce site, social media app, and API development. The curriculum is constantly updated to reflect industry best practices and latest technologies. Lifetime access to course materials and community support included.'
    },
    {
      id: 2,
      name: 'Machine Learning and AI Specialization',
      platform: 'Coursera - Stanford University',
      instructor: 'Andrew Ng',
      duration: '6 Months',
      price: '$79/month',
      students: '2.8M+',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
      information: 'Learn machine learning from industry pioneer Andrew Ng in this comprehensive specialization. Cover supervised learning, unsupervised learning, and reinforcement learning with practical applications. The course includes Python programming, linear algebra, statistics, and neural networks. Students work on real-world projects including image recognition, natural language processing, and predictive modeling. The program provides both theoretical foundations and practical implementation skills. Certificate awarded upon completion that is recognized by top tech companies worldwide. Includes access to Jupyter notebooks, datasets, and peer-reviewed assignments.'
    },
    {
      id: 3,
      name: 'Digital Marketing Mastery Course',
      platform: 'Udemy Business',
      instructor: 'Neil Patel',
      duration: '12 Weeks',
      price: '$199',
      students: '89,000+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      information: 'Master digital marketing with this comprehensive course covering SEO, social media marketing, content marketing, email marketing, and paid advertising. Learn to create effective marketing campaigns, analyze performance metrics, and optimize for ROI. The course includes case studies from successful campaigns, templates for marketing materials, and access to premium marketing tools. Students develop a complete digital marketing strategy for a real business. Covers Google Ads, Facebook Ads, Instagram marketing, LinkedIn marketing, and marketing automation. Includes bonus materials on influencer marketing and affiliate marketing.'
    },
    {
      id: 4,
      name: 'Data Science with Python',
      platform: 'DataCamp',
      instructor: 'Multiple Experts',
      duration: '20 Weeks',
      price: '$35/month',
      students: '45,000+',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      information: 'Comprehensive data science course covering Python programming, statistics, data visualization, and machine learning. Learn pandas, NumPy, matplotlib, seaborn, and scikit-learn through interactive coding exercises. The course includes real datasets from various industries including finance, healthcare, and e-commerce. Students complete capstone projects involving data cleaning, exploratory data analysis, predictive modeling, and presentation of insights. Covers both supervised and unsupervised learning algorithms. Interactive coding environment with immediate feedback and progress tracking. Industry-relevant projects prepare students for data scientist roles.'
    },
    {
      id: 5,
      name: 'UX/UI Design Fundamentals',
      platform: 'Figma Academy',
      instructor: 'Design Team',
      duration: '8 Weeks',
      price: '$299',
      students: '67,000+',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      information: 'Learn user experience and user interface design from industry professionals. Cover design thinking, user research, wireframing, prototyping, and usability testing. The course includes hands-on projects using Figma, Sketch, and Adobe XD. Students develop a complete design portfolio including mobile apps, websites, and design systems. Learn about color theory, typography, layout principles, and accessibility. Real client projects provide practical experience and portfolio pieces. Covers both freelance and in-house design workflows. Includes career guidance and portfolio review sessions with design professionals.'
    },
    {
      id: 6,
      name: 'Cybersecurity Fundamentals',
      platform: 'CompTIA Learn',
      instructor: 'Security Experts',
      duration: '14 Weeks',
      price: '$399',
      students: '34,000+',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      information: 'Comprehensive cybersecurity course covering network security, threat analysis, risk management, and incident response. Learn about malware, social engineering, encryption, and security frameworks. The course prepares students for CompTIA Security+ certification. Includes hands-on labs with virtual environments for practicing security concepts safely. Cover topics including penetration testing, vulnerability assessment, and security policy development. Real-world case studies from major security breaches provide practical insights. Students develop skills in security tools and technologies used by industry professionals. Career preparation includes resume building and interview techniques for cybersecurity roles.'
    },
    {
      id: 7,
      name: 'Cloud Computing with AWS',
      platform: 'AWS Training',
      instructor: 'AWS Certified Architects',
      duration: '10 Weeks',
      price: '$349',
      students: '78,000+',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      information: 'Master Amazon Web Services with this comprehensive cloud computing course. Learn to deploy, manage, and scale applications on AWS cloud infrastructure. Cover EC2, S3, RDS, Lambda, and other core AWS services. The course includes hands-on labs with real AWS environments and prepares students for AWS certification exams. Students build scalable applications using cloud-native architectures. Learn about DevOps practices, monitoring, security, and cost optimization in the cloud. Includes case studies from companies that have successfully migrated to AWS. Practical projects include building serverless applications and containerized microservices.'
    },
    {
      id: 8,
      name: 'Blockchain Development',
      platform: 'ConsenSys Academy',
      instructor: 'Ethereum Developers',
      duration: '12 Weeks',
      price: '$599',
      students: '23,000+',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      information: 'Learn blockchain development with focus on Ethereum and smart contracts. Cover Solidity programming, decentralized applications (DApps), and Web3 development. The course includes building real DApps including a decentralized marketplace and cryptocurrency wallet. Learn about blockchain fundamentals, consensus mechanisms, and cryptography. Students work with development tools like Truffle, Ganache, and MetaMask. Cover topics including tokenomics, DeFi protocols, and NFT development. Real-world projects prepare students for blockchain developer roles in the rapidly growing Web3 industry. Includes networking opportunities with blockchain professionals and startups.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const coursesPerPage = 6;

  // Filter states
  const [platformExpanded, setPlatformExpanded] = useState(false);
  const [platformSearch, setPlatformSearch] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [durationExpanded, setDurationExpanded] = useState(false);
  const [priceExpanded, setPriceExpanded] = useState(false);
  const [categoryExpanded, setCategoryExpanded] = useState(false);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [nearMeExpanded, setNearMeExpanded] = useState(false);
  const [nearMeSearch, setNearMeSearch] = useState('');

  // Available platforms
  const allPlatforms = [
    'Coursera', 'Udemy', 'edX', 'LinkedIn Learning', 'Skillshare', 'Pluralsight',
    'Khan Academy', 'MasterClass', 'DataCamp', 'Codecademy', 'FreeCodeCamp',
    'Udacity', 'Treehouse', 'Brilliant', 'AWS Training', 'Google Cloud Learning'
  ];

  // Filter platforms based on search
  const filteredPlatforms = allPlatforms.filter(platform =>
    platform.toLowerCase().includes(platformSearch.toLowerCase())
  );

  // Handle platform selection
  const handlePlatformChange = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  // Show more platforms functionality
  const [showMorePlatforms, setShowMorePlatforms] = useState(false);
  const displayedPlatforms = showMorePlatforms ? filteredPlatforms : filteredPlatforms.slice(0, 8);

  // Duration options
  const durationOptions = [
    'Under 4 Weeks', '4-8 Weeks', '8-12 Weeks', '12-16 Weeks', '16-20 Weeks', '20+ Weeks'
  ];

  // Price options
  const priceOptions = [
    'Free', 'Under $50', '$50 - $100', '$100 - $300', '$300 - $500', 'Above $500'
  ];

  // Category options
  const categoryOptions = [
    { name: 'Programming & Development', count: 1245 },
    { name: 'Data Science & Analytics', count: 887 },
    { name: 'Digital Marketing', count: 654 },
    { name: 'Design & UX/UI', count: 543 },
    { name: 'Business & Management', count: 432 },
    { name: 'Cybersecurity', count: 321 },
    { name: 'Cloud Computing', count: 298 },
    { name: 'Artificial Intelligence', count: 276 }
  ];

  // Handle filter changes
  const handleDurationChange = (duration: string) => {
    setSelectedDurations(prev => 
      prev.includes(duration) 
        ? prev.filter(d => d !== duration)
        : [...prev, duration]
    );
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrices(prev => 
      prev.includes(price) 
        ? prev.filter(p => p !== price)
        : [...prev, price]
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
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPlatform = selectedPlatforms.length === 0 || selectedPlatforms.some(platform => 
      course.platform.toLowerCase().includes(platform.toLowerCase())
    );
    const matchesDuration = selectedDurations.length === 0 || selectedDurations.some(duration => {
      // Simple duration matching logic
      return true; // Simplified for demo
    });
    
    return matchesSearch && matchesPlatform && matchesDuration;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

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
            backgroundImage: "url('https://img.freepik.com/premium-photo/online-education-concept-laptop-books-graduation-cap_1314467-12345.jpg?w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Online Learning Platforms</h1>
            <p className="text-lg md:text-xl mb-6">Discover the best online courses and educational technology platforms for skill development</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search courses by name, platform, or instructor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-800 focus:outline-none text-sm"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
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
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                      
                      <div className="px-2 pb-2">
                        <button className="flex items-center text-purple-600 hover:text-purple-700 text-xs font-medium">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Use my current location
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Platform Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setPlatformExpanded(!platformExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Platform</span>
                    {platformExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {platformExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="p-2">
                        <div className="relative">
                          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                          <input
                            type="text"
                            placeholder="Search by platform name"
                            value={platformSearch}
                            onChange={(e) => setPlatformSearch(e.target.value)}
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                      
                      <div className="max-h-60 overflow-y-auto">
                        {displayedPlatforms.map((platform) => (
                          <div key={platform} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`platform-${platform}`}
                              checked={selectedPlatforms.includes(platform)}
                              onChange={() => handlePlatformChange(platform)}
                              className="mr-2 text-purple-600 focus:ring-purple-500 scale-75"
                            />
                            <label 
                              htmlFor={`platform-${platform}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {platform}
                            </label>
                          </div>
                        ))}
                        
                        {filteredPlatforms.length > 8 && (
                          <div className="p-2">
                            <button
                              onClick={() => setShowMorePlatforms(!showMorePlatforms)}
                              className="text-purple-600 text-xs font-medium hover:text-purple-700"
                            >
                              {showMorePlatforms ? 'Show Less' : `+ ${filteredPlatforms.length - 8} More`}
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
                              className="mr-2 text-purple-600 focus:ring-purple-500 scale-75"
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

                {/* Price Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setPriceExpanded(!priceExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Price</span>
                    {priceExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {priceExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {priceOptions.map((price) => (
                          <div key={price} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`price-${price}`}
                              checked={selectedPrices.includes(price)}
                              onChange={() => handlePriceChange(price)}
                              className="mr-2 text-purple-600 focus:ring-purple-500 scale-75"
                            />
                            <label 
                              htmlFor={`price-${price}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {price}
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
                                className="mr-2 text-purple-600 focus:ring-purple-500 scale-75"
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
              {/* Courses Grid */}
              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {currentCourses.map(course => (
                    <div
                      key={course.id}
                      className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                    >
                      {/* Top Rated Badge */}
                      {course.rating >= 4.7 && (
                        <span className="absolute top-2 left-2 z-10 bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-purple-600 transition">Top Rated</span>
                      )}
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold mb-2 text-gray-800">{course.name}</h3>
                        
                        {/* Platform and Instructor */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                          <div className="flex items-center">
                            <FaLaptop className="mr-1 text-gray-500" />
                            <span>{course.platform}</span>
                          </div>
                          <div className="flex items-center">
                            <FaUser className="mr-1 text-gray-500" />
                            <span>{course.instructor}</span>
                          </div>
                        </div>
                        
                        {/* Duration, Students, Rating */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <div className="flex items-center">
                            <FaClock className="mr-1 text-gray-500" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <FaUsers className="mr-1 text-gray-500" />
                            <span>{course.students}</span>
                          </div>
                          <div className="flex items-center">
                            <FaStar className="mr-1 text-yellow-400" size={10} />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                        
                        {/* Information Section */}
                        <div className="mb-3 flex-grow">
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {truncateText(course.information)}
                            {course.information.length > 155 && (
                              <button
                                onClick={(e) => handleViewDetails(e, course.id)}
                                onMouseEnter={handlePrefetch}
                                className="text-purple-600 text-xs font-medium ml-1 hover:text-purple-700 transition inline"
                              >
                                More
                              </button>
                            )}
                          </p>
                        </div>
                        
                        <button
                          onClick={(e) => handleViewDetails(e, course.id)}
                          onMouseEnter={handlePrefetch}
                          className="block w-full py-1.5 bg-purple-600 text-white rounded text-center font-medium text-xs hover:bg-purple-700 transition mt-auto"
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
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EduTechOnlinePage; 