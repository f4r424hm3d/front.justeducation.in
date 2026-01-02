import type React from 'react';
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useUser } from '../context/UserContext';
import { FaUserEdit, FaUser, FaRocket, FaFileUpload, FaChevronDown } from 'react-icons/fa';

const ProfilePage: React.FC = () => {
  const { user } = useUser();
  const [featuresPost, setFeaturesPost] = useState({
    postType: '',
    targetAudience: '',
    category: '',
    city: '',
    targetAllUsers: false,
    promotionDuration: '',
    approvalType: '',
    billingType: '',
    description: ''
  });

  if (!user) return <MainLayout><div className="flex justify-center items-center h-64">No user data found.</div></MainLayout>;
  
  const initials = user.fullName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  // Placeholder data for demo
  const memberSince = '07/05/2025';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFeaturesPost(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFeaturesPost(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePromotePost = () => {
    console.log('Promoting post:', featuresPost);
    // Add your promotion logic here
    alert('Post promotion submitted successfully!');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          {/* Profile Header */}
          <div className="rounded-t-xl bg-gradient-to-r from-[#1a2341] via-[#42254e] to-[#c12a2c] p-2 md:p-3">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-900 border-3 border-white flex items-center justify-center text-xl md:text-2xl text-white font-bold">
                  {initials}
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl font-medium text-white">{user.fullName}</h1>
                <p className="text-sm md:text-base text-gray-200">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Personal Information Card */}
          <div className="bg-white rounded-b-xl shadow-md p-3 md:p-4 mb-6">
            <div className="pb-2 mb-4 border-b">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div className="border-l border-r border-b p-2 rounded">
                <div className="text-gray-500 text-xs">Full Name</div>
                <div className="text-base text-gray-800">{user.fullName}</div>
              </div>
              
              <div className="border-l border-r border-b p-2 rounded">
                <div className="text-gray-500 text-xs">Email Address</div>
                <div className="text-base text-gray-800">{user.email}</div>
              </div>
              
              <div className="border-l border-r border-b p-2 rounded">
                <div className="text-gray-500 text-xs">Contact Number</div>
                <div className="text-base text-gray-800">{user.phone || '88042345676543'}</div>
              </div>
              
              <div className="border-l border-r border-b p-2 rounded">
                <div className="text-gray-500 text-xs">Member Since</div>
                <div className="text-base text-gray-800">{memberSince}</div>
              </div>
            </div>
          </div>

          {/* Features Post Section */}
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <div className="flex items-center gap-3 pb-3 mb-6 border-b">
              <FaRocket className="text-blue-600 text-xl" />
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Features Post</h2>
            </div>

            <div className="space-y-6">
              {/* Features Post Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Features Post Type</label>
                <div className="relative">
                  <select
                    name="postType"
                    value={featuresPost.postType}
                    onChange={handleInputChange}
                    className="w-full h-10 border border-gray-300 rounded-lg px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-gray-700 bg-white"
                  >
                    <option value="">Select post type</option>
                    <option value="University">University</option>
                    <option value="College">College</option>
                    <option value="School">School</option>
                    <option value="Coaching">Coaching</option>
                    <option value="ITI">ITI</option>
                    <option value="Vocational">Vocational</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Target Audience Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                <p className="text-xs text-gray-500 mb-3">Select Audience</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="category"
                      value={featuresPost.category}
                      onChange={handleInputChange}
                      placeholder="Category (e.g., NEET, JEE)"
                      className="w-full h-10 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={featuresPost.city}
                      onChange={handleInputChange}
                      placeholder="City (Optional)"
                      className="w-full h-10 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="targetAllUsers"
                    name="targetAllUsers"
                    checked={featuresPost.targetAllUsers}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="targetAllUsers" className="ml-2 text-sm text-gray-700">
                    Target All Users
                  </label>
                </div>
              </div>

              {/* Set Promotion Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Set Promotion Duration</label>
                <div className="relative">
                  <select
                    name="promotionDuration"
                    value={featuresPost.promotionDuration}
                    onChange={handleInputChange}
                    className="w-full h-10 border border-gray-300 rounded-lg px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-gray-700 bg-white"
                  >
                    <option value="">Select duration</option>
                    <option value="1 Day">1 Day</option>
                    <option value="3 Days">3 Days</option>
                    <option value="1 Week">1 Week</option>
                    <option value="2 Weeks">2 Weeks</option>
                    <option value="1 Month">1 Month</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Approval Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Approval Type</label>
                <div className="relative">
                  <select
                    name="approvalType"
                    value={featuresPost.approvalType}
                    onChange={handleInputChange}
                    className="w-full h-10 border border-gray-300 rounded-lg px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-gray-700 bg-white"
                  >
                    <option value="">Select approval type</option>
                    <option value="Auto-Approval">Auto-Approval</option>
                    <option value="Manual Review">Manual Review</option>
                    <option value="Express Approval">Express Approval</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Billing Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Billing Type</label>
                <div className="relative">
                  <select
                    name="billingType"
                    value={featuresPost.billingType}
                    onChange={handleInputChange}
                    className="w-full h-10 border border-gray-300 rounded-lg px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-gray-700 bg-white"
                  >
                    <option value="">Select billing type</option>
                    <option value="Per Day">Per Day</option>
                    <option value="Per Week">Per Week</option>
                    <option value="Per Month">Per Month</option>
                    <option value="One Time">One Time</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Upload Post Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Post Content</label>
                <div className="flex items-center gap-4 mb-4">
                  <label className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg px-4 py-2 cursor-pointer transition-colors">
                    <FaFileUpload className="text-gray-500" />
                    <span className="text-sm text-gray-600">Choose file</span>
                    <input type="file" className="hidden" accept="image/*,video/*" />
                  </label>
                  <span className="text-xs text-gray-500">No file chosen</span>
                </div>
                
                <textarea
                  name="description"
                  value={featuresPost.description}
                  onChange={handleInputChange}
                  placeholder="Enter description or text..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Promote Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handlePromotePost}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FaRocket />
                  Promote Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage; 