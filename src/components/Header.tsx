import type React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';
import api from '../Api'

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [institutionDropdownOpen, setInstitutionDropdownOpen] = useState(false);
  const [investorDropdownOpen, setInvestorDropdownOpen] = useState(false);
  const [educationalDropdownOpen, setEducationalDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const { user, setUser, signOut } = useAuth();
  const navigate = useNavigate();

  const getInitials = (name: string) => {
    if (!name) return '';
    const parts = name.split(' ');
    return (parts[0][0] || '') + (parts[1]?.[0] || parts[0][1] || '').toUpperCase();
  };

  interface Category {
    id: number;
    category_name: string;
    category_slug: string;
  }

  const handleSignOut = () => {
    setShowDropdown(false);
    setMobileMenuOpen(false);
    signOut();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close dropdown when toggling menu
    setShowDropdown(false);
  };

  const toggleInstitutionDropdown = () => {
    setInstitutionDropdownOpen(!institutionDropdownOpen);
  };

  const toggleInvestorDropdown = () => {
    setInvestorDropdownOpen(!investorDropdownOpen);
  };

  const toggleEducationalDropdown = () => {
    setEducationalDropdownOpen(!educationalDropdownOpen);
  };

  const navigateToProfile = () => {
    setShowDropdown(false);
    setMobileMenuOpen(false);
    navigate('/profile');
  };

  // Close mobile menu when navigating
  const handleNavigate = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  interface ApiResponse<T> {
    data: T;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ApiResponse<Category[]>>('/business-categories');
        console.log(response.data.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50 p-1">
      {/* Main Navigation */}
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold">
              <span className="text-blue-900 font-extrabold">JUST</span>
              <span className="text-orange-500 font-extrabold">EDUCATION</span>
            </h1>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            {user && (
              <div className="relative mr-3">
                <button
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm focus:outline-none overflow-hidden"
                  onClick={() => setShowDropdown((v) => !v)}
                >
                  {user.fullName && (
                    <>
                      <span className="text-blue-900 font-bold">{getInitials(user.fullName)[0]}</span>
                      <span className="text-orange-500 font-bold">{getInitials(user.fullName)[1]}</span>
                    </>
                  )}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                    <div className="px-4 py-2 border-b">
                      <div className="font-semibold text-gray-900 text-sm">{user.fullName}</div>
                      <div className="text-gray-500 text-xs">{user.email}</div>
                    </div>
                    <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm" onClick={navigateToProfile}>
                      <FaUser className="mr-2" /> My Profile
                    </button>
                    <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm" onClick={handleSignOut}>
                      <FaSignOutAlt className="mr-2" /> Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
            <button
              className="text-gray-600 hover:text-blue-500 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            {/* <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                <span>Investor</span>
                <FaAngleDown />
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md py-2 w-40 z-10">
                <Link to="/investor-relations" className="block px-4 py-2 hover:bg-gray-100">Investor Relations</Link>
                <Link to="/leads" className="block px-4 py-2 hover:bg-gray-100">Leads</Link>
                <Link to="/free-listing" className="block px-4 py-2 hover:bg-gray-100">Free Listing</Link>
              </div>
            </div> */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                <span>Institution</span>
                <FaAngleDown />
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md py-2 w-48 z-10  grid grid-cols-8">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/institution/${cat.category_slug}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {cat.category_name}
                  </Link>
                ))}

             
              </div>
            </div>
            {/* <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                <span>Educational</span>
                <FaAngleDown />
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md py-2 w-48 z-10">
                <Link to="/study-abroad" className="block px-4 py-2 hover:bg-gray-100">Study Abroad</Link>
                <Link to="/education-loan" className="block px-4 py-2 hover:bg-gray-100">Education Loan</Link>
                <Link to="/edu-tech-online" className="block px-4 py-2 hover:bg-gray-100">Edu Tech - Online</Link>
                <Link to="/training-certification" className="block px-4 py-2 hover:bg-gray-100">Training & Certification</Link>
                <Link to="/skill-development" className="block px-4 py-2 hover:bg-gray-100">Skill Development</Link>
                <Link to="/mbbs-abroad-consultant" className="block px-4 py-2 hover:bg-gray-100">MBBS Abroad Consultant</Link>
                <Link to="/education-consultant" className="block px-4 py-2 hover:bg-gray-100">Education Consultant</Link>
                <Link to="/tuitions" className="block px-4 py-2 hover:bg-gray-100">Tuition</Link>
                <Link to="/bookstores-libraries" className="block px-4 py-2 hover:bg-gray-100">Bookstores & Libraries</Link>
              </div>
            </div> */}
            <Link to="/classes" className="text-gray-700 hover:text-blue-500">Classes</Link>
            <Link to="/exam" className="text-gray-700 hover:text-blue-500">Exam</Link>
            <Link to="/listing" className="text-gray-700 hover:text-blue-500">Listing</Link>
          </nav>


          {/* Avatar or Auth - Desktop only */}
          <div className="hidden md:flex items-center space-x-4 relative">


            {user ? (
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg focus:outline-none overflow-hidden"
                  onClick={() => setShowDropdown((v) => !v)}
                >
                  {user.fullName && (
                    <>
                      <span className="text-blue-900 font-bold">{getInitials(user.fullName)[0]}</span>
                      <span className="text-orange-500 font-bold">{getInitials(user.fullName)[1]}</span>
                    </>
                  )}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-50">
                    <div className="px-4 py-3 border-b">
                      <div className="font-semibold text-gray-900 text-base">{user.fullName}</div>
                      <div className="text-gray-500 text-sm">{user.email}</div>
                    </div>
                    <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-gray-700" onClick={navigateToProfile}>
                      <FaUser className="mr-2" /> My Profile
                    </button>
                    <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-gray-700" onClick={handleSignOut}>
                      <FaSignOutAlt className="mr-2" /> Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signup" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                Get Started
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-white border-t pt-4">
            {/* <div>
              <button
                className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                onClick={toggleInvestorDropdown}
              >
                <span>Investor</span>
                <FaAngleDown className={`transition-transform ${investorDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {investorDropdownOpen && (
                <div className="bg-gray-50 py-2 px-4">
                  <Link to="/investor-relations" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Investor Relations</Link>
                  <Link to="/leads" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Leads</Link>
                  <Link to="/free-listing" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Free Listing</Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                onClick={toggleInstitutionDropdown}
              >
                <span>Institution</span>
                <FaAngleDown className={`transition-transform ${institutionDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {institutionDropdownOpen && (
                <div className="bg-gray-50 py-2 px-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/institution/${cat.category_slug}`}
                      className="block py-2 text-gray-700 hover:text-blue-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {cat.category_name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                onClick={toggleEducationalDropdown}
              >
                <span>Educational</span>
                <FaAngleDown className={`transition-transform ${educationalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {educationalDropdownOpen && (
                <div className="bg-gray-50 py-2 px-4">
                  <Link to="/study-abroad" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Study Abroad</Link>
                  <Link to="/education-loan" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Education Loan</Link>
                  <Link to="/edu-tech-online" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Edu Tech - Online</Link>
                  <Link to="/training-certification" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Training & Certification</Link>
                  <Link to="/skill-development" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Skill Development</Link>
                  <Link to="/mbbs-abroad-consultant" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>MBBS Abroad Consultant</Link>
                  <Link to="/education-consultant" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Education Consultant</Link>
                  <Link to="/tuitions" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Tuition</Link>
                  <Link to="/bookstores-libraries" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Bookstores & Libraries</Link>
                </div>
              )}
            </div> */}

            <Link to="/" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/institution/school-education" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Schools</Link>
            <Link to="/institution/colleges" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Colleges</Link>
            <Link to="/institution/universities" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Universities</Link>
            <Link to="/classes" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Classes</Link>
            <Link to="/exam" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Exam</Link>
            <Link to="/listing" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Listing</Link>





            {user ? (
              <div className="border-t mt-3 pt-3 px-2">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg overflow-hidden mr-3">
                    {user.fullName && (
                      <>
                        <span className="text-blue-900 font-bold">{getInitials(user.fullName)[0]}</span>
                        <span className="text-orange-500 font-bold">{getInitials(user.fullName)[1]}</span>
                      </>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{user.fullName}</div>
                    <div className="text-gray-500 text-sm">{user.email}</div>
                  </div>
                </div>
                <button
                  className="flex items-center w-full py-2 text-gray-700 hover:text-blue-500"
                  onClick={navigateToProfile}
                >
                  <FaUser className="mr-2" /> My Profile
                </button>
                <button
                  className="flex items-center w-full py-2 text-gray-700 hover:text-blue-500"
                  onClick={handleSignOut}
                >
                  <FaSignOutAlt className="mr-2" /> Sign out
                </button>
              </div>
            ) : (
              <Link to="/signup" className="block mt-2 text-center bg-blue-600 text-white py-3 px-2 rounded-md shadow-sm hover:bg-blue-700 transition">
                Get Started
              </Link>
            )}
          </nav>

        )}
      </div>
    </header>
  );
};

export default Header;
