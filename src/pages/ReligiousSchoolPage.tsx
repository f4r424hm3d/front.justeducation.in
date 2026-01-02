import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const ReligiousSchoolPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching religious school details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/religious-school/${id}`);
  }, [navigate]);

  // Sample religious school data with detailed information
  const religiousSchools = [
    {
      id: 1,
      name: 'St. Xavier\'s High School',
      location: 'Mumbai',
      established: '1869',
      students: '2,500+',
      rating: 4.7,
      denomination: 'Christian',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      information: 'St. Xavier\'s High School Mumbai is a renowned Jesuit institution established in 1869. The school is known for its academic excellence, value-based education, and comprehensive development of students. Following the ICSE curriculum, St. Xavier\'s emphasizes both academic achievement and character formation. The school has excellent facilities including modern classrooms, well-equipped laboratories, library, and sports amenities. St. Xavier\'s has a strong tradition of producing students who excel in academics, sports, and extracurricular activities.'
    },
    {
      id: 2,
      name: 'Guru Nanak Public School',
      location: 'Punjab',
      established: '1969',
      students: '1,800+',
      rating: 4.4,
      denomination: 'Sikh',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      information: 'Guru Nanak Public School is a prestigious Sikh educational institution established in 1969. The school is known for its commitment to Sikh values, academic excellence, and character development. Following the CBSE curriculum, the school provides quality education with emphasis on both traditional Sikh values and modern education. The school has excellent facilities and a strong focus on community service.'
    },
    {
      id: 3,
      name: 'Campion School',
      location: 'Mumbai',
      established: '1943',
      students: '2,200+',
      rating: 4.6,
      denomination: 'Christian',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      information: 'Campion School Mumbai is a prominent Jesuit educational institution established in 1943. The school is known for its academic rigor, emphasis on values, and comprehensive student development. Following the ICSE curriculum, Campion School provides excellent education with focus on critical thinking, creativity, and social responsibility. The school has modern facilities including well-equipped classrooms, laboratories, library, and sports amenities.'
    },
    {
      id: 4,
      name: 'DPS RK Puram',
      location: 'Delhi',
      established: '1972',
      students: '3,000+',
      rating: 4.7,
      denomination: 'Hindu',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      information: 'Delhi Public School RK Puram is one of Delhi\'s most prestigious schools, established in 1972. The school follows Hindu cultural values while providing modern education. Known for its academic excellence and holistic development, DPS RK Puram offers CBSE curriculum with emphasis on both traditional values and contemporary learning. The school has state-of-the-art facilities and a strong focus on character building and cultural heritage.'
    },
    {
      id: 5,
      name: 'Modern School',
      location: 'Delhi',
      established: '1920',
      students: '4,000+',
      rating: 4.6,
      denomination: 'Hindu',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      information: 'Modern School Delhi is a prestigious co-educational institution established in 1920. The school is known for its progressive education philosophy and comprehensive curriculum that balances academics with creative and physical development. Modern School follows the CBSE curriculum and has consistently achieved excellent board results. The school emphasizes innovation, critical thinking, and global perspective in education.'
    },
    {
      id: 6,
      name: 'Springdales School',
      location: 'Delhi',
      established: '1955',
      students: '2,800+',
      rating: 4.5,
      denomination: 'Hindu',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      information: 'Springdales School Delhi is a well-established educational institution founded in 1955. The school is known for its commitment to academic excellence and all-round development of students. Following the CBSE curriculum, Springdales provides quality education with modern teaching methods and facilities. The school has well-equipped classrooms, laboratories, library, and sports facilities.'
    },
    {
        id: 7,
      name: 'Aligarh Muslim University School',
      location: 'Aligarh',
      established: '1875',
      students: '2,500+',
      rating: 4.4,
      denomination: 'Muslim',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      information: 'Aligarh Muslim University School is one of India\'s most prestigious Muslim educational institutions, established in 1875. The school is known for its academic excellence, Islamic values, and comprehensive development of students. Following the CBSE curriculum, AMU School emphasizes both academic achievement and moral character formation. The school has excellent facilities and a strong tradition of producing outstanding students.'
    },
    {
      id: 8,
      name: 'Jamia Millia Islamia School',
      location: 'Delhi',
      established: '1920',
      students: '2,200+',
      rating: 4.3,
      denomination: 'Muslim',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      information: 'Jamia Millia Islamia School Delhi is a renowned Muslim educational institution established in 1920. The school is known for its commitment to academic excellence, Islamic values, and character development. Following the CBSE curriculum, Jamia School provides quality education with emphasis on both traditional Islamic values and modern education. The school has excellent facilities and a strong focus on community service.'
    },
    {
          id: 9,
      name: 'Delhi Public School',
      location: 'Delhi',
      established: '1949',
      students: '5,000+',
      rating: 4.7,
      denomination: 'Hindu',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      information: 'Delhi Public School (DPS) is one of India\'s most prestigious school chains, established in 1949. Known for its excellent academic standards and holistic education approach, DPS offers CBSE curriculum with emphasis on both academics and extracurricular activities. The school has state-of-the-art facilities including well-equipped laboratories, libraries, sports complexes, and modern classrooms.'
    },
    {
      id: 10,
      name: 'The Doon School',
      location: 'Dehradun',
      established: '1935',
      students: '1,000+',
      rating: 4.8,
      denomination: 'Hindu',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      information: 'The Doon School is one of India\'s most elite boarding schools, established in 1935 in Dehradun. Known for its rigorous academic program and emphasis on character development, the school has produced numerous leaders in politics, business, and public service. The Doon School offers a comprehensive education with excellent facilities including spacious dormitories, well-equipped classrooms, extensive sports facilities, and beautiful campus grounds.'
    },
    {
      id: 11,
      name: 'Sri Guru Gobind Singh College',
      location: 'Chandigarh',
      established: '1973',
      students: '1,900+',
      rating: 4.2,
      denomination: 'Sikh',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      information: 'Sri Guru Gobind Singh College Chandigarh is a historic Sikh educational institution established in 1973. The school is known for its rich heritage, academic excellence, and emphasis on Sikh values. Following the CBSE curriculum, the school provides quality education with modern facilities and a strong focus on character development and community service.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const schoolsPerPage = 9;

  // Filter states
  const [locationExpanded, setLocationExpanded] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [monthlyFeesExpanded, setMonthlyFeesExpanded] = useState(false);
  const [classExpanded, setClassExpanded] = useState(false);
  const [boardExpanded, setBoardExpanded] = useState(false);
  const [selectedFees, setSelectedFees] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedBoards, setSelectedBoards] = useState<string[]>([]);
  const [admissionStatusExpanded, setAdmissionStatusExpanded] = useState(false);
  const [ownershipExpanded, setOwnershipExpanded] = useState(false);
  const [schoolTypeExpanded, setSchoolTypeExpanded] = useState(false);
  const [genderExpanded, setGenderExpanded] = useState(false);
  const [selectedAdmissionStatus, setSelectedAdmissionStatus] = useState<string[]>([]);
  const [selectedOwnership, setSelectedOwnership] = useState<string[]>([]);
  const [selectedSchoolType, setSelectedSchoolType] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [denominationExpanded, setDenominationExpanded] = useState(false);
  const [selectedDenominations, setSelectedDenominations] = useState<string[]>([]);
  const [nearMeExpanded, setNearMeExpanded] = useState(false);
  const [nearMeSearch, setNearMeSearch] = useState('');

  // Available locations
  const allLocations = [
    'Malad West', 'Borivali West', 'Andheri East', 'Andheri West', 'Chembur East',
    'Kandivali West', 'Bandra West', 'Fort', 'Powai', 'Thane West', 'Navi Mumbai',
    'Pune', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Ahmedabad',
    'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal',
    'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra',
    'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar',
    'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai',
    'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior',
    'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Kota', 'Guwahati',
    'Chandigarh', 'Solapur', 'Hubli-Dharwad', 'Tiruchirappalli', 'Bareilly',
    'Mysore', 'Tiruppur', 'Gurgaon', 'Aligarh', 'Jalandhar', 'Bhubaneswar',
    'Salem', 'Mira-Bhayandar', 'Warangal', 'Thiruvananthapuram', 'Guntur',
    'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 'Amravati', 'Noida',
    'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad', 'Kochi', 'Nellore',
    'Bhavnagar', 'Dehradun', 'Durgapur', 'Asansol', 'Rourkela', 'Nanded',
    'Kolhapur', 'Ajmer', 'Akola', 'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni',
    'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu', 'Sangli-Miraj & Kupwad',
    'Mangalore', 'Erode', 'Belgaum', 'Ambattur', 'Tirunelveli', 'Malegaon',
    'Gaya', 'Jalgaon', 'Udaipur', 'Maheshtala'
  ];

  // Filter locations based on search
  const filteredLocations = allLocations.filter(location =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  // Handle location selection
  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(loc => loc !== location)
        : [...prev, location]
    );
  };

  // Show more locations functionality
  const [showMoreLocations, setShowMoreLocations] = useState(false);
  const displayedLocations = showMoreLocations ? filteredLocations : filteredLocations.slice(0, 8);

  // Monthly Fees options
  const monthlyFeesOptions = [
    'Under ₹5,000', '₹5,000 - ₹10,000', '₹10,000 - ₹20,000', 
    '₹20,000 - ₹30,000', '₹30,000 - ₹50,000', 'Above ₹50,000'
  ];

  // Class options
  const classOptions = [
    { name: 'Toddler', count: 644 },
    { name: 'Pre Nursery', count: 662 },
    { name: 'Nursery', count: 687 },
    { name: 'LKG', count: 656 },
    { name: 'UKG', count: 687 },
    { name: 'Class 1', count: 653 },
    { name: 'Class 2', count: 653 },
    { name: 'Class 3', count: 650 },
    { name: 'Class 4', count: 648 },
    { name: 'Class 5', count: 645 },
    { name: 'Class 6', count: 640 },
    { name: 'Class 7', count: 638 },
    { name: 'Class 8', count: 635 },
    { name: 'Class 9', count: 630 },
    { name: 'Class 10', count: 625 },
    { name: 'Class 11', count: 620 },
    { name: 'Class 12', count: 615 }
  ];

  // Board options
  const boardOptions = ['CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE', 'NIOS'];

  // Handle selections
  const handleFeesChange = (fee: string) => {
    setSelectedFees(prev => 
      prev.includes(fee) ? prev.filter(f => f !== fee) : [...prev, fee]
    );
  };

  const handleClassChange = (classItem: string) => {
    setSelectedClasses(prev => 
      prev.includes(classItem) ? prev.filter(c => c !== classItem) : [...prev, classItem]
    );
  };

  const handleBoardChange = (board: string) => {
    setSelectedBoards(prev => 
      prev.includes(board) ? prev.filter(b => b !== board) : [...prev, board]
    );
  };

  // Additional filter options
  const admissionStatusOptions = ['Open for 2025-2026', 'Open for 2026-2027'];
  const ownershipOptions = [
    { name: 'Government', count: 1 },
    { name: 'Private', count: 695 }
  ];
  const schoolTypeOptions = [
    { name: 'Day School', count: 688 },
    { name: 'Disable Friendly', count: 0 },
    { name: 'Special School', count: 0 },
    { name: 'Online', count: 0 }
  ];
  const genderOptions = [
    { name: 'Coed', count: 676 },
    { name: 'Girls', count: 16 },
    { name: 'Boys', count: 5 }
  ];

  // Handle additional filter changes
  const handleAdmissionStatusChange = (status: string) => {
    setSelectedAdmissionStatus(prev => 
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const handleOwnershipChange = (ownership: string) => {
    setSelectedOwnership(prev => 
      prev.includes(ownership) ? prev.filter(o => o !== ownership) : [...prev, ownership]
    );
  };

  const handleSchoolTypeChange = (type: string) => {
    setSelectedSchoolType(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(prev => 
      prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
    );
  };

  const handleDenominationChange = (denomination: string) => {
    setSelectedDenominations(prev => 
      prev.includes(denomination) ? prev.filter(d => d !== denomination) : [...prev, denomination]
    );
  };
  
  // Filter schools based on search and denomination
  const filteredSchools = religiousSchools.filter(school =>
    (school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedDenominations.length === 0 || selectedDenominations.includes(school.denomination))
  );
  
  const totalPages = Math.ceil(filteredSchools.length / schoolsPerPage);
  const startIdx = (currentPage - 1) * schoolsPerPage;
  const endIdx = startIdx + schoolsPerPage;
  const currentSchools = filteredSchools.slice(startIdx, endIdx);

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
          className="relative  text-white py-12"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Find the Best Religious Schools</h1>
            <p className="text-lg md:text-xl mb-6">Explore top religious schools across India and choose the right one for your child's spiritual and academic growth</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search religious schools by name or location..."
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
                      {/* Search Box */}
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
                      
                      {/* Use Current Location */}
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
                
                {/* Location Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setLocationExpanded(!locationExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Popular Area</span>
                    {locationExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {locationExpanded && (
                    <div className="mt-1 bg-white">
                      {/* Search Box */}
                      <div className="p-2">
                        <div className="relative">
                          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                          <input
                            type="text"
                            placeholder="Search By popular area name"
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-green-500"
                          />
                        </div>
                      </div>
                      
                      {/* Location List */}
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
                        
                        {/* Show More Button */}
                        {filteredLocations.length > 8 && (
                          <div className="p-2">
                            <button
                              onClick={() => setShowMoreLocations(!showMoreLocations)}
                              className="text-blue-600 text-xs font-medium hover:text-blue-700"
                            >
                              {showMoreLocations ? 'Show Less' : `+ ${filteredLocations.length - 8} More`}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Monthly Fees Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setMonthlyFeesExpanded(!monthlyFeesExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Monthly Fees</span>
                    {monthlyFeesExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {monthlyFeesExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {monthlyFeesOptions.map((fee) => (
                          <div key={fee} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`fee-${fee}`}
                              checked={selectedFees.includes(fee)}
                              onChange={() => handleFeesChange(fee)}
                              className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                            />
                            <label 
                              htmlFor={`fee-${fee}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {fee}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Class Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setClassExpanded(!classExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Class</span>
                    {classExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {classExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {classOptions.map((classItem) => (
                          <div key={classItem.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="checkbox"
                                id={`class-${classItem.name}`}
                                checked={selectedClasses.includes(classItem.name)}
                                onChange={() => handleClassChange(classItem.name)}
                                className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                              />
                              <label 
                                htmlFor={`class-${classItem.name}`}
                                className="text-xs text-gray-600 cursor-pointer"
                              >
                                {classItem.name}
                              </label>
                            </div>
                            <span className="text-xs text-gray-400">({classItem.count})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Board Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setBoardExpanded(!boardExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Board</span>
                    {boardExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {boardExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {boardOptions.map((board) => (
                          <div key={board} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`board-${board}`}
                              checked={selectedBoards.includes(board)}
                              onChange={() => handleBoardChange(board)}
                              className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                            />
                            <label 
                              htmlFor={`board-${board}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {board}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Admission Open Status Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setAdmissionStatusExpanded(!admissionStatusExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Admission Open Status</span>
                    {admissionStatusExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {admissionStatusExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {admissionStatusOptions.map((status) => (
                          <div key={status} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="radio"
                              id={`admission-${status}`}
                              name="admission-status"
                              checked={selectedAdmissionStatus.includes(status)}
                              onChange={() => handleAdmissionStatusChange(status)}
                              className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                            />
                            <label 
                              htmlFor={`admission-${status}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {status}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Ownership Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setOwnershipExpanded(!ownershipExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Ownership</span>
                    {ownershipExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {ownershipExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {ownershipOptions.map((ownership) => (
                          <div key={ownership.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="radio"
                                id={`ownership-${ownership.name}`}
                                name="ownership"
                                checked={selectedOwnership.includes(ownership.name)}
                                onChange={() => handleOwnershipChange(ownership.name)}
                                className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                              />
                              <label 
                                htmlFor={`ownership-${ownership.name}`}
                                className="text-xs text-gray-600 cursor-pointer"
                              >
                                {ownership.name}
                              </label>
                            </div>
                            <span className="text-xs text-gray-400">({ownership.count})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* School Type Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setSchoolTypeExpanded(!schoolTypeExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">School Type</span>
                    {schoolTypeExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {schoolTypeExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {schoolTypeOptions.map((type) => (
                          <div key={type.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="radio"
                                id={`type-${type.name}`}
                                name="school-type"
                                checked={selectedSchoolType.includes(type.name)}
                                onChange={() => handleSchoolTypeChange(type.name)}
                                className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                                disabled={type.count === 0}
                              />
                              <label 
                                htmlFor={`type-${type.name}`}
                                className={`text-xs cursor-pointer ${type.count === 0 ? 'text-gray-300' : 'text-gray-600'}`}
                              >
                                {type.name}
                              </label>
                            </div>
                            <span className="text-xs text-gray-400">({type.count})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Religious Denomination Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setDenominationExpanded(!denominationExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Religious Denomination</span>
                    {denominationExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {denominationExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        <div className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                          <input
                            type="checkbox"
                            id="denomination-hindu"
                            checked={selectedDenominations.includes('Hindu')}
                            onChange={() => handleDenominationChange('Hindu')}
                            className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                          />
                          <label 
                            htmlFor="denomination-hindu"
                            className="text-xs text-gray-600 cursor-pointer flex-1"
                          >
                            Hindu
                          </label>
                        </div>
                        <div className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                          <input
                            type="checkbox"
                            id="denomination-muslim"
                            checked={selectedDenominations.includes('Muslim')}
                            onChange={() => handleDenominationChange('Muslim')}
                            className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                          />
                          <label 
                            htmlFor="denomination-muslim"
                            className="text-xs text-gray-600 cursor-pointer flex-1"
                          >
                            Muslim
                          </label>
                        </div>
                        <div className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                          <input
                            type="checkbox"
                            id="denomination-christian"
                            checked={selectedDenominations.includes('Christian')}
                            onChange={() => handleDenominationChange('Christian')}
                            className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                          />
                          <label 
                            htmlFor="denomination-christian"
                            className="text-xs text-gray-600 cursor-pointer flex-1"
                          >
                            Christian
                          </label>
                        </div>
                        <div className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                          <input
                            type="checkbox"
                            id="denomination-sikh"
                            checked={selectedDenominations.includes('Sikh')}
                            onChange={() => handleDenominationChange('Sikh')}
                            className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                          />
                          <label 
                            htmlFor="denomination-sikh"
                            className="text-xs text-gray-600 cursor-pointer flex-1"
                          >
                            Sikh
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Gender Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setGenderExpanded(!genderExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Gender</span>
                    {genderExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {genderExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {genderOptions.map((gender) => (
                          <div key={gender.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="checkbox"
                                id={`gender-${gender.name}`}
                                checked={selectedGender.includes(gender.name)}
                                onChange={() => handleGenderChange(gender.name)}
                                className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                              />
                              <label 
                                htmlFor={`gender-${gender.name}`}
                                className="text-xs text-gray-600 cursor-pointer"
                              >
                                {gender.name}
                              </label>
                            </div>
                            <span className="text-xs text-gray-400">({gender.count})</span>
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
              {/* Schools Grid */}
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {currentSchools.map(school => (
                <div
                  key={school.id}
                  className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                >
                  {/* Top Rated Badge */}
                  {school.rating >= 4.6 && (
                    <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-green-600 transition">Top Rated</span>
                  )}
                  <div className="h-32 bg-gray-200 relative">
                    <img
                      src={school.image}
                      alt={school.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold mb-2 text-gray-800">{school.name}</h3>
                    
                    {/* Denomination Badge */}
                    <div className="mb-2">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        school.denomination === 'Hindu' ? 'bg-orange-100 text-orange-800' :
                        school.denomination === 'Muslim' ? 'bg-green-100 text-green-800' :
                        school.denomination === 'Christian' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {school.denomination}
                      </span>
                    </div>
                    
                    {/* Location, Rating, Established in one line */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-gray-500" />
                        <span>{school.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="mr-1 text-yellow-400" size={10} />
                        <span>{school.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1 text-gray-500" />
                        <span>Est. {school.established}</span>
                      </div>
                    </div>
                    
                    {/* Information Section */}
                    <div className="mb-3 flex-grow">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {truncateText(school.information)}
                        {school.information.length > 155 && (
                          <button
                            onClick={(e) => handleViewDetails(e, school.id)}
                            onMouseEnter={handlePrefetch}
                            className="text-green-600 text-xs font-medium ml-1 hover:text-green-700 transition inline"
                          >
                            More
                          </button>
                        )}
                      </p>
                    </div>
                    
                    <button
                      onClick={(e) => handleViewDetails(e, school.id)}
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

export default ReligiousSchoolPage;
