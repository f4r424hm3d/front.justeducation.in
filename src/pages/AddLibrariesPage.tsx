import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar, FaPhone, FaEnvelope, FaGlobe, FaBook, FaCheckCircle, FaGraduationCap, FaTimes, FaHospitalAlt, FaBus, FaUserGraduate, FaSnowflake, FaWifi, FaChalkboardTeacher, FaPalette, FaMusic, FaTheaterMasks, FaUtensils, FaFutbol, FaDesktop, FaFlask, FaRobot, FaVideo, FaDoorOpen, FaBasketballBall, FaRunning, FaPrayingHands, FaImage, FaPlus, FaTrash, FaUsers, FaClock, FaSearch, FaPrint, FaLaptop, FaHeadphones, FaMicrophone, FaCamera,  } from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';

interface LibraryFormData {
  // Basic Information
  name: string;
  location: string;
  latitude: string;
  longitude: string;
  established: string;
  members: string;
  rating: string;
  type: string;
  description: string;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  
  // Address Information
  address: {
    libraryAddress: string;
    officeAddress: string;
    officePhone: string;
    officeFax: string;
    officeEmail: string;
    officeWebsite: string;
  };
  
  // Images
  image: string;
  heroBackground: string;
  
  // Membership Information
  membershipProcess: string[];
  eligibility: string[];
  
  // Facilities
  facilities: string[];
  
  // Quick Facts
  quickFacts: {
    type: string;
    membershipType: string;
    collectionSize: string;
    staffCount: string;
    operatingHours: string;
    seatingCapacity: string;
    wifiAvailable: string;
    parkingAvailable: string;
  };
  
  // Library Timings
  libraryTimings: {
    monday: { open: string; close: string };
    tuesday: { open: string; close: string };
    wednesday: { open: string; close: string };
    thursday: { open: string; close: string };
    friday: { open: string; close: string };
    saturday: { open: string; close: string };
    sunday: { open: string; close: string };
  };
  
  // Collections
  collections: string[];
  
  // Services
  services: {
    digitalResources: boolean;
    interLibraryLoan: boolean;
    referenceServices: boolean;
    childrenSection: boolean;
    studyRooms: boolean;
    computerAccess: boolean;
    printingServices: boolean;
    wifiAccess: boolean;
    description: string;
  };
  
  // Rankings
  rankings: {
    nationalRank: string;
    stateRank: string;
  };
  
  // Access Options
  accessOptions: {
    public: boolean;
    membership: boolean;
    online: boolean;
    walkIn: boolean;
  };
  
  // Features
  features: {
    featured: boolean;
    freeAccess: boolean;
    approvedBy: string;
  };
  
  // Media Gallery
  mediaGallery: Array<{
    type: 'image' | 'video';
    src: string;
    alt: string;
    thumbnail?: string;
  }>;
  
  // Membership Fees
  membershipFees: Array<{
    category: string;
    fee: string;
    duration: string;
    benefits: string;
  }>;
  
  // Programs & Events
  programs: Array<{
    name: string;
    type: string;
    schedule: string;
    targetAudience: string;
    description: string;
  }>;
  
  // News
  news: Array<{
    title: string;
    date: string;
    content: string;
    category: string;
  }>;
  
  // Staff
  staff: Array<{
    name: string;
    position: string;
    qualification: string;
    image: string;
    bio: string;
  }>;
  
  // Statistics
  statistics: {
    totalBooks: string;
    digitalResources: string;
    annualVisitors: string;
    activeMembers: string;
  };
  
  // Career Opportunities
  career: {
    vacancies: Array<{
      position: string;
      description: string;
    }>;
    qualifications: string;
    perks: string[];
    applicationInstructions: string;
  };
  
  // Collections by Category
  collectionsByCategory: {
    fiction: string[];
    nonFiction: string[];
    reference: string[];
    children: string[];
    periodicals: string[];
    digital: string[];
  };
  
  // Events & Workshops
  events: Array<{
    title: string;
    description: string;
    schedule: string;
    targetAudience: string;
    type: 'current' | 'upcoming';
  }>;
  
  // Technology & Infrastructure
  technology: {
    digitalCatalogs: string[];
    onlineServices: string[];
    equipment: string[];
  };
}

