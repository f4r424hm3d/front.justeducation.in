import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle,
  Navigation
} from 'lucide-react';

const topCities = [
  {
    name: "Mumbai",
    state: "Maharashtra",
    institutions: "28,500+",
    image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Financial Capital", "Film Industry Hub", "Top Business Schools"]
  },
  {
    name: "Delhi",
    state: "National Capital Territory",
    institutions: "32,000+",
    image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Political Center", "DU & JNU", "Government Jobs Hub"]
  },
  {
    name: "Bangalore",
    state: "Karnataka",
    institutions: "25,800+",
    image: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Silicon Valley of India", "IISc & IIMs", "Startup Ecosystem"]
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    institutions: "18,400+",
    image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Cyberabad", "HITEC City", "Pharma Hub"]
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    institutions: "22,100+",
    image: "https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Detroit of India", "IIT Madras", "Healthcare Hub"]
  },
  {
    name: "Pune",
    state: "Maharashtra",
    institutions: "19,600+",
    image: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Oxford of the East", "IT Hub", "Automotive Center"]
  }
];

function CitiesSection() {
  const navigate = useNavigate();

  const slugifyCityName = (name: string) =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-');
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Cities */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Top Educational Cities in India
            </h2>
            {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto"> institutions. </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCities.map((city, index) => (
              <div key={index} className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={city.image} 
                    alt={city.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{city.name}</h3>
                    <p className="text-sm opacity-90">{city.state}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                    {city.institutions}
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    {city.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(`/city/${slugifyCityName(city.name)}`)}
                    className="mt-4 w-full bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Explore {city.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CitiesSection;