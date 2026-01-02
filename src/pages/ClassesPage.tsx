import type React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const ClassesPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedClass, setSelectedClass] = useState<string | null>('Show All');

  // Handle resource click
  const handleResourceClick = (resourceName: string, className: string) => {
    navigate(`/classes/${encodeURIComponent(className)}/${encodeURIComponent(resourceName)}`);
  };

  // Classes data with detailed curriculum information
  const classesData = [
    {
      name: 'Class 1',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' }
      ]
    },
    {
      name: 'Class 2',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' }
      ]
    },
    {
      name: 'Class 3',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' }
      ]
    },
    {
      name: 'Class 4',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' }
      ]
    },
    {
      name: 'Class 5',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' }
      ]
    },
    {
      name: 'Class 6',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' }
      ]
    },
    {
      name: 'Class 7',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' }
      ]
    },
    {
      name: 'Class 8',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' }
      ]
    },
    {
      name: 'Class 9',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' },
        { icon: '🧪', name: 'Labs' },
        { icon: '❓', name: 'Previous Questions' },
        { icon: '📘', name: 'RD Sharma Book' },
        { icon: '📗', name: 'HC Verma Book' }
      ]
    },
    {
      name: 'Class 10',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' },
        { icon: '🧪', name: 'Labs' },
        { icon: '❓', name: 'Previous Questions' },
        { icon: '📘', name: 'RD Sharma Book' },
        { icon: '📗', name: 'HC Verma Book' }
      ]
    },
    {
      name: 'Class 11',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' },
        { icon: '🧪', name: 'Labs' },
        { icon: '❓', name: 'Previous Questions' },
        { icon: '📘', name: 'RD Sharma Book' },
        { icon: '📗', name: 'HC Verma Book' }
      ]
    },
    {
      name: 'Class 12',
      resources: [
        { icon: '📋', name: 'Syllabus' },
        { icon: '📚', name: 'Books' },
        { icon: '📝', name: 'Worksheet' },
        { icon: '🎓', name: 'Study Material' },
        { icon: '📄', name: 'Sample Papers' },
        { icon: '💻', name: 'NCERT Solutions' },
        { icon: '⭐', name: 'Marking Scheme' },
        { icon: '🏠', name: 'Holiday Homework' },
        { icon: '🧪', name: 'Labs' },
        { icon: '❓', name: 'Previous Questions' },
        { icon: '📘', name: 'RD Sharma Book' },
        { icon: '📗', name: 'HC Verma Book' }
      ]
    }
  ];

  const selectedClassData = selectedClass === 'Show All' ? null : classesData.find(cls => cls.name === selectedClass);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Educational Classes & Study Materials
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Comprehensive study resources, syllabus, books, and practice materials for all classes
              </p>
            </div>
          </div>
        </div>

        {/* Class Selection Filter Section */}
        <div className="sticky-nav bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center nav-scroll">
              {/* Show All Option */}
              <button
                onClick={() => setSelectedClass('Show All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedClass === 'Show All'
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 hover:shadow-md'
                }`}
              >
                All Classes
              </button>

              {/* Individual Classes */}
              {classesData.map((cls) => (
                <button
                  key={cls.name}
                  onClick={() => setSelectedClass(cls.name)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedClass === cls.name
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md'
                  }`}
                >
                  {cls.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Main Content */}
          <div>
            {selectedClass === 'Show All' ? (
              // Show All Classes View - Display as cards
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">All Classes</h2>
                  <p className="text-gray-600 text-justify max-w-2xl md:max-w-full mx-auto">
                    Select any class to access comprehensive study materials, resources, and educational content
                    From Classes 1 to 5, students build foundational skills in reading, writing, basic math, and environmental science, 
                    fostering curiosity and creativity. Classes 6 to 8 introduce more structured subjects 
                    like science, social studies, mathematics, and languages, encouraging analytical thinking.
                     In Classes 9 and 10, core subjects deepen with focus on board exams, promoting conceptual 
                     understanding and exam readiness. Classes 11 and 12 specialize based on chosen streams—Science,
                    Commerce, or Humanities—preparing students for higher education and careers. Across all classes,
                    emphasis grows on life skills, digital literacy, critical thinking, and holistic development,
                    aiming to nurture responsible and capable individuals for the future
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classesData.map((cls) => (
                    <div
                      key={cls.name}
                      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedClass(cls.name)}
                    >
                      {/* Class Header */}
                      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4">
                        <h3 className="text-xl font-bold text-center">{cls.name}</h3>
                      </div>

                      {/* Resources Grid */}
                      <div className="p-4">
                        <div className="grid grid-cols-4 gap-3">
                          {cls.resources.map((resource, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group-hover:bg-teal-50 cursor-pointer"
                                                          onClick={(e) => {
                              e.stopPropagation();
                              handleResourceClick(resource.name, cls.name);
                            }}
                            >
                              <div className="text-2xl mb-1 transform group-hover:scale-110 transition-transform">
                                {resource.icon}
                              </div>
                              <span className="text-xs text-gray-600 text-center font-medium leading-tight">
                                {resource.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Individual Class View
              selectedClassData && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {selectedClassData.name}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Access comprehensive study materials and resources for {selectedClassData.name}
                    </p>
                  </div>

                  {/* Selected Class Card */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-4xl mx-auto">
                    {/* Class Header */}
                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
                      <h3 className="text-2xl font-bold text-center">{selectedClassData.name}</h3>
                    </div>

                    {/* Resources Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                        {selectedClassData.resources.map((resource, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-teal-50 hover:shadow-md transition-all duration-200 cursor-pointer group"
                            onClick={() => handleResourceClick(resource.name, selectedClassData.name)}
                          >
                            <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
                              {resource.icon}
                            </div>
                            <span className="text-sm text-gray-700 text-center font-medium leading-tight group-hover:text-teal-700">
                              {resource.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">
                      About {selectedClassData.name} Resources
                    </h3>
                    <p className="text-blue-700">
                      This section contains all the essential study materials and resources for {selectedClassData.name}. 
                      Click on any resource above to access detailed information, downloads, and study guides. 
                      Our comprehensive collection includes NCERT solutions, sample papers, worksheets, and more to support your learning journey.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{selectedClassData.resources.length}</div>
                      <div className="text-sm text-green-700 font-medium">Resources</div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600">All</div>
                      <div className="text-sm text-orange-700 font-medium">Subjects</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">2025-26</div>
                      <div className="text-sm text-purple-700 font-medium">Session</div>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-indigo-600">Updated</div>
                      <div className="text-sm text-indigo-700 font-medium">Curriculum</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Quick Access Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Access to Popular Classes</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {['Class 10', 'Class 12', 'Class 9', 'Class 11', 'Class 8', 'Class 7'].map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg hover:scale-105"
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>
        </div>


      </div>
    </MainLayout>
  );
};

export default ClassesPage; 