const AddLibrariesPage: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<LibraryFormData>({
    // Basic Information
    name: '',
    location: '',
    latitude: '',
    longitude: '',
    established: '',
    members: '',
    rating: '',
    type: '',
    description: '',
    
    // Contact Information
    contact: {
      phone: '',
      email: '',
      website: '',
    },
    
    // Address Information
    address: {
      libraryAddress: '',
      officeAddress: '',
      officePhone: '',
      officeFax: '',
      officeEmail: '',
      officeWebsite: '',
    },
    
    // Images
    image: '',
    heroBackground: '',
    
    // Membership Information
    membershipProcess: [''],
    eligibility: [''],
    
    // Facilities
    facilities: [''],
    
    // Quick Facts
    quickFacts: {
      type: 'Public',
      membershipType: 'Free',
      collectionSize: '',
      staffCount: '',
      operatingHours: '9:00 AM - 6:00 PM',
      seatingCapacity: '',
      wifiAvailable: 'Yes',
      parkingAvailable: 'Yes',
    },
    
    // Library Timings
    libraryTimings: {
      monday: { open: '9:00 AM', close: '6:00 PM' },
      tuesday: { open: '9:00 AM', close: '6:00 PM' },
      wednesday: { open: '9:00 AM', close: '6:00 PM' },
      thursday: { open: '9:00 AM', close: '6:00 PM' },
      friday: { open: '9:00 AM', close: '6:00 PM' },
      saturday: { open: '9:00 AM', close: '5:00 PM' },
      sunday: { open: 'Closed', close: 'Closed' },
    },
    
    // Collections
    collections: [''],
    
    // Services
    services: {
      digitalResources: true,
      interLibraryLoan: false,
      referenceServices: true,
      childrenSection: true,
      studyRooms: true,
      computerAccess: true,
      printingServices: false,
      wifiAccess: true,
      description: '',
    },
    
    // Rankings
    rankings: {
      nationalRank: '',
      stateRank: '',
    },
    
    // Access Options
    accessOptions: {
      public: true,
      membership: true,
      online: false,
      walkIn: true,
    },
    
    // Features
    features: {
      featured: false,
      freeAccess: true,
      approvedBy: '',
    },
    
    // Media Gallery
    mediaGallery: [],
    
    // Membership Fees
    membershipFees: [],
    
    // Programs & Events
    programs: [],
    
    // News
    news: [],
    
    // Staff
    staff: [],
    
    // Statistics
    statistics: {
      totalBooks: '',
      digitalResources: '',
      annualVisitors: '',
      activeMembers: '',
    },
    
    // Career Opportunities
    career: {
      vacancies: [],
      qualifications: '',
      perks: [''],
      applicationInstructions: '',
    },
    
    // Collections by Category
    collectionsByCategory: {
      fiction: [''],
      nonFiction: [''],
      reference: [''],
      children: [''],
      periodicals: [''],
      digital: [''],
    },
    
    // Events & Workshops
    events: [],
    
    // Technology & Infrastructure
    technology: {
      digitalCatalogs: [''],
      onlineServices: [''],
      equipment: [''],
    },
  });

  const [activeSection, setActiveSection] = useState('basic');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to generate Google Maps direction link
  const generateGoogleMapsLink = (latitude: string, longitude: string) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parent: keyof LibraryFormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value
      }
    }));
  };

  const handleArrayInputChange = (field: keyof LibraryFormData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: keyof LibraryFormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), '']
    }));
  };

  const removeArrayItem = (field: keyof LibraryFormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_: string, i: number) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate coordinates if provided
      if (formData.latitude && formData.longitude) {
        const lat = parseFloat(formData.latitude);
        const lng = parseFloat(formData.longitude);
        
        if (isNaN(lat) || isNaN(lng)) {
          alert('Please enter valid numeric values for latitude and longitude.');
          setIsSubmitting(false);
          return;
        }
        
        if (lat < -90 || lat > 90) {
          alert('Latitude must be between -90 and 90 degrees.');
          setIsSubmitting(false);
          return;
        }
        
        if (lng < -180 || lng > 180) {
          alert('Longitude must be between -180 and 180 degrees.');
          setIsSubmitting(false);
          return;
        }
      }
      
      // Here you would typically send the data to your backend API
      console.log('Library data to be submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert('Library added successfully!');
      navigate('/libraries');
    } catch (error) {
      console.error('Error adding library:', error);
      alert('Error adding library. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { id: 'basic', label: 'Basic Information', icon: FaBook },
    { id: 'contact', label: 'Contact & Address', icon: FaPhone },
    { id: 'membership', label: 'Membership Details', icon: FaUser },
    { id: 'facilities', label: 'Facilities & Services', icon: FaHospitalAlt },
    { id: 'collections', label: 'Collections', icon: FaBook },
    { id: 'media', label: 'Media & Gallery', icon: FaImage },
    { id: 'fees', label: 'Membership Fees', icon: FaGraduationCap },
    { id: 'programs', label: 'Programs & Events', icon: FaChalkboardTeacher },
    { id: 'news', label: 'News & Updates', icon: FaGlobe },
    { id: 'staff', label: 'Staff', icon: FaUserGraduate },
    { id: 'career', label: 'Career Opportunities', icon: FaRunning },
    { id: 'collections', label: 'Collections by Category', icon: FaBook },
    { id: 'events', label: 'Events & Workshops', icon: FaChalkboardTeacher },
    { id: 'technology', label: 'Technology & Infrastructure', icon: FaRobot },
  ];

  const renderBasicInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Library Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Dehradun, Uttarakhand"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Latitude
          </label>
          <input
            type="number"
            step="any"
            value={formData.latitude}
            onChange={(e) => handleInputChange('latitude', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 30.3165"
            min="-90"
            max="90"
          />
          <p className="text-xs text-gray-500 mt-1">Enter latitude between -90 and 90 degrees</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Longitude
          </label>
          <input
            type="number"
            step="any"
            value={formData.longitude}
            onChange={(e) => handleInputChange('longitude', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 78.0322"
            min="-180"
            max="180"
          />
          <p className="text-xs text-gray-500 mt-1">Enter longitude between -180 and 180 degrees</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Established Year *
          </label>
          <input
            type="text"
            value={formData.established}
            onChange={(e) => handleInputChange('established', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 1949"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Members
          </label>
          <input
            type="text"
            value={formData.members}
            onChange={(e) => handleInputChange('members', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 5,000+"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating (out of 5)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={formData.rating}
            onChange={(e) => handleInputChange('rating', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 4.7"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Library Type *
          </label>
          <select
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Public">Public Library</option>
            <option value="Academic">Academic Library</option>
            <option value="Special">Special Library</option>
            <option value="National">National Library</option>
            <option value="State">State Library</option>
            <option value="Municipal">Municipal Library</option>
            <option value="Private">Private Library</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Library Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Provide a detailed description of the library..."
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Library Image URL
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => handleInputChange('image', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/library-image.jpg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hero Background Image URL
          </label>
          <input
            type="url"
            value={formData.heroBackground}
            onChange={(e) => handleInputChange('heroBackground', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/hero-background.jpg"
          />
        </div>
      </div>
      
      {/* Google Maps Direction Link */}
      {formData.latitude && formData.longitude && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Get Directions</h3>
          <p className="text-sm text-gray-600 mb-3">
            Use the coordinates to generate a Google Maps direction link
          </p>
          <a
            href={generateGoogleMapsLink(formData.latitude, formData.longitude)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <FaMapMarkerAlt className="w-4 h-4" />
            Get Directions on Google Maps
          </a>
        </div>
      )}
    </div>
  );

  const renderContactAddress = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.contact.phone}
            onChange={(e) => handleNestedInputChange('contact', 'phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.contact.email}
            onChange={(e) => handleNestedInputChange('contact', 'email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website
          </label>
          <input
            type="url"
            value={formData.contact.website}
            onChange={(e) => handleNestedInputChange('contact', 'website', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://www.librarywebsite.com"
          />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Library Address *
          </label>
          <textarea
            value={formData.address.libraryAddress}
            onChange={(e) => handleNestedInputChange('address', 'libraryAddress', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Office Address
          </label>
          <textarea
            value={formData.address.officeAddress}
            onChange={(e) => handleNestedInputChange('address', 'officeAddress', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Office Phone
            </label>
            <input
              type="tel"
              value={formData.address.officePhone}
              onChange={(e) => handleNestedInputChange('address', 'officePhone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Office Fax
            </label>
            <input
              type="tel"
              value={formData.address.officeFax}
              onChange={(e) => handleNestedInputChange('address', 'officeFax', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Office Email
            </label>
            <input
              type="email"
              value={formData.address.officeEmail}
              onChange={(e) => handleNestedInputChange('address', 'officeEmail', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Office Website
            </label>
            <input
              type="url"
              value={formData.address.officeWebsite}
              onChange={(e) => handleNestedInputChange('address', 'officeWebsite', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderMembershipDetails = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Membership Process Steps
        </label>
        {formData.membershipProcess.map((step, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={step}
              onChange={(e) => handleArrayInputChange('membershipProcess', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Step ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('membershipProcess', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('membershipProcess')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Step
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Eligibility Criteria
        </label>
        {formData.eligibility.map((criteria, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={criteria}
              onChange={(e) => handleArrayInputChange('eligibility', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Eligibility criteria ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('eligibility', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('eligibility')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Criteria
        </button>
      </div>
    </div>
  );

  const renderFacilities = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Available Facilities
        </label>
        {formData.facilities.map((facility, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={facility}
              onChange={(e) => handleArrayInputChange('facilities', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Facility ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('facilities', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('facilities')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Facility
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Collection Size
          </label>
          <input
            type="text"
            value={formData.quickFacts.collectionSize}
            onChange={(e) => handleNestedInputChange('quickFacts', 'collectionSize', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 50,000+ books"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Staff Count
          </label>
          <input
            type="text"
            value={formData.quickFacts.staffCount}
            onChange={(e) => handleNestedInputChange('quickFacts', 'staffCount', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 25 staff members"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Library Type
          </label>
          <select
            value={formData.quickFacts.type}
            onChange={(e) => handleNestedInputChange('quickFacts', 'type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Public">Public</option>
            <option value="Academic">Academic</option>
            <option value="Special">Special</option>
            <option value="National">National</option>
            <option value="State">State</option>
            <option value="Municipal">Municipal</option>
            <option value="Private">Private</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Membership Type
          </label>
          <select
            value={formData.quickFacts.membershipType}
            onChange={(e) => handleNestedInputChange('quickFacts', 'membershipType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
            <option value="Both">Both</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seating Capacity
          </label>
          <input
            type="text"
            value={formData.quickFacts.seatingCapacity}
            onChange={(e) => handleNestedInputChange('quickFacts', 'seatingCapacity', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 200 seats"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Operating Hours
          </label>
          <input
            type="text"
            value={formData.quickFacts.operatingHours}
            onChange={(e) => handleNestedInputChange('quickFacts', 'operatingHours', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 9:00 AM - 6:00 PM"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Services Offered
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.services.digitalResources}
              onChange={(e) => handleNestedInputChange('services', 'digitalResources', e.target.checked)}
              className="mr-2"
            />
            <span>Digital Resources</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.services.interLibraryLoan}
              onChange={(e) => handleNestedInputChange('services', 'interLibraryLoan', e.target.checked)}
              className="mr-2"
            />
            <span>Inter-Library Loan</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.services.referenceServices}
              onChange={(e) => handleNestedInputChange('services', 'referenceServices', e.target.checked)}
              className="mr-2"
            />
            <span>Reference Services</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.services.childrenSection}
              onChange={(e) => handleNestedInputChange('services', 'childrenSection', e.target.checked)}
              className="mr-2"
            />
            <span>Children's Section</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.services.studyRooms}
              onChange={(e) => handleNestedInputChange('services', 'studyRooms', e.target.checked)}
              className="mr-2"
            />
            <span>Study Rooms</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.services.computerAccess}
              onChange={(e) => handleNestedInputChange('services', 'computerAccess', e.target.checked)}
              className="mr-2"
            />
            <span>Computer Access</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.services.printingServices}
              onChange={(e) => handleNestedInputChange('services', 'printingServices', e.target.checked)}
              className="mr-2"
            />
            <span>Printing Services</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.services.wifiAccess}
              onChange={(e) => handleNestedInputChange('services', 'wifiAccess', e.target.checked)}
              className="mr-2"
            />
            <span>WiFi Access</span>
          </label>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Services Description
          </label>
          <textarea
            value={formData.services.description}
            onChange={(e) => handleNestedInputChange('services', 'description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the services offered by the library..."
          />
        </div>
      </div>
    </div>
  );

  const renderCollections = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          General Collections
        </label>
        {formData.collections.map((collection, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={collection}
              onChange={(e) => handleArrayInputChange('collections', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Collection ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('collections', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('collections')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Collection
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Books
          </label>
          <input
            type="text"
            value={formData.statistics.totalBooks}
            onChange={(e) => handleNestedInputChange('statistics', 'totalBooks', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 50,000+"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Digital Resources
          </label>
          <input
            type="text"
            value={formData.statistics.digitalResources}
            onChange={(e) => handleNestedInputChange('statistics', 'digitalResources', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 10,000+ e-books"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Visitors
          </label>
          <input
            type="text"
            value={formData.statistics.annualVisitors}
            onChange={(e) => handleNestedInputChange('statistics', 'annualVisitors', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 100,000+"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Active Members
          </label>
          <input
            type="text"
            value={formData.statistics.activeMembers}
            onChange={(e) => handleNestedInputChange('statistics', 'activeMembers', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 5,000+"
          />
        </div>
      </div>
    </div>
  );

  const renderMediaGallery = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Media Gallery
        </label>
        <p className="text-sm text-gray-600 mb-4">Add images and videos to showcase the library</p>
        
        {formData.mediaGallery.map((media, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Media Type
                </label>
                <select
                  value={media.type}
                  onChange={(e) => {
                    const updatedGallery = [...formData.mediaGallery];
                    updatedGallery[index] = { ...media, type: e.target.value as 'image' | 'video' };
                    setFormData(prev => ({ ...prev, mediaGallery: updatedGallery }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Media URL
                </label>
                <input
                  type="url"
                  value={media.src}
                  onChange={(e) => {
                    const updatedGallery = [...formData.mediaGallery];
                    updatedGallery[index] = { ...media, src: e.target.value };
                    setFormData(prev => ({ ...prev, mediaGallery: updatedGallery }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/media.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alt Text/Description
                </label>
                <input
                  type="text"
                  value={media.alt}
                  onChange={(e) => {
                    const updatedGallery = [...formData.mediaGallery];
                    updatedGallery[index] = { ...media, alt: e.target.value };
                    setFormData(prev => ({ ...prev, mediaGallery: updatedGallery }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Description of the media"
                />
              </div>
              
              {media.type === 'video' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thumbnail URL (for video)
                  </label>
                  <input
                    type="url"
                    value={media.thumbnail || ''}
                    onChange={(e) => {
                      const updatedGallery = [...formData.mediaGallery];
                      updatedGallery[index] = { ...media, thumbnail: e.target.value };
                      setFormData(prev => ({ ...prev, mediaGallery: updatedGallery }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/thumbnail.jpg"
                  />
                </div>
              )}
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedGallery = formData.mediaGallery.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, mediaGallery: updatedGallery }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Media
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              mediaGallery: [...prev.mediaGallery, { type: 'image', src: '', alt: '' }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Media
        </button>
      </div>
    </div>
  );

  const renderMembershipFees = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Membership Fee Structure
        </label>
        <p className="text-sm text-gray-600 mb-4">Add different membership categories and their fees</p>
        
        {formData.membershipFees.map((fee, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={fee.category}
                  onChange={(e) => {
                    const updatedFees = [...formData.membershipFees];
                    updatedFees[index] = { ...fee, category: e.target.value };
                    setFormData(prev => ({ ...prev, membershipFees: updatedFees }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Student, Adult, Senior"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fee Amount
                </label>
                <input
                  type="text"
                  value={fee.fee}
                  onChange={(e) => {
                    const updatedFees = [...formData.membershipFees];
                    updatedFees[index] = { ...fee, fee: e.target.value };
                    setFormData(prev => ({ ...prev, membershipFees: updatedFees }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹500/year"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  value={fee.duration}
                  onChange={(e) => {
                    const updatedFees = [...formData.membershipFees];
                    updatedFees[index] = { ...fee, duration: e.target.value };
                    setFormData(prev => ({ ...prev, membershipFees: updatedFees }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 1 year, 6 months"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Benefits
              </label>
              <textarea
                value={fee.benefits}
                onChange={(e) => {
                  const updatedFees = [...formData.membershipFees];
                  updatedFees[index] = { ...fee, benefits: e.target.value };
                  setFormData(prev => ({ ...prev, membershipFees: updatedFees }));
                }}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the benefits included in this membership..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedFees = formData.membershipFees.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, membershipFees: updatedFees }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Fee Structure
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              membershipFees: [...prev.membershipFees, {
                category: '',
                fee: '',
                duration: '',
                benefits: ''
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Fee Structure
        </button>
      </div>
    </div>
  );

  const renderPrograms = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Programs & Events
        </label>
        <p className="text-sm text-gray-600 mb-4">Add programs and events offered by the library</p>
        
        {formData.programs.map((program, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program Name
                </label>
                <input
                  type="text"
                  value={program.name}
                  onChange={(e) => {
                    const updatedPrograms = [...formData.programs];
                    updatedPrograms[index] = { ...program, name: e.target.value };
                    setFormData(prev => ({ ...prev, programs: updatedPrograms }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Reading Club"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <input
                  type="text"
                  value={program.type}
                  onChange={(e) => {
                    const updatedPrograms = [...formData.programs];
                    updatedPrograms[index] = { ...program, type: e.target.value };
                    setFormData(prev => ({ ...prev, programs: updatedPrograms }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Workshop, Seminar, Club"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Schedule
                </label>
                <input
                  type="text"
                  value={program.schedule}
                  onChange={(e) => {
                    const updatedPrograms = [...formData.programs];
                    updatedPrograms[index] = { ...program, schedule: e.target.value };
                    setFormData(prev => ({ ...prev, programs: updatedPrograms }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Every Saturday, 10:00 AM"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={program.targetAudience}
                  onChange={(e) => {
                    const updatedPrograms = [...formData.programs];
                    updatedPrograms[index] = { ...program, targetAudience: e.target.value };
                    setFormData(prev => ({ ...prev, programs: updatedPrograms }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Children, Adults, Seniors"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={program.description}
                onChange={(e) => {
                  const updatedPrograms = [...formData.programs];
                  updatedPrograms[index] = { ...program, description: e.target.value };
                  setFormData(prev => ({ ...prev, programs: updatedPrograms }));
                }}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the program..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedPrograms = formData.programs.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, programs: updatedPrograms }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Program
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              programs: [...prev.programs, {
                name: '',
                type: '',
                schedule: '',
                targetAudience: '',
                description: ''
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Program
        </button>
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          News & Updates
        </label>
        <p className="text-sm text-gray-600 mb-4">Add news and updates about the library</p>
        
        {formData.news.map((newsItem, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  News Title
                </label>
                <input
                  type="text"
                  value={newsItem.title}
                  onChange={(e) => {
                    const updatedNews = [...formData.news];
                    updatedNews[index] = { ...newsItem, title: e.target.value };
                    setFormData(prev => ({ ...prev, news: updatedNews }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., New Digital Resources Available"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="text"
                  value={newsItem.date}
                  onChange={(e) => {
                    const updatedNews = [...formData.news];
                    updatedNews[index] = { ...newsItem, date: e.target.value };
                    setFormData(prev => ({ ...prev, news: updatedNews }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 20 May 2024"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newsItem.category}
                  onChange={(e) => {
                    const updatedNews = [...formData.news];
                    updatedNews[index] = { ...newsItem, category: e.target.value };
                    setFormData(prev => ({ ...prev, news: updatedNews }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Category</option>
                  <option value="announcement">Announcement</option>
                  <option value="event">Event</option>
                  <option value="update">Update</option>
                  <option value="achievement">Achievement</option>
                  <option value="general">General</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                News Content
              </label>
              <textarea
                value={newsItem.content}
                onChange={(e) => {
                  const updatedNews = [...formData.news];
                  updatedNews[index] = { ...newsItem, content: e.target.value };
                  setFormData(prev => ({ ...prev, news: updatedNews }));
                }}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the news content..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedNews = formData.news.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, news: updatedNews }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove News
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              news: [...prev.news, {
                title: '',
                date: '',
                content: '',
                category: ''
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add News
        </button>
      </div>
    </div>
  );

  const renderStaff = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Library Staff
        </label>
        <p className="text-sm text-gray-600 mb-4">Add information about library staff members</p>
        
        {formData.staff.map((staffMember, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Staff Name
                </label>
                <input
                  type="text"
                  value={staffMember.name}
                  onChange={(e) => {
                    const updatedStaff = [...formData.staff];
                    updatedStaff[index] = { ...staffMember, name: e.target.value };
                    setFormData(prev => ({ ...prev, staff: updatedStaff }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <input
                  type="text"
                  value={staffMember.position}
                  onChange={(e) => {
                    const updatedStaff = [...formData.staff];
                    updatedStaff[index] = { ...staffMember, position: e.target.value };
                    setFormData(prev => ({ ...prev, staff: updatedStaff }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Librarian, Assistant"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qualification
                </label>
                <input
                  type="text"
                  value={staffMember.qualification}
                  onChange={(e) => {
                    const updatedStaff = [...formData.staff];
                    updatedStaff[index] = { ...staffMember, qualification: e.target.value };
                    setFormData(prev => ({ ...prev, staff: updatedStaff }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., MLIS, PhD"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={staffMember.image}
                  onChange={(e) => {
                    const updatedStaff = [...formData.staff];
                    updatedStaff[index] = { ...staffMember, image: e.target.value };
                    setFormData(prev => ({ ...prev, staff: updatedStaff }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/staff-image.jpg"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                value={staffMember.bio}
                onChange={(e) => {
                  const updatedStaff = [...formData.staff];
                  updatedStaff[index] = { ...staffMember, bio: e.target.value };
                  setFormData(prev => ({ ...prev, staff: updatedStaff }));
                }}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter staff member bio..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedStaff = formData.staff.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, staff: updatedStaff }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Staff
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              staff: [...prev.staff, {
                name: '',
                position: '',
                qualification: '',
                image: '',
                bio: ''
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Staff
        </button>
      </div>
    </div>
  );

  const renderCareer = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Career Opportunities
        </label>
        <p className="text-sm text-gray-600 mb-4">Add job vacancies and career information</p>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Required Qualifications
          </label>
          <textarea
            value={formData.career.qualifications}
            onChange={(e) => handleNestedInputChange('career', 'qualifications', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the required qualifications for positions..."
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Application Instructions
          </label>
          <textarea
            value={formData.career.applicationInstructions}
            onChange={(e) => handleNestedInputChange('career', 'applicationInstructions', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Provide application instructions..."
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Perks
          </label>
          {formData.career.perks.map((perk, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={perk}
                onChange={(e) => {
                  const updatedPerks = [...formData.career.perks];
                  updatedPerks[index] = e.target.value;
                  setFormData(prev => ({
                    ...prev,
                    career: { ...prev.career, perks: updatedPerks }
                  }));
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Perk ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => {
                  const updatedPerks = formData.career.perks.filter((_, i) => i !== index);
                  setFormData(prev => ({
                    ...prev,
                    career: { ...prev.career, perks: updatedPerks }
                  }));
                }}
                className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              setFormData(prev => ({
                ...prev,
                career: {
                  ...prev.career,
                  perks: [...prev.career.perks, '']
                }
              }));
            }}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
          >
            <FaPlus /> Add Perk
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Vacancies
          </label>
          {formData.career.vacancies.map((vacancy, index) => (
            <div key={index} className="border rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    value={vacancy.position}
                    onChange={(e) => {
                      const updatedVacancies = [...formData.career.vacancies];
                      updatedVacancies[index] = { ...vacancy, position: e.target.value };
                      setFormData(prev => ({
                        ...prev,
                        career: { ...prev.career, vacancies: updatedVacancies }
                      }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Assistant Librarian"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description
                </label>
                <textarea
                  value={vacancy.description}
                  onChange={(e) => {
                    const updatedVacancies = [...formData.career.vacancies];
                    updatedVacancies[index] = { ...vacancy, description: e.target.value };
                    setFormData(prev => ({
                      ...prev,
                      career: { ...prev.career, vacancies: updatedVacancies }
                    }));
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe the job responsibilities..."
                />
              </div>
              
              <button
                type="button"
                onClick={() => {
                  const updatedVacancies = formData.career.vacancies.filter((_, i) => i !== index);
                  setFormData(prev => ({
                    ...prev,
                    career: { ...prev.career, vacancies: updatedVacancies }
                  }));
                }}
                className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                <FaTrash /> Remove Vacancy
              </button>
            </div>
          ))}
          
          <button
            type="button"
            onClick={() => {
              setFormData(prev => ({
                ...prev,
                career: {
                  ...prev.career,
                  vacancies: [...prev.career.vacancies, { position: '', description: '' }]
                }
              }));
            }}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
          >
            <FaPlus /> Add Vacancy
          </button>
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Events & Workshops
        </label>
        <p className="text-sm text-gray-600 mb-4">Add information about events and workshops</p>
        
        {formData.events.map((event, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  value={event.title}
                  onChange={(e) => {
                    const updatedEvents = [...formData.events];
                    updatedEvents[index] = { ...event, title: e.target.value };
                    setFormData(prev => ({ ...prev, events: updatedEvents }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Digital Literacy Workshop"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  value={event.type}
                  onChange={(e) => {
                    const updatedEvents = [...formData.events];
                    updatedEvents[index] = { ...event, type: e.target.value as 'current' | 'upcoming' };
                    setFormData(prev => ({ ...prev, events: updatedEvents }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="current">Current</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Schedule
                </label>
                <input
                  type="text"
                  value={event.schedule}
                  onChange={(e) => {
                    const updatedEvents = [...formData.events];
                    updatedEvents[index] = { ...event, schedule: e.target.value };
                    setFormData(prev => ({ ...prev, events: updatedEvents }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Every Saturday, 10:00 AM - 12:00 PM"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={event.targetAudience}
                  onChange={(e) => {
                    const updatedEvents = [...formData.events];
                    updatedEvents[index] = { ...event, targetAudience: e.target.value };
                    setFormData(prev => ({ ...prev, events: updatedEvents }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Adults, Seniors"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={event.description}
                onChange={(e) => {
                  const updatedEvents = [...formData.events];
                  updatedEvents[index] = { ...event, description: e.target.value };
                  setFormData(prev => ({ ...prev, events: updatedEvents }));
                }}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the event content and objectives..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedEvents = formData.events.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, events: updatedEvents }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Event
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              events: [...prev.events, {
                title: '',
                description: '',
                schedule: '',
                targetAudience: '',
                type: 'upcoming'
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Event
        </button>
      </div>
    </div>
  );

  const renderTechnology = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technology & Infrastructure
        </label>
        <p className="text-sm text-gray-600 mb-4">Add information about technology and equipment</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Digital Catalogs
            </label>
            {formData.technology.digitalCatalogs.map((catalog, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={catalog}
                  onChange={(e) => {
                    const updatedCatalogs = [...formData.technology.digitalCatalogs];
                    updatedCatalogs[index] = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      technology: { ...prev.technology, digitalCatalogs: updatedCatalogs }
                    }));
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Catalog ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const updatedCatalogs = formData.technology.digitalCatalogs.filter((_, i) => i !== index);
                    setFormData(prev => ({
                      ...prev,
                      technology: { ...prev.technology, digitalCatalogs: updatedCatalogs }
                    }));
                  }}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  technology: {
                    ...prev.technology,
                    digitalCatalogs: [...prev.technology.digitalCatalogs, '']
                  }
                }));
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <FaPlus /> Add Catalog
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Online Services
            </label>
            {formData.technology.onlineServices.map((service, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={service}
                  onChange={(e) => {
                    const updatedServices = [...formData.technology.onlineServices];
                    updatedServices[index] = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      technology: { ...prev.technology, onlineServices: updatedServices }
                    }));
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Service ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const updatedServices = formData.technology.onlineServices.filter((_, i) => i !== index);
                    setFormData(prev => ({
                      ...prev,
                      technology: { ...prev.technology, onlineServices: updatedServices }
                    }));
                  }}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  technology: {
                    ...prev.technology,
                    onlineServices: [...prev.technology.onlineServices, '']
                  }
                }));
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <FaPlus /> Add Service
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Equipment
            </label>
            {formData.technology.equipment.map((item, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const updatedEquipment = [...formData.technology.equipment];
                    updatedEquipment[index] = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      technology: { ...prev.technology, equipment: updatedEquipment }
                    }));
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Equipment ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const updatedEquipment = formData.technology.equipment.filter((_, i) => i !== index);
                    setFormData(prev => ({
                      ...prev,
                      technology: { ...prev.technology, equipment: updatedEquipment }
                    }));
                  }}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  technology: {
                    ...prev.technology,
                    equipment: [...prev.technology.equipment, '']
                  }
                }));
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <FaPlus /> Add Equipment
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'basic':
        return renderBasicInformation();
      case 'contact':
        return renderContactAddress();
      case 'membership':
        return renderMembershipDetails();
      case 'facilities':
        return renderFacilities();
      case 'collections':
        return renderCollections();
      case 'media':
        return renderMediaGallery();
      case 'fees':
        return renderMembershipFees();
      case 'programs':
        return renderPrograms();
      case 'news':
        return renderNews();
      case 'staff':
        return renderStaff();
      case 'career':
        return renderCareer();
      case 'events':
        return renderEvents();
      case 'technology':
        return renderTechnology();
      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Add New Library</h1>
                  <p className="text-gray-600 mt-2">Fill in the details to add a new library to the platform</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Form Sections</h2>
                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                            activeSection === section.id
                              ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{section.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Main Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                  {/* Section Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {sections.find(s => s.id === activeSection)?.label}
                    </h2>
                    <p className="text-gray-600">
                      Fill in the {sections.find(s => s.id === activeSection)?.label.toLowerCase()} for the library
                    </p>
                  </div>

                  {/* Section Content */}
                  {renderSection()}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <button
                      type="button"
                      onClick={() => {
                        const currentIndex = sections.findIndex(s => s.id === activeSection);
                        if (currentIndex > 0) {
                          setActiveSection(sections[currentIndex - 1].id);
                        }
                      }}
                      disabled={activeSection === sections[0].id}
                      className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>

                    <div className="flex gap-3">
                      {activeSection !== sections[sections.length - 1].id && (
                        <button
                          type="button"
                          onClick={() => {
                            const currentIndex = sections.findIndex(s => s.id === activeSection);
                            if (currentIndex < sections.length - 1) {
                              setActiveSection(sections[currentIndex + 1].id);
                            }
                          }}
                          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                          Next
                        </button>
                      )}

                      {activeSection === sections[sections.length - 1].id && (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <FaPlus />
                              Add Library
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddLibrariesPage;
