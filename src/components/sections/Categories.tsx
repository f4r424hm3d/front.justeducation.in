import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
  Star,
  ChevronRight,
} from "lucide-react";

const educationCategories = [
  {
    id: "schools",
    name: "Schools",
    icon: School,
    count: "45,000+",
    description: "CBSE, ICSE, State Board & International Schools",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "colleges",
    name: "Colleges",
    icon: GraduationCap,
    count: "8,500+",
    description: "Engineering, Arts, Commerce & Science Colleges",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "universities",
    name: "Universities",
    icon: Building2,
    count: "900+",
    description: "Public & Private Universities",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "iti",
    name: "ITI Institutes",
    icon: Wrench,
    count: "2,300+",
    description: "Industrial Training Institutes",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "vocational",
    name: "Vocational",
    icon: Award,
    count: "5,200+",
    description: "Vocational Training Centers",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "coaching",
    name: "Coaching",
    icon: BookOpen,
    count: "25,000+",
    description: "JEE, NEET, UPSC & Competitive Exam Coaching",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "study-abroad",
    name: "Study Abroad",
    icon: Globe,
    count: "1,800+",
    description: "International Education Consultants",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "edutech",
    name: "Edu Tech - Online",
    icon: Laptop,
    count: "3,400+",
    description: "Online Learning Platforms & Digital Education",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "training",
    name: "Training & Certification",
    icon: Award,
    count: "7,800+",
    description: "Professional Training & Certification Programs",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "skill-development",
    name: "Skill Development",
    icon: TrendingUp,
    count: "12,000+",
    description: "Skill Enhancement & Development Centers",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "tuition",
    name: "Tuition",
    icon: Users,
    count: "85,000+",
    description: "Home Tuition & Private Teachers",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "disabilities",
    name: "Disabilities Schools",
    icon: Heart,
    count: "1,200+",
    description: "Special Needs Education Centers",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "consultants",
    name: "Education Consultants",
    icon: HelpCircle,
    count: "4,600+",
    description: "Career Guidance & Educational Counseling",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "ngos",
    name: "NGOs",
    icon: Heart,
    count: "2,800+",
    description: "Educational Non-Profit Organizations",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "mbbs-abroad",
    name: "MBBS Abroad",
    icon: Stethoscope,
    count: "650+",
    description: "International Medical Education",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "play-schools",
    name: "Play Schools",
    icon: Baby,
    count: "18,000+",
    description: "Pre-Schools & Early Childhood Education",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "libraries",
    name: "Bookstores & Libraries",
    icon: Library,
    count: "8,900+",
    description: "Public Libraries & Educational Bookstores",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "loans",
    name: "Educational Loans",
    icon: CreditCard,
    count: "1,400+",
    description: "Education Financing & Student Loans",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
];

// Route mapping for navigation
const routeMapping: Record<string, string> = {
  schools: "/school",
  colleges: "/college", 
  universities: "/university",
  iti: "/iti",
  vocational: "/vocational",
  coaching: "/coaching",
  "study-abroad": "/study-abroad",
  edutech: "/edu-tech-online",
  training: "/training-certification",
  "skill-development": "/skill-development",
  tuition: "/tuitions",
  disabilities: "/school-disabilities",
  consultants: "/education-consultant",
  ngos: "/ngos",
  "mbbs-abroad": "/mbbs-abroad-consultant",
  "play-schools": "/play-school",
  libraries: "/bookstores-libraries",
  loans: "/education-loan",
};

function Categories() {
  const [searchTerm] = useState("");
  const [] = useState("all");
  const navigate = useNavigate();

  const filteredCategories = educationCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExploreClick = (categoryId: string) => {
    const route = routeMapping[categoryId];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Education Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Educational Categories
            </h2>
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">Write the any inforamtion related to the explore </p> */}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className={`${category.color} p-6 rounded-2xl border-2 `}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <category.icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {category.count}
                    </div>
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
                    onClick={() => handleExploreClick(category.id)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore</span>
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
        </div>
      </section>
    </div>
  );
}

export default Categories;
