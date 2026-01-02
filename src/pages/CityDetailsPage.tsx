import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { 
  Search, 
  GraduationCap, 
  School, 
  Building2, 
  Wrench, 
  BookOpen, 
  Globe, 
  Laptop, 
  Award, 
  TrendingUp, 
  Users, 
  Heart, 
  HelpCircle, 
  Stethoscope, 
  Baby, 
  Library, 
  CreditCard,
  MapPin,
  Star,
  ChevronRight,
  Phone,
  Mail,
  Filter,
  ArrowRight
} from 'lucide-react';

const educationCategories = [
  { 
    id: 'school', 
    name: 'Schools', 
    icon: School, 
    count: '2,847',
    description: 'CBSE, ICSE, State Board & International Schools',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'college', 
    name: 'Colleges', 
    icon: GraduationCap, 
    count: '486',
    description: 'Engineering, Arts, Commerce & Science Colleges',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'universities', 
    name: 'Universities', 
    icon: Building2, 
    count: '42',
    description: 'Public & Private Universities',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'iti', 
    name: 'ITI Institutes', 
    icon: Wrench, 
    count: '127',
    description: 'Industrial Training Institutes',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'vocational', 
    name: 'Vocational', 
    icon: Award, 
    count: '293',
    description: 'Vocational Training Centers',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'coaching', 
    name: 'Coaching', 
    icon: BookOpen, 
    count: '1,247',
    description: 'JEE, NEET, UPSC & Competitive Exam Coaching',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'study-abroad', 
    name: 'Study Abroad', 
    icon: Globe, 
    count: '89',
    description: 'International Education Consultants',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'edutech', 
    name: 'Edu Tech - Online', 
    icon: Laptop, 
    count: '156',
    description: 'Online Learning Platforms & Digital Education',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'training', 
    name: 'Training & Certification', 
    icon: Award, 
    count: '378',
    description: 'Professional Training & Certification Programs',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'skill-development', 
    name: 'Skill Development', 
    icon: TrendingUp, 
    count: '542',
    description: 'Skill Enhancement & Development Centers',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'tuition', 
    name: 'Tuition', 
    icon: Users, 
    count: '3,247',
    description: 'Home Tuition & Private Teachers',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'disabilities', 
    name: 'Disabilities Schools', 
    icon: Heart, 
    count: '67',
    description: 'Special Needs Education Centers',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'consultants', 
    name: 'Education Consultants', 
    icon: HelpCircle, 
    count: '234',
    description: 'Career Guidance & Educational Counseling',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'ngos', 
    name: 'NGOs', 
    icon: Heart, 
    count: '145',
    description: 'Educational Non-Profit Organizations',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'mbbs-abroad', 
    name: 'MBBS Abroad', 
    icon: Stethoscope, 
    count: '34',
    description: 'International Medical Education',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'play-schools', 
    name: 'Play Schools', 
    icon: Baby, 
    count: '892',
    description: 'Pre-Schools & Early Childhood Education',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'libraries', 
    name: 'Bookstores & Libraries', 
    icon: Library, 
    count: '423',
    description: 'Public Libraries & Educational Bookstores',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    id: 'loans', 
    name: 'Educational Loans', 
    icon: CreditCard, 
    count: '67',
    description: 'Education Financing & Student Loans',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  }
];

// Route mapping for category navigation
const categoryRoutes: Record<string, string> = {
  'school': '/school',
  'college': '/college',
  'universities': '/university',
  'iti': '/iti',
  'vocational': '/vocational',
  'coaching': '/coaching',
  'study-abroad': '/study-abroad',
  'edutech': '/edu-tech-online',
  'training': '/training-certification',
  'skill-development': '/skill-development',
  'tuition': '/tuitions',
  'disabilities': '/school-disabilities',
  'consultants': '/education-consultant',
  'ngos': '/ngos',
  'mbbs-abroad': '/mbbs-abroad-consultant',
  'play-schools': '/play-school',
  'libraries': '/bookstores-libraries',
  'loans': '/education-loan'
};

const cityStats = [
  { label: 'Total Institutions', value: '10,859', icon: School },
  { label: 'Student Population', value: '2.8M+', icon: Users },
  { label: 'Top Rankings', value: '#3 City', icon: Star },
  { label: 'Tech Hub Status', value: 'Global IT', icon: TrendingUp }
];

function CityDetailsPage() {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const normalizedCityName = useMemo(() => {
    if (!cityName) return 'Hyderabad';
    const spaced = cityName.replace(/-/g, ' ');
    return spaced
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }, [cityName]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleCategoryClick = (categoryId: string) => {
    const route = categoryRoutes[categoryId];
    if (route) {
      navigate(route);
    }
  };

  const filteredCategories = educationCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 mr-2 text-blue-200" />
              <span className="text-blue-200 font-medium">{normalizedCityName}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Education Hub of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> {normalizedCityName}</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover the best educational opportunities in the City of Pearls. From schools to universities, 
              coaching centers to skill development - find everything you need for your educational journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for schools, colleges, coaching centers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {['Schools', 'Colleges', 'Coaching', 'Universities'].map((filter) => (
                <button
                  key={filter}
                  className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-blue-200" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Educational Categories in {normalizedCityName}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive educational opportunities across 18+ categories. 
            Find the perfect institution for your learning needs.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8 p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filter by:</span>
            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="academic">Academic Institutions</option>
              <option value="training">Training & Skills</option>
              <option value="support">Support Services</option>
            </select>
          </div>
          <div className="text-gray-600">
            Showing {filteredCategories.length} of {educationCategories.length} categories
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.color} p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <category.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => handleCategoryClick(category.id)}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors"
                >
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.5</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Get Your Institution Listed
              </h3>
              <p className="text-blue-100 mb-6">
                Join thousands of educational institutions already listed on our platform. 
                Reach more students and grow your enrollment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  List Your Institution
                </button>
                <button className="border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <Users className="w-8 h-8 mb-2 text-blue-200" />
                  <div className="text-sm text-blue-200">Reach</div>
                  <div className="text-xl font-bold">50K+ Students</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <TrendingUp className="w-8 h-8 mb-2 text-blue-200" />
                  <div className="text-sm text-blue-200">Growth</div>
                  <div className="text-xl font-bold">200% Leads</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Hyderabad */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why Choose {normalizedCityName} for Education?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">IT Capital</h4>
              <p className="text-gray-600">
                Home to global tech giants and leading IT companies, offering excellent opportunities for tech education and careers.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Quality Education</h4>
              <p className="text-gray-600">
                Renowned universities and institutions offering world-class education across diverse fields and disciplines.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Global Recognition</h4>
              <p className="text-gray-600">
                Degrees and certifications from Hyderabad institutions are recognized and respected worldwide.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </MainLayout>
  );
}

export default CityDetailsPage;