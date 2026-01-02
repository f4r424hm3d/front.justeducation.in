import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar, FaPhone, FaEnvelope, FaGlobe, FaGraduationCap, FaCheckCircle, FaTimes, FaHospitalAlt, FaUserGraduate, FaImage, FaPlus, FaTrash, FaPlane, FaUniversity, FaCertificate, FaHandshake, FaMoneyBillWave, FaClipboardList, FaComments, FaAward, FaBookOpen, FaUsers, FaGlobeAmericas } from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';

interface MbbsConsultantFormData {
  // Basic Information
  name: string;
  location: string;
  latitude: string;
  longitude: string;
  established: string;
  experience: string;
  rating: string;
  consultantType: string;
  description: string;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  
  // Address Information
  address: {
    officeAddress: string;
    officePhone: string;
    officeEmail: string;
    officeWebsite: string;
  };
  
  // Images
  image: string;
  heroBackground: string;
  
  // Services
  services: string[];
  countries: string[];
  
  // Specializations
  specializations: string[];
  
  // Quick Facts
  quickFacts: {
    experience: string;
    successRate: string;
    studentsPlaced: string;
    countriesCovered: string;
    averageProcessingTime: string;
    consultationFee: string;
  };
  
  // Office Hours
  officeHours: {
    monday: { open: string; close: string };
    tuesday: { open: string; close: string };
    wednesday: { open: string; close: string };
    thursday: { open: string; close: string };
    friday: { open: string; close: string };
    saturday: { open: string; close: string };
    sunday: { open: string; close: string };
  };
  
  // Languages
  languages: string[];
  
  // Features
  features: {
    featured: boolean;
    verified: boolean;
    approvedBy: string;
  };
  
  // Media Gallery
  mediaGallery: Array<{
    type: 'image' | 'video';
    src: string;
    alt: string;
    thumbnail?: string;
  }>;
  
  // Service Packages
  servicePackages: Array<{
    name: string;
    description: string;
    price: string;
    duration: string;
    includes: string[];
  }>;
  
  // Universities
  universities: Array<{
    name: string;
    country: string;
    ranking: string;
    fees: string;
    duration: string;
    requirements: string;
  }>;
  
  // Testimonials
  testimonials: Array<{
    name: string;
    country: string;
    university: string;
    image: string;
    testimonial: string;
    rating: string;
  }>;
  
