import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import LeadsForm from '../components/LeadsForm';
import { FaStar, FaMapMarkerAlt, FaSchool, FaCalendarAlt, FaEye, FaCheck, FaPhone, FaWhatsapp, FaPlus, FaMinus, FaClock, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Sample data for each filter type (copied from LeadFilterPage)
const filterData = {
  School: [
    { name: "Delhi Public School", location: "Delhi", rating: "4.5/5" },
    { name: "Ryan International", location: "Mumbai", rating: "4.2/5" },
    { name: "St. Xavier's High School", location: "Kolkata", rating: "4.7/5" },
  ],
  Category: [
    { type: "Primary School", ageGroup: "5-10 years", count: 120 },
    { type: "Secondary School", ageGroup: "11-15 years", count: 95 },
    { type: "Higher Secondary", ageGroup: "16-18 years", count: 78 },
  ],
  Fee: [
    { range: "Below ₹50,000/year", schools: 45, popularity: "High" },
    { range: "₹50,000 - ₹1,00,000/year", schools: 62, popularity: "Medium" },
    { range: "Above ₹1,00,000/year", schools: 33, popularity: "Low" },
  ],
  Gender: [
    { type: "Co-ed", percentage: "72%", count: 156 },
    { type: "Boys Only", percentage: "15%", count: 32 },
    { type: "Girls Only", percentage: "13%", count: 28 },
  ],
  Affilation: [
    { board: "CBSE", schools: 89, rating: "Most Popular" },
    { board: "ICSE", schools: 42, rating: "High Standard" },
    { board: "State Board", schools: 53, rating: "Locally Focused" },
  ],
  Ownership: [
    { type: "Private", count: 134, features: "Better Infrastructure" },
    { type: "Government", count: 78, features: "Affordable Fees" },
    { type: "Trust", count: 24, features: "Focus on Values" },
  ],
  "Collage Type": [
    { type: "Engineering", courses: 24, placement: "85%" },
    { type: "Medical", courses: 12, placement: "92%" },
    { type: "Liberal Arts", courses: 18, placement: "76%" },
  ],
  Admission: [
    { process: "Entrance Exam", schools: 85, difficulty: "High" },
    { process: "Interview", schools: 62, difficulty: "Medium" },
    { process: "Direct Admission", schools: 69, difficulty: "Low" },
  ],
  Scholarship: [
    { type: "Merit Based", average: "₹50,000", schools: 96 },
    { type: "Need Based", average: "₹35,000", schools: 82 },
    { type: "Sports", average: "₹65,000", schools: 45 },
  ],
  Activities: [
    { name: "Music", schools: 125, popularity: "Very High" },
    { name: "Dance", schools: 118, popularity: "High" },
    { name: "Debate", schools: 92, popularity: "Medium" },
  ],
  Sports: [
    { name: "Cricket", schools: 142, facilities: "Excellent" },
    { name: "Football", schools: 128, facilities: "Good" },
    { name: "Basketball", schools: 96, facilities: "Average" },
  ],
};

// Image gallery data
const galleryImages = [
  {
    id: 1,
    src: "https://www.univariety.com/blog/wp-content/uploads/2020/08/Blog-banner-image-1.jpg",
    alt: "Campus"
  },
  {
    id: 2,
    src: "https://www.theindianwire.com/wp-content/uploads/2021/05/study-on-college-students.jpg",
    alt: "Classroom"
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/171271182/photo/delhi-university-building-and-corridor.jpg?s=612x612&w=0&k=20&c=3vcPST9RRxk71Xbbli8S7v4ytRRZ0yBiVh5eRPItHS0=",
    alt: "Laboratory"
  },
  {
    id: 4,
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRAYdVDr_AmvZeTnQTug-t4US2o-KW1vadydXEB4YwsrIFSc3AgkKz_rxWNoCFAGNM_CqDPFa1GywjxwaPTNqbhB9FpU4ptspAlrfsQfknZBexxzkVE_OAWCjfAttT0QZRXQ8YFyxB6gSI/s1600/ICBL.jpg",
    alt: "Sports"
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-H0PY2hiURdDK9kvJedn-S8zHOwpsnmkHw&s",
    alt: "Campus 2"
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/3b/2b/53/3b2b537a7b1ad5a2cbb5740ea11dd111.jpg",
    alt: "Classroom 2"
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/32/ed/43/32ed432a4ca879d121975d2465a01ac3.jpg",
    alt: "Laboratory 2"
  },
  {
    id: 8,
    src: "https://st2.depositphotos.com/5653638/42133/i/450/depositphotos_421333106-stock-photo-young-asian-indian-college-students.jpg",
    alt: "Sports 2"
  }
];

const LeadsPage: React.FC = () => {
  const [showHours, setShowHours] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  
  // State to track selected filter (null means no filter selected)
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
    // Prevent scrolling when viewer is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageViewer = () => {
    setViewerOpen(false);
    // Restore scrolling
    document.body.style.overflow = '';
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!viewerOpen) return;
      
      if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevImage();
      } else if (e.key === 'Escape') {
        closeImageViewer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [viewerOpen]);

  // Toggle filter details display
  const toggleFilterDetails = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null); // Close the section if it's already open
    } else {
      setSelectedFilter(filter); // Open the new filter
    }
  };

  return (
    <MainLayout>
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Admission Alert Banner */}
          <div className="relative rounded-lg overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-green-100 to-green-50 p-25 text-center">
              <span className="inline-flex items-center font-medium" style={{ color: 'rgb(22, 101, 52)' }}>
                <span className="h-3 w-3 rounded-full mr-2 animate-pulse" style={{ backgroundColor: 'rgb(22, 101, 52)' }}></span>
                Admisson Ongoings
              </span>
            </div>
          </div>
          {/* School Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* School Logo */}
                <div className="md:w-48 flex-shrink-0">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block rounded-full bg-pink-600 p-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-pink-600">Britannica</h3>
                      <p className="text-xs text-gray-500">OVERSEAS EDUCATION</p>
                    </div>
                  </div>
                </div>
                
                {/* School Info */}
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Britannica School - Admission 2025, Courses, Fees,Ranking, Placements
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-md">
                      <span className="text-yellow-600 font-semibold mr-1">4.2</span>
                      <FaStar className="text-yellow-500" />
                      <span className="text-gray-600 text-sm ml-2">(242 Reviews)</span>
                    </div>
                    
                    <div className="bg-gray-100 px-3 py-1 rounded-md flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">Popular</span>
                    </div>
                    
                    <div className="bg-blue-100 px-3 py-1 rounded-md flex items-center">
                      <svg className="h-4 w-4 mr-1 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-700 font-medium">Addmission Partner</span>
                    </div>
                    
                    <div className="bg-green-100 px-3 py-1 rounded-md flex items-center">
                      <FaCheck className="text-green-600 mr-1" />
                      <span className="text-green-700 font-medium">Verified By School</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Our institution is dedicated to academic excellence and holistic growth. With modern
                    infrastructure, expert faculty, and strong industry ties, we prepare students to become
                    skilled leaders. A vibrant campus and research focus ensure our graduates are ready for a successful future.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-gray-500 mt-1 mr-2 flex-shrink-0" />
                        <div className="text-sm">
                          <p className="text-gray-700">B-16 Ground Floor, B Block, Pocket C, Mayfield Garden, Sector 50, Gurugram, Haryana 122002</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <FaSchool className="text-gray-500 mr-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">CBSE, IB Board</p>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="text-gray-700 text-sm">Pre Nursery 12 Class</p>
                      </div>
                      
                      <div className="flex items-center">
                        <FaCalendarAlt className="text-gray-500 mr-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">Estd, 2025</p>
                      </div>
                      
                      <div className="flex items-center">
                        <FaEye className="text-gray-500 mr-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">5555 Views</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* School Tags */}
            <div className="bg-gray-50 px-6 py-4 border-t flex flex-wrap gap-2">
              <button onClick={() => toggleFilterDetails('School')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'School' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>School</button>
              <button onClick={() => toggleFilterDetails('Category')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Category' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Category</button>
              <button onClick={() => toggleFilterDetails('Fee')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Fee' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Fee</button>
              <button onClick={() => toggleFilterDetails('Gender')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Gender' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Gender</button>
              <button onClick={() => toggleFilterDetails('Affilation')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Affilation' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Affilation</button>
              <button onClick={() => toggleFilterDetails('Ownership')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Ownership' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Ownership</button>
              <button onClick={() => toggleFilterDetails('Collage Type')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Collage Type' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Collage Type</button>
              <button onClick={() => toggleFilterDetails('Admission')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Admission' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Admission</button>
              <button onClick={() => toggleFilterDetails('Scholarship')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Scholarship' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Scholarship</button>
              <button onClick={() => toggleFilterDetails('Activities')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Activities' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Activities</button>
              <button onClick={() => toggleFilterDetails('Sports')} className={`bg-white px-4 py-2 rounded border text-sm ${selectedFilter === 'Sports' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700'}`}>Sports</button>
            </div>
          </div>
          
          {/* Filter details section - shown only when a filter is selected */}
          {selectedFilter && (
            <div className="bg-white rounded-lg shadow-md p-6 mt-4 mb-8 animate-fadeIn">
              <h2 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">
                {selectedFilter} Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterData[selectedFilter as keyof typeof filterData].map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    {Object.entries(item).map(([key, value]) => (
                      <div key={key} className="mb-1">
                        <span className="font-medium text-gray-700">{key}: </span>
                        <span className="text-blue-600">{value as string}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Form Column */}
            <div className="md:col-span-8">
              <LeadsForm />
              
              {/* Images Gallery */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  Gallery
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {galleryImages.slice(0, 4).map((image, index) => (
                  <img 
                      key={image.id}
                      src={image.src} 
                      alt={image.alt} 
                    className="rounded-md w-full h-28 object-cover cursor-pointer"
                      onClick={() => openImageViewer(index)}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-y-6 gap-x-4 mt-3"></div>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {galleryImages.slice(4, 8).map((image, index) => (
                  <img 
                      key={image.id}
                      src={image.src} 
                      alt={image.alt} 
                    className="rounded-md w-full h-28 object-cover cursor-pointer"
                      onClick={() => openImageViewer(index + 4)}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Information Sidebar */}
            <div className="md:col-span-4 space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Contact Now</h3>
                <div className="flex justify-between mb-3">
                  <button className="bg-white text-blue-900 px-4 py-2 rounded font-medium text-sm flex-1 mr-2 hover:bg-gray-100 transition flex items-center justify-center">
                    <FaPhone className="mr-2" size={14} />
                    Call Now
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded font-medium text-sm flex-1 hover:bg-gray-600 transition flex items-center justify-center">
                    <FaWhatsapp className="mr-2" size={14} />
                    WhatsApp
                  </button>
                </div>
                <button className="w-full bg-orange-400 text-white px-4 py-3 rounded font-medium hover:bg-orange-600 transition">
                  Enquire Now
                </button>
                <p className="text-sm mt-3 text-center text-white">
                  <span className="bg-blue-950 px-2 py-1 rounded">12 people</span> recently enquired
                </p>
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Why Choose Us
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Expert guidance for admission process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Partnerships with top educational institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Transparent admission counselling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Scholarship assistance available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Study abroad opportunities</span>
                  </li>
                </ul>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contact Information
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-900 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700">Address:</p>
                      <p>B-16 Ground Floor, Mayfield Garden, Sector 50, Gurugram, Haryana 122002</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-blue-900 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700">Phone:</p>
                      <p>+91 9350******</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-700">Email:</p>
                      <p>info@britannica-school.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <FaClock className="h-5 w-5 mr-2 text-orange-500" /> Business Hours
                  </h3>
                  <button
                    className="text-gray-500 focus:outline-none ml-2"
                    onClick={() => setShowHours(v => !v)}
                    aria-label={showHours ? 'Collapse business hours' : 'Expand business hours'}
                  >
                    {showHours ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                <div className="mb-2 flex items-center text-green-600 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Open 24 hours
                </div>
                {showHours && (
                  <ul className="space-y-1 text-gray-600 animate-fade-in">
                    <li className="flex justify-between"><span>Monday</span><span>Open 24 Hrs</span></li>
                    <li className="flex justify-between"><span>Tuesday</span><span>Open 24 Hrs</span></li>
                    <li className="flex justify-between"><span>Wednesday</span><span>Open 24 Hrs</span></li>
                    <li className="flex justify-between"><span>Thursday</span><span>Open 24 Hrs</span></li>
                    <li className="flex justify-between"><span>Friday</span><span>Open 24 Hrs</span></li>
                    <li className="flex justify-between"><span>Saturday</span><span>Open 24 Hrs</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span>Open 24 Hrs</span></li>
                  </ul>
                )}
              </div>
              
              {/* Trust Badges */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">Trusted by 5000+ students</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">Your data is secured with us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {viewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white p-2 hover:bg-gray-800 rounded-full transition z-10"
              onClick={closeImageViewer}
            >
              <FaTimes size={24} />
            </button>
            
            {/* Image */}
            <div className="w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center relative">
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].alt}
                className="max-h-full max-w-full object-contain"
              />
              
              {/* Navigation buttons */}
              <button 
                className="absolute left-2 md:left-4 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition"
                onClick={goToPrevImage}
              >
                <FaArrowLeft size={20} />
              </button>
              <button 
                className="absolute right-2 md:right-4 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition"
                onClick={goToNextImage}
              >
                <FaArrowRight size={20} />
              </button>
            </div>
            
            {/* Image counter */}
            <div className="text-white text-sm mt-4">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default LeadsPage; 