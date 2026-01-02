import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar, FaPhone, FaEnvelope, FaGlobe, FaSchool, FaBook, FaCheckCircle, FaGraduationCap, FaTimes, FaHospitalAlt, FaBus, FaUserGraduate, FaSnowflake, FaWifi, FaChalkboardTeacher, FaPalette, FaMusic, FaTheaterMasks, FaUtensils, FaFutbol, FaDesktop, FaFlask, FaRobot, FaVideo, FaDoorOpen, FaBasketballBall, FaRunning, FaPrayingHands, FaImage, FaPlus, FaTrash } from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';

interface ItiFormData {
  // Basic Information
  name: string;
  location: string;
  latitude: string;
  longitude: string;
  established: string;
  students: string;
  rating: string;
  board: string;
  type: string;
  universityType: string;
  description: string;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  
  // Address Information
  address: {
    itiAddress: string;
    officeAddress: string;
    officePhone: string;
    officeFax: string;
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
    board: string;
    gender: string;
    classes: string;
    academicSession: string;
    medium: string;
    dayBoarding: string;
    campusSize: string;
    studentTeacherRatio: string;
  };
  
  // School Timings
  schoolTimings: {
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
  
  // Food Details
  foodDetails: {
    vegetarian: boolean;
    nonVegetarian: boolean;
    description: string;
  };
  
  // Rankings
  rankings: {
    worldRank: string;
    indiaRank: string;
  };
  
  // Study Options
  studyOptions: {
    online: boolean;
    partTime: boolean;
    fullTime: boolean;
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
    class: string;
    fee: string;
    breakdown: {
      admissionFee: string;
      tuitionFee: string;
      miscellaneous: string;
    };
  }>;
  
  // Courses
  courses: Array<{
    name: string;
    views: string;
    interest: string;
    fees: string;
    eligibility: string;
    applicationDate: string;
  }>;
  
  // News
  news: Array<{
    title: string;
    date: string;
    content: string;
    category: string;
  }>;
  
  // Alumni
  alumni: Array<{
    name: string;
    batch: string;
    profession: string;
    image: string;
    testimonial: string;
  }>;
  
  // Success Rates
  successRates: {
    boardExamPassRate: string;
    topUnivSelections: string;
    meritScholarshipsAwarded: string;
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
  
  // Curriculum
  curriculum: {
    primary: {
      coreSubjects: string[];
      coScholastic: string[];
    };
    middle: {
      coreSubjects: string[];
      additionalActivities: string[];
    };
    secondary: {
      science: string[];
      commerce: string[];
      humanities: string[];
    };
  };
  
  // Workshops & Seminars
  workshops: Array<{
    title: string;
    description: string;
    schedule: string;
    targetClasses: string;
    type: 'current' | 'upcoming';
  }>;
  
  // Teaching Methodology
  methodology: {
    interactiveLearning: string[];
    technologyIntegration: string[];
    personalizedLearning: string[];
  };
}

const AddItiPage: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<ItiFormData>({
    // Basic Information
    name: '',
    location: '',
    latitude: '',
    longitude: '',
    established: '',
    students: '',
    rating: '',
    board: '',
    type: '',
    universityType: '',
    description: '',
    
    // Contact Information
    contact: {
      phone: '',
      email: '',
      website: '',
    },
    
    // Address Information
    address: {
      itiAddress: '',
      officeAddress: '',
      officePhone: '',
      officeFax: '',
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
      board: '',
      gender: 'Coed',
      classes: '',
      academicSession: '',
      medium: 'English',
      dayBoarding: 'Day Iti Institute',
      campusSize: '',
      studentTeacherRatio: '',
    },
    
    // School Timings
    schoolTimings: {
      monday: { open: '8:00 AM', close: '2:00 PM' },
      tuesday: { open: '8:00 AM', close: '2:00 PM' },
      wednesday: { open: '8:00 AM', close: '2:00 PM' },
      thursday: { open: '8:00 AM', close: '2:00 PM' },
      friday: { open: '8:00 AM', close: '2:00 PM' },
      saturday: { open: '8:00 AM', close: '12:00 PM' },
      sunday: { open: 'Closed', close: 'Closed' },
    },
    
    // Languages
    languages: ['English'],
    
    // Food Details
    foodDetails: {
      vegetarian: true,
      nonVegetarian: false,
      description: '',
    },
    
    // Rankings
    rankings: {
      worldRank: '',
      indiaRank: '',
    },
    
    // Study Options
    studyOptions: {
      online: false,
      partTime: false,
      fullTime: true,
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
    
    // News
    news: [],
    
    // Alumni
    alumni: [],
    
    // Success Rates
    successRates: {
      boardExamPassRate: '',
      topUnivSelections: '',
      meritScholarshipsAwarded: '',
    },
    
    // Career Opportunities
    career: {
      vacancies: [],
      qualifications: '',
      perks: [''],
      applicationInstructions: '',
    },
    
    // Curriculum
    curriculum: {
      primary: {
        coreSubjects: [''],
        coScholastic: [''],
      },
      middle: {
        coreSubjects: [''],
        additionalActivities: [''],
      },
      secondary: {
        science: [''],
        commerce: [''],
        humanities: [''],
      },
    },
    
    // Workshops & Seminars
    workshops: [],
    
    // Teaching Methodology
    methodology: {
      interactiveLearning: [''],
      technologyIntegration: [''],
      personalizedLearning: [''],
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

  const handleNestedInputChange = (parent: keyof ItiFormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value
      }
    }));
  };

  const handleArrayInputChange = (field: keyof ItiFormData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: keyof ItiFormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), '']
    }));
  };

  const removeArrayItem = (field: keyof ItiFormData, index: number) => {
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
      console.log('School data to be submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert('School added successfully!');
      navigate('/schools');
    } catch (error) {
      console.error('Error adding school:', error);
      alert('Error adding school. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { id: 'basic', label: 'Basic Information', icon: FaSchool },
    { id: 'contact', label: 'Contact & Address', icon: FaPhone },
    { id: 'admission', label: 'Admission Details', icon: FaUser },
    { id: 'facilities', label: 'Facilities', icon: FaHospitalAlt },
    { id: 'academics', label: 'Academics', icon: FaBook },
    { id: 'media', label: 'Media & Gallery', icon: FaImage },
    { id: 'fees', label: 'Fee Structure', icon: FaGraduationCap },
    { id: 'courses', label: 'Courses', icon: FaChalkboardTeacher },
    { id: 'news', label: 'News & Updates', icon: FaGlobe },
    { id: 'alumni', label: 'Alumni', icon: FaUserGraduate },
    { id: 'career', label: 'Career Opportunities', icon: FaRunning },
    { id: 'curriculum', label: 'Curriculum', icon: FaBook },
    { id: 'workshops', label: 'Workshops & Seminars', icon: FaChalkboardTeacher },
    { id: 'methodology', label: 'Teaching Methodology', icon: FaRobot },
  ];

  const renderBasicInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Iti Institute Name *
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
            Number of Students
          </label>
          <input
            type="text"
            value={formData.students}
            onChange={(e) => handleInputChange('students', e.target.value)}
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
            Board *
          </label>
          <select
            value={formData.board}
            onChange={(e) => handleInputChange('board', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Board">State Board</option>
            <option value="IB">IB</option>
            <option value="IGCSE">IGCSE</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Iti Institute Type *
          </label>
          <select
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="Semi-Private">Semi-Private</option>
            <option value="International">International</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            University Type
          </label>
          <select
            value={formData.universityType}
            onChange={(e) => handleInputChange('universityType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select University Type</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
            <option value="Deemed">Deemed</option>
            <option value="Autonomous">Autonomous</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          School Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Provide a detailed description of the school..."
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            School Image URL
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => handleInputChange('image', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/school-image.jpg"
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
            placeholder="https://www.schoolwebsite.com"
          />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Iti Institute Address *
          </label>
          <textarea
            value={formData.address.itiAddress}
            onChange={(e) => handleNestedInputChange('address', 'itiAddress', e.target.value)}
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
            Campus Size
          </label>
          <input
            type="text"
            value={formData.quickFacts.campusSize}
            onChange={(e) => handleNestedInputChange('quickFacts', 'campusSize', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 10 Acres"
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
            <option value="Coed">Coed</option>
            <option value="Boys Only">Boys Only</option>
            <option value="Girls Only">Girls Only</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Day/Boarding
          </label>
          <select
            value={formData.quickFacts.dayBoarding}
            onChange={(e) => handleNestedInputChange('quickFacts', 'dayBoarding', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Day School">Day School</option>
            <option value="Boarding iti institue">Boarding iti institue</option>
            <option value="Both">Both</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Classes Offered
          </label>
          <input
            type="text"
            value={formData.quickFacts.classes}
            onChange={(e) => handleNestedInputChange('quickFacts', 'classes', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Pre Nursery - 12 Class"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Academic Session
          </label>
          <input
            type="text"
            value={formData.quickFacts.academicSession}
            onChange={(e) => handleNestedInputChange('quickFacts', 'academicSession', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., April to March"
          />
        </div>
      </div>
    </div>
  );

  const renderAcademics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            World Ranking
          </label>
          <input
            type="text"
            value={formData.rankings.worldRank}
            onChange={(e) => handleNestedInputChange('rankings', 'worldRank', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., #457 in World"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            India Ranking
          </label>
          <input
            type="text"
            value={formData.rankings.indiaRank}
            onChange={(e) => handleNestedInputChange('rankings', 'indiaRank', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., #4 in India"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Study Options
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.studyOptions.online}
              onChange={(e) => handleNestedInputChange('studyOptions', 'online', e.target.checked)}
              className="mr-2"
            />
            <span>Study Online</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.studyOptions.partTime}
              onChange={(e) => handleNestedInputChange('studyOptions', 'partTime', e.target.checked)}
              className="mr-2"
            />
            <span>Part Time</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.studyOptions.fullTime}
              onChange={(e) => handleNestedInputChange('studyOptions', 'fullTime', e.target.checked)}
              className="mr-2"
            />
            <span>Full Time</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Features
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.features.featured}
              onChange={(e) => handleNestedInputChange('features', 'featured', e.target.checked)}
              className="mr-2"
            />
            <span>Featured iti institue</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.features.scholarship}
              onChange={(e) => handleNestedInputChange('features', 'scholarship', e.target.checked)}
              className="mr-2"
            />
            <span>Scholarship Available</span>
          </label>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Approved By
          </label>
          <input
            type="text"
            value={formData.features.approvedBy}
            onChange={(e) => handleNestedInputChange('features', 'approvedBy', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., CBSE"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Languages Taught
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Food Details
        </label>
        <div className="space-y-2 mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.foodDetails.vegetarian}
              onChange={(e) => handleNestedInputChange('foodDetails', 'vegetarian', e.target.checked)}
              className="mr-2"
            />
            <span>Vegetarian Available</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.foodDetails.nonVegetarian}
              onChange={(e) => handleNestedInputChange('foodDetails', 'nonVegetarian', e.target.checked)}
              className="mr-2"
            />
            <span>Non-Vegetarian Available</span>
          </label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Food Description
          </label>
          <textarea
            value={formData.foodDetails.description}
            onChange={(e) => handleNestedInputChange('foodDetails', 'description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the food facilities and menu..."
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
        <p className="text-sm text-gray-600 mb-4">Add images and videos to showcase the iti institue</p>
        
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

  const renderFeeStructure = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Fee Structure
        </label>
        <p className="text-sm text-gray-600 mb-4">Add fee structure for different classes</p>
        
        {formData.feeStructure.map((fee, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class
                </label>
                <input
                  type="text"
                  value={fee.class}
                  onChange={(e) => {
                    const updatedFees = [...formData.feeStructure];
                    updatedFees[index] = { ...fee, class: e.target.value };
                    setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Class 1"
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
                    updatedFees[index] = { ...fee, fee: e.target.value };
                    setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹7,00,000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admission Fee
                </label>
                <input
                  type="text"
                  value={fee.breakdown.admissionFee}
                  onChange={(e) => {
                    const updatedFees = [...formData.feeStructure];
                    updatedFees[index] = {
                      ...fee,
                      breakdown: { ...fee.breakdown, admissionFee: e.target.value }
                    };
                    setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹1,00,000"
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
                    updatedFees[index] = {
                      ...fee,
                      breakdown: { ...fee.breakdown, tuitionFee: e.target.value }
                    };
                    setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹5,00,000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Miscellaneous
                </label>
                <input
                  type="text"
                  value={fee.breakdown.miscellaneous}
                  onChange={(e) => {
                    const updatedFees = [...formData.feeStructure];
                    updatedFees[index] = {
                      ...fee,
                      breakdown: { ...fee.breakdown, miscellaneous: e.target.value }
                    };
                    setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹1,00,000"
                />
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedFees = formData.feeStructure.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, feeStructure: updatedFees }));
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
              feeStructure: [...prev.feeStructure, {
                class: '',
                fee: '',
                breakdown: { admissionFee: '', tuitionFee: '', miscellaneous: '' }
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
      case 'academics':
        return renderAcademics();
      case 'media':
        return renderMediaGallery();
      case 'fees':
        return renderFeeStructure();
      case 'courses':
        return renderCourses();
      case 'news':
        return renderNews();
      case 'alumni':
        return renderAlumni();
      case 'career':
        return renderCareer();
      case 'curriculum':
        return renderCurriculum();
      case 'workshops':
        return renderWorkshops();
      case 'methodology':
        return renderMethodology();
      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">This section is under development.</p>
          </div>
        );
    }
  };

  const renderCourses = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Courses Offered
        </label>
        <p className="text-sm text-gray-600 mb-4">Add courses offered by the iti institue</p>
        
        {formData.courses.map((course, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => {
                    const updatedCourses = [...formData.courses];
                    updatedCourses[index] = { ...course, name: e.target.value };
                    setFormData(prev => ({ ...prev, courses: updatedCourses }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., B.Tech"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Views
                </label>
                <input
                  type="text"
                  value={course.views}
                  onChange={(e) => {
                    const updatedCourses = [...formData.courses];
                    updatedCourses[index] = { ...course, views: e.target.value };
                    setFormData(prev => ({ ...prev, courses: updatedCourses }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 7.3K"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest
                </label>
                <input
                  type="text"
                  value={course.interest}
                  onChange={(e) => {
                    const updatedCourses = [...formData.courses];
                    updatedCourses[index] = { ...course, interest: e.target.value };
                    setFormData(prev => ({ ...prev, courses: updatedCourses }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 1188"
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
                    updatedCourses[index] = { ...course, fees: e.target.value };
                    setFormData(prev => ({ ...prev, courses: updatedCourses }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹1.61 Lakhs - 2.42 Lakhs"
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
                    updatedCourses[index] = { ...course, eligibility: e.target.value };
                    setFormData(prev => ({ ...prev, courses: updatedCourses }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 10+2 (PCM) with 45%"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application Date
                </label>
                <input
                  type="text"
                  value={course.applicationDate}
                  onChange={(e) => {
                    const updatedCourses = [...formData.courses];
                    updatedCourses[index] = { ...course, applicationDate: e.target.value };
                    setFormData(prev => ({ ...prev, courses: updatedCourses }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 22 Aug 2025"
                />
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedCourses = formData.courses.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, courses: updatedCourses }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Course
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              courses: [...prev.courses, {
                name: '',
                views: '',
                interest: '',
                fees: '',
                eligibility: '',
                applicationDate: ''
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Course
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
        <p className="text-sm text-gray-600 mb-4">Add news and updates about the iti institue</p>
        
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
                  placeholder="e.g., Outstanding CBSE Results 2024"
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
                  <option value="academic">Academic</option>
                  <option value="sports">Sports</option>
                  <option value="cultural">Cultural</option>
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

  const renderAlumni = () => (
    <div className="space-y-6">
      {/* Success Rates Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Success Rates / Previous Year Results
        </label>
        <p className="text-sm text-gray-600 mb-4">Add success rates and achievements from the previous year</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Board Exam Pass Rate
            </label>
            <input
              type="text"
              value={formData.successRates.boardExamPassRate}
              onChange={(e) => handleNestedInputChange('successRates', 'boardExamPassRate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 95%"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Top Univ/Institute Selections
            </label>
            <input
              type="text"
              value={formData.successRates.topUnivSelections}
              onChange={(e) => handleNestedInputChange('successRates', 'topUnivSelections', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 120+"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Merit Scholarships Awarded
            </label>
            <input
              type="text"
              value={formData.successRates.meritScholarshipsAwarded}
              onChange={(e) => handleNestedInputChange('successRates', 'meritScholarshipsAwarded', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 75"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notable Alumni
        </label>
        <p className="text-sm text-gray-600 mb-4">Add information about notable alumni</p>
        
        {formData.alumni.map((alumni, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alumni Name
                </label>
                <input
                  type="text"
                  value={alumni.name}
                  onChange={(e) => {
                    const updatedAlumni = [...formData.alumni];
                    updatedAlumni[index] = { ...alumni, name: e.target.value };
                    setFormData(prev => ({ ...prev, alumni: updatedAlumni }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Bhavya Gujral"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Batch
                </label>
                <input
                  type="text"
                  value={alumni.batch}
                  onChange={(e) => {
                    const updatedAlumni = [...formData.alumni];
                    updatedAlumni[index] = { ...alumni, batch: e.target.value };
                    setFormData(prev => ({ ...prev, alumni: updatedAlumni }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 2021-2022"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profession
                </label>
                <input
                  type="text"
                  value={alumni.profession}
                  onChange={(e) => {
                    const updatedAlumni = [...formData.alumni];
                    updatedAlumni[index] = { ...alumni, profession: e.target.value };
                    setFormData(prev => ({ ...prev, alumni: updatedAlumni }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Advocate at Delhi High Court"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={alumni.image}
                  onChange={(e) => {
                    const updatedAlumni = [...formData.alumni];
                    updatedAlumni[index] = { ...alumni, image: e.target.value };
                    setFormData(prev => ({ ...prev, alumni: updatedAlumni }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/alumni-image.jpg"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimonial
              </label>
              <textarea
                value={alumni.testimonial}
                onChange={(e) => {
                  const updatedAlumni = [...formData.alumni];
                  updatedAlumni[index] = { ...alumni, testimonial: e.target.value };
                  setFormData(prev => ({ ...prev, alumni: updatedAlumni }));
                }}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter alumni testimonial..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedAlumni = formData.alumni.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, alumni: updatedAlumni }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Alumni
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              alumni: [...prev.alumni, {
                name: '',
                batch: '',
                profession: '',
                image: '',
                testimonial: ''
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Alumni
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
                    placeholder="e.g., Mathematics Teacher"
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

  const renderCurriculum = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Curriculum Details
        </label>
        <p className="text-sm text-gray-600 mb-4">Define the curriculum structure for different levels</p>
        
        <div className="space-y-6">
          {/* Primary Level */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Primary Level</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Core Subjects
              </label>
              {formData.curriculum.primary.coreSubjects.map((subject, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      const updatedSubjects = [...formData.curriculum.primary.coreSubjects];
                      updatedSubjects[index] = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        curriculum: {
                          ...prev.curriculum,
                          primary: { ...prev.curriculum.primary, coreSubjects: updatedSubjects }
                        }
                      }));
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Subject ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedSubjects = formData.curriculum.primary.coreSubjects.filter((_, i) => i !== index);
                      setFormData(prev => ({
                        ...prev,
                        curriculum: {
                          ...prev.curriculum,
                          primary: { ...prev.curriculum.primary, coreSubjects: updatedSubjects }
                        }
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
                    curriculum: {
                      ...prev.curriculum,
                      primary: {
                        ...prev.curriculum.primary,
                        coreSubjects: [...prev.curriculum.primary.coreSubjects, '']
                      }
                    }
                  }));
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
              >
                <FaPlus /> Add Subject
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Co-Scholastic Activities
              </label>
              {formData.curriculum.primary.coScholastic.map((activity, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={activity}
                    onChange={(e) => {
                      const updatedActivities = [...formData.curriculum.primary.coScholastic];
                      updatedActivities[index] = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        curriculum: {
                          ...prev.curriculum,
                          primary: { ...prev.curriculum.primary, coScholastic: updatedActivities }
                        }
                      }));
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Activity ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedActivities = formData.curriculum.primary.coScholastic.filter((_, i) => i !== index);
                      setFormData(prev => ({
                        ...prev,
                        curriculum: {
                          ...prev.curriculum,
                          primary: { ...prev.curriculum.primary, coScholastic: updatedActivities }
                        }
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
                    curriculum: {
                      ...prev.curriculum,
                      primary: {
                        ...prev.curriculum.primary,
                        coScholastic: [...prev.curriculum.primary.coScholastic, '']
                      }
                    }
                  }));
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
              >
                <FaPlus /> Add Activity
              </button>
            </div>
          </div>

          {/* Middle Level */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Middle Level</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Core Subjects
              </label>
              {formData.curriculum.middle.coreSubjects.map((subject, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      const updatedSubjects = [...formData.curriculum.middle.coreSubjects];
                      updatedSubjects[index] = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        curriculum: {
                          ...prev.curriculum,
                          middle: { ...prev.curriculum.middle, coreSubjects: updatedSubjects }
                        }
                      }));
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Subject ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedSubjects = formData.curriculum.middle.coreSubjects.filter((_, i) => i !== index);
                      setFormData(prev => ({
                        ...prev,
                        curriculum: {
                          ...prev.curriculum,
                          middle: { ...prev.curriculum.middle, coreSubjects: updatedSubjects }
                        }
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
                    curriculum: {
                      ...prev.curriculum,
                      middle: {
                        ...prev.curriculum.middle,
                        coreSubjects: [...prev.curriculum.middle.coreSubjects, '']
                      }
                    }
                  }));
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
              >
                <FaPlus /> Add Subject
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Activities
              </label>
              {formData.curriculum.middle.additionalActivities.map((activity, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={activity}
                    onChange={(e) => {
                      const updatedActivities = [...formData.curriculum.middle.additionalActivities];
                      updatedActivities[index] = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        curriculum: {
                          ...prev.curriculum,
                          middle: { ...prev.curriculum.middle, additionalActivities: updatedActivities }
                        }
                      }));
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Activity ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedActivities = formData.curriculum.middle.additionalActivities.filter((_, i) => i !== index);
                      setFormData(prev => ({
                        ...prev,
                        curriculum: {
                          ...prev.curriculum,
                          middle: { ...prev.curriculum.middle, additionalActivities: updatedActivities }
                        }
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
                    curriculum: {
                      ...prev.curriculum,
                      middle: {
                        ...prev.curriculum.middle,
                        additionalActivities: [...prev.curriculum.middle.additionalActivities, '']
                      }
                    }
                  }));
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
              >
                <FaPlus /> Add Activity
              </button>
            </div>
          </div>

          {/* Secondary Level */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Secondary Level</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Science Stream
                </label>
                {formData.curriculum.secondary.science.map((subject, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        const updatedSubjects = [...formData.curriculum.secondary.science];
                        updatedSubjects[index] = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          curriculum: {
                            ...prev.curriculum,
                            secondary: { ...prev.curriculum.secondary, science: updatedSubjects }
                          }
                        }));
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Subject ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updatedSubjects = formData.curriculum.secondary.science.filter((_, i) => i !== index);
                        setFormData(prev => ({
                          ...prev,
                          curriculum: {
                            ...prev.curriculum,
                            secondary: { ...prev.curriculum.secondary, science: updatedSubjects }
                          }
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
                      curriculum: {
                        ...prev.curriculum,
                        secondary: {
                          ...prev.curriculum.secondary,
                          science: [...prev.curriculum.secondary.science, '']
                        }
                      }
                    }));
                  }}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
                >
                  <FaPlus /> Add Subject
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commerce Stream
                </label>
                {formData.curriculum.secondary.commerce.map((subject, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        const updatedSubjects = [...formData.curriculum.secondary.commerce];
                        updatedSubjects[index] = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          curriculum: {
                            ...prev.curriculum,
                            secondary: { ...prev.curriculum.secondary, commerce: updatedSubjects }
                          }
                        }));
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Subject ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updatedSubjects = formData.curriculum.secondary.commerce.filter((_, i) => i !== index);
                        setFormData(prev => ({
                          ...prev,
                          curriculum: {
                            ...prev.curriculum,
                            secondary: { ...prev.curriculum.secondary, commerce: updatedSubjects }
                          }
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
                      curriculum: {
                        ...prev.curriculum,
                        secondary: {
                          ...prev.curriculum.secondary,
                          commerce: [...prev.curriculum.secondary.commerce, '']
                        }
                      }
                    }));
                  }}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
                >
                  <FaPlus /> Add Subject
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Humanities Stream
                </label>
                {formData.curriculum.secondary.humanities.map((subject, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        const updatedSubjects = [...formData.curriculum.secondary.humanities];
                        updatedSubjects[index] = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          curriculum: {
                            ...prev.curriculum,
                            secondary: { ...prev.curriculum.secondary, humanities: updatedSubjects }
                          }
                        }));
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Subject ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updatedSubjects = formData.curriculum.secondary.humanities.filter((_, i) => i !== index);
                        setFormData(prev => ({
                          ...prev,
                          curriculum: {
                            ...prev.curriculum,
                            secondary: { ...prev.curriculum.secondary, humanities: updatedSubjects }
                          }
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
                      curriculum: {
                        ...prev.curriculum,
                        secondary: {
                          ...prev.curriculum.secondary,
                          humanities: [...prev.curriculum.secondary.humanities, '']
                        }
                      }
                    }));
                  }}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
                >
                  <FaPlus /> Add Subject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWorkshops = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Workshops & Seminars
        </label>
        <p className="text-sm text-gray-600 mb-4">Add information about workshops and seminars</p>
        
        {formData.workshops.map((workshop, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Workshop Title
                </label>
                <input
                  type="text"
                  value={workshop.title}
                  onChange={(e) => {
                    const updatedWorkshops = [...formData.workshops];
                    updatedWorkshops[index] = { ...workshop, title: e.target.value };
                    setFormData(prev => ({ ...prev, workshops: updatedWorkshops }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Digital Learning Workshop"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  value={workshop.type}
                  onChange={(e) => {
                    const updatedWorkshops = [...formData.workshops];
                    updatedWorkshops[index] = { ...workshop, type: e.target.value as 'current' | 'upcoming' };
                    setFormData(prev => ({ ...prev, workshops: updatedWorkshops }));
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
                  value={workshop.schedule}
                  onChange={(e) => {
                    const updatedWorkshops = [...formData.workshops];
                    updatedWorkshops[index] = { ...workshop, schedule: e.target.value };
                    setFormData(prev => ({ ...prev, workshops: updatedWorkshops }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Every Saturday, 10:00 AM - 12:00 PM"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Classes
                </label>
                <input
                  type="text"
                  value={workshop.targetClasses}
                  onChange={(e) => {
                    const updatedWorkshops = [...formData.workshops];
                    updatedWorkshops[index] = { ...workshop, targetClasses: e.target.value };
                    setFormData(prev => ({ ...prev, workshops: updatedWorkshops }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Class 6-8"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={workshop.description}
                onChange={(e) => {
                  const updatedWorkshops = [...formData.workshops];
                  updatedWorkshops[index] = { ...workshop, description: e.target.value };
                  setFormData(prev => ({ ...prev, workshops: updatedWorkshops }));
                }}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the workshop content and objectives..."
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                const updatedWorkshops = formData.workshops.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, workshops: updatedWorkshops }));
              }}
              className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FaTrash /> Remove Workshop
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              workshops: [...prev.workshops, {
                title: '',
                description: '',
                schedule: '',
                targetClasses: '',
                type: 'upcoming'
              }]
            }));
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Add Workshop
        </button>
      </div>
    </div>
  );

  const renderMethodology = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Teaching Methodology
        </label>
        <p className="text-sm text-gray-600 mb-4">Define the teaching approaches and methodologies</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interactive Learning Methods
            </label>
            {formData.methodology.interactiveLearning.map((method, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={method}
                  onChange={(e) => {
                    const updatedMethods = [...formData.methodology.interactiveLearning];
                    updatedMethods[index] = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      methodology: {
                        ...prev.methodology,
                        interactiveLearning: updatedMethods
                      }
                    }));
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Method ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const updatedMethods = formData.methodology.interactiveLearning.filter((_, i) => i !== index);
                    setFormData(prev => ({
                      ...prev,
                      methodology: {
                        ...prev.methodology,
                        interactiveLearning: updatedMethods
                      }
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
                    interactiveLearning: [...prev.methodology.interactiveLearning, '']
                  }
                }));
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <FaPlus /> Add Method
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technology Integration
            </label>
            {formData.methodology.technologyIntegration.map((tech, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tech}
                  onChange={(e) => {
                    const updatedTech = [...formData.methodology.technologyIntegration];
                    updatedTech[index] = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      methodology: {
                        ...prev.methodology,
                        technologyIntegration: updatedTech
                      }
                    }));
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Technology ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const updatedTech = formData.methodology.technologyIntegration.filter((_, i) => i !== index);
                    setFormData(prev => ({
                      ...prev,
                      methodology: {
                        ...prev.methodology,
                        technologyIntegration: updatedTech
                      }
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
                    technologyIntegration: [...prev.methodology.technologyIntegration, '']
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
              Personalized Learning Approaches
            </label>
            {formData.methodology.personalizedLearning.map((approach, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={approach}
                  onChange={(e) => {
                    const updatedApproaches = [...formData.methodology.personalizedLearning];
                    updatedApproaches[index] = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      methodology: {
                        ...prev.methodology,
                        personalizedLearning: updatedApproaches
                      }
                    }));
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Approach ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const updatedApproaches = formData.methodology.personalizedLearning.filter((_, i) => i !== index);
                    setFormData(prev => ({
                      ...prev,
                      methodology: {
                        ...prev.methodology,
                        personalizedLearning: updatedApproaches
                      }
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
                    personalizedLearning: [...prev.methodology.personalizedLearning, '']
                  }
                }));
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <FaPlus /> Add Approach
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-lg  p-6 mb-6">
            {/* shadow-md lg-p6 if want to make border the use*/}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Add New Iti Institute</h1>
                  <p className="text-gray-600 mt-2">Fill in the details to add a new iti to the platform</p>
                </div>
                {/* <button
                  onClick={() => navigate('/iti institues')}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button> */}
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
                      Fill in the {sections.find(s => s.id === activeSection)?.label.toLowerCase()} for the iti institue
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
                              Add Iti Institute
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

export default AddItiPage;
