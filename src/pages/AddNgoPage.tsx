import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar, FaPhone, FaEnvelope, FaGlobe, FaHandsHelping, FaBook, FaCheckCircle, FaGraduationCap, FaTimes, FaHospitalAlt, FaBus, FaUserGraduate, FaSnowflake, FaWifi, FaChalkboardTeacher, FaPalette, FaMusic, FaTheaterMasks, FaUtensils, FaFutbol, FaDesktop, FaFlask, FaRobot, FaVideo, FaDoorOpen, FaBasketballBall, FaRunning, FaPrayingHands, FaImage, FaPlus, FaTrash, FaUsers, FaHandshake, FaHeart, FaLeaf, FaWater, FaGraduationCap as FaGraduationCap2 } from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';

interface NgoFormData {
  // Basic Information
  name: string;
  location: string;
  latitude: string;
  longitude: string;
  established: string;
  beneficiaries: string;
  rating: string;
  ngoType: string;
  focusArea: string;
  registrationNumber: string;
  description: string;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  
  // Address Information
  address: {
    ngoAddress: string;
    officeAddress: string;
    officePhone: string;
    officeFax: string;
    officeEmail: string;
    officeWebsite: string;
  };
  
  // Images
  image: string;
  heroBackground: string;
  
  // Programs & Services
  programs: string[];
  services: string[];
  
  // Facilities & Resources
  facilities: string[];
  
  // Quick Facts
  quickFacts: {
    registrationType: string;
    targetBeneficiaries: string;
    programsCount: string;
    operationalAreas: string;
    fundingSources: string;
    staffCount: string;
    volunteerCount: string;
    annualBudget: string;
  };
  
  // Operating Hours
  operatingHours: {
    monday: { open: string; close: string };
    tuesday: { open: string; close: string };
    wednesday: { open: string; close: string };
    thursday: { open: string; close: string };
    friday: { open: string; close: string };
    saturday: { open: string; close: string };
    sunday: { open: string; close: string };
  };
  
  // Focus Areas
  focusAreas: string[];
  
  // Impact & Achievements
  impact: {
    peopleHelped: string;
    projectsCompleted: string;
    awardsReceived: string;
    partnerships: string[];
  };
  
  // Funding & Donations
  funding: {
    annualBudget: string;
    fundingSources: string[];
    donationMethods: string[];
    transparencyRating: string;
  };
  
  // Features
  features: {
    featured: boolean;
    verified: boolean;
    taxExempt: boolean;
    internationalPresence: boolean;
  };
  
  // Media Gallery
  mediaGallery: Array<{
    type: 'image' | 'video';
    src: string;
    alt: string;
    thumbnail?: string;
  }>;
  
  // Programs & Projects
  programsList: Array<{
    name: string;
    description: string;
    beneficiaries: string;
    duration: string;
    budget: string;
    status: 'active' | 'completed' | 'upcoming';
  }>;
  
  // News & Updates
  news: Array<{
    title: string;
    date: string;
    content: string;
    category: string;
  }>;
  
  // Team & Staff
  team: Array<{
    name: string;
    position: string;
    experience: string;
    image: string;
    bio: string;
  }>;
  
  // Success Stories
  successStories: Array<{
    title: string;
    beneficiary: string;
    story: string;
    impact: string;
    image: string;
  }>;
  
  // Volunteer Opportunities
  volunteerOpportunities: Array<{
    position: string;
    description: string;
    requirements: string;
    commitment: string;
    location: string;
  }>;
  
  // Partnerships
  partnerships: Array<{
    name: string;
    type: string;
    description: string;
    duration: string;
  }>;
  
  // Reports & Publications
  reports: Array<{
    title: string;
    year: string;
    description: string;
    downloadLink: string;
  }>;
}

