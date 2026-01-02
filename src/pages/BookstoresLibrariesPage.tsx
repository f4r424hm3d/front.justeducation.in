import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp, FaBook, FaUniversity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const BookstoresLibrariesPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching bookstore and library details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/bookstores-libraries/${id}`);
  }, [navigate]);

  // Sample bookstore and library data with detailed information
  const bookstoresLibraries = [
    {
      id: 1,
      name: 'Crossword Bookstore',
      type: 'Bookstore',
      location: 'Mumbai',
      established: '1992',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      information: 'Crossword Bookstore is one of India\'s leading bookstore chains, established in 1992. Known for its extensive collection of books across all genres, Crossword offers a welcoming environment for book lovers. The store features comfortable reading areas, coffee shops, and regular author events. With locations across major Indian cities, Crossword has become a cultural hub for literature enthusiasts, students, and families. The bookstore stocks books in multiple languages and offers both physical and online shopping experiences.'
    },
    {
      id: 2,
      name: 'National Library of India',
      type: 'Library',
      location: 'Kolkata',
      established: '1836',
      rating: 4.8,
      image: 'https://t4.ftcdn.net/jpg/06/88/66/31/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg',
      information: 'The National Library of India in Kolkata is the largest library in India by volume and India\'s library of public record. Established in 1836, it houses over 2.2 million books and documents. The library serves as a repository for all published works in India and provides access to rare manuscripts, maps, and historical documents. With its magnificent colonial architecture and vast collection, it attracts researchers, scholars, and students from across the country and internationally.'
    },
    {
      id: 3,
      name: 'Landmark Bookstore',
      type: 'Bookstore',
      location: 'Chennai',
      established: '1987',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      information: 'Landmark Bookstore is a premier bookstore chain in India, established in 1987. Known for its curated collection of books, stationery, and lifestyle products, Landmark creates an immersive shopping experience. The store regularly hosts book launches, author interactions, and literary events. With its modern design and comprehensive collection spanning fiction, non-fiction, academic, and children\'s books, Landmark has become a favorite destination for book lovers across India.'
    },
    {
      id: 4,
      name: 'Delhi Public Library',
      type: 'Library',
      location: 'Delhi',
      established: '1951',
      rating: 4.5,
      image: 'https://t4.ftcdn.net/jpg/06/88/66/31/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg',
      information: 'Delhi Public Library is one of the largest public library systems in India, established in 1951. The library serves as a knowledge hub for Delhi residents, offering free access to books, periodicals, and digital resources. With multiple branches across the city, it provides educational support to students, researchers, and general readers. The library also conducts various educational programs, workshops, and cultural events to promote literacy and learning.'
    },
    {
      id: 5,
      name: 'Oxford Bookstore',
      type: 'Bookstore',
      location: 'Kolkata',
      established: '1919',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      information: 'Oxford Bookstore is one of India\'s oldest and most prestigious bookstores, established in 1919. Located in the heart of Kolkata, it has been a cultural landmark for over a century. The store is known for its extensive collection of books, including rare editions and international publications. Oxford Bookstore also houses the famous Cha Bar, where customers can enjoy tea while reading. The store regularly hosts literary events, book launches, and cultural programs.'
    },
    {
      id: 6,
      name: 'British Council Library',
      type: 'Library',
      location: 'Mumbai',
      established: '1948',
      rating: 4.3,
      image: 'https://t4.ftcdn.net/jpg/06/88/66/31/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg',
      information: 'British Council Library Mumbai is a premier English language learning and cultural center, established in 1948. The library offers an extensive collection of British and international books, digital resources, and multimedia materials. It provides access to online databases, e-books, and academic journals. The library also conducts English language courses, cultural events, and educational programs. With its modern facilities and expert staff, it serves as a bridge between Indian and British cultures.'
    },
    {
      id: 7,
      name: 'Starmark Bookstore',
      type: 'Bookstore',
      location: 'Kolkata',
      established: '1997',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      information: 'Starmark Bookstore is a leading bookstore chain in Eastern India, established in 1997. Known for its comprehensive collection of books, stationery, and lifestyle products, Starmark creates an engaging shopping experience. The store features comfortable reading areas, children\'s sections, and regular events. With its focus on customer service and quality products, Starmark has become a trusted destination for book lovers, students, and families across the region.'
    },
    {
      id: 8,
      name: 'Central Library',
      type: 'Library',
      location: 'Bangalore',
      established: '1915',
      rating: 4.1,
      image: 'https://t4.ftcdn.net/jpg/06/88/66/31/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg',
      information: 'Central Library Bangalore is one of the oldest and most significant libraries in Karnataka, established in 1915. The library houses a vast collection of books, manuscripts, and historical documents. It serves as a research center for scholars, students, and the general public. The library also preserves rare Kannada literature and provides digital access to its collection. With its rich heritage and modern facilities, it continues to be a vital educational resource for the city.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 6;

  // Filter states
  const [locationExpanded, setLocationExpanded] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [typeExpanded, setTypeExpanded] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [membershipExpanded, setMembershipExpanded] = useState(false);
  const [selectedMemberships, setSelectedMemberships] = useState<string[]>([]);
  const [nearMeExpanded, setNearMeExpanded] = useState(false);
  const [nearMeSearch, setNearMeSearch] = useState('');

  // Available locations
  const allLocations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad',
    'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Visakhapatnam',
    'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut',
    'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 'Srinagar', 'Aurangabad',
    'Dhanbad', 'Amritsar', 'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur',
    'Gwalior', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Kota', 'Guwahati',
    'Chandigarh', 'Solapur', 'Hubli-Dharwad', 'Tiruchirappalli', 'Bareilly', 'Mysore',
    'Tiruppur', 'Gurgaon', 'Aligarh', 'Jalandhar', 'Bhubaneswar', 'Salem', 'Mira-Bhayandar',
    'Warangal', 'Thiruvananthapuram', 'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur',
    'Bikaner', 'Amravati', 'Noida', 'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad',
    'Kochi', 'Nellore', 'Bhavnagar', 'Dehradun', 'Durgapur', 'Asansol', 'Rourkela',
    'Nanded', 'Kolhapur', 'Ajmer', 'Akola', 'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni',
    'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu', 'Sangli-Miraj & Kupwad', 'Mangalore',
    'Erode', 'Belgaum', 'Ambattur', 'Tirunelveli', 'Malegaon', 'Gaya', 'Jalgaon',
    'Udaipur', 'Maheshtala'
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

  // Type options
  const typeOptions = [
    { name: 'Bookstore', count: 450 },
    { name: 'Library', count: 320 },
    { name: 'Academic Library', count: 180 },
    { name: 'Public Library', count: 140 },
    { name: 'Special Library', count: 90 }
  ];

  // Services options
  const servicesOptions = [
    'Book Lending', 'Digital Resources', 'Study Spaces', 'Wi-Fi Access',
    'Printing Services', 'Coffee Shop', 'Events & Workshops', 'Online Catalog',
    'Inter-library Loan', 'Reference Services', 'Children\'s Section', 'Academic Support'
  ];

  // Membership options
  const membershipOptions = [
    'Free Membership', 'Paid Membership', 'Student Discount', 'Senior Citizen Discount',
    'Annual Subscription', 'Monthly Subscription', 'Lifetime Membership', 'Corporate Membership'
  ];

  // Handle selections
  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleServicesChange = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleMembershipChange = (membership: string) => {
    setSelectedMemberships(prev => 
      prev.includes(membership) ? prev.filter(m => m !== membership) : [...prev, membership]
    );
  };
  
  // Filter items based on search
  const filteredItems = bookstoresLibraries.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = filteredItems.slice(startIdx, endIdx);

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
            backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Find Bookstores & Libraries</h1>
            <p className="text-lg md:text-xl mb-6">Discover the best bookstores and libraries near you for reading, learning, and research</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search bookstores and libraries by name, location, or type..."
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
                      {/* Search Box */}
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
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
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

                {/* Type Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setTypeExpanded(!typeExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Type</span>
                    {typeExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {typeExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {typeOptions.map((type) => (
                          <div key={type.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="checkbox"
                                id={`type-${type.name}`}
                                checked={selectedTypes.includes(type.name)}
                                onChange={() => handleTypeChange(type.name)}
                                className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
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

                {/* Services Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Services</span>
                    {servicesExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {servicesExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {servicesOptions.map((service) => (
                          <div key={service} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`service-${service}`}
                              checked={selectedServices.includes(service)}
                              onChange={() => handleServicesChange(service)}
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                            />
                            <label 
                              htmlFor={`service-${service}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Membership Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setMembershipExpanded(!membershipExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Membership</span>
                    {membershipExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {membershipExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {membershipOptions.map((membership) => (
                          <div key={membership} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`membership-${membership}`}
                              checked={selectedMemberships.includes(membership)}
                              onChange={() => handleMembershipChange(membership)}
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                            />
                            <label 
                              htmlFor={`membership-${membership}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {membership}
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
              {/* Items Grid */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {currentItems.map(item => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                >
                  {/* Top Rated Badge */}
                  {item.rating >= 4.6 && (
                    <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-blue-600 transition">Top Rated</span>
                  )}
                  
                  {/* Type Badge */}
                  <span className={`absolute top-2 right-2 z-10 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm ${
                    item.type === 'Bookstore' ? 'bg-orange-500' : 'bg-green-500'
                  }`}>
                    {item.type === 'Bookstore' ? <FaBook className="inline mr-1" /> : <FaUniversity className="inline mr-1" />}
                    {item.type}
                  </span>
                  
                  <div className="h-32 bg-gray-200 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold mb-2 text-gray-800">{item.name}</h3>
                    
                    {/* Location, Rating, Established in one line */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-gray-500" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="mr-1 text-yellow-400" size={10} />
                        <span>{item.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1 text-gray-500" />
                        <span>Est. {item.established}</span>
                      </div>
                    </div>
                    
                    {/* Information Section */}
                    <div className="mb-3 flex-grow">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {truncateText(item.information)}
                        {item.information.length > 155 && (
                          <button
                            onClick={(e) => handleViewDetails(e, item.id)}
                            onMouseEnter={handlePrefetch}
                            className="text-blue-600 text-xs font-medium ml-1 hover:text-blue-700 transition inline"
                          >
                            More
                          </button>
                        )}
                      </p>
                    </div>
                    
                    <button
                      onClick={(e) => handleViewDetails(e, item.id)}
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

export default BookstoresLibrariesPage; 