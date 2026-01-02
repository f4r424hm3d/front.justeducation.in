import type React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TopRanked from '../components/sections/TopRanked';
import Categories from '../components/sections/Categories';
import PharmaceuticalSection from '../components/sections/PharmaceuticalSection';
import Colleges from '../components/sections/Colleges';
import CitiesSection from '../components/sections/CitiesSection';
import NationalImportance from '../components/sections/NationalImportance';
import PopularCities from '../components/sections/PopularCities';

// Static data moved outside component to prevent recreation on each render
const slides = [
  {
    title: "Experience Trust and Quality",
    subtitle: "Together with our Brand Partners",
    description: "Discover top educational institutions across India with our comprehensive platform",
    image: "https://static.independent.co.uk/2025/03/04/14/03/iStock-2054112501.jpeg"
  },
  {
    title: "Building Tomorrow's Innovators",
    subtitle: "Comprehensive Educational Solutions",
    description: "From primary education to professional training, we've got you covered",
    image: "https://www.afslaw.com/sites/default/files/2025-02/NEW_YORK.jpg"
  }
];

// const popularColleges = [
//   { id: "iit-bombay", name: "IIT Bombay" },
//   { id: "ibi", name: "IBI" },
//   { id: "iit-bhu", name: "IIT BHU" },
//   { id: "iit-indore", name: "IIT Indore" },
//   { id: "iit-kanpur", name: "IIT Kanpur" },
// ];

const topStates = [
  { id: "maharashtra", name: "Maharashtra" },
  { id: "uttar-pradesh", name: "Uttar Pradesh" },
  { id: "delhi", name: "Delhi" },
];