const AddNgoPage: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<NgoFormData>({
    // Basic Information
    name: '',
    location: '',
    latitude: '',
    longitude: '',
    established: '',
    beneficiaries: '',
    rating: '',
    ngoType: '',
    focusArea: '',
    registrationNumber: '',
    description: '',
    
    // Contact Information
    contact: {
      phone: '',
      email: '',
      website: '',
    },
    
    // Address Information
    address: {
      ngoAddress: '',
      officeAddress: '',
      officePhone: '',
      officeFax: '',
      officeEmail: '',
      officeWebsite: '',
    },
    
    // Images
    image: '',
    heroBackground: '',
    
    // Programs & Services
    programs: [''],
    services: [''],
    
    // Facilities & Resources
    facilities: [''],
    
    // Quick Facts
    quickFacts: {
      registrationType: '',
      targetBeneficiaries: '',
      programsCount: '',
      operationalAreas: '',
      fundingSources: '',
      staffCount: '',
      volunteerCount: '',
      annualBudget: '',
    },
    
    // Operating Hours
    operatingHours: {
      monday: { open: '9:00 AM', close: '6:00 PM' },
      tuesday: { open: '9:00 AM', close: '6:00 PM' },
      wednesday: { open: '9:00 AM', close: '6:00 PM' },
      thursday: { open: '9:00 AM', close: '6:00 PM' },
      friday: { open: '9:00 AM', close: '6:00 PM' },
      saturday: { open: '9:00 AM', close: '2:00 PM' },
      sunday: { open: 'Closed', close: 'Closed' },
    },
    
    // Focus Areas
    focusAreas: [''],
    
    // Impact & Achievements
    impact: {
      peopleHelped: '',
      projectsCompleted: '',
      awardsReceived: '',
      partnerships: [''],
    },
    
    // Funding & Donations
    funding: {
      annualBudget: '',
      fundingSources: [''],
      donationMethods: [''],
      transparencyRating: '',
    },
    
    // Features
    features: {
      featured: false,
      verified: false,
      taxExempt: false,
      internationalPresence: false,
    },
    
    // Media Gallery
    mediaGallery: [],
    
    // Programs & Projects
    programsList: [],
    
    // News & Updates
    news: [],
    
    // Team & Staff
    team: [],
    
    // Success Stories
    successStories: [],
    
    // Volunteer Opportunities
    volunteerOpportunities: [],
    
    // Partnerships
    partnerships: [],
    
    // Reports & Publications
    reports: [],
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

  const handleNestedInputChange = (parent: keyof NgoFormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value
      }
    }));
  };

  const handleArrayInputChange = (field: keyof NgoFormData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: keyof NgoFormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), '']
    }));
  };

  const removeArrayItem = (field: keyof NgoFormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_: string, i: number) => i !== index)
    }));
  };

  // Helper functions for complex array operations
  const handleComplexArrayChange = (parent: keyof NgoFormData, index: number, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: (prev[parent] as any[]).map((item: any, i: number) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addComplexArrayItem = (parent: keyof NgoFormData, defaultItem: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: [...(prev[parent] as any[]), defaultItem]
    }));
  };

  const removeComplexArrayItem = (parent: keyof NgoFormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [parent]: (prev[parent] as any[]).filter((_: any, i: number) => i !== index)
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
      console.log('NGO data to be submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert('NGO added successfully!');
      navigate('/ngos');
    } catch (error) {
      console.error('Error adding NGO:', error);
      alert('Error adding NGO. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { id: 'basic', label: 'Basic Information', icon: FaHandsHelping },
    { id: 'contact', label: 'Contact & Address', icon: FaPhone },
    { id: 'programs', label: 'Programs & Services', icon: FaGraduationCap },
    { id: 'facilities', label: 'Facilities & Resources', icon: FaHospitalAlt },
    { id: 'impact', label: 'Impact & Achievements', icon: FaStar },
    { id: 'funding', label: 'Funding & Donations', icon: FaHandshake },
    { id: 'media', label: 'Media & Gallery', icon: FaImage },
    { id: 'projects', label: 'Programs & Projects', icon: FaUsers },
    { id: 'news', label: 'News & Updates', icon: FaGlobe },
    { id: 'team', label: 'Team & Staff', icon: FaUserGraduate },
    { id: 'stories', label: 'Success Stories', icon: FaHeart },
    { id: 'volunteer', label: 'Volunteer Opportunities', icon: FaRunning },
    { id: 'partnerships', label: 'Partnerships', icon: FaHandshake },
    { id: 'reports', label: 'Reports & Publications', icon: FaBook },
  ];

  // Continue with render functions...
  const renderBasicInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NGO Name *
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
            placeholder="e.g., Mumbai, Maharashtra"
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
            placeholder="e.g., 19.0760"
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
            placeholder="e.g., 72.8777"
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
            placeholder="e.g., 1995"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Beneficiaries
          </label>
          <input
            type="text"
            value={formData.beneficiaries}
            onChange={(e) => handleInputChange('beneficiaries', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 10,000+"
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
            NGO Type *
          </label>
          <select
            value={formData.ngoType}
            onChange={(e) => handleInputChange('ngoType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select NGO Type</option>
            <option value="Charitable Trust">Charitable Trust</option>
            <option value="Society">Society</option>
            <option value="Section 8 Company">Section 8 Company</option>
            <option value="Foundation">Foundation</option>
            <option value="International NGO">International NGO</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Focus Area *
          </label>
          <select
            value={formData.focusArea}
            onChange={(e) => handleInputChange('focusArea', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Focus Area</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Environment">Environment</option>
            <option value="Women Empowerment">Women Empowerment</option>
            <option value="Child Welfare">Child Welfare</option>
            <option value="Rural Development">Rural Development</option>
            <option value="Disaster Relief">Disaster Relief</option>
            <option value="Animal Welfare">Animal Welfare</option>
            <option value="Human Rights">Human Rights</option>
            <option value="Poverty Alleviation">Poverty Alleviation</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Registration Number
          </label>
          <input
            type="text"
            value={formData.registrationNumber}
            onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., F-12345"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          NGO Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Provide a detailed description of the NGO's mission, vision, and work..."
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NGO Image URL
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => handleInputChange('image', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/ngo-image.jpg"
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

  // Continue with other render functions...
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
            placeholder="https://www.ngowebsite.org"
          />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NGO Address *
          </label>
          <textarea
            value={formData.address.ngoAddress}
            onChange={(e) => handleNestedInputChange('address', 'ngoAddress', e.target.value)}
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

  // Add placeholder render functions for other sections
  const renderProgramsServices = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Programs Offered
        </label>
        {formData.programs.map((program, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={program}
              onChange={(e) => handleArrayInputChange('programs', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Program ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('programs', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('programs')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Program
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Services Provided
        </label>
        {formData.services.map((service, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={service}
              onChange={(e) => handleArrayInputChange('services', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Service ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('services', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('services')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Service
        </button>
      </div>
    </div>
  );

  const renderFacilities = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Available Facilities & Resources
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
            Registration Type
          </label>
          <input
            type="text"
            value={formData.quickFacts.registrationType}
            onChange={(e) => handleNestedInputChange('quickFacts', 'registrationType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Trust, Society, Section 8"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Beneficiaries
          </label>
          <input
            type="text"
            value={formData.quickFacts.targetBeneficiaries}
            onChange={(e) => handleNestedInputChange('quickFacts', 'targetBeneficiaries', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Children, Women, Rural Communities"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Programs
          </label>
          <input
            type="text"
            value={formData.quickFacts.programsCount}
            onChange={(e) => handleNestedInputChange('quickFacts', 'programsCount', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 15+"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Operational Areas
          </label>
          <input
            type="text"
            value={formData.quickFacts.operationalAreas}
            onChange={(e) => handleNestedInputChange('quickFacts', 'operationalAreas', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Maharashtra, Karnataka, Tamil Nadu"
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
            placeholder="e.g., 50+"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Volunteer Count
          </label>
          <input
            type="text"
            value={formData.quickFacts.volunteerCount}
            onChange={(e) => handleNestedInputChange('quickFacts', 'volunteerCount', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 200+"
          />
        </div>
      </div>
    </div>
  );

  // Add placeholder functions for remaining sections
  const renderImpact = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            People Helped
          </label>
          <input
            type="text"
            value={formData.impact.peopleHelped}
            onChange={(e) => handleNestedInputChange('impact', 'peopleHelped', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 50,000+"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Projects Completed
          </label>
          <input
            type="text"
            value={formData.impact.projectsCompleted}
            onChange={(e) => handleNestedInputChange('impact', 'projectsCompleted', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 150+"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Awards Received
          </label>
          <input
            type="text"
            value={formData.impact.awardsReceived}
            onChange={(e) => handleNestedInputChange('impact', 'awardsReceived', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 25+"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Key Partnerships
        </label>
        {formData.impact.partnerships.map((partnership, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={partnership}
              onChange={(e) => handleArrayInputChange('impact.partnerships' as any, index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Partnership ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('impact.partnerships' as any, index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('impact.partnerships' as any)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Partnership
        </button>
      </div>
    </div>
  );

  const renderFunding = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Budget
          </label>
          <input
            type="text"
            value={formData.funding.annualBudget}
            onChange={(e) => handleNestedInputChange('funding', 'annualBudget', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., ₹2.5 Crores"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transparency Rating
          </label>
          <select
            value={formData.funding.transparencyRating}
            onChange={(e) => handleNestedInputChange('funding', 'transparencyRating', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Rating</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Funding Sources
        </label>
        {formData.funding.fundingSources.map((source, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={source}
              onChange={(e) => handleArrayInputChange('funding.fundingSources' as any, index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Funding source ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('funding.fundingSources' as any, index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('funding.fundingSources' as any)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Funding Source
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Donation Methods
        </label>
        {formData.funding.donationMethods.map((method, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={method}
              onChange={(e) => handleArrayInputChange('funding.donationMethods' as any, index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Donation method ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('funding.donationMethods' as any, index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('funding.donationMethods' as any)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Donation Method
        </button>
      </div>
    </div>
  );

  const renderMediaGallery = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Media Gallery
        </label>
        <p className="text-sm text-gray-600 mb-4">Add images and videos to showcase the NGO</p>
        
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

  const renderProjects = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Programs & Projects
        </label>
        <p className="text-sm text-gray-600 mb-4">Add detailed information about programs and projects</p>
        
        {formData.programsList.map((program, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program Name
                </label>
                <input
                  type="text"
                  value={program.name}
                  onChange={(e) => handleComplexArrayChange('programsList', index, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Education for All"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={program.status}
                  onChange={(e) => handleComplexArrayChange('programsList', index, 'status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beneficiaries
                </label>
                <input
                  type="text"
                  value={program.beneficiaries}
                  onChange={(e) => handleComplexArrayChange('programsList', index, 'beneficiaries', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 500 children"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  value={program.duration}
                  onChange={(e) => handleComplexArrayChange('programsList', index, 'duration', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 2 years"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <input
                  type="text"
                  value={program.budget}
                  onChange={(e) => handleComplexArrayChange('programsList', index, 'budget', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹50 Lakhs"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={program.description}
                onChange={(e) => handleComplexArrayChange('programsList', index, 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the program objectives, activities, and expected outcomes..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeComplexArrayItem('programsList', index)}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Program
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => addComplexArrayItem('programsList', {
            name: '',
            description: '',
            beneficiaries: '',
            duration: '',
            budget: '',
            status: 'active'
          })}
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
        <p className="text-sm text-gray-600 mb-4">Add news and updates about the NGO</p>
        
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
                  onChange={(e) => handleComplexArrayChange('news', index, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., New Education Program Launched"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="text"
                  value={newsItem.date}
                  onChange={(e) => handleComplexArrayChange('news', index, 'date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 15 March 2024"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newsItem.category}
                  onChange={(e) => handleComplexArrayChange('news', index, 'category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Category</option>
                  <option value="programs">Programs</option>
                  <option value="achievements">Achievements</option>
                  <option value="events">Events</option>
                  <option value="partnerships">Partnerships</option>
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
                onChange={(e) => handleComplexArrayChange('news', index, 'content', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the news content..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeComplexArrayItem('news', index)}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove News
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => addComplexArrayItem('news', {
            title: '',
            date: '',
            content: '',
            category: ''
          })}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add News
        </button>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Team & Staff
        </label>
        <p className="text-sm text-gray-600 mb-4">Add information about key team members and staff</p>
        
        {formData.team.map((member, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => handleComplexArrayChange('team', index, 'name', e.target.value)}
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
                  value={member.position}
                  onChange={(e) => handleComplexArrayChange('team', index, 'position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Executive Director"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience
                </label>
                <input
                  type="text"
                  value={member.experience}
                  onChange={(e) => handleComplexArrayChange('team', index, 'experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 15+ years"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={member.image}
                  onChange={(e) => handleComplexArrayChange('team', index, 'image', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/member-image.jpg"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                value={member.bio}
                onChange={(e) => handleComplexArrayChange('team', index, 'bio', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter member's bio and background..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeComplexArrayItem('team', index)}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Member
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => addComplexArrayItem('team', {
            name: '',
            position: '',
            experience: '',
            image: '',
            bio: ''
          })}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Team Member
        </button>
      </div>
    </div>
  );

  const renderStories = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Success Stories
        </label>
        <p className="text-sm text-gray-600 mb-4">Add inspiring success stories and impact stories</p>
        
        {formData.successStories.map((story, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Story Title
                </label>
                <input
                  type="text"
                  value={story.title}
                  onChange={(e) => handleComplexArrayChange('successStories', index, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., From Dropout to Doctor"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beneficiary Name
                </label>
                <input
                  type="text"
                  value={story.beneficiary}
                  onChange={(e) => handleComplexArrayChange('successStories', index, 'beneficiary', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Priya Sharma"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Impact
                </label>
                <input
                  type="text"
                  value={story.impact}
                  onChange={(e) => handleComplexArrayChange('successStories', index, 'impact', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Completed medical degree"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={story.image}
                  onChange={(e) => handleComplexArrayChange('successStories', index, 'image', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/success-story.jpg"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Story Details
              </label>
              <textarea
                value={story.story}
                onChange={(e) => handleComplexArrayChange('successStories', index, 'story', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell the complete success story..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeComplexArrayItem('successStories', index)}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Story
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => addComplexArrayItem('successStories', {
            title: '',
            beneficiary: '',
            story: '',
            impact: '',
            image: ''
          })}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Success Story
        </button>
      </div>
    </div>
  );

  const renderVolunteer = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Volunteer Opportunities
        </label>
        <p className="text-sm text-gray-600 mb-4">Add volunteer positions and opportunities</p>
        
        {formData.volunteerOpportunities.map((opportunity, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <input
                  type="text"
                  value={opportunity.position}
                  onChange={(e) => handleComplexArrayChange('volunteerOpportunities', index, 'position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Teaching Assistant"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={opportunity.location}
                  onChange={(e) => handleComplexArrayChange('volunteerOpportunities', index, 'location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Mumbai, Maharashtra"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements
                </label>
                <input
                  type="text"
                  value={opportunity.requirements}
                  onChange={(e) => handleComplexArrayChange('volunteerOpportunities', index, 'requirements', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Graduate degree, teaching experience"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commitment
                </label>
                <input
                  type="text"
                  value={opportunity.commitment}
                  onChange={(e) => handleComplexArrayChange('volunteerOpportunities', index, 'commitment', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 10 hours per week"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={opportunity.description}
                onChange={(e) => handleComplexArrayChange('volunteerOpportunities', index, 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the volunteer role and responsibilities..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeComplexArrayItem('volunteerOpportunities', index)}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Opportunity
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => addComplexArrayItem('volunteerOpportunities', {
            position: '',
            description: '',
            requirements: '',
            commitment: '',
            location: ''
          })}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Volunteer Opportunity
        </button>
      </div>
    </div>
  );

  const renderPartnerships = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Partnerships
        </label>
        <p className="text-sm text-gray-600 mb-4">Add information about partner organizations and collaborations</p>
        
        {formData.partnerships.map((partnership, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partner Name
                </label>
                <input
                  type="text"
                  value={partnership.name}
                  onChange={(e) => handleComplexArrayChange('partnerships', index, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., UNICEF"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Type
                </label>
                <select
                  value={partnership.type}
                  onChange={(e) => handleComplexArrayChange('partnerships', index, 'type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Type</option>
                  <option value="Funding">Funding</option>
                  <option value="Technical">Technical</option>
                  <option value="Implementation">Implementation</option>
                  <option value="Research">Research</option>
                  <option value="Advocacy">Advocacy</option>
                  <option value="Capacity Building">Capacity Building</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  value={partnership.duration}
                  onChange={(e) => handleComplexArrayChange('partnerships', index, 'duration', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 2020-2025"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={partnership.description}
                onChange={(e) => handleComplexArrayChange('partnerships', index, 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the partnership objectives and activities..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeComplexArrayItem('partnerships', index)}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Partnership
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => addComplexArrayItem('partnerships', {
            name: '',
            type: '',
            description: '',
            duration: ''
          })}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Partnership
        </button>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Reports & Publications
        </label>
        <p className="text-sm text-gray-600 mb-4">Add annual reports, research papers, and publications</p>
        
        {formData.reports.map((report, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Report Title
                </label>
                <input
                  type="text"
                  value={report.title}
                  onChange={(e) => handleComplexArrayChange('reports', index, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Annual Report 2023"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <input
                  type="text"
                  value={report.year}
                  onChange={(e) => handleComplexArrayChange('reports', index, 'year', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 2023"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Download Link
                </label>
                <input
                  type="url"
                  value={report.downloadLink}
                  onChange={(e) => handleComplexArrayChange('reports', index, 'downloadLink', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/report.pdf"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={report.description}
                onChange={(e) => handleComplexArrayChange('reports', index, 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the report content and key findings..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeComplexArrayItem('reports', index)}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Report
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => addComplexArrayItem('reports', {
            title: '',
            year: '',
            description: '',
            downloadLink: ''
          })}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Report
        </button>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'basic':
        return renderBasicInformation();
      case 'contact':
        return renderContactAddress();
      case 'programs':
        return renderProgramsServices();
      case 'facilities':
        return renderFacilities();
      case 'impact':
        return renderImpact();
      case 'funding':
        return renderFunding();
      case 'media':
        return renderMediaGallery();
      case 'projects':
        return renderProjects();
      case 'news':
        return renderNews();
      case 'team':
        return renderTeam();
      case 'stories':
        return renderStories();
      case 'volunteer':
        return renderVolunteer();
      case 'partnerships':
        return renderPartnerships();
      case 'reports':
        return renderReports();
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
                  <h1 className="text-3xl font-bold text-gray-800">Add New NGO</h1>
                  <p className="text-gray-600 mt-2">Fill in the details to add a new NGO to the platform</p>
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
                      Fill in the {sections.find(s => s.id === activeSection)?.label.toLowerCase()} for the NGO
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
                              Add NGO
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

export default AddNgoPage;
