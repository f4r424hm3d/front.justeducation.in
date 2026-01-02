import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar, FaPhone, FaEnvelope, FaGlobe, FaChalkboardTeacher, FaBook, FaCheckCircle, FaGraduationCap, FaTimes, FaHospitalAlt, FaBus, FaUserGraduate, FaSnowflake, FaWifi, FaPalette, FaMusic, FaTheaterMasks, FaUtensils, FaFutbol, FaDesktop, FaFlask, FaRobot, FaVideo, FaDoorOpen, FaBasketballBall, FaRunning, FaPrayingHands, FaImage, FaPlus, FaTrash, FaTrophy, FaClock, FaUsers, FaCertificate } from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';

interface CoachingFormData {
  // Basic Information
  name: string;
  location: string;
  latitude: string;
  longitude: string;
  established: string;
  students: string;
  rating: string;
  coachingType: string;
  specialization: string;
  description: string;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  
  // Address Information
  address: {
    coachingAddress: string;
    officeAddress: string;
    officePhone: string;
    officeEmail: string;
    officeWebsite: string;
  };
  
  // Images
  image: string;
  heroBackground: string;
  
  // Admission Information
  admissionProcess: string[];
  eligibility: string[];
  
  // Facilities
  facilities: string[];
  
  // Quick Facts
  quickFacts: {
    coachingType: string;
    gender: string;
    batchSize: string;
    sessionDuration: string;
    medium: string;
    mode: string;
    centerSize: string;
    studentTeacherRatio: string;
  };
  
  // Class Timings
  classTimings: {
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
  
  // Rankings
  rankings: {
    successRate: string;
    topRankings: string;
  };
  
  // Study Options
  studyOptions: {
    online: boolean;
    offline: boolean;
    hybrid: boolean;
  };
  
  // Features
  features: {
    featured: boolean;
    scholarship: boolean;
    approvedBy: string;
  };
  
  // Media Gallery
  mediaGallery: Array<{
    type: 'image' | 'video';
    src: string;
    alt: string;
    thumbnail?: string;
  }>;
  
  // Fee Structure
  feeStructure: Array<{
    course: string;
    fee: string;
    breakdown: {
      registrationFee: string;
      tuitionFee: string;
      studyMaterial: string;
    };
  }>;
  
  // Courses
  courses: Array<{
    name: string;
    duration: string;
    targetExam: string;
    fees: string;
    eligibility: string;
    startDate: string;
  }>;
  
  // Success Stories
  successStories: Array<{
    name: string;
    year: string;
    achievement: string;
    image: string;
    testimonial: string;
  }>;
  
  // Success Rates
  successRates: {
    examPassRate: string;
    topRankers: string;
    scholarshipsAwarded: string;
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
  
  // Teaching Methodology
  methodology: {
    teachingMethods: string[];
    technologyUsed: string[];
    personalizedApproach: string[];
  };
  
  // Mock Tests & Practice
  mockTests: Array<{
    title: string;
    frequency: string;
    duration: string;
    targetExam: string;
    description: string;
  }>;
}

const FillCoachingPage: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<CoachingFormData>({
    // Basic Information
    name: '',
    location: '',
    latitude: '',
    longitude: '',
    established: '',
    students: '',
    rating: '',
    coachingType: '',
    specialization: '',
    description: '',
    
    // Contact Information
    contact: {
      phone: '',
      email: '',
      website: '',
    },
    
    // Address Information
    address: {
      coachingAddress: '',
      officeAddress: '',
      officePhone: '',
      officeEmail: '',
      officeWebsite: '',
    },
    
    // Images
    image: '',
    heroBackground: '',
    
    // Admission Information
    admissionProcess: [''],
    eligibility: [''],
    
    // Facilities
    facilities: [''],
    
    // Quick Facts
    quickFacts: {
      coachingType: '',
      gender: 'All',
      batchSize: '',
      sessionDuration: '',
      medium: 'English',
      mode: 'Offline',
      centerSize: '',
      studentTeacherRatio: '',
    },
    
    // Class Timings
    classTimings: {
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
    
    // Rankings
    rankings: {
      successRate: '',
      topRankings: '',
    },
    
    // Study Options
    studyOptions: {
      online: false,
      offline: true,
      hybrid: false,
    },
    
    // Features
    features: {
      featured: false,
      scholarship: false,
      approvedBy: '',
    },
    
    // Media Gallery
    mediaGallery: [],
    
    // Fee Structure
    feeStructure: [],
    
    // Courses
    courses: [],
    
    // Success Stories
    successStories: [],
    
    // Success Rates
    successRates: {
      examPassRate: '',
      topRankers: '',
      scholarshipsAwarded: '',
    },
    
    // Career Opportunities
    career: {
      vacancies: [],
      qualifications: '',
      perks: [''],
      applicationInstructions: '',
    },
    
    // Teaching Methodology
    methodology: {
      teachingMethods: [''],
      technologyUsed: [''],
      personalizedApproach: [''],
    },
    
    // Mock Tests & Practice
    mockTests: [],
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

  const handleNestedInputChange = (parent: keyof CoachingFormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value
      }
    }));
  };