  // Success Stories
  successStories: {
    totalStudents: string;
    successRate: string;
    averageScore: string;
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
  
  // Application Process
  applicationProcess: {
    steps: string[];
    documents: string[];
    timeline: string;
  };
  
  // Support Services
  supportServices: {
    preDeparture: string[];
    postArrival: string[];
    ongoingSupport: string[];
  };
}

const AddMbbsAbroadConsultantPage: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<MbbsConsultantFormData>({
    // Basic Information
    name: '',
    location: '',
    latitude: '',
    longitude: '',
    established: '',
    experience: '',
    rating: '',
    consultantType: '',
    description: '',
    
    // Contact Information
    contact: {
      phone: '',
      email: '',
      website: '',
    },
    
    // Address Information
    address: {
      officeAddress: '',
      officePhone: '',
      officeEmail: '',
      officeWebsite: '',
    },
    
    // Images
    image: '',
    heroBackground: '',
    
    // Services
    services: [''],
    countries: [''],
    
    // Specializations
    specializations: [''],
    
    // Quick Facts
    quickFacts: {
      experience: '',
      successRate: '',
      studentsPlaced: '',
      countriesCovered: '',
      averageProcessingTime: '',
      consultationFee: '',
    },
    
    // Office Hours
    officeHours: {
      monday: { open: '9:00 AM', close: '6:00 PM' },
      tuesday: { open: '9:00 AM', close: '6:00 PM' },
      wednesday: { open: '9:00 AM', close: '6:00 PM' },
      thursday: { open: '9:00 AM', close: '6:00 PM' },
      friday: { open: '9:00 AM', close: '6:00 PM' },
      saturday: { open: '9:00 AM', close: '4:00 PM' },
      sunday: { open: 'Closed', close: 'Closed' },
    },
    
    // Languages
    languages: ['English'],
    
    // Features
    features: {
      featured: false,
      verified: false,
      approvedBy: '',
    },
    
    // Media Gallery
    mediaGallery: [],
    
    // Service Packages
    servicePackages: [],
    
    // Universities
    universities: [],
    
    // Testimonials
    testimonials: [],
    
    // Success Stories
    successStories: {
      totalStudents: '',
      successRate: '',
      averageScore: '',
    },
    
    // Career Opportunities
    career: {
      vacancies: [],
      qualifications: '',
      perks: [''],
      applicationInstructions: '',
    },
    
    // Application Process
    applicationProcess: {
      steps: [''],
      documents: [''],
      timeline: '',
    },
    
    // Support Services
    supportServices: {
      preDeparture: [''],
      postArrival: [''],
      ongoingSupport: [''],
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

  const handleNestedInputChange = (parent: keyof MbbsConsultantFormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value
      }
    }));
  };

  const handleArrayInputChange = (field: keyof MbbsConsultantFormData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: keyof MbbsConsultantFormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), '']
    }));
  };

  const removeArrayItem = (field: keyof MbbsConsultantFormData, index: number) => {
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
      console.log('MBBS Consultant data to be submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert('MBBS Abroad Consultant added successfully!');
      navigate('/mbbs-abroad-consultants');
    } catch (error) {
      console.error('Error adding MBBS consultant:', error);
      alert('Error adding MBBS consultant. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { id: 'basic', label: 'Basic Information', icon: FaGraduationCap },
    { id: 'contact', label: 'Contact & Address', icon: FaPhone },
    { id: 'services', label: 'Services & Countries', icon: FaGlobeAmericas },
    { id: 'specializations', label: 'Specializations', icon: FaCertificate },
    { id: 'packages', label: 'Service Packages', icon: FaMoneyBillWave },
    { id: 'universities', label: 'Partner Universities', icon: FaUniversity },
    { id: 'testimonials', label: 'Testimonials', icon: FaComments },
    { id: 'process', label: 'Application Process', icon: FaClipboardList },
    { id: 'support', label: 'Support Services', icon: FaHandshake },
    { id: 'media', label: 'Media & Gallery', icon: FaImage },
    { id: 'career', label: 'Career Opportunities', icon: FaUsers },
  ];

  const renderBasicInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consultant Name *
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
            placeholder="e.g., 2010"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Years of Experience *
          </label>
          <input
            type="text"
            value={formData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 15+ years"
            required
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
            placeholder="e.g., 4.8"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consultant Type *
          </label>
          <select
            value={formData.consultantType}
            onChange={(e) => handleInputChange('consultantType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Individual Consultant">Individual Consultant</option>
            <option value="Consulting Agency">Consulting Agency</option>
            <option value="Educational Institution">Educational Institution</option>
            <option value="International Partner">International Partner</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Consultant Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Provide a detailed description of the consultant services..."
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consultant Image URL
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => handleInputChange('image', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/consultant-image.jpg"
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
            placeholder="https://www.consultantwebsite.com"
          />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Office Address Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Office Address *
          </label>
          <textarea
            value={formData.address.officeAddress}
            onChange={(e) => handleNestedInputChange('address', 'officeAddress', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
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

  const renderServices = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Services Offered
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
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Countries Covered
        </label>
        {formData.countries.map((country, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={country}
              onChange={(e) => handleArrayInputChange('countries', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Country ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('countries', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('countries')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Country
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Years of Experience
          </label>
          <input
            type="text"
            value={formData.quickFacts.experience}
            onChange={(e) => handleNestedInputChange('quickFacts', 'experience', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 15+ years"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Success Rate
          </label>
          <input
            type="text"
            value={formData.quickFacts.successRate}
            onChange={(e) => handleNestedInputChange('quickFacts', 'successRate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 95%"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Students Placed
          </label>
          <input
            type="text"
            value={formData.quickFacts.studentsPlaced}
            onChange={(e) => handleNestedInputChange('quickFacts', 'studentsPlaced', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 1000+"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Countries Covered
          </label>
          <input
            type="text"
            value={formData.quickFacts.countriesCovered}
            onChange={(e) => handleNestedInputChange('quickFacts', 'countriesCovered', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 15+ countries"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Processing Time
          </label>
          <input
            type="text"
            value={formData.quickFacts.averageProcessingTime}
            onChange={(e) => handleNestedInputChange('quickFacts', 'averageProcessingTime', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 3-6 months"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consultation Fee
          </label>
          <input
            type="text"
            value={formData.quickFacts.consultationFee}
            onChange={(e) => handleNestedInputChange('quickFacts', 'consultationFee', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., ₹5,000 - ₹15,000"
          />
        </div>
      </div>
    </div>
  );

  const renderSpecializations = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Specializations
        </label>
        {formData.specializations.map((specialization, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={specialization}
              onChange={(e) => handleArrayInputChange('specializations', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Specialization ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('specializations', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('specializations')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Specialization
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Languages Spoken
        </label>
        {formData.languages.map((language, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={language}
              onChange={(e) => handleArrayInputChange('languages', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Language ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('languages', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('languages')}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Language
        </button>
      </div>
    </div>
  );

  const renderPackages = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Packages
        </label>
        <p className="text-sm text-gray-600 mb-4">Add different service packages offered by the consultant</p>
        
        {formData.servicePackages.map((pkg, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Package Name
                </label>
                <input
                  type="text"
                  value={pkg.name}
                  onChange={(e) => {
                    const updatedPackages = [...formData.servicePackages];
                    updatedPackages[index] = { ...pkg, name: e.target.value };
                    setFormData(prev => ({ ...prev, servicePackages: updatedPackages }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Basic Consultation Package"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="text"
                  value={pkg.price}
                  onChange={(e) => {
                    const updatedPackages = [...formData.servicePackages];
                    updatedPackages[index] = { ...pkg, price: e.target.value };
                    setFormData(prev => ({ ...prev, servicePackages: updatedPackages }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹25,000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  value={pkg.duration}
                  onChange={(e) => {
                    const updatedPackages = [...formData.servicePackages];
                    updatedPackages[index] = { ...pkg, duration: e.target.value };
                    setFormData(prev => ({ ...prev, servicePackages: updatedPackages }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 6 months"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Description
              </label>
              <textarea
                value={pkg.description}
                onChange={(e) => {
                  const updatedPackages = [...formData.servicePackages];
                  updatedPackages[index] = { ...pkg, description: e.target.value };
                  setFormData(prev => ({ ...prev, servicePackages: updatedPackages }));
                }}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe what's included in this package..."
              />
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What's Included
              </label>
              {pkg.includes.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const updatedPackages = [...formData.servicePackages];
                      const updatedIncludes = [...pkg.includes];
                      updatedIncludes[itemIndex] = e.target.value;
                      updatedPackages[index] = { ...pkg, includes: updatedIncludes };
                      setFormData(prev => ({ ...prev, servicePackages: updatedPackages }));
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Included item ${itemIndex + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedPackages = [...formData.servicePackages];
                      const updatedIncludes = pkg.includes.filter((_, i) => i !== itemIndex);
                      updatedPackages[index] = { ...pkg, includes: updatedIncludes };
                      setFormData(prev => ({ ...prev, servicePackages: updatedPackages }));
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
                  const updatedPackages = [...formData.servicePackages];
                  const updatedIncludes = [...pkg.includes, ''];
                  updatedPackages[index] = { ...pkg, includes: updatedIncludes };
                  setFormData(prev => ({ ...prev, servicePackages: updatedPackages }));
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
              >
                <FaPlus /> Add Item
              </button>
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedPackages = formData.servicePackages.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, servicePackages: updatedPackages }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Package
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              servicePackages: [...prev.servicePackages, {
                name: '',
                description: '',
                price: '',
                duration: '',
                includes: ['']
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Service Package
        </button>
      </div>
    </div>
  );

  const renderUniversities = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Partner Universities
        </label>
        <p className="text-sm text-gray-600 mb-4">Add partner universities and medical colleges</p>
        
        {formData.universities.map((university, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University Name
                </label>
                <input
                  type="text"
                  value={university.name}
                  onChange={(e) => {
                    const updatedUniversities = [...formData.universities];
                    updatedUniversities[index] = { ...university, name: e.target.value };
                    setFormData(prev => ({ ...prev, universities: updatedUniversities }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Moscow State Medical University"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={university.country}
                  onChange={(e) => {
                    const updatedUniversities = [...formData.universities];
                    updatedUniversities[index] = { ...university, country: e.target.value };
                    setFormData(prev => ({ ...prev, universities: updatedUniversities }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Russia"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  World Ranking
                </label>
                <input
                  type="text"
                  value={university.ranking}
                  onChange={(e) => {
                    const updatedUniversities = [...formData.universities];
                    updatedUniversities[index] = { ...university, ranking: e.target.value };
                    setFormData(prev => ({ ...prev, universities: updatedUniversities }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., #150 in World"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Fees
                </label>
                <input
                  type="text"
                  value={university.fees}
                  onChange={(e) => {
                    const updatedUniversities = [...formData.universities];
                    updatedUniversities[index] = { ...university, fees: e.target.value };
                    setFormData(prev => ({ ...prev, universities: updatedUniversities }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., $4,000 - $6,000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Duration
                </label>
                <input
                  type="text"
                  value={university.duration}
                  onChange={(e) => {
                    const updatedUniversities = [...formData.universities];
                    updatedUniversities[index] = { ...university, duration: e.target.value };
                    setFormData(prev => ({ ...prev, universities: updatedUniversities }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 6 years"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admission Requirements
              </label>
              <textarea
                value={university.requirements}
                onChange={(e) => {
                  const updatedUniversities = [...formData.universities];
                  updatedUniversities[index] = { ...university, requirements: e.target.value };
                  setFormData(prev => ({ ...prev, universities: updatedUniversities }));
                }}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe admission requirements, documents needed, etc..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedUniversities = formData.universities.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, universities: updatedUniversities }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove University
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              universities: [...prev.universities, {
                name: '',
                country: '',
                ranking: '',
                fees: '',
                duration: '',
                requirements: ''
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add University
        </button>
      </div>
    </div>
  );

  const renderTestimonials = () => (
    <div className="space-y-6">
      {/* Success Stories Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Success Stories / Statistics
        </label>
        <p className="text-sm text-gray-600 mb-4">Add overall success statistics and achievements</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Students Placed
            </label>
            <input
              type="text"
              value={formData.successStories.totalStudents}
              onChange={(e) => handleNestedInputChange('successStories', 'totalStudents', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 500+"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Success Rate
            </label>
            <input
              type="text"
              value={formData.successStories.successRate}
              onChange={(e) => handleNestedInputChange('successStories', 'successRate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 95%"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average NEET Score
            </label>
            <input
              type="text"
              value={formData.successStories.averageScore}
              onChange={(e) => handleNestedInputChange('successStories', 'averageScore', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 650+"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Student Testimonials
        </label>
        <p className="text-sm text-gray-600 mb-4">Add testimonials from successful students</p>
        
        {formData.testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name
                </label>
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) => {
                    const updatedTestimonials = [...formData.testimonials];
                    updatedTestimonials[index] = { ...testimonial, name: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Priya Sharma"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={testimonial.country}
                  onChange={(e) => {
                    const updatedTestimonials = [...formData.testimonials];
                    updatedTestimonials[index] = { ...testimonial, country: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Russia"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University
                </label>
                <input
                  type="text"
                  value={testimonial.university}
                  onChange={(e) => {
                    const updatedTestimonials = [...formData.testimonials];
                    updatedTestimonials[index] = { ...testimonial, university: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Moscow State Medical University"
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
                  value={testimonial.rating}
                  onChange={(e) => {
                    const updatedTestimonials = [...formData.testimonials];
                    updatedTestimonials[index] = { ...testimonial, rating: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 5.0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Image URL
                </label>
                <input
                  type="url"
                  value={testimonial.image}
                  onChange={(e) => {
                    const updatedTestimonials = [...formData.testimonials];
                    updatedTestimonials[index] = { ...testimonial, image: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/student-image.jpg"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimonial
              </label>
              <textarea
                value={testimonial.testimonial}
                onChange={(e) => {
                  const updatedTestimonials = [...formData.testimonials];
                  updatedTestimonials[index] = { ...testimonial, testimonial: e.target.value };
                  setFormData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                }}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the student's testimonial..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedTestimonials = formData.testimonials.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, testimonials: updatedTestimonials }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Testimonial
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              testimonials: [...prev.testimonials, {
                name: '',
                country: '',
                university: '',
                image: '',
                testimonial: '',
                rating: ''
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Testimonial
        </button>
      </div>
    </div>
  );

  const renderProcess = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Application Process Steps
        </label>
        <p className="text-sm text-gray-600 mb-4">Define the step-by-step application process</p>
        
        {formData.applicationProcess.steps.map((step, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={step}
              onChange={(e) => {
                const updatedSteps = [...formData.applicationProcess.steps];
                updatedSteps[index] = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  applicationProcess: { ...prev.applicationProcess, steps: updatedSteps }
                }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Step ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedSteps = formData.applicationProcess.steps.filter((_, i) => i !== index);
                setFormData(prev => ({
                  ...prev,
                  applicationProcess: { ...prev.applicationProcess, steps: updatedSteps }
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
              applicationProcess: {
                ...prev.applicationProcess,
                steps: [...prev.applicationProcess.steps, '']
              }
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Step
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Required Documents
        </label>
        <p className="text-sm text-gray-600 mb-4">List all required documents for the application</p>
        
        {formData.applicationProcess.documents.map((document, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={document}
              onChange={(e) => {
                const updatedDocuments = [...formData.applicationProcess.documents];
                updatedDocuments[index] = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  applicationProcess: { ...prev.applicationProcess, documents: updatedDocuments }
                }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Document ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedDocuments = formData.applicationProcess.documents.filter((_, i) => i !== index);
                setFormData(prev => ({
                  ...prev,
                  applicationProcess: { ...prev.applicationProcess, documents: updatedDocuments }
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
              applicationProcess: {
                ...prev.applicationProcess,
                documents: [...prev.applicationProcess.documents, '']
              }
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Document
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Application Timeline
        </label>
        <textarea
          value={formData.applicationProcess.timeline}
          onChange={(e) => handleNestedInputChange('applicationProcess', 'timeline', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe the typical timeline for the application process..."
        />
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pre-Departure Support Services
        </label>
        <p className="text-sm text-gray-600 mb-4">Services provided before students leave for abroad</p>
        
        {formData.supportServices.preDeparture.map((service, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={service}
              onChange={(e) => {
                const updatedServices = [...formData.supportServices.preDeparture];
                updatedServices[index] = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  supportServices: { ...prev.supportServices, preDeparture: updatedServices }
                }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Pre-departure service ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedServices = formData.supportServices.preDeparture.filter((_, i) => i !== index);
                setFormData(prev => ({
                  ...prev,
                  supportServices: { ...prev.supportServices, preDeparture: updatedServices }
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
              supportServices: {
                ...prev.supportServices,
                preDeparture: [...prev.supportServices.preDeparture, '']
              }
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Pre-Departure Service
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Post-Arrival Support Services
        </label>
        <p className="text-sm text-gray-600 mb-4">Services provided after students arrive at their destination</p>
        
        {formData.supportServices.postArrival.map((service, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={service}
              onChange={(e) => {
                const updatedServices = [...formData.supportServices.postArrival];
                updatedServices[index] = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  supportServices: { ...prev.supportServices, postArrival: updatedServices }
                }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Post-arrival service ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedServices = formData.supportServices.postArrival.filter((_, i) => i !== index);
                setFormData(prev => ({
                  ...prev,
                  supportServices: { ...prev.supportServices, postArrival: updatedServices }
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
              supportServices: {
                ...prev.supportServices,
                postArrival: [...prev.supportServices.postArrival, '']
              }
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Post-Arrival Service
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ongoing Support Services
        </label>
        <p className="text-sm text-gray-600 mb-4">Continuous support services throughout the study period</p>
        
        {formData.supportServices.ongoingSupport.map((service, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={service}
              onChange={(e) => {
                const updatedServices = [...formData.supportServices.ongoingSupport];
                updatedServices[index] = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  supportServices: { ...prev.supportServices, ongoingSupport: updatedServices }
                }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Ongoing service ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedServices = formData.supportServices.ongoingSupport.filter((_, i) => i !== index);
                setFormData(prev => ({
                  ...prev,
                  supportServices: { ...prev.supportServices, ongoingSupport: updatedServices }
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
              supportServices: {
                ...prev.supportServices,
                ongoingSupport: [...prev.supportServices.ongoingSupport, '']
              }
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Ongoing Service
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
        <p className="text-sm text-gray-600 mb-4">Add images and videos to showcase the consultant services</p>
        
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
                    placeholder="e.g., MBBS Consultant"
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

  const renderSection = () => {
    switch (activeSection) {
      case 'basic':
        return renderBasicInformation();
      case 'contact':
        return renderContactAddress();
      case 'services':
        return renderServices();
      case 'specializations':
        return renderSpecializations();
      case 'packages':
        return renderPackages();
      case 'universities':
        return renderUniversities();
      case 'testimonials':
        return renderTestimonials();
      case 'process':
        return renderProcess();
      case 'support':
        return renderSupport();
      case 'media':
        return renderMediaGallery();
      case 'career':
        return renderCareer();
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
                  <h1 className="text-3xl font-bold text-gray-800">Add New MBBS Abroad Consultant</h1>
                  <p className="text-gray-600 mt-2">Fill in the details to add a new MBBS abroad consultant to the platform</p>
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
                      Fill in the {sections.find(s => s.id === activeSection)?.label.toLowerCase()} for the MBBS consultant
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
                              Add MBBS Consultant
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

export default AddMbbsAbroadConsultantPage;
