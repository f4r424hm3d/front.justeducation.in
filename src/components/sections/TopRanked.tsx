import type React from 'react';
import { FaStar, FaMapMarkerAlt, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopRanked: React.FC = () => {
  // Sample university data
  const universities = [
    {
      id: 1,
      name: 'Lovely Professional University',
      shortName: 'LP',
      location: 'Phagwara, Punjab',
      established: '2005',
      students: '30,000+',
      rating: 4.5,
      imageUrl: 'https://i.pinimg.com/736x/c9/12/d4/c912d49f5f63e3c25aae2465f7577e7a.jpg'
    },
    {
      id: 2,
      name: 'Chandigarh University',
      shortName: 'CU',
      location: 'Chandigarh, Punjab',
      established: '2012',
      students: '25,000+',
      rating: 4.3,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOSkp7t9bafpuF0cRtLW8Hcx4-g8MvuqsbQ&s'
    },
    {
      id: 3,
      name: 'Rayat Bahra University',
      shortName: 'RB',
      location: 'Mohali, Punjab',
      established: '2014',
      students: '15,000+',
      rating: 4.1,
      imageUrl: 'https://cdn-eu.aglty.io/sunstoneuniversity/Attachments/NewItems/Rayat-Bahra%20University%20LOGO_20220511143033_0.png'
    },
    {
      id: 4,
      name: 'Chitkara University',
      shortName: 'CU',
      location: 'Rajpura, Punjab',
      established: '2010',
      students: '22,000+',
      rating: 4.4,
      imageUrl: 'https://d2lk14jtvqry1q.cloudfront.net/media/small_Chitkara_University_e82e2cafa5_62bf4b4545.png'
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Top-Ranked Universities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {universities.map(university => (
            <Link 
              to={`/university/${university.id}`}
              key={university.id} 
              className="flex flex-col bg-white shadow-sm rounded-lg hover:shadow-md transition"
            >
              {/* University Image */}
              <div className="flex items-center justify-center h-40 bg-blue-50 p-4">
                <img 
                  src={university.imageUrl} 
                  alt={`${university.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* University Info */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{university.name}</h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <FaMapMarkerAlt className="mr-2 text-gray-500" />
                  <span>{university.location}</span>
                </div>
                
                <div className="flex items-center justify-between my-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1 text-gray-500" />
                    <span>Est. {university.established}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-1 text-gray-500" />
                    <span>{university.students}</span>
                  </div>
                </div>
                
                <div className="flex items-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(university.rating) ? "text-yellow-400" : "text-gray-300"} 
                      size={16}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{university.rating}/5</span>
                </div>
                
                <div className="w-full mt-2 py-2 bg-blue-600 text-white rounded-md text-center">
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRanked;
