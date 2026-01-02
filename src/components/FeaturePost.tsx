import type React from 'react';

export interface SpecialOffer {
  id: number;
  title: string;
  description: string;
}

export interface FeaturePostData {
  postType: string;
  city: string;
  duration: string;
  billingType: string;
  category: string;
  targetAll: string;
  approvalType: string;
  description: string;
  fileName: string;
}

interface FeaturePostProps {
  data?: FeaturePostData;
  title?: string;
  className?: string;
  specialOffers?: SpecialOffer[];
}

const defaultData: FeaturePostData = {
  postType: 'University',
  city: 'ALL INDIA',
  duration: 'Custom',
  billingType: 'Per Day',
  category: 'NEET, JEE, ENGINEERING MEDICAL',
  targetAll: 'Yes',
  approvalType: 'Auto-Approval',
  description: 'BEST OF BEST',
  fileName: 'promotion_details.pdf'
};

const FeaturePost: React.FC<FeaturePostProps> = ({ 
  data = defaultData, 
  title = 'Featured Post',
  className = '',
  specialOffers = []
}) => {
  return (
    <div className={`bg-white rounded-lg border shadow-sm p-6 mb-8 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-800">{title}</h2>
      {/* Promotion Summary */}
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xl">📊</span>
          </div>
          <h3 className="text-xl text-blue-700 font-semibold">Promotion Summary</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Post Type */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-pink-600 text-lg">📌</span>
                <span className="text-gray-600">Post Type</span>
              </div>
              <div className="text-lg font-semibold">{data.postType}</div>
            </div>
            
            {/* City */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600 text-lg">🌆</span>
                <span className="text-gray-600">City</span>
              </div>
              <div className="text-lg font-semibold">{data.city}</div>
            </div>
            
            {/* Duration */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600 text-lg">⏱️</span>
                <span className="text-gray-600">Duration</span>
              </div>
              <div className="text-lg font-semibold">{data.duration}</div>
            </div>
            
            {/* Billing Type */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-600 text-lg">💰</span>
                <span className="text-gray-600">Billing Type</span>
              </div>
              <div className="text-lg font-semibold">{data.billingType}</div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            {/* Category */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-600 text-lg">📁</span>
                <span className="text-gray-600">Category</span>
              </div>
              <div className="text-lg font-semibold">{data.category}</div>
            </div>
            
            {/* Target All */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-600 text-lg">🎯</span>
                <span className="text-gray-600">Target All</span>
              </div>
              <div className="text-lg font-semibold">{data.targetAll}</div>
            </div>
            
            {/* Approval Type */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600 text-lg">🔍</span>
                <span className="text-gray-600">Approval Type</span>
              </div>
              <div className="text-lg font-semibold">{data.approvalType}</div>
            </div>
            
            {/* Description */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600 text-lg">📝</span>
                <span className="text-gray-600">Description</span>
              </div>
              <div className="text-lg font-semibold">{data.description}</div>
            </div>
          </div>
        </div>
        
        {/* File Section */}
        <div className="mt-4 bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-600 text-lg">📂</span>
            <span className="text-gray-600">File</span>
          </div>
          <div className="flex items-center gap-2 p-2 border rounded-md">
            <span className="text-blue-600 text-xl">📄</span>
            <span className="text-sm text-gray-700">{data.fileName}</span>
          </div>
        </div>

        {/* Special Offers Section - Only show if specialOffers are provided */}
        {specialOffers.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-600 text-lg">🏆</span>
              <h3 className="text-lg font-semibold text-gray-800">Special Offers</h3>
            </div>
            <div className="space-y-3">
              {specialOffers.map((offer) => (
                <div key={offer.id} className="flex items-start gap-2 p-2 bg-green-50 rounded-md">
                  <span className="text-green-600 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">{offer.title}</p>
                    <p className="text-sm text-gray-600">{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturePost; 