const topCities = [
  { id: "mumbai", name: "Mumbai" },
  { id: "bangalore", name: "Bangalore" },
  { id: "mirzapur", name: "Mirzapur" },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Utility function to scroll to top and navigate
  const scrollToTopAndNavigate = useCallback((path: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  }, [navigate]);

  // Function to handle college click and navigate to details page
  const handleCollegeClick = (collegeId: string) => {
    navigate(`/university/${collegeId}`);
    setShowSearchSuggestions(false);
  };

  // Function to handle location click (state or city)
  const handleLocationClick = (locationId: string) => {
    navigate(`/city/${locationId}`);
    setShowLocationDropdown(false);
  };

  // Function to handle category click
  const handleCategoryClick = (category: string) => {
    setSearchInputValue(category);
    setSelectedCategory(category);
    setShowSearchSuggestions(false);
    // You can add navigation logic here based on the category
    console.log(`Selected category: ${category}`);
  };

  // Function to clear search
  const clearSearch = () => {
    setSearchInputValue('');
    setSelectedCategory('');
    setShowSearchSuggestions(false);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  const toggleSearchSuggestions = () => {
    setShowSearchSuggestions(!showSearchSuggestions);
    setSearchInputValue(''); // Clear search input when toggling
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInputValue(value);
    
    // Clear selected category when user starts typing
    if (value !== selectedCategory) {
      setSelectedCategory('');
    }
    
    // Only show suggestions when input is empty (for categories)
    if (value.trim() === '') {
      setShowSearchSuggestions(true);
    } else {
      setShowSearchSuggestions(false);
    }
  };

  const toggleLocationDropdown = () => {
    setShowLocationDropdown(!showLocationDropdown);
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
        setSearchInputValue(''); // Clear search input when clicking outside
      }
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigation handler functions
  const handleStreamClick = (streamId: string) => scrollToTopAndNavigate(`/stream/${streamId}`);
  const handleUniversityClick = (universityId: string) => scrollToTopAndNavigate(`/university/${universityId}`);
  const handleCollegeItemClick = (collegeId: string) => scrollToTopAndNavigate(`/college/${collegeId}`);
  const handleSchoolClick = (schoolId: string) => scrollToTopAndNavigate(`/school/${schoolId}`);
  const handleCoachingClick = (coachingId: string) => scrollToTopAndNavigate(`/coaching/${coachingId}`);
  const handleVocationalClick = (vocationalId: string) => scrollToTopAndNavigate(`/vocational/${vocationalId}`);
  const handleITIClick = (itiId: string) => scrollToTopAndNavigate(`/iti/${itiId}`);

  return (
    <MainLayout>
      {/* Hero Slider Section */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-[400px]">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="relative w-full h-full flex items-center" style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center relative">
                  <div className="w-full md:w-1/2 text-white p-6 md:pr-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-lg md:text-xl text-blue-100 mb-3">{slide.subtitle}</p>
                    <p className="mb-6 text-white/80 max-w-md">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
          >
            <FaChevronRight />
          </button>
          
          {/* Slider Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-110" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">
            Search across <span className="text-blue-900">JUST</span><span className="text-orange-500">EDUCATION</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl relative">
            {/* Location Input */}
            <div ref={locationRef} className="relative">
              <div 
                className="flex items-center w-full md:w-[300px] px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:border-gray-400 transition-colors"
                onClick={toggleLocationDropdown}
              >
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="PUNE"
                  className="w-full outline-none focus:outline-none focus:ring-0 text-gray-800 cursor-pointer"
                  readOnly
                />
              </div>
              
              {/* Location Dropdown */}
              {showLocationDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-20 w-full md:w-[300px]">
                  <div className="p-4">
                    {/* Top States */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Top States</h3>
                      <ul className="space-y-2">
                        {topStates.map((state) => (
                          <li 
                            key={state.id} 
                            className="cursor-pointer hover:text-blue-600 transition-colors text-sm py-1 px-2 hover:bg-blue-50 rounded"
                            onClick={() => handleLocationClick(state.id)}
                          >
                            {state.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Top Cities */}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Top Cities</h3>
                      <ul className="space-y-2">
                        {topCities.map((city) => (
                          <li 
                            key={city.id} 
                            className="cursor-pointer hover:text-blue-600 transition-colors text-sm py-1 px-2 hover:bg-blue-50 rounded"
                            onClick={() => handleLocationClick(city.id)}
                          >
                            {city.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="flex flex-1 items-center bg-white border border-gray-300 rounded-lg shadow-sm">
              <input
                type="text"
                placeholder="Search for Education Services"
                value={searchInputValue}
                className="flex-1 px-4 py-3 focus:outline-none focus:ring-0 outline-none rounded-l-lg"
                onClick={() => setShowSearchSuggestions(true)}
                onChange={handleSearchInputChange}
              />
              <div className="flex items-center pr-2">
                {selectedCategory && (
                  <button 
                    onClick={clearSearch}
                    className="p-1 mx-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                    title="Clear search"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button className="p-2 mx-1 text-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="p-2 bg-orange-500 text-white rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Search Suggestions Dropdown */}
            {showSearchSuggestions && !selectedCategory && searchInputValue.trim() === '' && (
              <div ref={searchRef} className="absolute top-full left-0 right-0 md:left-[300px] mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                <div className="p-4">
                  <div className="space-y-3">
                   {/* Schools */}
                   <div 
                      className="flex items-center hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleCategoryClick('Schools')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-800">Schools</div>
                        <div className="text-sm text-gray-500">Category</div>
                      </div>
                    </div>

                     {/* Universities */}
                   <div 
                      className="flex items-center hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleCategoryClick('Universities')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-800">Universities</div>
                        <div className="text-sm text-gray-500">Category</div>
                      </div>
                    </div>

                    {/* Education Consultants */}
                    <div 
                      className="flex items-center hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleCategoryClick('Education Consultants')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-800">Education Consultants</div>
                        <div className="text-sm text-gray-500">Category</div>
                      </div>
                    </div>
                    
                    {/* Educational Institutions */}
                    <div 
                      className="flex items-center hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleCategoryClick('Educational Institutions')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-800">Educational Institutions</div>
                        <div className="text-sm text-gray-500">Category</div>
                      </div>
                    </div>

                     {/* Books & Libraries  */}
                     <div 
                      className="flex items-center hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleCategoryClick('Bookstore & Libraries')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-800">Bookstore & Libraries</div>
                        <div className="text-sm text-gray-500">Category</div>
                      </div>
                    </div>
                    
                    {/* Educational Charities */}
                    <div 
                      className="flex items-center hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleCategoryClick('Mbbs Abroad Consultants')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-800">Mbbs Abroad Consultants</div>
                        <div className="text-sm text-gray-500">Category</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Explore Streams & Degree Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Explore <span className="text-blue-700">Streams</span></h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {/* Engineering */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('engineering')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://cdn-icons-png.freepik.com/256/11532/11532633.png?semt=ais_hybrid" alt="Engineering" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Engineering</h3>
                <p className="text-xs md:text-sm text-gray-500">357 Colleges</p>
              </div>
            </div>

            {/* Management */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('management')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://img.freepik.com/free-vector/work-chat-concept-illustration_114360-1229.jpg?semt=ais_hybrid&w=740" alt="Management" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Management</h3>
                <p className="text-xs md:text-sm text-gray-500">381 Colleges</p>
              </div>
            </div>

            {/* Medical */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('medical')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/021/193/230/small_2x/document-medical-icon-medical-assets-3d-rendering-png.png" alt="Medical" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Medical</h3>
                <p className="text-xs md:text-sm text-gray-500">95 Colleges</p>
              </div>
            </div>

            {/* Science */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('science')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://cdn-icons-png.flaticon.com/512/12236/12236788.png" alt="Science" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Science</h3>
                <p className="text-xs md:text-sm text-gray-500">316 Colleges</p>
              </div>
            </div>

            {/* Law */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('law')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://static.vecteezy.com/system/resources/previews/002/363/154/non_2x/law-icon-free-vector.jpg" alt="Law" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Law</h3>
                <p className="text-xs md:text-sm text-gray-500">61 Colleges</p>
              </div>
            </div>

            {/* Pharmacy */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('pharmacy')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://thumbs.dreamstime.com/b/medicines-paper-bag-pharmacy-online-sales-concept-delivery-buying-medicines-pharmacy-medicines-paper-bag-pharmacy-online-330409019.jpg" alt="Pharmacy" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Pharmacy</h3>
                <p className="text-xs md:text-sm text-gray-500">76 Colleges</p>
              </div>
            </div>

            {/* Computer Application */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('computer-application')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://img.freepik.com/free-vector/professional-programmer-engineer-writing-code_3446-693.jpg" alt="Computer Application" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Computer Application</h3>
                <p className="text-xs md:text-sm text-gray-500">201 Colleges</p>
              </div>
            </div>

            {/* Arts */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('arts')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://cdn-icons-png.flaticon.com/512/4807/4807479.png" alt="Arts" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Arts</h3>
                <p className="text-xs md:text-sm text-gray-500">110 Colleges</p>
              </div>
            </div>

            {/* Architecture */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('architecture')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://png.pngtree.com/png-vector/20191031/ourmid/pngtree-architecture-icon-for-your-project-png-image_1922380.jpg" alt="Architecture" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Architecture</h3>
                <p className="text-xs md:text-sm text-gray-500">77 Colleges</p>
              </div>
            </div>

            {/* Design */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('design')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-training-course-online-computer-chat-flat-color-icon-vector-png-image_2007114.jpg" alt="Design" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Design</h3>
                <p className="text-xs md:text-sm text-gray-500">36 Colleges</p>
              </div>
            </div>

            {/* Commerce */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('commerce')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://skydo-assets.s3.ap-south-1.amazonaws.com/large_How_can_the_right_chartered_accountant_help_your_tech_export_business_Th_6211631140.jpg" alt="Commerce" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Commerce</h3>
                <p className="text-xs md:text-sm text-gray-500">115 Colleges</p>
              </div>
            </div>

            {/* Dental */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('dental')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://manyadental.in/images/dental-implants-banner-teeth-img.png" alt="Dental" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Dental</h3>
                <p className="text-xs md:text-sm text-gray-500">9 Colleges</p>
              </div>
            </div>

            {/* Agriculture */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('agriculture')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://thumbs.dreamstime.com/b/agriculture-logo-vector-drawing-represents-design-95142925.jpg" alt="Agriculture" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Agriculture</h3>
                <p className="text-xs md:text-sm text-gray-500">7 Colleges</p>
              </div>
            </div>
          
            {/* Hotel Management */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('hotel-management')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://png.pngtree.com/png-vector/20221201/ourmid/pngtree-red-flat-icon-for-hotel-management-services-and-tourism-business-vector-png-image_42968872.jpg" alt="Hotel Management" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Hotel Management</h3>
                <p className="text-xs md:text-sm text-gray-500">82 Colleges</p>
              </div>
            </div>

            {/* Mass Communication */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('mass-communication')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://st4.depositphotos.com/7877830/25336/v/1600/depositphotos_253368830-stock-illustration-vector-illustration-mass-media-concept.jpg" alt="Mass Communication" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Mass Communication</h3>
                <p className="text-xs md:text-sm text-gray-500">56 Colleges</p>
              </div>
            </div>

            {/* Animation */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('animation')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://static.vecteezy.com/system/resources/previews/022/661/383/non_2x/video-editing-icon-with-glyph-style-and-black-color-on-isolated-background-vector.jpg" alt="Animation" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Animation</h3>
                <p className="text-xs md:text-sm text-gray-500">43 Colleges</p>
              </div>
            </div>

            {/* Aviation */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('aviation')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://c8.alamy.com/comp/2GP2X4M/aviation-academy-vector-illustration-design-2GP2X4M.jpg" alt="Aviation" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Aviation</h3>
                <p className="text-xs md:text-sm text-gray-500">29 Colleges</p>
              </div>
            </div>

            {/* Fashion Design */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('fashion-design')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg" alt="Fashion Design" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Fashion Design</h3>
                <p className="text-xs md:text-sm text-gray-500">64 Colleges</p>
              </div>
            </div>

            {/* Nursing */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('nursing')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://static.vecteezy.com/system/resources/previews/045/717/770/non_2x/illustration-of-medical-nurse-logo-icon-free-vector.jpg" alt="Nursing" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">Nursing</h3>
                <p className="text-xs md:text-sm text-gray-500">72 Colleges</p>
              </div>
            </div>

            {/* ITI */}
            <div 
              className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleStreamClick('iti')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
                <img src="https://i.pinimg.com/474x/5a/b0/c3/5ab0c34890c7e81212112e0018859672.jpg" alt="ITI" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm md:text-base truncate">ITI</h3>
                <p className="text-xs md:text-sm text-gray-500">118 Colleges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Higher Education Institutions Section */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Higher Education Institutions as per AISHE</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* University */}
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#30bfff] p-3 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-[18px] font-semibold uppercase">UNIVERSITY</h3>
                    <p className="text-[18px] font-bold">1,077</p>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleUniversityClick('delhi-university')}>
                    <span className="text-sm">Delhi University</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">54</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleUniversityClick('jawaharlal-nehru-university')}>
                    <span className="text-sm">Jawaharlal Nehru University</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">18</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleUniversityClick('banaras-hindu-university')}>
                    <span className="text-sm">Banaras Hindu University</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">31</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleUniversityClick('iit-mumbai')}>
                    <span className="text-sm">IIT Mumbai</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">08</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleUniversityClick('jamia-millia-islamia')}>
                    <span className="text-sm">Jamia Millia Islamia</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleUniversityClick('aligarh-muslim-university')}>
                    <span className="text-sm">Aligarh Muslim University</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">15</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleUniversityClick('punjab-university')}>
                    <span className="text-sm">Punjab University</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">04</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Standalone */}
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#30bfff] p-3 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-[18px] font-semibold uppercase">COLLEGES</h3>
                    <p className="text-[18px] font-bold">1,004</p>
                  </div>
                  {/* add this icon in here for university */}
                </div>
              </div>
              <div className="bg-white">
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCollegeItemClick('national-institute-of-design')}>
                    <span className="text-sm">National Institute of Design</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">28</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCollegeItemClick('film-and-television-institute')}>
                    <span className="text-sm">Film and Television Institute</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">16</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCollegeItemClick('aiims-delhi')}>
                    <span className="text-sm">AIIMS Delhi</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">24</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCollegeItemClick('national-law-school')}>
                    <span className="text-sm">National Law School</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">19</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCollegeItemClick('iim-ahmedabad')}>
                    <span className="text-sm">IIM Ahmedabad</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCollegeItemClick('nift-mumbai')}>
                    <span className="text-sm">NIFT Mumbai</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">21</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCollegeItemClick('nid-ahmedabad')}>
                    <span className="text-sm">NID Ahmedabad</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">22</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schools */}
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#30bfff] p-3 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-[18px] font-semibold uppercase">SCHOOLS</h3>
                    <p className="text-[18px] font-bold">1,324</p>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleSchoolClick('st-stephens-college')}>
                    <span className="text-sm">St. Stephen's School</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">32</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleSchoolClick('lady-shri-ram-college')}>
                    <span className="text-sm">Lady Shri Ram School</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">29</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleSchoolClick('loyola-college-chennai')}>
                    <span className="text-sm">Loyola School Chennai</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">17</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleSchoolClick('christ-university')}>
                    <span className="text-sm">Christ School</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">26</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleSchoolClick('srcc-delhi')}>
                    <span className="text-sm">SRCC School</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">14</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleSchoolClick('xaviers-college-mumbai')}>
                    <span className="text-sm">Xavier's School Mumbai</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">19</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleSchoolClick('hindu-college-delhi')}>
                    <span className="text-sm">Hindustan School Delhi</span>
                    <span className="bg-[#30bfff] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Type Categories Section */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Coaching */}
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#ff9642] p-3 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-[18px] font-semibold uppercase">COACHING</h3>
                    <p className="text-[18px] font-bold">1,074</p>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCoachingClick('allen-career-institute')}>
                    <span className="text-sm">Allen Career Institute</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">54</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCoachingClick('fiitjee')}>
                    <span className="text-sm">FIITJEE</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">18</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCoachingClick('aakash-institute')}>
                    <span className="text-sm">Aakash Institute</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">31</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCoachingClick('resonance')}>
                    <span className="text-sm">Resonance</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">08</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCoachingClick('bansal-classes')}>
                    <span className="text-sm">Bansal Classes</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCoachingClick('career-point')}>
                    <span className="text-sm">Career Point</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">15</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleCoachingClick('time-institute')}>
                    <span className="text-sm">TIME Institute</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">04</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vocational */}
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#ff9642] p-3 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-[18px] font-semibold uppercase">VOCATIONAL</h3>
                    <p className="text-[18px] font-bold">1,124</p>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleVocationalClick('atdc-fashion-design')}>
                    <span className="text-sm">ATDC Fashion Design</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">28</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleVocationalClick('vlcc-institute')}>
                    <span className="text-sm">VLCC Institute</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">16</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleVocationalClick('arena-animation')}>
                    <span className="text-sm">Arena Animation</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">24</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleVocationalClick('maac')}>
                    <span className="text-sm">MAAC</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">19</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleVocationalClick('frankfinn-institute')}>
                    <span className="text-sm">Frankfinn Institute</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleVocationalClick('ica-culinary-academy')}>
                    <span className="text-sm">ICA Culinary Academy</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">21</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleVocationalClick('cedp-skill-institute')}>
                    <span className="text-sm">CEDP Skill Institute</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">22</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ITI */}
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#ff9642] p-3 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-[18px] font-semibold uppercase">ITI INST</h3>
                    <p className="text-[18px] font-bold">1,024</p>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleITIClick('govt-iti-mumbai')}>
                    <span className="text-sm">Govt. ITI Mumbai</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">32</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleITIClick('govt-iti-delhi')}>
                    <span className="text-sm">Govt. ITI Delhi</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">29</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleITIClick('govt-iti-pune')}>
                    <span className="text-sm">Govt. ITI Pune</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">17</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleITIClick('govt-iti-chennai')}>
                    <span className="text-sm">Govt. ITI Chennai</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">26</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleITIClick('govt-iti-bangalore')}>
                    <span className="text-sm">Govt. ITI Bangalore</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">14</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleITIClick('govt-iti-hyderabad')}>
                    <span className="text-sm">Govt. ITI Hyderabad</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">19</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 text-gray-800 cursor-pointer hover:bg-gray-50" onClick={() => handleITIClick('govt-iti-kolkata')}>
                    <span className="text-sm">Govt. ITI Kolkata</span>
                    <span className="bg-[#ff9642] text-white text-xs px-2.5 py-1 rounded-full shadow-sm font-medium">05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ranked Section */}
      <TopRanked />

      {/* Categories Section */}
      <Categories />

      {/* Pharmaceutical Section */}
      <PharmaceuticalSection />

      {/* Colleges Section last add by anup */}
      <Colleges />

      {/* Cities Section */}
      <CitiesSection />

      {/* National Importance Section */}
      <NationalImportance />

      {/* Popular Cities Section */}
      <PopularCities />
    </MainLayout>
  );
};

export default HomePage;
