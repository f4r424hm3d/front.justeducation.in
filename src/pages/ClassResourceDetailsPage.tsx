import type React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';

const ClassResourceDetailsPage: React.FC = () => {
  const { className, resourceName } = useParams<{
    className: string;
    resourceName: string;
  }>();
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Resource details data
  const resourceDetails = {
    'Syllabus': {
      title: 'Syllabus',
      description: 'Complete curriculum and learning objectives for the academic year',
      features: [
        'Updated curriculum as per latest guidelines',
        'Subject-wise detailed syllabus',
        'Learning outcomes and objectives',
        'Assessment criteria and marking scheme',
        'Practical and theory components'
      ],
      availableFormats: ['PDF', 'Online View'],
      lastUpdated: '2024-2025 Academic Session',
      icon: '📋'
    },
    'Books': {
      title: 'Books & Textbooks',
      description: 'Comprehensive collection of textbooks and reference materials',
      features: [
        'NCERT textbooks for all subjects',
        'Reference books and guides',
        'Interactive digital books',
        'Subject-wise chapter organization',
        'Downloadable PDF versions'
      ],
      availableFormats: ['PDF', 'E-book', 'Physical Copy'],
      lastUpdated: 'Latest Edition Available',
      icon: '📚'
    },
    'Worksheet': {
      title: 'Worksheets',
      description: 'Practice worksheets and exercises for skill development',
      features: [
        'Chapter-wise practice questions',
        'Multiple choice questions (MCQs)',
        'Short and long answer questions',
        'Problem-solving exercises',
        'Self-assessment tools'
      ],
      availableFormats: ['PDF', 'Word Document'],
      lastUpdated: 'Weekly Updates',
      icon: '📝'
    },
    'Study Material': {
      title: 'Study Material',
      description: 'Comprehensive study notes and learning resources',
      features: [
        'Chapter-wise detailed notes',
        'Important formulas and concepts',
        'Mind maps and flowcharts',
        'Quick revision materials',
        'Exam preparation guides'
      ],
      availableFormats: ['PDF', 'Interactive Content'],
      lastUpdated: 'Monthly Updates',
      icon: '🎓'
    },
    'Sample Papers': {
      title: 'Sample Papers',
      description: 'Practice papers based on latest exam patterns',
      features: [
        'Board exam pattern papers',
        'Previous year question papers',
        'Mock test series',
        'Time-bound practice tests',
        'Detailed solution guides'
      ],
      availableFormats: ['PDF', 'Online Test'],
      lastUpdated: 'Latest Exam Pattern',
      icon: '📄'
    },
    'NCERT Solutions': {
      title: 'NCERT Solutions',
      description: 'Complete solutions for all NCERT textbook exercises',
      features: [
        'Step-by-step solutions',
        'Chapter-wise exercise solutions',
        'Additional practice questions',
        'Exemplar problem solutions',
        'Video explanations available'
      ],
      availableFormats: ['PDF', 'Video', 'Interactive'],
      lastUpdated: 'Latest NCERT Edition',
      icon: '💻'
    },
    'Marking Scheme': {
      title: 'Marking Scheme',
      description: 'Official marking schemes and evaluation criteria',
      features: [
        'Board examination marking scheme',
        'Internal assessment criteria',
        'Weightage distribution',
        'Evaluation guidelines',
        'Sample answer scripts'
      ],
      availableFormats: ['PDF', 'Document'],
      lastUpdated: 'Current Academic Year',
      icon: '⭐'
    },
    'Holiday Homework': {
      title: 'Holiday Homework',
      description: 'Structured assignments for vacation periods',
      features: [
        'Subject-wise holiday assignments',
        'Project-based learning tasks',
        'Creative and analytical exercises',
        'Research and presentation topics',
        'Skill development activities'
      ],
      availableFormats: ['PDF', 'Word Document'],
      lastUpdated: 'Seasonal Updates',
      icon: '🏠'
    },
    'Labs': {
      title: 'Laboratory Manual',
      description: 'Practical experiments and laboratory procedures',
      features: [
        'Science practical experiments',
        'Step-by-step procedures',
        'Safety guidelines',
        'Observation and result sheets',
        'Viva-voce questions'
      ],
      availableFormats: ['PDF', 'Interactive Simulations'],
      lastUpdated: 'Latest Lab Manual',
      icon: '🧪'
    },
    'Previous Questions': {
      title: 'Previous Year Questions',
      description: 'Collection of past examination questions',
      features: [
        'Last 10 years question papers',
        'Board and competitive exam questions',
        'Topic-wise question bank',
        'Difficulty level categorization',
        'Solved and unsolved sets'
      ],
      availableFormats: ['PDF', 'Online Database'],
      lastUpdated: 'After Each Exam Session',
      icon: '❓'
    },
    'RD Sharma Book': {
      title: 'RD Sharma Mathematics',
      description: 'Comprehensive mathematics reference book',
      features: [
        'Chapter-wise exercise solutions',
        'Objective type questions',
        'Previous years\' questions',
        'Step-by-step explanations',
        'Practice sets and tests'
      ],
      availableFormats: ['PDF', 'Physical Book'],
      lastUpdated: 'Latest Edition',
      icon: '📘'
    },
    'HC Verma Book': {
      title: 'HC Verma Physics',
      description: 'Advanced physics concepts and problem solving',
      features: [
        'Conceptual physics explanations',
        'Worked out examples',
        'Exercise problems with solutions',
        'Objective questions',
        'Competition exam preparation'
      ],
      availableFormats: ['PDF', 'Physical Book'],
      lastUpdated: 'Latest Edition',
      icon: '📗'
    }
  };

  const resourceData = resourceName ? resourceDetails[resourceName as keyof typeof resourceDetails] : null;

  if (!resourceData || !className || !resourceName) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Resource Not Found</h1>
            <p className="text-gray-600 mb-6">The requested resource could not be found.</p>
            <button
              onClick={() => navigate('/classes')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Classes
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white min-h-[200px] h-auto md:h-[200px] flex flex-col justify-center">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-4xl mx-auto w-full flex flex-col h-full justify-center">
              {/* Back Button */}
              <div className="mb-2">
                <button
                  onClick={() => navigate('/classes')}
                  className="flex items-center space-x-2 text-teal-100 hover:text-white transition-colors text-sm md:text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to Classes</span>
                </button>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-1 md:space-y-2 w-full">
                <span className="text-3xl md:text-5xl">{resourceData.icon}</span>
                <h1 className="text-2xl md:text-4xl font-bold">
                  {resourceData.title}
                </h1>
                <p className="text-base md:text-xl text-teal-100">For {className}</p>
                <p className="text-sm md:text-lg text-teal-100 max-w-xs md:max-w-2xl mx-auto break-words">
                  {resourceData.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Resource Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h2>
              <div className="grid gap-4">
                {resourceData.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resource Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Available Formats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Available Formats</h3>
                <div className="space-y-3">
                  {resourceData.availableFormats.map((format, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{format}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Last Updated */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Last Updated</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{resourceData.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Access Resource</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resource</span>
                </button>
                <button className="bg-gray-100 text-gray-700 py-4 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Preview Online</span>
                </button>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Related Resources for {className}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(resourceDetails)
                  .filter(([key]) => key !== resourceName)
                  .slice(0, 4)
                  .map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => navigate(`/classes/${className}/${key}`)}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        {data.icon}
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-teal-700 font-medium">
                        {data.title}
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ClassResourceDetailsPage; 