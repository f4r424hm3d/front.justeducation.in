import React, { useState } from 'react';
import { FaGraduationCap, FaSchool, FaUniversity, FaTools, FaChalkboardTeacher, FaBook, FaGlobe, FaUserMd, FaHandsHelping, FaBookReader, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  route: string;
}

const ListingPage: React.FC = () => {
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      id: 'school',
      name: 'School',
      icon: <FaSchool className="w-5 h-5" />,
      route: '/add-school'
    },
    {
      id: 'college',
      name: 'College',
      icon: <FaGraduationCap className="w-5 h-5" />,
      route: '/add-college'
    },
    {
      id: 'university',
      name: 'University',
      icon: <FaUniversity className="w-5 h-5" />,
      route: '/add-university'
    },
    {
      id: 'vocational',
      name: 'Vocational',
      icon: <FaTools className="w-5 h-5" />,
      route: '/add-vocational'
    },
    {
      id: 'mbbsconsultant',
      name: 'MBBS Consultant',
      icon: <FaUserMd className="w-5 h-5" />,
      route: '/add-mbbs-abroad-consultant'
    },
    {
      id: 'library',
      name: 'Library',
      icon: <FaBookReader className="w-5 h-5" />,
      route: '/add-library'
    },
    {
      id: 'iti',
      name: 'ITI',
      icon: <FaCog className="w-5 h-5" />,
      route: '/add-iti'
    },
    {
      id: 'studyabroad',
      name: 'Study Abroad',
      icon: <FaGraduationCap className="w-5 h-5" />,
      route: '/add-study-abroad'
    },
    {
      id: 'ngo',
      name: 'NGO',
      icon: <FaHandsHelping className="w-5 h-5" />,
      route: '/add-ngo'
    },
    {
      id: 'coaching',
      name: 'Coaching',
      icon: <FaChalkboardTeacher className="w-5 h-5" />,
      route: '/fill-coaching'
    }
  ];

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Educational Categories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive list of educational institutions and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-blue-300"
                  onClick={() => handleCategoryClick(category.route)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                      {category.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {category.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ListingPage;
