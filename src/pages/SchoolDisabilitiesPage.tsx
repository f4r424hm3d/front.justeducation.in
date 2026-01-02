import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const SchoolDisabilitiesPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching school disabilities details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/school-disabilities/${id}`);
  }, [navigate]);

  // Sample school disabilities data with detailed information
  const schools = [
    {
      id: 1,
      name: 'National Institute for the Mentally Handicapped',
      location: 'Secunderabad',
      established: '1984',
      students: '500+',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      information: 'The National Institute for the Mentally Handicapped (NIMH) is a premier institution dedicated to the education and rehabilitation of children with intellectual disabilities. Established in 1984, NIMH provides comprehensive educational programs, therapeutic interventions, and vocational training. The institute has specialized facilities including sensory rooms, therapy centers, and adaptive learning environments. NIMH offers individualized education plans (IEPs) and employs trained special educators, therapists, and support staff. The institution focuses on developing life skills, social integration, and preparing students for independent living.'
    },
    {
      id: 2,
      name: 'Helen Keller Institute for Deaf and Deafblind',
      location: 'Mumbai',
      established: '1974',
      students: '300+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      information: 'Helen Keller Institute for Deaf and Deafblind is a specialized institution providing education and support for children with hearing and visual impairments. The institute uses innovative teaching methods including sign language, Braille, tactile communication, and assistive technologies. The campus features accessible infrastructure, specialized classrooms, and sensory gardens designed for students with multiple disabilities. The institute offers comprehensive programs from early intervention to vocational training, emphasizing communication skills, mobility training, and social development. Helen Keller Institute has been instrumental in developing inclusive education practices in India.'
    },
    {
      id: 3,
      name: 'Spastics Society of India',
      location: 'Bangalore',
      established: '1972',
      students: '400+',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      information: 'Spastics Society of India in Bangalore is a leading institution for children with cerebral palsy and related neurological conditions. The institution provides comprehensive rehabilitation services including physiotherapy, occupational therapy, speech therapy, and special education. The campus is fully accessible with ramps, wide corridors, and adaptive equipment. The school offers both academic and vocational programs tailored to individual abilities, focusing on motor development, communication skills, and social integration. The institution also provides family support services and community outreach programs.'
    },
    {
      id: 4,
      name: 'Action for Autism',
      location: 'Delhi',
      established: '1991',
      students: '200+',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      information: 'Action for Autism is a specialized institution dedicated to the education and support of children with autism spectrum disorders. The institution provides early intervention programs, special education, and vocational training using evidence-based approaches. The campus features sensory-friendly environments, quiet spaces, and structured learning areas. Action for Autism employs trained professionals including special educators, behavior therapists, and speech-language pathologists. The institution emphasizes communication development, social skills training, and preparing students for mainstream integration where possible.'
    },
    {
      id: 5,
      name: 'National Association for the Blind',
      location: 'Mumbai',
      established: '1952',
      students: '350+',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      information: 'National Association for the Blind (NAB) Mumbai provides comprehensive education and rehabilitation services for children with visual impairments. The institution offers academic programs using Braille, audio materials, and assistive technologies. NAB has specialized facilities including orientation and mobility training areas, computer labs with screen readers, and tactile learning resources. The institution focuses on developing independence, literacy skills, and vocational training. NAB also provides support services for families and advocates for the rights of visually impaired individuals.'
    },
    {
      id: 6,
      name: 'ADAPT (Able Disabled All People Together)',
      location: 'Mumbai',
      established: '1972',
      students: '250+',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      information: 'ADAPT (formerly Spastics Society of India) is a comprehensive institution serving children with cerebral palsy and other physical disabilities. The institution provides integrated services including special education, therapy, and medical care. ADAPT\'s campus is fully accessible with adaptive equipment, therapy pools, and specialized classrooms. The institution offers programs from early intervention to vocational training, emphasizing independence and social inclusion. ADAPT also conducts research, training programs for professionals, and advocacy for disability rights.'
    },
    {
      id: 7,
      name: 'Tamana Special School',
      location: 'Delhi',
      established: '1984',
      students: '180+',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      information: 'Tamana Special School is dedicated to the education and rehabilitation of children with autism and multiple disabilities. The institution provides individualized education programs, behavioral therapy, and life skills training. Tamana\'s campus features sensory integration rooms, therapy centers, and outdoor learning spaces. The school employs a multidisciplinary team including special educators, therapists, and psychologists. Tamana emphasizes early intervention, family support, and preparing students for community integration. The institution also offers vocational training and supported employment programs.'
    },
    {
      id: 8,
      name: 'Vidya Sagar',
      location: 'Chennai',
      established: '1985',
      students: '300+',
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      information: 'Vidya Sagar is a leading institution for children with cerebral palsy and other neurological conditions in Chennai. The institution provides comprehensive rehabilitation services including physiotherapy, occupational therapy, and special education. Vidya Sagar\'s campus is designed for accessibility with ramps, adapted bathrooms, and specialized equipment. The institution offers both residential and day programs, focusing on motor development, communication skills, and social integration. Vidya Sagar also provides family counseling, community outreach, and advocacy for disability rights.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const schoolsPerPage = 6;

  // Filter states
  const [locationExpanded, setLocationExpanded] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [monthlyFeesExpanded, setMonthlyFeesExpanded] = useState(false);
  const [classExpanded, setClassExpanded] = useState(false);
  const [disabilityTypeExpanded, setDisabilityTypeExpanded] = useState(false);
  const [selectedFees, setSelectedFees] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedDisabilityTypes, setSelectedDisabilityTypes] = useState<string[]>([]);
  const [admissionStatusExpanded, setAdmissionStatusExpanded] = useState(false);
  const [ownershipExpanded, setOwnershipExpanded] = useState(false);
  const [schoolTypeExpanded, setSchoolTypeExpanded] = useState(false);
  const [genderExpanded, setGenderExpanded] = useState(false);
  const [selectedAdmissionStatus, setSelectedAdmissionStatus] = useState<string[]>([]);
  const [selectedOwnership, setSelectedOwnership] = useState<string[]>([]);
  const [selectedSchoolType, setSelectedSchoolType] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [nearMeExpanded, setNearMeExpanded] = useState(false);
  const [nearMeSearch, setNearMeSearch] = useState('');

  // Available locations
  const allLocations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Ahmedabad',
    'Pune', 'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal',
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
    { name: 'Early Intervention (0-3 years)', count: 45 },
    { name: 'Pre Primary', count: 52 },
    { name: 'Primary (Class 1-5)', count: 48 },
    { name: 'Middle (Class 6-8)', count: 42 },
    { name: 'Secondary (Class 9-10)', count: 38 },
    { name: 'Senior Secondary (Class 11-12)', count: 35 },
    { name: 'Vocational Training', count: 40 },
    { name: 'Adult Education', count: 25 }
  ];

  // Disability Type options
  const disabilityTypeOptions = [
    { name: 'Intellectual Disability', count: 35 },
    { name: 'Autism Spectrum Disorder', count: 42 },
    { name: 'Cerebral Palsy', count: 38 },
    { name: 'Hearing Impairment', count: 30 },
    { name: 'Visual Impairment', count: 28 },
    { name: 'Multiple Disabilities', count: 25 },
    { name: 'Learning Disabilities', count: 32 },
    { name: 'Physical Disabilities', count: 35 }
  ];

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

  const handleDisabilityTypeChange = (type: string) => {
    setSelectedDisabilityTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  // Additional filter options
  const admissionStatusOptions = ['Open for 2025-2026', 'Open for 2026-2027'];
  const ownershipOptions = [
    { name: 'Government', count: 15 },
    { name: 'Private', count: 85 },
    { name: 'NGO', count: 45 }
  ];
  const schoolTypeOptions = [
    { name: 'Special School', count: 120 },
    { name: 'Inclusive School', count: 35 },
    { name: 'Integrated School', count: 25 },
    { name: 'Resource Center', count: 20 }
  ];
  const genderOptions = [
    { name: 'Coed', count: 140 },
    { name: 'Girls', count: 15 },
    { name: 'Boys', count: 10 }
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
  
  // Filter schools based on search
  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.location.toLowerCase().includes(searchTerm.toLowerCase())
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
          className="relative text-white py-12"
          style={{
            backgroundImage: "url('https://img.freepik.com/premium-photo/inclusive-society-where-people-all-abilities-participate-equally_1298745-18127.jpg?semt=ais_hybrid&w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Special Schools for Children with Disabilities</h1>
            <p className="text-lg md:text-xl mb-6">Find specialized educational institutions that provide inclusive and supportive learning environments</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search special schools by name or location..."
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

                {/* Disability Type Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setDisabilityTypeExpanded(!disabilityTypeExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Disability Type</span>
                    {disabilityTypeExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {disabilityTypeExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {disabilityTypeOptions.map((type) => (
                          <div key={type.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="checkbox"
                                id={`disability-${type.name}`}
                                checked={selectedDisabilityTypes.includes(type.name)}
                                onChange={() => handleDisabilityTypeChange(type.name)}
                                className="mr-2 text-green-600 focus:ring-green-500 scale-75"
                              />
                              <label 
                                htmlFor={`disability-${type.name}`}
                                className="text-xs text-gray-600 cursor-pointer"
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
                              />
                              <label 
                                htmlFor={`type-${type.name}`}
                                className="text-xs text-gray-600 cursor-pointer"
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

export default SchoolDisabilitiesPage; 