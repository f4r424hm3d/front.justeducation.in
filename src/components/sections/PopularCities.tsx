import type React from 'react';
import { Link } from 'react-router-dom';

const PopularCities: React.FC = () => {
  const cities = [
    "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Kolkata",
    "Jaipur", "Chandigarh", "Coimbatore", "Lucknow", "Surat", "Indore", "Patna", "Nagpur",
    "Ernakulam", "Bhopal", "Vadodara", "Ludhiana", "Kanpur", "Nashik", "Varanasi",
    "Visakhapatnam", "Rajkot", "Raipur-Chhattisgarh", "Vijayawada", "Madurai", "Ranchi",
    "Goa", "Thiruvananthapuram", "Bhubaneshwar", "Allahabad", "Aurangabad-Maharashtra",
    "Dehradun", "Mysore", "Trichy", "Guwahati", "Agra", "Kozhikode", "Jodhpur", "Thrissur"
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h6 className="text-2xl font-bold text-center mb-8">Popular Cities</h6>

        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <Link
              to={`/city/${city.toLowerCase()}`}
              key={`city-${city}`}
              className="text-gray-600 hover:text-blue-600 transition text-sm"
            >
              <span className="text-gray-400 mr-2">•</span>
              {city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCities;
