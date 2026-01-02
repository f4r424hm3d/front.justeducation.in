import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp, FaGraduationCap, FaMoneyBillWave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const EducationLoanPage: React.FC = () => {
  const navigate = useNavigate();
  const prefetchedRef = useRef(false);
  
  // Function to handle prefetching when user hovers
  const handlePrefetch = useCallback(() => {
    if (!prefetchedRef.current) {
      prefetchedRef.current = true;
      console.log("Prefetching education loan details data");
    }
  }, []);
  
  // Function to handle direct navigation without waiting
  const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/education-loan/${id}`);
  }, [navigate]);

  // Sample education loan programs data
  const loans = [
    {
      id: 1,
      name: 'SBI Student Loan Scheme',
      bank: 'State Bank of India',
      maxAmount: '₹1.5 Crore',
      interestRate: '8.15%',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      information: 'SBI Student Loan Scheme is one of the most popular education loan programs in India. It offers loans up to ₹1.5 crore for studies in India and abroad. The scheme covers tuition fees, hostel charges, books, equipment, and other educational expenses. The interest rate starts from 8.15% with flexible repayment options. Students can avail of a moratorium period during their course and up to 12 months after completion. The loan is available for various courses including engineering, medicine, management, and other professional courses.'
    },
    {
      id: 2,
      name: 'HDFC Credila Education Loan',
      bank: 'HDFC Bank',
      maxAmount: '₹75 Lakhs',
      interestRate: '9.50%',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      information: 'HDFC Credila specializes in education loans and offers comprehensive financial solutions for students pursuing higher education. The loan covers up to 100% of the course fee and living expenses. Interest rates are competitive starting from 9.50% with no processing fees for loans up to ₹4 lakhs. The bank provides doorstep service and quick disbursement. Students can apply online and track their application status. The loan is available for both domestic and international education with flexible repayment terms.'
    },
    {
      id: 3,
      name: 'Axis Bank Education Loan',
      bank: 'Axis Bank',
      maxAmount: '₹1 Crore',
      interestRate: '8.85%',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80',
      information: 'Axis Bank Education Loan offers financing for higher education in India and abroad. The loan amount can go up to ₹1 crore depending on the course and institution. Interest rates start from 8.85% with competitive processing fees. The bank provides quick loan approval and disbursement. Students can avail of a moratorium period during their studies. The loan covers tuition fees, hostel charges, books, and other educational expenses. Axis Bank also offers special schemes for premier institutions.'
    },
    {
      id: 4,
      name: 'ICICI Bank Education Loan',
      bank: 'ICICI Bank',
      maxAmount: '₹50 Lakhs',
      interestRate: '9.25%',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
      information: 'ICICI Bank Education Loan is designed to help students pursue their academic dreams without financial constraints. The loan covers various courses including engineering, medicine, management, and other professional courses. Interest rates start from 9.25% with flexible repayment options. The bank offers doorstep service and online application facility. Students can track their loan status through the mobile app. The loan includes insurance coverage and provides tax benefits under Section 80E.'
    },
    {
      id: 5,
      name: 'PNB Education Loan',
      bank: 'Punjab National Bank',
      maxAmount: '₹20 Lakhs',
      interestRate: '8.40%',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      information: 'PNB Education Loan offers affordable financing for students pursuing higher education. The loan amount ranges from ₹2 lakhs to ₹20 lakhs depending on the course. Interest rates are competitive starting from 8.40%. The bank provides quick processing and disbursement. Students can avail of a moratorium period during their studies. The loan covers tuition fees, hostel charges, books, and other educational expenses. PNB also offers special schemes for students from economically weaker sections.'
    },
    {
      id: 6,
      name: 'Canara Bank Education Loan',
      bank: 'Canara Bank',
      maxAmount: '₹1 Crore',
      interestRate: '8.75%',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc-7c92?auto=format&fit=crop&w=800&q=80',
      information: 'Canara Bank Education Loan provides comprehensive financial support for students pursuing higher education. The loan amount can go up to ₹1 crore for studies abroad and ₹20 lakhs for domestic education. Interest rates start from 8.75% with competitive processing fees. The bank offers flexible repayment options and moratorium period during studies. The loan covers all educational expenses including tuition fees, hostel charges, books, and equipment. Canara Bank also provides special schemes for girl students.'
    },
    {
      id: 7,
      name: 'Bank of Baroda Education Loan',
      bank: 'Bank of Baroda',
      maxAmount: '₹80 Lakhs',
      interestRate: '8.90%',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
      information: 'Bank of Baroda Education Loan offers financing for various educational courses in India and abroad. The loan amount ranges from ₹2 lakhs to ₹80 lakhs depending on the course and institution. Interest rates start from 8.90% with competitive processing fees. The bank provides quick loan approval and disbursement. Students can avail of a moratorium period during their studies. The loan covers tuition fees, hostel charges, books, and other educational expenses.'
    },
    {
      id: 8,
      name: 'Union Bank Education Loan',
      bank: 'Union Bank of India',
      maxAmount: '₹30 Lakhs',
      interestRate: '8.60%',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      information: 'Union Bank Education Loan is designed to help students pursue higher education without financial constraints. The loan amount ranges from ₹2 lakhs to ₹30 lakhs depending on the course. Interest rates start from 8.60% with flexible repayment options. The bank offers quick processing and disbursement. Students can avail of a moratorium period during their studies. The loan covers all educational expenses including tuition fees, hostel charges, books, and equipment.'
    }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const loansPerPage = 6;

  // Filter states
  const [bankExpanded, setBankExpanded] = useState(false);
  const [bankSearch, setBankSearch] = useState('');
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [amountExpanded, setAmountExpanded] = useState(false);
  const [interestExpanded, setInterestExpanded] = useState(false);
  const [courseExpanded, setCourseExpanded] = useState(false);
  const [selectedAmounts, setSelectedAmounts] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [nearMeExpanded, setNearMeExpanded] = useState(false);
  const [nearMeSearch, setNearMeSearch] = useState('');

  // Available banks
  const allBanks = [
    'State Bank of India', 'HDFC Bank', 'Axis Bank', 'ICICI Bank', 'Punjab National Bank',
    'Canara Bank', 'Bank of Baroda', 'Union Bank of India', 'Bank of India', 'Central Bank of India',
    'Indian Bank', 'UCO Bank', 'IDBI Bank', 'Kotak Mahindra Bank', 'Yes Bank',
    'Federal Bank', 'Karnataka Bank', 'South Indian Bank', 'Karur Vysya Bank', 'Tamilnad Mercantile Bank'
  ];

  // Filter banks based on search
  const filteredBanks = allBanks.filter(bank =>
    bank.toLowerCase().includes(bankSearch.toLowerCase())
  );

  // Handle bank selection
  const handleBankChange = (bank: string) => {
    setSelectedBanks(prev => 
      prev.includes(bank) 
        ? prev.filter(b => b !== bank)
        : [...prev, bank]
    );
  };

  // Show more banks functionality
  const [showMoreBanks, setShowMoreBanks] = useState(false);
  const displayedBanks = showMoreBanks ? filteredBanks : filteredBanks.slice(0, 8);

  // Amount options
  const amountOptions = [
    'Up to ₹5 Lakhs', '₹5-10 Lakhs', '₹10-20 Lakhs', '₹20-50 Lakhs', '₹50 Lakhs - 1 Crore', 'Above ₹1 Crore'
  ];

  // Interest rate options
  const interestOptions = [
    'Below 8%', '8-9%', '9-10%', '10-11%', '11-12%', 'Above 12%'
  ];

  // Course options
  const courseOptions = [
    { name: 'Engineering', count: 156 },
    { name: 'Medical', count: 89 },
    { name: 'Management', count: 234 },
    { name: 'Arts & Humanities', count: 123 },
    { name: 'Science', count: 167 },
    { name: 'Law', count: 78 },
    { name: 'Commerce', count: 145 },
    { name: 'Computer Science', count: 198 }
  ];

  // Handle filter changes
  const handleAmountChange = (amount: string) => {
    setSelectedAmounts(prev => 
      prev.includes(amount) 
        ? prev.filter(a => a !== amount)
        : [...prev, amount]
    );
  };

  const handleInterestChange = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleCourseChange = (course: string) => {
    setSelectedCourses(prev => 
      prev.includes(course) 
        ? prev.filter(c => c !== course)
        : [...prev, course]
    );
  };

  // Apply filters
  const filteredLoans = loans.filter(loan => {
    const matchesSearch = loan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         loan.bank.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBank = selectedBanks.length === 0 || selectedBanks.includes(loan.bank);
    
    return matchesSearch && matchesBank;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredLoans.length / loansPerPage);
  const startIndex = (currentPage - 1) * loansPerPage;
  const currentLoans = filteredLoans.slice(startIndex, startIndex + loansPerPage);

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
            backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Education Loans</h1>
            <p className="text-lg md:text-xl mb-6">Find the perfect education loan to fund your academic dreams</p>
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                <input
                  type="text"
                  placeholder="Search loans by name, bank, or course..."
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
                
                {/* Bank Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setBankExpanded(!bankExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Bank</span>
                    {bankExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {bankExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="p-2">
                        <div className="relative">
                          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                          <input
                            type="text"
                            placeholder="Search by bank name"
                            value={bankSearch}
                            onChange={(e) => setBankSearch(e.target.value)}
                            className="w-full pl-6 pr-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div className="max-h-60 overflow-y-auto">
                        {displayedBanks.map((bank) => (
                          <div key={bank} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`bank-${bank}`}
                              checked={selectedBanks.includes(bank)}
                              onChange={() => handleBankChange(bank)}
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                            />
                            <label 
                              htmlFor={`bank-${bank}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {bank}
                            </label>
                          </div>
                        ))}
                        
                        {filteredBanks.length > 8 && (
                          <div className="p-2">
                            <button
                              onClick={() => setShowMoreBanks(!showMoreBanks)}
                              className="text-blue-600 text-xs font-medium hover:text-blue-700"
                            >
                              {showMoreBanks ? 'Show Less' : `+ ${filteredBanks.length - 8} More`}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Amount Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setAmountExpanded(!amountExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Loan Amount</span>
                    {amountExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {amountExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {amountOptions.map((amount) => (
                          <div key={amount} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`amount-${amount}`}
                              checked={selectedAmounts.includes(amount)}
                              onChange={() => handleAmountChange(amount)}
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                            />
                            <label 
                              htmlFor={`amount-${amount}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {amount}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Interest Rate Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setInterestExpanded(!interestExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Interest Rate</span>
                    {interestExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {interestExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center py-1.5 px-2 hover:bg-gray-50">
                            <input
                              type="checkbox"
                              id={`interest-${interest}`}
                              checked={selectedInterests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                              className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                            />
                            <label 
                              htmlFor={`interest-${interest}`}
                              className="text-xs text-gray-600 cursor-pointer flex-1"
                            >
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Course Filter */}
                <div className="mb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 shadow-sm"
                    onClick={() => setCourseExpanded(!courseExpanded)}
                  >
                    <span className="text-sm font-medium text-gray-700">Course Type</span>
                    {courseExpanded ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                  </div>
                  
                  {courseExpanded && (
                    <div className="mt-1 bg-white">
                      <div className="max-h-60 overflow-y-auto">
                        {courseOptions.map((course) => (
                          <div key={course.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50">
                            <div className="flex items-center flex-1">
                              <input
                                type="checkbox"
                                id={`course-${course.name}`}
                                checked={selectedCourses.includes(course.name)}
                                onChange={() => handleCourseChange(course.name)}
                                className="mr-2 text-blue-600 focus:ring-blue-500 scale-75"
                              />
                              <label 
                                htmlFor={`course-${course.name}`}
                                className="text-xs text-gray-600 cursor-pointer"
                              >
                                {course.name}
                              </label>
                            </div>
                            <span className="text-xs text-gray-400">({course.count})</span>
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
              {/* Loans Grid */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {currentLoans.map(loan => (
                    <div
                      key={loan.id}
                      className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                    >
                      {/* Top Rated Badge */}
                      {loan.rating >= 4.7 && (
                        <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-blue-600 transition">Top Rated</span>
                      )}
                      <div className="h-32 bg-gray-200 relative">
                        <img
                          src={loan.image}
                          alt={loan.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold mb-2 text-gray-800">{loan.bank}</h3>
                        
                        {/* Bank, Amount, Rating in one row */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <div className="flex items-center">
                            <FaMoneyBillWave className="mr-1 text-gray-500" />
                            <span>{loan.maxAmount}</span>
                          </div>
                          <div className="flex items-center">
                            <FaGraduationCap className="mr-1 text-gray-500" />
                            <span>{loan.interestRate}</span>
                          </div>
                          <div className="flex items-center">
                            <FaStar className="mr-1 text-yellow-400" size={10} />
                            <span>{loan.rating}</span>
                          </div>
                        </div>
                        
                        {/* Information Section */}
                        <div className="mb-3 flex-grow">
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {truncateText(loan.information)}
                            {loan.information.length > 155 && (
                              <button
                                onClick={(e) => handleViewDetails(e, loan.id)}
                                onMouseEnter={handlePrefetch}
                                className="text-blue-600 text-xs font-medium ml-1 hover:text-blue-700 transition inline"
                              >
                                More
                              </button>
                            )}
                          </p>
                        </div>
                        
                        <button
                          onClick={(e) => handleViewDetails(e, loan.id)}
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

export default EducationLoanPage; 