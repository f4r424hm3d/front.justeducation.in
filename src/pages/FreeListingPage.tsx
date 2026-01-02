import type React from 'react';
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { CSSTransition } from 'react-transition-group';
import './FreeListingPage.css';
import { FaBuilding, FaMapMarkerAlt, FaCity, FaChevronDown, FaChevronUp, FaEnvelope, FaPhone, FaGlobe, FaEdit } from 'react-icons/fa';

// Floating label input component
interface FloatingLabelInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  [key: string]: any;
}
const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, name, value, onChange, type = 'text', className = '', ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative mb-4 w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full h-[38px] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base placeholder-transparent ${className}`}
        placeholder={label}
        autoComplete="off"
        {...props}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 pointer-events-none bg-white px-1
          ${focused || value ? '-top-3 text-xs text-blue-600' : 'top-2.5 text-base text-gray-500'}`}
        style={{ background: 'white' }}
      >
        {label}
      </label>
    </div>
  );
};

// Floating label select component
interface FloatingLabelSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
  className?: string;
}
const FloatingLabelSelect: React.FC<FloatingLabelSelectProps> = ({ label, name, value, onChange, children, className = '' }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative mb-4 w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full h-[38px] border border-gray-300 rounded-md px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base appearance-none ${value ? 'text-gray-900' : 'text-gray-500'} ${className}`}
      >
        <option value="" disabled hidden>{label}</option>
        {children}
      </select>
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 pointer-events-none bg-white px-1
          ${focused || value ? '-top-3 text-xs text-blue-600' : 'top-2.5 text-base text-gray-500'}`}
        style={{ background: 'white' }}
      >
        {label}
      </label>
      {/* Custom dropdown arrow */}
      <svg className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

const FreeListingPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    type: '',
    address: '',
    contact: '',
    website: '',
    description: '',
    email: '',
    pincode: '',
    plot: '',
    building: '',
    street: '',
    landmark: '',
    area: '',
    city: '',
    state: '',
    established: '',
    affiliation: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    educationLevels: [] as string[],
    coursesOffered: '',
    admissionCriteria: [] as string[],
    applicationDetails: '',
    minFee: '',
    maxFee: '',
    scholarshipsAvailable: '',
    paymentModes: [] as string[],
    campusFacilities: [] as string[],
    onlineLearning: false,
    placementAssistance: '',
    topRecruiters: '',
    awards: '',
    alumniStories: '',
    overallRating: '',
    testimonials: '',
    eventsNews: '',
    termsConditions: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState(form);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      
      if (name === 'onlineLearning') {
        setForm({ ...form, [name]: checked });
      } else {
        // Handle array of checkboxes (educationLevels, admissionCriteria, paymentModes, campusFacilities)
        const currentValues = [...(form[name as keyof typeof form] as string[] || [])];
        
        if (checked) {
          // Add the value if it's checked and not already in the array
          if (!currentValues.includes(value)) {
            setForm({ ...form, [name]: [...currentValues, value] });
          }
        } else {
          // Remove the value if it's unchecked
          setForm({ ...form, [name]: currentValues.filter(item => item !== value) });
        }
      }
    } else if (type === 'radio') {
      setForm({ ...form, [name]: value });
    } else {
      // Handle regular inputs, textareas, and selects
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-4 px-4 sm:py-8 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-blue-100 rounded-full opacity-40 animate-pulse-slow"></div>
          <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-blue-200 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-50 rounded-full opacity-20 animate-pulse-slow"></div>
        </div>
        {!showForm && !submitted && (
          <div className="w-full max-w-4xl mx-auto z-10">
            {/* <div className="flex flex-col items-center">
              <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full mb-4 text-sm tracking-wide shadow">Step 1: Start Your Free Listing</span>
            </div> */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="Free Listing Illustration"
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6 mx-auto drop-shadow-lg animate-fade-in"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }}
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-3 sm:mb-4 text-center animate-fade-in">Free Listing for Education</h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-xl text-center mx-auto animate-fade-in">
              List your school, college, university, or coaching center for free on our platform and reach thousands of students across India. Fill out the form below to get started!
            </p>
            <div className="bg-white rounded-lg shadow-md px-4 sm:px-8 py-4 sm:py-6 mb-6 sm:mb-8 w-full animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 text-center">Why List With Us?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl">📢</span>
                  <div>
                    <div className="font-semibold">Reach More Students</div>
                    <div className="text-gray-600 text-sm">Get discovered by thousands of students searching for institutions like yours.</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl">💡</span>
                  <div>
                    <div className="font-semibold">Easy & Free</div>
                    <div className="text-gray-600 text-sm">No hidden charges. Listing your institution is 100% free and takes just a few minutes.</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl">🔒</span>
                  <div>
                    <div className="font-semibold">Secure & Trusted</div>
                    <div className="text-gray-600 text-sm">Your data is safe with us. We verify every listing for authenticity.</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl">🚀</span>
                  <div>
                    <div className="font-semibold">Boost Your Visibility</div>
                    <div className="text-gray-600 text-sm">Appear in search results and get more inquiries from interested students.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md shadow hover:bg-blue-700 transition animate-fade-in text-sm sm:text-base"
                onClick={() => setShowForm(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
        <CSSTransition
          in={showForm}
          timeout={400}
          classNames="fade-slide"
          unmountOnExit
          appear
        >
          <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-blue-100 p-4 sm:p-6 flex flex-col overflow-hidden relative z-10">
            {showSuccessMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Listing submitted successfully!</p>
                  <p className="text-sm">Thank you for submitting your education institution details. Your listing will be reviewed and published soon.</p>
                </div>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="w-full p-4 sm:p-6 flex flex-col justify-center"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">Education Listing Form</h1>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-5 text-center">Basic Information</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Institute Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Institute Name" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Established Year</label>
                  <input 
                    type="text" 
                    name="established" 
                    value={form.established || ''} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter year" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Affiliation Board (CBSE, ICSE, UGC, AICTE, etc.)</label>
                  <input 
                    type="text" 
                    name="affiliation" 
                    value={form.affiliation || ''} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter affiliation or board" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">About the Institution (Brief Description)</label>
                  <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter details about the institution"
                    rows={4}
                  ></textarea>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Location & Contact Detail</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Address</label>
                  <input 
                    type="text" 
                    name="address" 
                    value={form.address} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full address" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-blue-700 font-medium mb-1">City</label>
                    <input 
                      type="text" 
                      name="city" 
                      value={form.city} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter city" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-1">State</label>
                    <input 
                      type="text" 
                      name="state" 
                      value={form.state} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter state" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-1">PIN Code</label>
                    <input 
                      type="text" 
                      name="pincode" 
                      value={form.pincode} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter pin code" 
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Contact Number</label>
                  <input 
                    type="text" 
                    name="contact" 
                    value={form.contact} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter contact number" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Website</label>
                  <input 
                    type="text" 
                    name="website" 
                    value={form.website} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter website URL" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Facebook</label>
                  <input 
                    type="text" 
                    name="facebook" 
                    value={form.facebook || ''} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter facebook link" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Instagram</label>
                  <input 
                    type="text" 
                    name="instagram" 
                    value={form.instagram || ''} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter instagram link" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">LinkedIn</label>
                  <input 
                    type="text" 
                    name="linkedin" 
                    value={form.linkedin || ''} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter LinkedIn link" 
                  />
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Education Levels</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Education Levels (Tick all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="nursery" 
                        name="educationLevels" 
                        value="Nursery - 12th Grade" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="nursery">Nursery - 12th Grade</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="diploma" 
                        name="educationLevels" 
                        value="Diploma" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="diploma">Diploma</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="undergraduate" 
                        name="educationLevels" 
                        value="Undergraduate (UG)" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="undergraduate">Undergraduate (UG)</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="postgraduate" 
                        name="educationLevels" 
                        value="Postgraduate (PG)" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="postgraduate">Postgraduate (PG)</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="doctorate" 
                        name="educationLevels" 
                        value="Doctorate (PhD)" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="doctorate">Doctorate (PhD)</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="certification" 
                        name="educationLevels" 
                        value="Certification Programs" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="certification">Certification Programs</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Courses Offered</label>
                  <select 
                    name="coursesOffered" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Open this select menu</option>
                    <option value="engineering">Engineering</option>
                    <option value="medical">Medical</option>
                    <option value="arts">Arts</option>
                    <option value="commerce">Commerce</option>
                    <option value="science">Science</option>
                    <option value="management">Management</option>
                    <option value="law">Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Admission Criteria</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="entranceExam" 
                        name="admissionCriteria" 
                        value="Entrance Exam" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="entranceExam">Entrance Exam</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="directAdmission" 
                        name="admissionCriteria" 
                        value="Direct Admission" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="directAdmission">Direct Admission</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="meritBased" 
                        name="admissionCriteria" 
                        value="Merit-Based" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="meritBased">Merit-Based</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="other" 
                        name="admissionCriteria" 
                        value="Other" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="other">Other</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Application Process & Deadline</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Application Details</label>
                  <input 
                    type="text" 
                    name="applicationDetails" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter application details" 
                  />
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Fee Structure</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Annual Fee Range (₹)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        name="minFee" 
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Min" 
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        name="maxFee" 
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Max" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Scholarships Available?</label>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="scholarshipsYes" 
                        name="scholarshipsAvailable" 
                        value="Yes" 
                        className="mr-2"
                      />
                      <label htmlFor="scholarshipsYes">Yes</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="scholarshipsNo" 
                        name="scholarshipsAvailable" 
                        value="No" 
                        className="mr-2"
                      />
                      <label htmlFor="scholarshipsNo">No</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Payment Modes Accepted</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="onlinePayment" 
                        name="paymentModes" 
                        value="Online Payment" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="onlinePayment">Online Payment</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="chequeDD" 
                        name="paymentModes" 
                        value="Cheque/DD" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="chequeDD">Cheque/DD</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="cash" 
                        name="paymentModes" 
                        value="Cash" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="cash">Cash</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="emiOptions" 
                        name="paymentModes" 
                        value="EMI Options Available" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="emiOptions">EMI Options Available</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Infrastructure & Facilities</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Campus Facilities (Tick all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="library" 
                        name="campusFacilities" 
                        value="Library" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="library">Library</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="labs" 
                        name="campusFacilities" 
                        value="Labs" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="labs">Labs</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="playground" 
                        name="campusFacilities" 
                        value="Playground" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="playground">Playground</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="cafeteria" 
                        name="campusFacilities" 
                        value="Cafeteria" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="cafeteria">Cafeteria</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="sportsComplex" 
                        name="campusFacilities" 
                        value="Sports Complex" 
                        className="mr-2 h-5 w-5"
                      />
                      <label htmlFor="sportsComplex">Sports Complex</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="onlineLearning" 
                      name="onlineLearning" 
                      className="mr-2 h-5 w-5"
                    />
                    <label htmlFor="onlineLearning" className="font-medium">Online Learning Available</label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Upload Images/Videos</label>
                  <input 
                    type="file" 
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Placements & Achievements</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Placement Assistance Available?</label>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="placementYes" 
                        name="placementAssistance" 
                        value="Yes" 
                        className="mr-2"
                      />
                      <label htmlFor="placementYes">Yes</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="placementNo" 
                        name="placementAssistance" 
                        value="No" 
                        className="mr-2"
                      />
                      <label htmlFor="placementNo">No</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Top Recruiting Companies</label>
                  <input 
                    type="text" 
                    name="topRecruiters" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter top recruiting companies" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Awards & Recognitions</label>
                  <input 
                    type="text" 
                    name="awards" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter awards and recognitions" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Alumni Success Stories</label>
                  <textarea 
                    name="alumniStories" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Share alumni success stories"
                    rows={3}
                  ></textarea>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Reviews & Ratings</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Overall Rating (Out of 5)</label>
                  <input 
                    type="number" 
                    name="overallRating" 
                    min="1" 
                    max="5" 
                    step="0.1" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter rating (e.g. 4.5)" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Student/Parent Testimonials</label>
                  <textarea 
                    name="testimonials" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter testimonials"
                    rows={4}
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Upload Photo/Video Review</label>
                  <input 
                    type="file" 
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Additional Features</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Events & News Updates</label>
                  <textarea 
                    name="eventsNews" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter events and news updates"
                    rows={3}
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Download Brochure</label>
                  <input 
                    type="file" 
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-8 mb-5 text-center">Submit & Verification</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-blue-700 font-medium mb-1">Verification Documents Upload (If Required)</label>
                  <input 
                    type="file" 
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="termsConditions" 
                      name="termsConditions" 
                      className="mr-2 h-5 w-5"
                    />
                    <label htmlFor="termsConditions">I Agree to the Terms & Conditions</label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition text-base sm:text-lg shadow"
                >
                  Submit
                </button>
                {showSuccessMessage && (
                  <button
                    type="button"
                    className="ml-4 px-8 py-3 bg-gray-200 text-gray-700 rounded-md font-semibold hover:bg-gray-300 transition text-base sm:text-lg shadow"
                    onClick={() => {
                      setForm({
                        name: '',
                        type: '',
                        address: '',
                        contact: '',
                        website: '',
                        description: '',
                        email: '',
                        pincode: '',
                        plot: '',
                        building: '',
                        street: '',
                        landmark: '',
                        area: '',
                        city: '',
                        state: '',
                        established: '',
                        affiliation: '',
                        facebook: '',
                        instagram: '',
                        linkedin: '',
                        educationLevels: [] as string[],
                        coursesOffered: '',
                        admissionCriteria: [] as string[],
                        applicationDetails: '',
                        minFee: '',
                        maxFee: '',
                        scholarshipsAvailable: '',
                        paymentModes: [] as string[],
                        campusFacilities: [] as string[],
                        onlineLearning: false,
                        placementAssistance: '',
                        topRecruiters: '',
                        awards: '',
                        alumniStories: '',
                        overallRating: '',
                        testimonials: '',
                        eventsNews: '',
                        termsConditions: false
                      });
                      setShowSuccessMessage(false);
                    }}
                  >
                    Reset Form
                  </button>
                )}
              </div>
            </form>
          </div>
        </CSSTransition>
      </div>
    </MainLayout>
  );
};

export default FreeListingPage; 