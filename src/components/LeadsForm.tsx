import type React from 'react';
import { useState } from 'react';

const LeadsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    educationLevel: '',
    studyAbroad: false,
    whatsappUpdates: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API call to submit form data
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-pink-600 flex items-center justify-center mr-3 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-pink-600">
          Looking for admission at Britannica Colleges & School?
        </h2>
      </div>
      <p className="text-gray-600 mb-6">
        Give us your details and we shall help you get there!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full py-3 px-4 pl-12 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700"
            required
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Phone Number Input */}
        <div className="flex">
          <div className="w-16 px-3 py-3 bg-gray-50 border border-gray-200 rounded-l-md text-center text-gray-600 flex items-center justify-center font-medium">
            +91
          </div>
          <div className="relative flex-1">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full py-3 px-4 pl-10 bg-gray-50 border border-gray-200 rounded-r-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700"
              pattern="[0-9]{10}"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Email Address Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full py-3 px-4 pl-12 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700"
            required
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
        
        {/* Education Level Select */}
        <div className="relative">
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="w-full py-3 px-4 pl-12 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 appearance-none text-gray-700"
            required
          >
            <option value="">Please Select Preferred Level</option>
            <option value="UG">Undergraduate (B.Tech, B.Sc, etc.)</option>
            <option value="PG">Postgraduate (M.Tech, MBA, etc.)</option>
            <option value="PhD">Ph.D</option>
            <option value="Certificate">Certificate & Diploma</option>
          </select>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
              <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
              <path d="M9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
              <path d="M6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        
        {/* Checkboxes */}
        <div className="space-y-3">
          <label className="flex items-center space-x-3 py-2 px-3 bg-blue-50 rounded-md cursor-pointer hover:bg-blue-100 transition">
            <input
              type="checkbox"
              id="studyAbroad"
              name="studyAbroad"
              checked={formData.studyAbroad}
              onChange={handleChange}
              className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <span className="text-gray-700">Interested in Study Abroad</span>
          </label>
          
          <label className="flex items-center space-x-3 py-2 px-3 bg-green-50 rounded-md cursor-pointer hover:bg-green-100 transition">
            <input
              type="checkbox"
              id="whatsappUpdates"
              name="whatsappUpdates"
              checked={formData.whatsappUpdates}
              onChange={handleChange}
              className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <span className="text-gray-700">Enable updates & important information on WhatsApp</span>
          </label>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition font-semibold flex items-center justify-center"
        >
          <span>SUBMIT</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          By proceeding ahead you expressly agree to the Britannica School's 
          <a href="#" className="text-pink-600 hover:underline"> Terms & Conditions</a> and 
          <a href="#" className="text-pink-600 hover:underline"> Privacy Policy</a>
        </p>
        
        {/* <div className="mt-2 text-center">
          <span className="text-sm text-gray-600">Already have an account?</span>{' '}
          <a href="#" className="text-pink-600 font-medium hover:underline">Login</a>
        </div> */}
      </div>
    </div>
  );
};

export default LeadsForm; 