  const handleArrayInputChange = (field: keyof CoachingFormData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: keyof CoachingFormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), '']
    }));
  };

  const removeArrayItem = (field: keyof CoachingFormData, index: number) => {
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
      console.log('Coaching data to be submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert('Coaching institute added successfully!');
      navigate('/coaching');
    } catch (error) {
      console.error('Error adding coaching institute:', error);
      alert('Error adding coaching institute. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { id: 'basic', label: 'Basic Information', icon: FaChalkboardTeacher },
    { id: 'contact', label: 'Contact & Address', icon: FaPhone },
    { id: 'admission', label: 'Admission Details', icon: FaUser },
    { id: 'facilities', label: 'Facilities', icon: FaHospitalAlt },
    { id: 'timings', label: 'Class Timings', icon: FaClock },
    { id: 'languages', label: 'Languages', icon: FaGlobe },
    { id: 'courses', label: 'Courses & Programs', icon: FaBook },
    { id: 'media', label: 'Media & Gallery', icon: FaImage },
    { id: 'fees', label: 'Fee Structure', icon: FaGraduationCap },
    { id: 'success', label: 'Success Stories', icon: FaTrophy },
    { id: 'successRates', label: 'Success Rates', icon: FaCertificate },
    { id: 'methodology', label: 'Teaching Methodology', icon: FaRobot },
    { id: 'mockTests', label: 'Mock Tests & Practice', icon: FaClock },
    { id: 'career', label: 'Career Opportunities', icon: FaRunning },
  ];

  const renderBasicInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Coaching Institute Name *
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
            placeholder="e.g., 2010"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Students
          </label>
          <input
            type="text"
            value={formData.students}
            onChange={(e) => handleInputChange('students', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 500+"
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
            Coaching Type *
          </label>
          <select
            value={formData.coachingType}
            onChange={(e) => handleInputChange('coachingType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="JEE/NEET">JEE/NEET</option>
            <option value="UPSC/Civil Services">UPSC/Civil Services</option>
            <option value="Banking">Banking</option>
            <option value="SSC">SSC</option>
            <option value="CAT/MBA">CAT/MBA</option>
            <option value="CLAT/Law">CLAT/Law</option>
            <option value="CA/CS">CA/CS</option>
            <option value="GATE">GATE</option>
            <option value="IELTS/TOEFL">IELTS/TOEFL</option>
            <option value="School Level">School Level</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialization
          </label>
          <input
            type="text"
            value={formData.specialization}
            onChange={(e) => handleInputChange('specialization', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., IIT-JEE Advanced, Medical NEET"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Institute Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Provide a detailed description of the coaching institute..."
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Institute Image URL
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => handleInputChange('image', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/institute-image.jpg"
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
            placeholder="https://www.institutewebsite.com"
          />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Institute Address *
          </label>
          <textarea
            value={formData.address.coachingAddress}
            onChange={(e) => handleNestedInputChange('address', 'coachingAddress', e.target.value)}
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

  const renderAdmissionDetails = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Admission Process Steps
        </label>
        {formData.admissionProcess.map((step, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={step}
              onChange={(e) => handleArrayInputChange('admissionProcess', index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Step ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeArrayItem('admissionProcess', index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('admissionProcess')}
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
            Center Size
          </label>
          <input
            type="text"
            value={formData.quickFacts.centerSize}
            onChange={(e) => handleNestedInputChange('quickFacts', 'centerSize', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 5000 sq ft"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Student-Teacher Ratio
          </label>
          <input
            type="text"
            value={formData.quickFacts.studentTeacherRatio}
            onChange={(e) => handleNestedInputChange('quickFacts', 'studentTeacherRatio', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 20:1"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <select
            value={formData.quickFacts.gender}
            onChange={(e) => handleNestedInputChange('quickFacts', 'gender', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Boys Only">Boys Only</option>
            <option value="Girls Only">Girls Only</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mode
          </label>
          <select
            value={formData.quickFacts.mode}
            onChange={(e) => handleNestedInputChange('quickFacts', 'mode', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Batch Size
          </label>
          <input
            type="text"
            value={formData.quickFacts.batchSize}
            onChange={(e) => handleNestedInputChange('quickFacts', 'batchSize', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 30-40 students"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Session Duration
          </label>
          <input
            type="text"
            value={formData.quickFacts.sessionDuration}
            onChange={(e) => handleNestedInputChange('quickFacts', 'sessionDuration', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 2-3 hours"
          />
        </div>
      </div>
    </div>
  );

  const renderClassTimings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Class Timings</h3>
      <p className="text-gray-600 mb-4">Set the operating hours for each day of the week</p>
      
      <div className="space-y-4">
        {Object.entries(formData.classTimings).map(([day, timing]) => (
          <div key={day} className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-md font-medium text-gray-800 mb-3 capitalize">{day}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opening Time
                </label>
                <input
                  type="time"
                  value={timing.open}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      classTimings: {
                        ...prev.classTimings,
                        [day]: { ...prev.classTimings[day as keyof typeof prev.classTimings], open: e.target.value }
                      }
                    }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Closing Time
                </label>
                <input
                  type="time"
                  value={timing.close}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      classTimings: {
                        ...prev.classTimings,
                        [day]: { ...prev.classTimings[day as keyof typeof prev.classTimings], close: e.target.value }
                      }
                    }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLanguages = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
      <p className="text-gray-600 mb-4">Add the languages in which coaching is provided</p>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Languages Offered
        </label>
        {formData.languages.map((language, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={language}
              onChange={(e) => {
                const updatedLanguages = [...formData.languages];
                updatedLanguages[index] = e.target.value;
                setFormData(prev => ({ ...prev, languages: updatedLanguages }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Language ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedLanguages = formData.languages.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, languages: updatedLanguages }));
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
              languages: [...prev.languages, '']
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Language
        </button>
      </div>
    </div>
  );

  const renderSuccessRates = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Success Rates</h3>
      <p className="text-gray-600 mb-4">Add the success rates and achievements of the coaching institute</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Exam Pass Rate (%)
          </label>
          <input
            type="text"
            value={formData.successRates.examPassRate}
            onChange={(e) => handleNestedInputChange('successRates', 'examPassRate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 95%"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Top Rankers Count
          </label>
          <input
            type="text"
            value={formData.successRates.topRankers}
            onChange={(e) => handleNestedInputChange('successRates', 'topRankers', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 50+ students in top 100"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Scholarships Awarded
          </label>
          <input
            type="text"
            value={formData.successRates.scholarshipsAwarded}
            onChange={(e) => handleNestedInputChange('successRates', 'scholarshipsAwarded', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 25 scholarships this year"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Overall Success Rate (%)
        </label>
        <input
          type="text"
          value={formData.rankings.successRate}
          onChange={(e) => handleNestedInputChange('rankings', 'successRate', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., 98%"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Top Rankings Achieved
        </label>
        <input
          type="text"
          value={formData.rankings.topRankings}
          onChange={(e) => handleNestedInputChange('rankings', 'topRankings', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., AIR 1, AIR 5, AIR 10 in JEE Advanced"
        />
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'basic':
        return renderBasicInformation();
      case 'contact':
        return renderContactAddress();
      case 'admission':
        return renderAdmissionDetails();
      case 'facilities':
        return renderFacilities();
      case 'timings':
        return renderClassTimings();
      case 'languages':
        return renderLanguages();
      case 'courses':
        return renderCourses();
      case 'media':
        return renderMediaGallery();
      case 'fees':
        return renderFeeStructure();
      case 'success':
        return renderSuccessStories();
      case 'successRates':
        return renderSuccessRates();
      case 'methodology':
        return renderMethodology();
      case 'mockTests':
        return renderMockTests();
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

  // Placeholder functions for other sections
  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Courses & Programs</h3>
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              courses: [...prev.courses, {
                name: '',
                duration: '',
                targetExam: '',
                fees: '',
                eligibility: '',
                startDate: ''
              }]
            }))
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Course
        </button>
      </div>

      {formData.courses.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <FaBook className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No courses added yet. Click "Add Course" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.courses.map((course, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Course {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      courses: prev.courses.filter((_, i) => i !== index)
                    }))
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Name *
                  </label>
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => {
                      const updatedCourses = [...formData.courses];
                      updatedCourses[index].name = e.target.value;
                      setFormData(prev => ({ ...prev, courses: updatedCourses }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., JEE Advanced Preparation"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={course.duration}
                    onChange={(e) => {
                      const updatedCourses = [...formData.courses];
                      updatedCourses[index].duration = e.target.value;
                      setFormData(prev => ({ ...prev, courses: updatedCourses }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 12 months"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Exam
                  </label>
                  <input
                    type="text"
                    value={course.targetExam}
                    onChange={(e) => {
                      const updatedCourses = [...formData.courses];
                      updatedCourses[index].targetExam = e.target.value;
                      setFormData(prev => ({ ...prev, courses: updatedCourses }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., JEE Advanced, NEET"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fees
                  </label>
                  <input
                    type="text"
                    value={course.fees}
                    onChange={(e) => {
                      const updatedCourses = [...formData.courses];
                      updatedCourses[index].fees = e.target.value;
                      setFormData(prev => ({ ...prev, courses: updatedCourses }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., ₹50,000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Eligibility
                  </label>
                  <input
                    type="text"
                    value={course.eligibility}
                    onChange={(e) => {
                      const updatedCourses = [...formData.courses];
                      updatedCourses[index].eligibility = e.target.value;
                      setFormData(prev => ({ ...prev, courses: updatedCourses }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Class 12th passed"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={course.startDate}
                    onChange={(e) => {
                      const updatedCourses = [...formData.courses];
                      updatedCourses[index].startDate = e.target.value;
                      setFormData(prev => ({ ...prev, courses: updatedCourses }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderMediaGallery = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Media Gallery</h3>
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              mediaGallery: [...prev.mediaGallery, {
                type: 'image',
                src: '',
                alt: '',
                thumbnail: ''
              }]
            }))
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Media
        </button>
      </div>

      {formData.mediaGallery.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <FaImage className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No media added yet. Click "Add Media" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.mediaGallery.map((media, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Media {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      mediaGallery: prev.mediaGallery.filter((_, i) => i !== index)
                    }))
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Media Type
                  </label>
                  <select
                    value={media.type}
                    onChange={(e) => {
                      const updatedGallery = [...formData.mediaGallery];
                      updatedGallery[index].type = e.target.value as 'image' | 'video';
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
                    Media URL *
                  </label>
                  <input
                    type="url"
                    value={media.src}
                    onChange={(e) => {
                      const updatedGallery = [...formData.mediaGallery];
                      updatedGallery[index].src = e.target.value;
                      setFormData(prev => ({ ...prev, mediaGallery: updatedGallery }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/media.jpg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alt Text
                  </label>
                  <input
                    type="text"
                    value={media.alt}
                    onChange={(e) => {
                      const updatedGallery = [...formData.mediaGallery];
                      updatedGallery[index].alt = e.target.value;
                      setFormData(prev => ({ ...prev, mediaGallery: updatedGallery }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Description of the media"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thumbnail URL
                  </label>
                  <input
                    type="url"
                    value={media.thumbnail || ''}
                    onChange={(e) => {
                      const updatedGallery = [...formData.mediaGallery];
                      updatedGallery[index].thumbnail = e.target.value;
                      setFormData(prev => ({ ...prev, mediaGallery: updatedGallery }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/thumbnail.jpg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderFeeStructure = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Fee Structure</h3>
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              feeStructure: [...prev.feeStructure, {
                course: '',
                fee: '',
                breakdown: {
                  registrationFee: '',
                  tuitionFee: '',
                  studyMaterial: ''
                }
              }]
            }))
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Fee Structure
        </button>
      </div>

      {formData.feeStructure.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <FaGraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No fee structure added yet. Click "Add Fee Structure" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.feeStructure.map((fee, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Fee Structure {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      feeStructure: prev.feeStructure.filter((_, i) => i !== index)
                    }))
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Name *
                  </label>
                  <input
                    type="text"
                    value={fee.course}
                    onChange={(e) => {
                      const updatedFees = [...formData.feeStructure];
                      updatedFees[index].course = e.target.value;
                      setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., JEE Advanced Preparation"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Fee
                  </label>
                  <input
                    type="text"
                    value={fee.fee}
                    onChange={(e) => {
                      const updatedFees = [...formData.feeStructure];
                      updatedFees[index].fee = e.target.value;
                      setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., ₹50,000"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="text-sm font-medium text-gray-700 mb-3">Fee Breakdown</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Fee
                    </label>
                    <input
                      type="text"
                      value={fee.breakdown.registrationFee}
                      onChange={(e) => {
                        const updatedFees = [...formData.feeStructure];
                        updatedFees[index].breakdown.registrationFee = e.target.value;
                        setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., ₹5,000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tuition Fee
                    </label>
                    <input
                      type="text"
                      value={fee.breakdown.tuitionFee}
                      onChange={(e) => {
                        const updatedFees = [...formData.feeStructure];
                        updatedFees[index].breakdown.tuitionFee = e.target.value;
                        setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., ₹40,000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Study Material
                    </label>
                    <input
                      type="text"
                      value={fee.breakdown.studyMaterial}
                      onChange={(e) => {
                        const updatedFees = [...formData.feeStructure];
                        updatedFees[index].breakdown.studyMaterial = e.target.value;
                        setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., ₹5,000"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSuccessStories = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Success Stories</h3>
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              successStories: [...prev.successStories, {
                name: '',
                year: '',
                achievement: '',
                image: '',
                testimonial: ''
              }]
            }))
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Success Story
        </button>
      </div>

      {formData.successStories.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <FaTrophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No success stories added yet. Click "Add Success Story" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.successStories.map((story, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Success Story {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      successStories: prev.successStories.filter((_, i) => i !== index)
                    }))
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    value={story.name}
                    onChange={(e) => {
                      const updatedStories = [...formData.successStories];
                      updatedStories[index].name = e.target.value;
                      setFormData(prev => ({ ...prev, successStories: updatedStories }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Rahul Sharma"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <input
                    type="text"
                    value={story.year}
                    onChange={(e) => {
                      const updatedStories = [...formData.successStories];
                      updatedStories[index].year = e.target.value;
                      setFormData(prev => ({ ...prev, successStories: updatedStories }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 2023"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Achievement *
                  </label>
                  <input
                    type="text"
                    value={story.achievement}
                    onChange={(e) => {
                      const updatedStories = [...formData.successStories];
                      updatedStories[index].achievement = e.target.value;
                      setFormData(prev => ({ ...prev, successStories: updatedStories }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., AIR 1 in JEE Advanced"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Image URL
                  </label>
                  <input
                    type="url"
                    value={story.image}
                    onChange={(e) => {
                      const updatedStories = [...formData.successStories];
                      updatedStories[index].image = e.target.value;
                      setFormData(prev => ({ ...prev, successStories: updatedStories }));
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
                  value={story.testimonial}
                  onChange={(e) => {
                    const updatedStories = [...formData.successStories];
                    updatedStories[index].testimonial = e.target.value;
                    setFormData(prev => ({ ...prev, successStories: updatedStories }));
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Student's testimonial about the coaching institute..."
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderMethodology = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Teaching Methodology</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Teaching Methods
        </label>
        {formData.methodology.teachingMethods.map((method, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={method}
              onChange={(e) => {
                const updatedMethods = [...formData.methodology.teachingMethods];
                updatedMethods[index] = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  methodology: { ...prev.methodology, teachingMethods: updatedMethods }
                }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Teaching method ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedMethods = formData.methodology.teachingMethods.filter((_, i) => i !== index);
                setFormData(prev => ({
                  ...prev,
                  methodology: { ...prev.methodology, teachingMethods: updatedMethods }
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
              methodology: {
                ...prev.methodology,
                teachingMethods: [...prev.methodology.teachingMethods, '']
              }
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Teaching Method
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technology Used
        </label>
        {formData.methodology.technologyUsed.map((tech, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={tech}
              onChange={(e) => {
                const updatedTech = [...formData.methodology.technologyUsed];
                updatedTech[index] = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  methodology: { ...prev.methodology, technologyUsed: updatedTech }
                }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Technology ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedTech = formData.methodology.technologyUsed.filter((_, i) => i !== index);
                setFormData(prev => ({
                  ...prev,
                  methodology: { ...prev.methodology, technologyUsed: updatedTech }
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
              methodology: {
                ...prev.methodology,
                technologyUsed: [...prev.methodology.technologyUsed, '']
              }
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Technology
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Personalized Approach
        </label>
        {formData.methodology.personalizedApproach.map((approach, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={approach}
              onChange={(e) => {
                const updatedApproach = [...formData.methodology.personalizedApproach];
                updatedApproach[index] = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  methodology: { ...prev.methodology, personalizedApproach: updatedApproach }
                }));
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Personalized approach ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => {
                const updatedApproach = formData.methodology.personalizedApproach.filter((_, i) => i !== index);
                setFormData(prev => ({
                  ...prev,
                  methodology: { ...prev.methodology, personalizedApproach: updatedApproach }
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
              methodology: {
                ...prev.methodology,
                personalizedApproach: [...prev.methodology.personalizedApproach, '']
              }
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Approach
        </button>
      </div>
    </div>
  );

  const renderMockTests = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Mock Tests & Practice</h3>
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              mockTests: [...prev.mockTests, {
                title: '',
                frequency: '',
                duration: '',
                targetExam: '',
                description: ''
              }]
            }))
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Mock Test
        </button>
      </div>

      {formData.mockTests.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <FaClock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No mock tests added yet. Click "Add Mock Test" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.mockTests.map((test, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Mock Test {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      mockTests: prev.mockTests.filter((_, i) => i !== index)
                    }))
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Test Title *
                  </label>
                  <input
                    type="text"
                    value={test.title}
                    onChange={(e) => {
                      const updatedTests = [...formData.mockTests];
                      updatedTests[index].title = e.target.value;
                      setFormData(prev => ({ ...prev, mockTests: updatedTests }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., JEE Advanced Mock Test 1"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frequency
                  </label>
                  <input
                    type="text"
                    value={test.frequency}
                    onChange={(e) => {
                      const updatedTests = [...formData.mockTests];
                      updatedTests[index].frequency = e.target.value;
                      setFormData(prev => ({ ...prev, mockTests: updatedTests }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Weekly, Monthly"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={test.duration}
                    onChange={(e) => {
                      const updatedTests = [...formData.mockTests];
                      updatedTests[index].duration = e.target.value;
                      setFormData(prev => ({ ...prev, mockTests: updatedTests }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 3 hours"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Exam
                  </label>
                  <input
                    type="text"
                    value={test.targetExam}
                    onChange={(e) => {
                      const updatedTests = [...formData.mockTests];
                      updatedTests[index].targetExam = e.target.value;
                      setFormData(prev => ({ ...prev, mockTests: updatedTests }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., JEE Advanced, NEET"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={test.description}
                  onChange={(e) => {
                    const updatedTests = [...formData.mockTests];
                    updatedTests[index].description = e.target.value;
                    setFormData(prev => ({ ...prev, mockTests: updatedTests }));
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Detailed description of the mock test..."
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCareer = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Career Opportunities</h3>
      
      <div className="flex justify-between items-center">
        <h4 className="text-md font-medium text-gray-800">Job Vacancies</h4>
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              career: {
                ...prev.career,
                vacancies: [...prev.career.vacancies, { position: '', description: '' }]
              }
            }))
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Vacancy
        </button>
      </div>

      {formData.career.vacancies.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <FaRunning className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No vacancies added yet. Click "Add Vacancy" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.career.vacancies.map((vacancy, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-sm font-medium text-gray-800">Vacancy {index + 1}</h5>
                <button
                  type="button"
                  onClick={() => {
                    const updatedVacancies = formData.career.vacancies.filter((_, i) => i !== index);
                    setFormData(prev => ({
                      ...prev,
                      career: { ...prev.career, vacancies: updatedVacancies }
                    }));
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position *
                  </label>
                  <input
                    type="text"
                    value={vacancy.position}
                    onChange={(e) => {
                      const updatedVacancies = [...formData.career.vacancies];
                      updatedVacancies[index].position = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        career: { ...prev.career, vacancies: updatedVacancies }
                      }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Physics Faculty"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={vacancy.description}
                    onChange={(e) => {
                      const updatedVacancies = [...formData.career.vacancies];
                      updatedVacancies[index].description = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        career: { ...prev.career, vacancies: updatedVacancies }
                      }));
                    }}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Job description and requirements..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Required Qualifications
        </label>
        <textarea
          value={formData.career.qualifications}
          onChange={(e) => handleNestedInputChange('career', 'qualifications', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Required qualifications for the positions..."
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Perks & Benefits
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
          Application Instructions
        </label>
        <textarea
          value={formData.career.applicationInstructions}
          onChange={(e) => handleNestedInputChange('career', 'applicationInstructions', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Instructions for applying to the positions..."
        />
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Add New Coaching Institute</h1>
                  <p className="text-gray-600 mt-2">Add in the details to add a new coaching institute to the platform</p>
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
                      Add in the {sections.find(s => s.id === activeSection)?.label.toLowerCase()} for the coaching institute
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
                              Add Coaching Institute
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

export default FillCoachingPage;
